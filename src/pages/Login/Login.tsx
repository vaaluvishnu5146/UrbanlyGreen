import React from "react";
import { IonContent, IonPage, IonText, IonButton, IonHeader, IonToolbar, IonTitle } from "@ionic/react";
import { useFormik } from "formik";
import * as Yup from "yup";
//ELEMENTS
import InputBox from "../../elements/InputBox/InputBox";

import "./Login.scss";
import { RouteComponentProps } from "react-router-dom";

const Login: React.FC<RouteComponentProps> = ({ history }) => {
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
      onSubmit: (values) => {
        console.log(values);
        history.push("/dashboard");
      },
    });

  const handleInputChange = (e: any, data: string, field: string) => {
    setFieldValue(field, data);
  };

  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="pageContainer">
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
