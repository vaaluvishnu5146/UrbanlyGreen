import React, { useState } from "react";
import { IonContent, IonPage, IonText, IonButton } from "@ionic/react";

//ELEMENTS
import InputBox from "../../elements/InputBox/InputBox";

import "./Login.scss";

const Login: React.FC = () => {
  const [getEmail, setEmail] = useState("");
  const [getPassword, setPassword] = useState("");

  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="pageContainer">
          <IonText>Login Page</IonText>
          <InputBox
            name="Email"
            text={getEmail}
            placeholder="Enter Your Email"
            autofocus={true}
            inputmode={"email"}
            type={"email"}
            callback={(value: string) => setEmail(value)}
          />
          <InputBox
            name="Password"
            text={getPassword}
            placeholder="Enter Your Password"
            inputmode={"text"}
            type={"password"}
            callback={(value: string) => setPassword(value)}
          />
          <IonButton expand="block">Login</IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
