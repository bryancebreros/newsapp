import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import { collection, onSnapshot } from "firebase/firestore";
import { db } from '../firebaseConfig'; 
import { useEffect, useState } from "react";

const Tab1: React.FC = () => {
  
  const [noticias, setNoticias] = useState<any[]>([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "noticias"), (snapshot) => {
      const docs = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setNoticias(docs);
    });

    // 🔹 cancelar suscripción al desmontar
    return () => unsubscribe();
  }, []);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Noticias</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Noticias</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Noticias" />
        {noticias.map((noticia) => (
          <IonCard key={noticia.id}>
            <img alt="pokemon ivysaur" src="https://img.pokemondb.net/artwork/large/ivysaur.jpg" height={300}/>
            <IonCardHeader>
              <IonCardTitle>{noticia.title}</IonCardTitle>
              <IonCardSubtitle>{noticia.subtitle || "Sin subtítulo"}</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>{noticia.content}<p style={{ fontSize: '0.9rem', color: 'gray' }}>
                {new Date(noticia.fecha).toLocaleDateString()}
            </p>
            </IonCardContent>
            <IonButton fill="clear">Delete</IonButton>
          </IonCard>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
