
import Button from '../Button/Button';
import styles from './Pagination.module.scss';


const Pagination = ({ currentPage, totalItems, pagePerItem, setPage }: any) => {

    const totalPage: number = Math.ceil(totalItems / pagePerItem)

    const length = totalPage;
    const newArray: any = Array.from({ length }, () => 1);

    const handleClick = (currentIndex: number, action: string) => {
        if (action === 'num') setPage(currentIndex)

        if (action === 'prev') setPage(currentIndex)

        if (action === 'next') setPage(currentIndex)
    }

    return (
        <div className={styles.container}>
            <Button
                disabled={currentPage === 1}
                onClick={() => handleClick(currentPage - 1, 'prev')}>
                {"Prev"}
            </Button>
            <div className={styles.pagesText}>
                {newArray.map((_: number, index: number) => (
                    <span
                        key={index + 1}
                        className={currentPage === (index + 1) ? styles.active : styles['']}
                        onClick={() => handleClick(index + 1, 'num')}
                    >
                        {index + 1}
                    </span>
                ))}
            </div>
            <Button
                disabled={currentPage >= totalPage}
                onClick={() => handleClick(currentPage + 1, 'next')}>
                {"Next"}
            </Button>
        </div>
    )
}

export default Pagination;