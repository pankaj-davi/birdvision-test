import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import styles from './productCard.module.scss'

export interface ProductType {
    id: number;
    title: string,
    description: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    brand: string,
    category: string,
    thumbnail: string,
    images: string[]
}



const ProductCard = ({ id, title, price, thumbnail }: ProductType) => {
    const navigate = useNavigate()

    return (
        <div key={id} className={styles.container}>
            <img src={thumbnail} alt={title} className={styles.thumbnail} />
            <div className={styles.contant}>
                <h3>{title.length < 20 ? title : `${title.slice(0, 17)}...`}</h3>
                <span>{"Price"} {":  "} <strong>{"$"}{price}</strong> </span>
                <div className={styles.buttonContainer}>
                    <Button onClick={() => {
                        navigate(`/product/${id}`)
                        window.scrollTo({
                            top: 0,
                            behavior: "smooth"
                          });
                    }
                    } >View More</Button>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;