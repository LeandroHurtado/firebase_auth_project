const quotes = document.getElementById('quotes');
const error = document.getElementById('error');

var firebaseConfig = {
  apiKey: 'AIzaSyAgiFR0ue_EqMmzlpOuJOl4S4gbRskbJgo',
  authDomain: 'fir-auth-dcb9f.firebaseapp.com',
  projectId: 'fletmatch',
  storageBucket: 'fir-auth-dcb9f.appspot.com',
  messagingSenderId: '793102669717',
  appId: '1:793102669717:web:ff4c646e5b2242f518c89c',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE);

const displayQuotes = (allQuotes) => {
  let html = '';
  for (const quote of allQuotes) {
    html += `<blockquote class="wp-block-quote">
                <p>${quote.quote}. </p><cite>${quote.character}</cite>
            </blockquote>`;
  }
  return html;
};
