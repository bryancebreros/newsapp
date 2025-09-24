import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonInput, IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import { collection, addDoc } from "firebase/firestore";
import { useState } from 'react';
import { db } from '../firebaseConfig';

const Tab2: React.FC = () => {
  const [title, setTitle] = useState("");
  const [fecha, setFecha] = useState("");
  const [description, setDescription] = useState("");
  

  const handleClick = async () => {
    try {
    const docRef = await addDoc(collection(db, "noticias"), {
      title: title,
      fecha: fecha,
      description: description,
    });
      setTitle("");
      setFecha("");
      setDescription("");
  } catch (e) {
    console.error("Error al añadir documento: ", e);
  }
  }
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
          <IonInput label="Titulo" value={title}
            onIonInput={(e) => setTitle(e.detail.value!)}></IonInput>
        </IonItem>
         <IonItem>
          <IonInput label="Fecha" type="date"
            value={fecha}
            onIonInput={(e) => setFecha(e.detail.value!)}></IonInput>
        </IonItem>
         <IonItem>
          <IonInput label="Descripción" value={description}
            onIonInput={(e) => setDescription(e.detail.value!)}></IonInput>
        </IonItem>
        <IonButton fill="clear" onClick={handleClick}>Agregar</IonButton>

      </IonContent>
    </IonPage>
  );
};

export default Tab2;
