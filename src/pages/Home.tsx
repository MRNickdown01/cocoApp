import {
  IonButton,
  IonCard,
  IonContent,
  IonImg,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonText,
  IonTitle,
} from "@ionic/react";
import validations from "../modules/validations";
import banner from "../banner.png";
import pencil from "../pencil.png";
import "./Home.css";

import { useState } from "react";

const Home: React.FC = () => {
  const [show, setShow] = useState(false);
  const [edit, setEdit] = useState(true);
  const [user, setUser] = useState({
    email: {
      value: "",
      error: false,
    },
  });

  const onInputChange = (id: string, value: string) => {
    let _user: any = { ...user };
    _user[id].value = value;
    _user[id].error = false;
    setUser(_user);
  };
  const onSubmit: any = () => {
    console.log("User Pressed Submit : ", user);
    let userObjectHasError = false;
    let _user: any = { ...user };
    Object.keys(user).forEach((key: string) => {
      if (key === "email") {
        let hasError = !validations.isEmailValid(_user[key].value);
        _user[key].error = !validations.isEmailValid(_user[key].value);
        if (hasError) {
          userObjectHasError = true;
        }
      }
    });

    if (!userObjectHasError) {
      setShow(!show);
    } else {
      setUser(_user);
    }
  };

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonImg
          style={{
            height: "500px",
            objectFit: "cover",
          }}
          src={banner}
        />
        {/* <ExploreContainer /> */}
        <IonTitle
          className="ion-text-center"
          style={{
            margin: "20px 0px",
          }}
        >
          Focus On Deeds That Matters
        </IonTitle>

        {show ? (
          <IonCard>
            <IonItem lines="none">
              <IonImg
                onClick={() => setEdit(!edit)}
                style={{
                  position: "absolute",
                  top: "30%",
                  left: "85%",
                  height: "30px",
                  width: "30px",
                }}
                src={pencil}
              />
              <IonInput
                disabled={edit}
                type="email"
                style={{
                  border: "2px solid#1c5a40",
                  borderRadius: "6px",
                  margin: "1rem 0px",
                  paddingTop: "10px",
                  zIndex: "-1",
                }}
              ></IonInput>
            </IonItem>
            <IonButton
              onClick={onSubmit}
              color="primary"
              expand="block"
              style={{
                margin: "20px 20px",
              }}
            >
              Get Started
            </IonButton>
          </IonCard>
        ) : (
          ///mm

          <IonCard>
            <IonItem lines="none">
              <IonLabel
                position="stacked"
                style={{
                  marginTop: "5px",
                  paddingBottom: "10px",
                  fontSize: "20px",
                  marginBottom: "5px",
                }}
              >
                Email
              </IonLabel>
              <IonInput
                type="email"
                onIonChange={(e) => {
                  let value: any = e.target.value;
                  onInputChange("email", value);
                }}
                style={{
                  border: "2px solid#1c5a40",
                  borderRadius: "6px",
                }}
              ></IonInput>
            </IonItem>
            {user["email"].error ? (
              <div style={{ textAlign: "left" }}>
                <IonText
                  color={"danger"}
                  style={{
                    padding: "10px",
                    fontSize: "12px",
                  }}
                >
                  email should be valid
                </IonText>
              </div>
            ) : null}

            <IonButton
              onClick={onSubmit}
              expand="block"
              className="ion-margin"
              style={{ marginBottom: "2rem" }}
            >
              Register
            </IonButton>
          </IonCard>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Home;
