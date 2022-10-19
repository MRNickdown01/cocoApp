import { IonButton, IonContent } from "@ionic/react";

const Button: any = ({ buttonName }: any) => {
  return (
    <IonButton
      expand="block"
      style={{
        marginTop: "1rem",
      }}
    >
      {buttonName}
    </IonButton>
  );
};
export default Button;
