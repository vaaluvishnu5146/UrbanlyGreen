import { IonItem, IonLabel, IonInput, IonText } from "@ionic/react";
import "./InputBox.scss";

interface InputBoxProps {
  text?: string;
  label?: string;
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
  errorMessage?: any;
  id: string;
}

const InputBox: React.FC<InputBoxProps> = ({
  text,
  label,
  placeholder,
  autofocus,
  inputmode,
  type,
  callback,
  errorMessage,
  id,
}) => {
  return (
    <>
      <IonText className="error">
        <span>{errorMessage}</span>
      </IonText>
      <IonItem>
        <IonLabel position="stacked">{label}</IonLabel>
        <IonInput
          value={text}
          placeholder={placeholder}
          autofocus={autofocus}
          inputmode={inputmode}
          type={type}
          onIonChange={(e) => callback(e, e?.detail?.value!, id)}
          id={id}
          clearInput={true}
        ></IonInput>
      </IonItem>
    </>
  );
};

export default InputBox;
