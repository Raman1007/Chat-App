/* eslint-disable no-undef */
importScripts('https://www.gstatic.com/firebasejs/8.7.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.7.1/firebase-messaging.js');

firebase.initializeApp({
  apiKey: 'AIzaSyCWZUswV65zMTNNTmiTXg3P3smtw6xVHIg',
  authDomain: 'chat-web-app-3b298.firebaseapp.com',
  databaseURL: 'https://chat-web-app-3b298-default-rtdb.firebaseio.com',
  projectId: 'chat-web-app-3b298',
  storageBucket: 'chat-web-app-3b298.appspot.com',
  messagingSenderId: '388644001391',
  appId: '1:388644001391:web:fd0f85d26f98b7c6945f9a',
});

firebase.messaging();
