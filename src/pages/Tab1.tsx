import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  const noticias = [
    {
      id: 1,
      title: 'Primer Noticia',
      subtitle: 'Subtítulo 1',
      date: '2025-09-23',
      content: 'Este es el contenido de la primera noticia.',
    },
    {
      id: 2,
      title: 'Segunda Noticia',
      subtitle: 'Subtítulo 2',
      date: '2025-09-23',
      content: 'Este es el contenido de la segunda noticia.',
    },
    {
      id: 3,
      title: 'Tercera Noticia',
      subtitle: 'Subtítulo 3',
      date: '2025-09-23',
      content: 'Este es el contenido de la tercera noticia.',
    },
  ];
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
            <img alt="pokemon ivysaur" src="" height={300}/>
            <IonCardHeader>
              <IonCardTitle>{noticia.title}</IonCardTitle>
              <IonCardSubtitle>{noticia.subtitle}</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>{noticia.content}</IonCardContent>
            <IonButton fill="clear">Delete</IonButton>
          </IonCard>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
