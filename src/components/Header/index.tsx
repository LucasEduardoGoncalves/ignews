import React from 'react';
import { SignInButtun } from '../SignInButtun';
import styles from './styles.module.scss';

export const Header: React.FC = () => {
  return (
      <header className={styles.headerContainer}>
          <div className={styles.headerContent}>
              <img src="/images/logo.svg" alt="ig.news" />
              <nav>
                  <a className={styles.active}>Home</a>
                  <a>Posts</a>
              </nav>

              <SignInButtun/>
          </div>
      </header>
  );
};