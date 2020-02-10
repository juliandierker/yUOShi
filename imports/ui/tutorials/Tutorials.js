import React from "react";

import i18n from "meteor/universe:i18n";

const NEXT_PROPS = {
  hideCloseButton: true,
  disableBeacon: true,
  spotlightClicks: false,
  nextEvent: true
};
const EVENT_PROPS = {
  hideCloseButton: true,
  hideFooter: true,
  disableBeacon: true
};
const MODAL_PROPS = {
  removeBorderRadius: true
};

export const Tutorials = {
  studentIntro: [
    {
      target: "#Marker_Klassenzimmer",
      content: (
        <div>
          <h1>Herzlich Willkommen</h1>
          <p>bei yuoshi</p>
          <p>
            <strong>Hier gelangst du zu deinem Klassenraum.</strong> Ttt
          </p>
        </div>
      ),
      domEvent: true,
      // ...MODAL_PROPS,
      ...EVENT_PROPS
    },
    {
      target: "#app",
      content: (
        <div>
          <h1>Klassenraum</h1>
          <p>Es scheint Probleme in der Klasse zu geben</p>
          <p>
            <strong>
              Zeit sich mit der Motivation der SchülerInnen auseinander zu
              setzen.
            </strong>{" "}
            Ttt
          </p>
        </div>
      ),

      target: "#app",
      content: <p>pupilIntro.sixthStep2</p>,
      ...EVENT_PROPS,
      customEvent: {
        id: "#motivation_marker",
        context: "classroomSVG",
        removeListener: true,
        newParent: "classroomSVG"
      }
    }
    // domEvent: true,
  ]
};
