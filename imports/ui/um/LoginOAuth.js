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
          textAlign="center">
          <Image size="large" src="/landingpage/Vertical_Logo_yuoshiblau.svg" />
        </Header>
        <Button onClick={onStartOAuth} type="button" style={{
            backgroundColor: "#F6F6F5v",
          }}>
          Mit stud.IP anmelden
        </Button>
      </div>
    </div>
  );
};

export default LoginOAuth;
