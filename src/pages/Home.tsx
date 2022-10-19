import { IonContent, IonImg, IonNote, IonPage, IonTitle } from "@ionic/react";

import banner from "../banner.png";
import "./Home.css";

import Card from "../components/Card";

const Home: React.FC = () => {
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

        <Card
          inputplaceholder="Enter Email"
          buttonName="Register"
          inputName="Email Id"
        />
      </IonContent>
    </IonPage>
  );
};

export default Home;
function useState(arg0: boolean): [any, any] {
  throw new Error("Function not implemented.");
}
