import { IonItem, IonLabel, IonInput } from "@ionic/react";
import { callbackify } from "util";
import "./InputBox.css";

interface InputBoxProps {
  text?: string;
  name?: string;
  placeholder?: string;
  autofocus?: boolean;
  inputmode?:
    | "text"
    | "tel"
    | "url"
    | "email"
    | "numeric"
    | "decimal"
    | "search";
  type:
    | "date"
    | "datetime-local"
    | "email"
    | "month"
    | "number"
    | "password"
    | "search"
    | "tel"
    | "text"
    | "time"
    | "url"
    | "week";
  callback: Function;
}

const InputBox: React.FC<InputBoxProps> = ({
  text,
  name,
  placeholder,
  autofocus,
  inputmode,
  type,
  callback,
}) => {
  return (
    <IonItem>
      <IonLabel position="stacked">{name}</IonLabel>
      <IonInput
        value={text}
        placeholder={placeholder}
        autofocus={autofocus}
        inputmode={inputmode}
        type={type}
        onIonChange={(e) => callback(e?.detail?.value!)}
      ></IonInput>
    </IonItem>
  );
};

export default InputBox;
