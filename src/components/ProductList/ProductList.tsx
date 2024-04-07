
import { useState } from "react";
import { useFetch } from "../../hooks/useFetch";

import ProductCard, { ProductType } from "../ProductCart/ProductCard";
import ErrorComponent from "../ErrorComponent/ErrorComponent";
import Pagination from "../Pagination/Pagination";
import LoadingSpinner from "../Spinner/Spinner";

import styles from './productList.module.scss';

const ProductList = () => {
    const [page, setPage] = useState(1)
    const { data, isError, isPending }: any = useFetch(`https://dummyjson.com/products`, page, 10)

    return (
        <div className={styles.container}>
            {isPending && <LoadingSpinner />}
            {isError && <ErrorComponent />}
            <div className={styles.product_List}>
                {data?.products?.map((item: ProductType) => <ProductCard {...item} key={item.id} />)}
            </div>
            <div>
                <Pagination setPage={setPage} currentPage={page} totalItems={data.total} pagePerItem={10} />
            </div>
        </div>
    )
}

export default ProductList;  