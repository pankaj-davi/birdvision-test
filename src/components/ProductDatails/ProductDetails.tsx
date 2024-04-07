import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

import LoadingSpinner from "../Spinner/Spinner";
import ErrorComponent from "../ErrorComponent/ErrorComponent";

import styles from './productDetails.module.scss'
import SliderImages from "../slider/SliderImages";
import Rating from "../Rating/Rating";
import Button from "../Button/Button";
import ProductList from "../ProductList/ProductList";


const ProductDetails = () => {
    const { productId } = useParams();
    const { data:
        { id,
            title,
            description,
            price,
            discountPercentage,
            rating,
            brand,
            category,
            images
        },
        isError, isPending }: any = useFetch(`https://dummyjson.com/products/${productId}`)

    return (
        <>
            {isPending && <LoadingSpinner />}
            {isError && <ErrorComponent />}
            <div className={styles.container}>
                <div className={styles.image_slider}>
                    <SliderImages>
                        {images?.map((item: string) => (
                            <div className={styles.img_content}>
                                <img src={item} key={id} alt={title} />
                            </div>
                        ))}
                    </SliderImages>
                </div>
                <div className={styles.product_details}>
                    <h2>{title}</h2>
                    <Rating initialRating={rating.toFixed(1)} />
                    <hr />
                    <div className={styles.product_price}>
                        <strong>
                            {"Price :"} {`$${price}`}
                            <span className={styles.discount_percentage}>{`   (-${discountPercentage}%)`}</span>
                        </strong>
                    </div>
                    <div className={styles.description}>
                        <h3>{"Description"}</h3>
                        <p>{description}</p>
                        <div>
                            <p>
                                <strong>{"Brand :"} {brand}</strong>
                            </p>
                            <p>
                                <strong>{"Category :"} {category}</strong>
                            </p>
                        </div>
                    </div>
                    <Button>{'Add To Cart'}</Button>
                </div>
            </div>
            <div className={styles.related_product}>
                <h2>{"More related products"}</h2>
                <ProductList pageination={false} />
            </div>
        </>
    );
}

export default ProductDetails;