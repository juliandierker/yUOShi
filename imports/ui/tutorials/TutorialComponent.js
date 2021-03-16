import React from "react";
import Swal from "sweetalert2";
import i18n from "meteor/universe:i18n";
import Joyride, { ACTIONS, EVENTS, STATUS } from "react-joyride";
import PropTypes from "prop-types";
import { Tutorials } from "./Tutorials";

export default class TutorialComponent extends React.Component {
  constructor(props) {
    super(props);
    this.steps = Tutorials[props.activeTutorial];
    this.state = {
      stepIndex: 0
    };
    this.highlightElem = null;
    this.triggerElem = null;
  }

  componentDidMount() {
    const step = this.steps[0];
    if (!this.props.teacher) {
      document.querySelector("#page__header").style.pointerEvents = "none";
      document.querySelector("#skipTutorial").style.pointerEvents = "auto";
    }
    if ("domEvent" in step) {
      this.getDomElems(step);
    }
    this.registerEventHandlers(step);
  }

  componentWillUnmount() {
    if (!this.props.teacher) {
      document.querySelector("#page__header").style.pointerEvents = "auto";
    }
  }

  getDomElems(step, removeBlocker = false) {
    if ("domEvent" in step) {
      var highlightElem = document.querySelector(step["target"]);
      if (!highlightElem) {
        return false;
      }
      if (removeBlocker) {
        this.highlightElem.removeEventListener(
          "click",
          this.preventUnwantedBehavior
        );
      }
      this.highlightElem = highlightElem;
      if ("trigger" in step) {
        this.triggerElem = document.querySelector(step["trigger"]);
        return !!this.triggerElem;
      }
      return true;
    } else if ("customEvent" in step) {
      var stepInfo = step["customEvent"];
      var highlightElem = document.querySelector(stepInfo["id"]);

      if (!highlightElem) return false;
      this.highlightElem = highlightElem;
      return true;
    }
    return true;
  }

  registerEventHandlers(step) {
    if ("removeBorderRadius" in step) {
      this.highlightElem.style.borderRadius = "unset";
    }
    if ("domEvent" in step) {
      if ("trigger" in step) {
        this.highlightElem.addEventListener(
          "click",
          this.preventUnwantedBehavior
        );
      } else {
        this.highlightElem.addEventListener("click", this.handleStep);
      }
    } else if ("customEvent" in step && "id" in step["customEvent"]) {
      this.highlightElem.addEventListener("click", this.handleStep);
    }
  }

  removeStepListeners(step) {
    if ("domEvent" in step) {
      if (!("trigger" in step)) {
        this.highlightElem.removeEventListener("click", this.handleStep);
      }
    } else if (
      "customEvent" in step &&
      "removeListener" in step["customEvent"]
    ) {
      this.highlightElem.removeEventListener("click", this.handleStep);
      step["target"] = "#app";
    }
  }

  preventUnwantedBehavior = event => {
    var target = event.target;
    while (
      target != this.triggerElem &&
      target != this.highlightElem &&
      target.parentNode
    ) {
      target = target.parentNode;
    }
    if (target == this.triggerElem) {
      this.handleStep();
      return;
    }
    event.stopPropagation();
  };

  observerCallback = (mutationsList, observer) => {
    const { stepIndex } = this.state;
    const step = this.steps[stepIndex];
    const nextStep = this.steps[stepIndex + 1];
    if (this.getDomElems(nextStep, "trigger" in step)) {
      this.observer.disconnect();
      this.stepNext(nextStep);
    }
  };

  stepBack() {
    this.setState({ stepIndex: this.state.stepIndex - 1 });
  }

  stepNext(nextStep) {
    this.registerEventHandlers(nextStep);
    this.setState({ stepIndex: this.state.stepIndex + 1 });
  }

  handleStep = () => {
    const { stepIndex } = this.state;
    const step = this.steps[stepIndex];
    this.removeStepListeners(step);
    if (stepIndex == this.steps.length - 1) {
      if (this.props.teacher) {
        Meteor.call(
          "teachers.solveTutorial",
          this.props.teacher,
          this.props.activeTutorial
        );
      } else {
        Meteor.call("students.completeTutorial", this.props.activeTutorial);
      }
    } else {
      const nextStep = this.steps[stepIndex + 1];
      if (this.getDomElems(nextStep, "trigger" in step)) {
        this.stepNext(nextStep);
      } else {
        this.observer = new MutationObserver(this.observerCallback.bind(this));
        this.observer.observe(document.querySelector("#app"), {
          subtree: true,
          childList: true
        });
      }
    }
  };

  eventCallback = event => {
    if (
      "nextEvent" in event.step &&
      event.action == "next" &&
      event.lifecycle == "complete"
    ) {
      this.handleStep();
    }
  };

  render() {
    return (
      <Joyride
        continuous={true}
        steps={this.steps}
        run={true}
        callback={this.eventCallback.bind(this)}
        stepIndex={this.state.stepIndex}
        spotlightClicks={true}
        disableCloseOnEsc={true}
        disableOverlayClose={true}
        hideCloseButton={true}
        hideBackButton={true}
        showSkipButton={false}
        spotlightPadding={0}
      />
    );
  }
}

this.propTypes = {
  taskId: PropTypes.string,
  stepTime: PropTypes.string,
  lang: PropTypes.string
};
