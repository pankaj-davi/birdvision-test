import Button from '../Button/Button';
import styles from './productCard.module.scss'

const SkeletonProductCard = () => {
    return (
        <div className={styles.container}>
            <div className={styles.thumbnail} style={{ backgroundColor: '#f0f0f0', width: '100%', height: '200px' }} />
            <div className={styles.content}>
                <div style={{ backgroundColor: '#f0f0f0', width: '80%', height: '20px', marginBottom: '10px' }} />
                <div style={{ backgroundColor: '#f0f0f0', width: '50%', height: '20px' }} />
                <div className={styles.buttonContainer} style={{ marginTop: '10px' }}>
                    <Button>Loading...</Button>
                </div>
            </div>
        </div>
    );
};

export default SkeletonProductCard;