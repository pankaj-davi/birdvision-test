
import styles from './header.module.scss';

const Header = () => {

    return (
        <header className={styles['header']}>
            <img 
            src={'https://www.birdvision.in/web-control/assets/img/BVC-logo-180.svg'}
            />
        </header>
    )
}

export default Header;