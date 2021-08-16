import React from 'react';

import { signIn, useSession } from 'next-auth/client';

import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

import styles from './styles.module.scss'

export const SignInButtun: React.FC = () => {

    const [ session ] = useSession();
    
    console.log(session);

    return session ? (
        <button 
            type="button"
            className={styles.signInButton}
        >
            <FaGithub color="#04d3c1" />
            Lucas Gonçalves

            <FiX color="#737380" className={styles.closeIcon}/>
        </button> 
    ) : (
        <button 
            type="button"
            className={styles.signInButton}
            onClick={() => signIn('github')}
        >
            <FaGithub color="#eba417" />
            Sign in with GitHub
        </button> 
    )
}