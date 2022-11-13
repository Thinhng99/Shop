import Header from "./Layout/Header";
import styles from './App.module.scss';
import classNames from "classnames/bind";

const cx = classNames.bind(styles)

function App() {
  return (
    <div className={cx('App')}>
        <Header/>
    </div>
  );
}

export default App;
