import { Meteor } from "meteor/meteor";
import React from "react";
import { Accounts } from "meteor/accounts-base";

import i18n from "meteor/universe:i18n";
var getTrans = i18n.createTranslator("UserValidation");

import { Form } from "semantic-ui-react";

import Swal from "sweetalert2";

const USER_REGEXE = {
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\u0021-\u0030\u003A-\u0041\u005F\u007E])(?=.{8,})/,
  companyName: /^[\u00C0-\u0100a-z0-9]{3,20}$/i,
  username: /^[\u00C0-\u0100a-z0-9]{3,20}$/i
};

Accounts.onEmailVerificationLink(function(token, done) {
  Accounts.verifyEmail(token, function(error) {
    if (error) {
      showSimpleSwal("invalidVerificationToken", "error");
      console.log(error);
    } else {
      done();
    }
  });
});

Accounts.onResetPasswordLink(function(token, done) {
  function setNewTeacherPassword(newPassword) {
    if (UserAdministration.validatePattern("password", newPassword)) {
      Accounts.resetPassword(token, newPassword, (err) => {
        if (err) {
          showSimpleSwal("invalidPasswordToken", "error");
        } else {
          done();
        }
      });
    } else {
      Swal.showValidationMessage(getTrans("passwordError"));
    }
  }
  Swal(getInputSwal(setNewTeacherPassword, "password", "resetTeacherPassword"));
});

export const UserAdministration = {
  validatePattern: function(inputType, input) {
    if (inputType in USER_REGEXE) {
      var valid = USER_REGEXE[inputType].test(input);
    } else if (inputType === "repeatPassword") {
      var valid = input === this.state.password;
    } else if (inputType === "captcha") {
      var valid =
        Blockly.JavaScript.workspaceToCode(Blockly.getMainWorkspace()).replace(/\s/g, "") ===
        "while(playing()){haveFun();}";
    }
    if (this.state) {
      if (!valid && !this.state.error)
        this.setState({ error: inputType + "Error", errorMessage: getTrans(inputType + "Error") });
      if (valid && this.state.error) this.setState({ error: "" });
    }
    return valid;
  },
  handleInputChange: function(event) {
    var change = {};
    change[event.target.name] = event.target.value;
    this.setState(change);
  },
  handleCheckboxToggle: function(event, elem) {
    var change = {};
    change[elem.name] = !this.state[elem.name];
    this.setState(change);
  },
  changeLanguage: function(lang) {
    i18n.setLocale(lang);
    this.setState({ lang });
  },
  deleteTeacherAccount: function(password) {
    Accounts.changePassword(password, password, (err) => {
      if (!err) {
        Meteor.call("teachers.delete", Meteor.userId(), (err, res) => {});
      } else {
        showSimpleSwal("invalidPassword", "error");
      }
    });
  }
};

export function getInputSwal(func, input, transKey) {
  return {
    title: getTrans(transKey + ".title"),
    text: getTrans(transKey + ".text"),
    input,
    inputAttributes: {
      autocapitalize: "off"
    },
    showCancelButton: true,
    confirmButtonText: getTrans(transKey + ".button"),
    showLoaderOnConfirm: true,
    preConfirm: func
  };
}

export function showSimpleSwal(errorKey, type) {
  Swal({
    type,
    title: getTrans(errorKey)
  });
}

export function renderInputFields(inputNames, labelColor) {
  return inputNames.map((inputName) => {
    return (
      <Form.Field key={inputName + "-field"}>
        <label style={{ color: labelColor }} key={inputName + "-label"}>
          {getTrans(inputName)}
        </label>
        <Form.Input
          id={inputName}
          key={inputName}
          name={inputName}
          value={this.state[inputName]}
          type={inputName.toLowerCase().includes("password") ? "password" : "text"}
          onChange={UserAdministration.handleInputChange.bind(this)}
          error={this.state.error === inputName + "Error"}
          onBlur={UserAdministration.validatePattern.bind(this, inputName, this.state[inputName])}
        />
      </Form.Field>
    );
  });
}
