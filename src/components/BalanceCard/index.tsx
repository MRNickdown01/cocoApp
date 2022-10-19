import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonButton,
} from "@ionic/react";

const UserCard: any = ({}) => {
  return (
    <IonCard
      style={{
        marginBottom: "3.5rem",
        marginTop: "1.5rem",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.16)",
      }}
    >
      <IonCardHeader>
        <IonCardTitle
          style={{
            fontSize: "20px",
            fontWeight: "400",
            textAlign: "center",
            color: " #1e1e1e",
          }}
        >
          Your Current Balance
        </IonCardTitle>
        <IonCardSubtitle
          style={{
            fontSize: "40px",
            fontWeight: "700",
            textAlign: "center",
            color: " #17925E",
          }}
        >
          ₹ 4,000
        </IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>
        <IonButton expand="block">Donate</IonButton>
      </IonCardContent>
    </IonCard>
  );
};
export default UserCard;
