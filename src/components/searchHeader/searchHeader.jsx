import React, { useRef } from 'react';
import styles from "./searchHeader.module.css";

const SearchHeader = ({onSearch}) => {
    const inputRef = useRef();

    const handleSearch = () => {
        const value = inputRef.current.value;
        onSearch(value);
    };

    // const onKeyPress = (event) => {
    //     console.log(event.target);
    //     if(event.key === 'Enter'){
    //         handleSearch();
    //     }
    // };

    // const onClick = () => {
    //     handleSearch();
    // };

    const onSubmit = (event) => {
        event.preventDefault();
        // onSubmit을 하게되면 페이지가 자동으로 리로딩되기 때문에 prevent 함수 써줘야함
        // event 변수 위와 같이 받아와도 무관함. 위의 함수도 익혀둘 것!
        handleSearch();
    };

    return (
    <header className={styles.searchHeader}>
        <div className={styles.logoTitle}>
            <img src="/images/logo.png" alt="logo" />
            <span>MR.LeeTube</span>
        </div>
        <form onSubmit={onSubmit} className={styles.searchForm}>
            <input ref={inputRef} type="text" placeholder="Search..."/>
            <button><i class="fas fa-search fa-lg"></i></button>
        </form>
    </header>
    )
};

export default SearchHeader;