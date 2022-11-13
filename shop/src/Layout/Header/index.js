import HeaderSearch from "./HeaderSearch/HeaderSearch";
import Navbar from "./Navbar/Navbar";
import styles from './Header.module.scss' 
import classNames from "classnames/bind";

const cx = classNames.bind(styles)

function Header() {
    return ( 
    <div className={cx('header-wrapper')}>
        <Navbar/>
        <HeaderSearch/>
    </div> 
);
}

export default Header;