import { initializeApp } from '//www.gstatic.com/firebasejs/9.8.1/firebase-app.js';
import { getMessaging, onBackgroundMessage, isSupported } from '//www.gstatic.com/firebasejs/9.8.1/firebase-messaging-sw.js';

const app = initializeApp({
  projectId: 'firevoightkampff',
  appId: '1:173254517285:web:fbb421017490beb19b15cc',
  databaseURL: 'https://firevoightkampff-default-rtdb.europe-west1.firebasedatabase.app',
  storageBucket: 'firevoightkampff.appspot.com',
  locationId: 'europe-west',
  apiKey: 'AIzaSyBJaccAxL2rKaD5b4Cy8zZCXT1HpZDriE4',
  authDomain: 'firevoightkampff.firebaseapp.com',
  messagingSenderId: '173254517285'
});

isSupported().then(isSupported => {
  if (isSupported) {
    const messaging = getMessaging(app);

    onBackgroundMessage(messaging, ({ notification: { title, body, image } }) => {
      self.registration.showNotification(title, { body, icon: image || '/assets/icons/icon-72x72.png' });
    });
  }
});
