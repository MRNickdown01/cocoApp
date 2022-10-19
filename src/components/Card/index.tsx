import {
  IonCard,
  IonCardContent,
  IonLabel,
  IonInput,
  IonButton,
  IonItem,
  IonRadio,
} from "@ionic/react";
import Button from "../Button";
import Input from "../Input";

const Card: any = ({
  buttonName,
  inputName,
  inputName2,
  inputplaceholder,
  radiobutton,
  inputslot,
}: any) => {
  return (
    <IonCard
      style={{
        height: "auto",
      }}
    >
      <IonCardContent
        style={{
          marginTop: "20px",
        }}
      >
        {/* input component */}

        <Input inputName={inputName} inputplaceholder={inputplaceholder} />
        {inputslot}
        {inputName2}

        {/* button component */}
        {radiobutton}
        <Button buttonName={buttonName} />
      </IonCardContent>
    </IonCard>
  );
};

export default Card;
