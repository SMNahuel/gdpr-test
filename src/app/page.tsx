'use client';

import { useState } from 'react';
import Carousel from './components/PublicHome/carousel';
import Image from 'next/image';
import Head from 'next/head';
import SliderHome from './components/PublicHome/swiper';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { auth } from './firebase/firebase';
import {
    signInWithPopup,
    GoogleAuthProvider,
    UserCredential,
} from 'firebase/auth';
import { setAuth } from '@/redux/features/authSlice';
import { cookies } from 'next/dist/client/components/headers';

const Home: React.FC = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [form, setForm] = useState({ email: '', password: '' });
    const [error, setError] = useState('');

    const dispatch = useAppDispatch();
    auth;

    const onInputChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setForm((prevForm) => ({ ...prevForm, [name]: value }));
    };

    const onClickShowPassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    const onMouseDownPassword = (
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        event.preventDefault();
    };

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Add your form submission logic here
    };
    const googleAuth = new GoogleAuthProvider();

    const onLoginWithGoogle = async () => {
        const { user }: UserCredential = await signInWithPopup(
            auth,
            googleAuth
        );
        const { displayName: name, uid, photoURL: avatar } = user;
        dispatch(setAuth({ name, uid, avatar }));
    };

    const legalHubAnchor =
        'http://app.gdpr.direct/legal-hub/?businessName=GDPR.direct&companyAddress=Torres%20Quevedo&companyIdNumber=B95988127&companyName=Ai%20Labs%20Group%20SL&emailForLegalPurposes=legal@gdpr.direct';

    const legalLinks = [
        { title: 'Privacy policy', a: legalHubAnchor },
        { title: 'Cookies policy', a: legalHubAnchor },
        { title: 'Legal notice', a: legalHubAnchor },
    ];

    return (
        <div className="grid grid-cols-2">
            <div
                className="flex flex-col h-full justify-center bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-600"
                style={{
                    backgroundImage:
                        'linear-gradient(45deg, rgb(63, 81, 181), rgb(96, 116, 203), rgb(63, 81, 181))',
                }}
            >
                <SliderHome />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 bg-gradient-to-b from-white to-gray-100">
                <div className="flex flex-col justify-center items-center py-4 md:py-6 px-2 md:px-6 w-[50vw]">
                    <div className="flex mt-2 ml-[-0.75rem] items-end justify-center">
                        <div className="flex items-center h-48 w-80">
                            <Image
                                src={'images/gdprDirectSmallLogo.svg'}
                                width={150}
                                height={60}
                                alt="logo"
                            />
                            <div className="ml-1">
                                <h2 className="text-3xl sm:text-4xl lg:text-[5rem] leading-tight font-bold text-[#3F51B5]">
                                    GDPR
                                </h2>
                                <h2 className="text-[4rem] sm:text-3.2xl leading-tight text-secondary font-['Arvo'] text-[#F2B434] font-bold">
                                    direct
                                </h2>
                            </div>
                        </div>
                    </div>
                    <h3 className="text-center font-bold text-[4.5rem]">
                        Welcome
                    </h3>
                    <p className="text-center text-[1.7em] pb-6">
                        Log in or create a new account.
                    </p>
                    <div className="mb-2 flex justify-center">
                        <button
                            className="flex items-center bg-[#3F51B5] text-white text-2xl p-3"
                            onClick={onLoginWithGoogle}
                        >
                            {' '}
                            Login with Google
                            <span>
                                {' '}
                                <Image
                                    className="mr-2"
                                    src={'images/google-icon.svg'}
                                    height={30}
                                    width={30}
                                    alt="google-logo"
                                />
                            </span>
                        </button>
                    </div>
                    <p className="text-center opacity-50 pt-6">
                        You must have a Google account to proceed
                    </p>
                    <div className="mt-8 flex justify-center">
                        {legalLinks.map((link, index) => (
                            <div key={index}>
                                <a
                                    href={link.a}
                                    className="text-secondary hover:underline  text-[#F2B434] text-[1.2rem] mr-3"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {link.title}
                                </a>
                                {index < legalLinks.length - 1 && (
                                    <span className="opacity-50 mx-0.5 mr-2">
                                        |
                                    </span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
