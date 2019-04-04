import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Accounts } from "meteor/accounts-base";
import { Meteor } from "meteor/meteor";
import { Button, Form, Header, Image, Icon } from "semantic-ui-react";
import { Roles } from "meteor/alanning:roles";
import { HTTP } from "meteor/http";
import Swal from "sweetalert2";

import { Teachers } from "../../../api/teachers";
import { Students } from "../../../api/students";
import { Tokens } from "../../../api/tokens";

// import SignUp from "./SignUp";

// import { UserAdministration, getInputSwal } from "./UserAdministration";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      error: null,
      email: "",
      password: ""
    };
  }

  componentDidMount() {
    document.getElementById("email").focus();
  }

  handleChange = e => {
    const change = {};
    change[e.target.name] = e.target.value;
    if (this.state.error) {
      change.error = "";
    }
    this.setState(change);
  };

  checkToken(token) {
    Meteor.subscribe("tokenByUser");
    if (Tokens.find({}).fetch().length == 0) {
      Meteor.call("tokens.insert", Meteor.userId(), token);
    }
    return Tokens.find({});
  }

  login(email, password, token) {
    Meteor.loginWithPassword({ username: email }, password, err => {
      if (err) {
        this.setState({ error: "unableToLoginError" });
      } else {
        this.checkToken(token);
      }
    });
  }
  //Login-routine for teachers and students
  onSubmit(e) {
    e.preventDefault();
    // perform basicauth request
    const email = this.state.email.trim();
    const password = this.state.password.trim();

    const rawtoken = email + ":" + password;
    const token = btoa(rawtoken);
    Meteor.call("users.auth", "Basic " + token, email, password, (err, res) => {
      if (err) {
        this.setState({ error: "unableToLoginError" });
        console.log(err);
      } else {
        if (res.length > 0) {
          var output = JSON.parse(res[0].content);
          var userRole = output.data.attributes["global-permission"];
          if (userRole == "dozent" || userRole == "tutor") {
            Meteor.subscribe("teacher", output.data.id);

            if (Teachers.findOne({ studipUserId: output.data.id })) {
              this.login(email, password, token);
            } else {
              Meteor.call(
                "users.teachersInsert",
                email,
                output.data.id,
                (err, res) => {
                  if (!err) {
                    this.login(email, password, token);
                  } else {
                    console.log(err);
                  }
                }
              );
            }
          } else if (userRole == "autor") {
            Meteor.subscribe("student", output.data.id);
            if (Students.findOne({ studipUserId: output.data.id })) {
              this.login(email, password, token);
            } else {
              Meteor.call(
                "users.studentInsert",
                email,
                output.data.id,
                (err, res) => {
                  if (!err) {
                    this.login(email, password, token);
                  } else {
                    console.log(err);
                  }
                }
              );
            }
          }
        } else {
          this.setState({ error: "unableToLoginError" });
        }
      }
    });
  }

  render() {
    return (
      <div className="boxed-view ">
        <div className="boxed-view__box">
          <Header
            as="h2"
            style={{
              fontFamily: "Open Sans Condensed",
              fontWeight: "300",
              color: "white",
              fontSize: 72
            }}
            textAlign="center"
          >
            <Image size="medium" src="/landingpage/yuoshi.png" />
          </Header>
          {this.state.error ? (
            <p className="error">{this.state.error}</p>
          ) : (
            undefined
          )}
          <Form
            onSubmit={this.onSubmit.bind(this)}
            noValidate
            className="boxed-view__form"
            inverted
          >
            <Form.Field>
              <Form.Input
                id="email"
                icon="user"
                iconPosition="left"
                type="email"
                name="email"
                placeholder={"userName" + "/" + "email"}
                value={this.state.email}
                onChange={this.handleChange.bind(this)}
              />
            </Form.Field>
            <Form.Field>
              <Form.Input
                icon="lock"
                iconPosition="left"
                type="password"
                name="password"
                placeholder="password"
                value={this.state.password}
                onChange={this.handleChange.bind(this)}
              />
            </Form.Field>
            <Button fluid type="submit" id="loginButton" color="yellow">
              Login
              <Icon
                name="arrow right"
                id="arrow"
                style={{ marginRight: "-2em" }}
              />
            </Button>
          </Form>
        </div>
        <Link to="/credits" className="login__credits text_colortaubenblau">
          credits
        </Link>
      </div>
    );
  }
}

export default withRouter(Login);
