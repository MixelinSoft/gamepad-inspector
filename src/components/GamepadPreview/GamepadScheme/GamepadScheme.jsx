import styles from './GamepadScheme.module.css';
import xboxLayout from '../../../assets/gamepads/xbox/main.png';
import xboxLB from '../../../assets/gamepads/xbox/LB.png';

const GamepadScheme = (props) => {
  const gamepad = props.gamepad
    ? props.gamepad
    : {
        buttons: [
          { pressed: false },
          { pressed: false },
          { pressed: false },
          { pressed: false },
        ],
      };
  return (
    <div className={styles.gamepadSchemeContainer}>
      <img className={styles.gamepadSchemeImage} src={xboxLayout} alt='' />
      <span
        className={`${styles.button} ${styles.buttonA} ${
          gamepad.buttons[0].pressed ? styles.pressed : ''
        }`}
      >
        A
      </span>
      <span
        className={`${styles.button} ${styles.buttonB} ${
          gamepad.buttons[1].pressed ? styles.pressed : ''
        }`}
      >
        B
      </span>
      <span
        className={`${styles.button} ${styles.buttonX} ${
          gamepad.buttons[2].pressed ? styles.pressed : ''
        }`}
      >
        X
      </span>
      <span
        className={`${styles.button} ${styles.buttonY} ${
          gamepad.buttons[3].pressed ? styles.pressed : ''
        }`}
      >
        Y
      </span>
      <img
        className={`${styles.xboxBumper} ${styles.xboxLB} ${
          gamepad.buttons[4].pressed ? styles.xboxBumperPressed : ''
        }`}
        src={xboxLB}
        alt=''
      />
      <img
        className={`${styles.xboxBumper} ${styles.xboxRB} ${
          gamepad.buttons[5].pressed ? styles.xboxBumperPressed : ''
        }`}
        src={xboxLB}
        alt=''
      />
    </div>
  );
};

export default GamepadScheme;
