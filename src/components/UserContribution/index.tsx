import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
} from "@ionic/react";

const UserContribution: any = ({ cardtitle, cardsubtitle }: any) => {
  return (
    <IonCard
      style={{
        background: "linear-gradient(287.95deg, #1C5A40 4.02%, #18895A 98.76%)",
        borderRadius: "16px",
        marginBottom: "2rem",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.16)",
      }}
    >
      <IonCardHeader>
        <IonCardTitle
          style={{
            fontSize: "34px",
            fontWeight: "700",
            textAlign: "start",
            color: " #fff",
          }}
        >
          {cardtitle}
        </IonCardTitle>
        <IonCardSubtitle
          style={{
            fontSize: "16px",
            fontWeight: "400",
            textAlign: "start",
            color: " #FFF",
          }}
        >
          {cardsubtitle}
        </IonCardSubtitle>
      </IonCardHeader>
    </IonCard>
  );
};
export default UserContribution;
