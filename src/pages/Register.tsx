import React from "react";
import {
  IonContent,
  IonImg,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonRadio,
} from "@ionic/react";
import banner2 from "../banner2.png";
import Card from "../components/Card";
import Input from "../components/Input";

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
                placeholder="mmmm"
                style={{
                  border: "2px solid#1c5a40",
                  borderRadius: "6px",
                }}
              ></IonInput>
            </>
          }
          buttonName="Save"
          radiobutton={
            <>
              <IonItem lines="none" className="ion-align-items-center">
                Gender
              </IonItem>
              <IonItem lines="none">
                <IonLabel>Male</IonLabel>
                <IonRadio value="Male" />
                <IonLabel>Female</IonLabel>
                <IonRadio value="Female" />
              </IonItem>
            </>
          }
        />
      </IonContent>
    </IonPage>
  );
}

export default Register;
