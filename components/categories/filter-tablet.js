import Image from 'next/image';

import styles from './filter-tablet.module.css';

const Category = ({  category, remove }) =>{
    return(
        <div className={styles.categoryTablet}>
            <span className={styles.categoryName}>{ category }</span>
            <button onClick={ remove }
                    className={styles.closeButton} 
                    alt="Close button. Clearing your search box">
                <Image
                    src="/icon-remove.svg"
                    width={15}
                    height={15}
                />
            </button>
        </div>
    );
}

export default Category;
