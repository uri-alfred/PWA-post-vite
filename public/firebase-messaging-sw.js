importScripts("https://www.gstatic.com/firebasejs/10.9.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.9.0/firebase-messaging-compat.js");

const firebaseConfig = {
  apiKey: "AIzaSyDz2Ejrc7Tn0CYT_EJ-BQKwmTGgVYp3Cew",
  authDomain: "pwa-push-31e97.firebaseapp.com",
  projectId: "pwa-push-31e97",
  storageBucket: "pwa-push-31e97.appspot.com",
  messagingSenderId: "818397956802",
  appId: "1:818397956802:web:e4b927ade34f062840495b",
  measurementId: "G-XR8WFV6KLR"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging(app);

messaging.onBackgroundMessage(payload => {
    console.log('Recibiendo mensajes en segundo plano');
    const tituloNotificacion = payload.notification.title;
    const options = {
        body: payload.notification.body,
        // icon: '../img/40.png',
    };
    self.registration.showNotification(tituloNotificacion, options);
})