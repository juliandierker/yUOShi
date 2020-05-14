import React, { useCallback } from "react";
import { Button, Form, Header, Image } from "semantic-ui-react";

const LoginOAuth = () => {
  const onStartOAuth = useCallback(async () => {
    await new Promise((res) => Meteor.loginWithStudip(undefined, res));
  }, []);

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
          textAlign="center">
          <Image size="medium" src="/landingpage/yuoshi.png" />
        </Header>

        <Button onClick={onStartOAuth} type="button">
          Mit stud.IP anmelden
        </Button>
      </div>
    </div>
  );
};

export default LoginOAuth;
