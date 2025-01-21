import styles from './Header.module.css';
import logo from '../../../../assets/logo/logo.webp';

const Header = (props) => {
  return (
    <header className={styles.header}>
      <div className={styles.headerLogo}>
        <img src={logo} alt='logo' height='48px' width='48px' />
      </div>
      <div className={styles.headerTitle}>Gamepad Inspector</div>
    </header>
  );
};

export default Header;
