import {
  IonContent,
  IonImg,
  IonInput,
  IonLabel,
  IonPage,
  IonRadio,
  IonText,
} from "@ionic/react";
import banner2 from "../banner2.png";
import Card from "../components/Card";

function Register() {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonImg
          style={{
            width: "auto",
            height: "500px",
            objectFit: "cover",
          }}
          src={banner2}
        />
        {/* card component */}

        <Card
          inputplaceholder="Enter Name"
          inputName="Full Name"
          inputName2={
            <>
              <IonLabel position="stacked">Date of Birth</IonLabel>
              <IonInput
                type="date"
                style={{
                  border: "2px solid#1c5a40",
                  borderRadius: "6px",
                  marginBottom: "1rem",
                }}
              ></IonInput>
            </>
          }
          buttonName="Save"
          radiobutton={
            <>
              <IonText
                style={{
                  display: "inharit",
                  fontSize: "18px",
                }}
              >
                Gender
              </IonText>
              <IonText
                style={{
                  display: "flex",
                  gap: "5px",
                }}
              >
                <IonLabel>Male</IonLabel>
                <IonRadio value="Male" />
                <IonLabel>Female</IonLabel>
                <IonRadio value="Female" />
              </IonText>
            </>
          }
        />
      </IonContent>
    </IonPage>
  );
}

export default Register;
