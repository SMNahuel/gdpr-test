import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const provider = new GoogleAuthProvider();

const firebaseConfig = {
    databaseURL: 'https://gdprdirect-nextjs-default-rtdb.firebaseio.com/',
    apiKey: 'AIzaSyB7J3dwYPXtLh5PxL1upzAemf8EmW9Z5C0',
    authDomain: 'gdprdirect-nextjs.firebaseapp.com',
    projectId: 'gdprdirect-nextjs',
    storageBucket: 'gdprdirect-nextjs.appspot.com',
    messagingSenderId: '836972559218',
    appId: '1:836972559218:web:ffad9a6ad0a418ab177beb',
    measurementId: 'G-Y7PH6WR3DX',
};

initializeApp(firebaseConfig);

export const loginWithGoogle = () => {
    // Add your Google login logic here
    const auth = getAuth();
    console.log('first');
    signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential!.accessToken;
            // The signed-in user info.
            const user = result.user;
            // IdP data available using getAdditionalUserInfo(result)
            // ...
            console.log(user, token);
        })
        .catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
};
