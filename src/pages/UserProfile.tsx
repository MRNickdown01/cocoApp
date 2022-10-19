import { IonAvatar, IonHeader, IonItem, IonTitle } from "@ionic/react";
import UserCard from "../components/BalanceCard";
import UserContribution from "../components/UserContribution";

function UserProfile() {
  return (
    <>
      <IonHeader>
        <IonItem lines="none">
          <IonTitle
            color="primary"
            style={{
              fontSize: "20px",
              fontWeight: "700",
            }}
          >
            COCO
          </IonTitle>
          <IonAvatar>
            <img
              alt="Silhouette of a person's head"
              src="http://captiontools.com/wp-content/uploads/2017/03/testy3-1.png"
            />
          </IonAvatar>
        </IonItem>
      </IonHeader>
      <UserCard />
      <UserContribution
        cardtitle="₹ 56,000"
        cardsubtitle="Total contribution till date"
      />
      <UserContribution
        cardtitle="23"
        cardsubtitle="Total people contributed"
      />
    </>
  );
}
export default UserProfile;
