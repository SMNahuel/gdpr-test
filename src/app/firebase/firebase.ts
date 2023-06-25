import { useAppDispatch } from '@/redux/hooks';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

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

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
