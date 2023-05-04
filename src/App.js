import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import toast, { Toaster } from 'react-hot-toast';

async function juntos() {
    notify();
    requestNotif();
    sendNotification();
    await new Promise(resolve => setTimeout(resolve, 11000));
    sendNotification();
};

const notify = () => toast('Alguien me dijo que no has hecho tu lección!', {
  icon: '🦉'
});

function requestNotif() {
  if ('Notification' in window) {
    Notification.requestPermission();
  }
}

function sendNotification() {
  if (Notification.permission === 'granted') {
    new Notification('Duolingo', {
      body: 'Aún sigo esperando....'
    });
  }
}

function App() {
  return (
    <div className='App'>
         <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        <img src='https://media1.giphy.com/media/YT1yl7jJTI04lygf4s/giphy.gif?cid=6c09b95226006ca0952f31fd4a189ab8b8e5992f49f3558d&ep=v1_internal_gifs_gifId&rid=giphy.gif&ct=s' className="App-logo" alt="logo" />
        <p>
          <br></br>
          <br></br>
          <br></br>
          <button className='btn btn-primary' onClick={juntos}>Duolingo, eres tú?</button>
          <Toaster />
        </p>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>  
          <br></br>
          
          <br></br>  
          <br></br>

        <iframe width="685" height="385" src="https://www.youtube.com/embed/enup62u1LEk?autoplay=1" title="La Oreja de Van Gogh  — Rosas [Letra]" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  );
}

export default App;
