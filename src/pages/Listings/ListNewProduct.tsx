import { IonButton, IonContent, IonPage, IonText } from '@ionic/react';
import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import InputBox from '../../elements/InputBox/InputBox';
import "./Listings.scss";
import { useFormik } from "formik";
import * as Yup from "yup";
const ListNewProduct: React.FC = () => {
    const { errors, getFieldProps, handleSubmit, values, setFieldValue } =
    useFormik({
      initialValues: {
        productName: "",
        productType: "",
        qtyAvailable: "",
        pricePerUnit: "",
        productDescription: "",
        deliveryMethod: "",
      },
      validationSchema: Yup.object({
        productName: Yup.string().required("Required"),
        productType: Yup.string().required("Required"),
        qtyAvailable: Yup.number().integer().moreThan(10,"Quantity Should be greater than 10").required("Required"),
        pricePerUnit: Yup.number().positive("Price Per Unit cannot be Negative").required("Required"),
        productDescription: Yup.string().required("Required"),
        deliveryMethod: Yup.string().required("Required")
      }),
      onSubmit: (values) => {
        console.log(values);
      },
    });

  const handleInputChange = (e: any, data: string, field: string) => {
    setFieldValue(field, data);
  };
  return (
    <IonPage>
        <IonContent fullscreen>
            <NavBar label="Add a New product"/>
        <div>
          <form noValidate onSubmit={handleSubmit}>
            <InputBox
              text={values.productName}
              placeholder="Product Name"
              autofocus={true}
              inputmode={"text"}
              type={"text"}
              label="Product Name"
              id="productName"
              callback={handleInputChange}
              errorMessage={errors.productName}
              {...getFieldProps("productName")}
            />
            <InputBox
              text={values.productType}
              placeholder="Product Type"
              inputmode={"text"}
              type={"text"}
              label="Product Type"
              callback={handleInputChange}
              id="productType"
              errorMessage={errors.productType}
              {...getFieldProps("productType")}
            />
            <InputBox
              text={values.qtyAvailable}
              placeholder="Quantity Available"
              autofocus={true}
              inputmode={"numeric"}
              type={"number"}
              label="Quantity Available"
              id="qtyAvailable"
              callback={handleInputChange}
              errorMessage={errors.qtyAvailable}
              {...getFieldProps("qtyAvailable")}
            />
            <InputBox
              text={values.pricePerUnit}
              placeholder="Price Per Unit"
              autofocus={true}
              inputmode={"decimal"}
              type={"number"}
              label="Price Per Unit"
              id="pricePerUnit"
              callback={handleInputChange}
              errorMessage={errors.pricePerUnit}
              {...getFieldProps("pricePerUnit")}
            />
            <InputBox
              text={values.productDescription}
              placeholder="Product Description"
              autofocus={true}
              inputmode={"text"}
              type={"text"}
              label="Product Description"
              id="productDescription"
              callback={handleInputChange}
              errorMessage={errors.productDescription}
              {...getFieldProps("productDescription")}
            />
            <InputBox
              text={values.deliveryMethod}
              placeholder="Delivery Method"
              autofocus={true}
              inputmode={"text"}
              type={"text"}
              label="Delivery Method"
              id="deliveryMethod"
              callback={handleInputChange}
              errorMessage={errors.deliveryMethod}
              {...getFieldProps("deliveryMethod")}
            />
            <IonButton type="submit" expand="block">
              Add Product
            </IonButton>
          </form>
          <IonButton className="goBackButton" type="button" expand="block" href="/home/listings">
              Cancel
            </IonButton>
        </div>
        </IonContent>
    </IonPage>
  );
};

export default ListNewProduct;
