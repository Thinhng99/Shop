import styles from './Navbar.module.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(styles)

function Navbar() {
    return ( 
        <div className={cx('navbar-wrapper')}>
            <div className={cx('navbar-left','grid-wide')}>
                <a href='' className={cx('title-left','devider')}>Kênh người bán</a>
                <a href='' className={cx('title-left','devider')}>Trở thành người bán hàng Shopee</a>
                <a href='' className={cx('title-left','devider')}>Tải ứng dụng</a>
                <div>
                <span className={cx('title-left')}>Kết nối</span>
                    <a class="bi bi-facebook"></a>
                    <a class="bi bi-instagram"></a>
                </div>
            </div>
            <div className={cx('navbar-right')}></div>
        </div>
);
}

export default Navbar;