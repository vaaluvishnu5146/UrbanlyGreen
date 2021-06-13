import React, { useState } from "react";
import {IonLoading, IonToast, IonContent, IonPage, IonText, IonButton, IonHeader, IonToolbar, IonTitle, IonImg } from "@ionic/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Redirect } from "react-router";
//ELEMENTS
import InputBox from "../../elements/InputBox/InputBox";

import "./Login.scss";

import { loginUser } from "../../Services/DataService";
import { putDataToStore } from "../../Services/UtilServices";
import { Storage } from "@ionic/storage";
const store = new Storage();
interface ChildProps {
  setAuthenticated: any
}
const Login: React.FC<ChildProps> = ({ setAuthenticated }) => {
  console.log("came here")
  const [loginState, setLoginState] = useState({loading: false, showError: false, loggedIn: false})
  const { errors, getFieldProps, handleSubmit, values, setFieldValue } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: Yup.object({
        email: Yup.string().email("Invalid email address").required("Required"),
        password: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Required"),
      }),
      onSubmit: async (values) => {
        setLoginState({loading: true, showError: false, loggedIn: false});
        const user = await loginUser(values);
        if(user && user.isAuthenticated) {
          putDataToStore('user', user);
            setLoginState({loading: false, showError: false, loggedIn: true});
            setAuthenticated({loggedIn: true, loading: false})
        } else {
          setLoginState({loading: false, showError: true, loggedIn: false});
        }
      },
    });

  const handleInputChange = (e: any, data: string, field: string) => {
    setFieldValue(field, data);
  };

  return (
    <IonPage>
      <IonContent fullscreen>
      <IonToast
        isOpen={loginState.showError}
        message="Incorrect Details. Couldn't Log You In"
        duration={200}
      />
      <IonLoading
        isOpen={loginState.loading}
        message={'Logging in...'}
      />
        <div className="pageContainer">
        <img style={{padding: "10px"}} src="/assets/images/logo-urbanly-green.png"/>
          <IonText>Login</IonText>
          <form noValidate onSubmit={handleSubmit}>
            <InputBox
              text={values.email}
              placeholder="Enter Your Email"
              autofocus={true}
              inputmode={"email"}
              type={"email"}
              label="Email Id"
              id="email"
              callback={handleInputChange}
              errorMessage={errors.email}
              {...getFieldProps("email")}
            />
            <InputBox
              text={values.password}
              placeholder="Enter Your Password"
              inputmode={"text"}
              type={"password"}
              label="Password"
              callback={handleInputChange}
              id="password"
              errorMessage={errors.password}
              {...getFieldProps("password")}
            />
            <IonButton type="submit" expand="block">
              Login
            </IonButton>
          </form>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
