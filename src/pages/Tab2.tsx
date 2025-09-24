import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonInput, IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Agregar</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Agregar</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 2 page" />
        <IonItem>
          <IonInput label="Input with placeholder" placeholder="Enter company name"></IonInput>
        </IonItem>
         <IonItem>
          <IonInput label="Input with placeholder" placeholder="Enter company name"></IonInput>
        </IonItem>
         <IonItem>
          <IonInput label="Input with placeholder" placeholder="Enter company name"></IonInput>
        </IonItem>
        <IonButton fill="clear">ADD</IonButton>

      </IonContent>
    </IonPage>
  );
};

export default Tab2;
