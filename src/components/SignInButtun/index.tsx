import React from 'react';

import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

import styles from './styles.module.scss'

export const SignInButtun: React.FC = () => {

    const isUserLoggedIn = false;

    return isUserLoggedIn ? (
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
        >
            <FaGithub color="#eba417" />
            Sign in with GitHub
        </button> 
    )
}