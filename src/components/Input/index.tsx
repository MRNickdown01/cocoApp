import { IonInput, IonLabel } from "@ionic/react";

const Input: any = ({ inputplaceholder, inputName }: any) => {
  return (
    <>
      <IonLabel position="stacked">{inputName}</IonLabel>
      <IonInput
        placeholder={inputplaceholder}
        style={{
          border: "2px solid#1c5a40",
          borderRadius: "6px",
        }}
      ></IonInput>
    </>
  );
};
export default Input;
