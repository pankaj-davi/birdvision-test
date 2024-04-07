import { ReactNode } from 'react';
import Header from '../Header/Header';

import styles from './layout.module.scss'

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className={styles['container']}>
            <Header />
            <main className={styles.main}>
                {children}
            </main>
        </div>
    );
};

export default Layout;
