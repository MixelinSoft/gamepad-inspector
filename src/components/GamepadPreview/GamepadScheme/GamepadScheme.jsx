import styles from './GamepadScheme.module.css';
import xboxLayout from '../../../assets/gamepads/xbox/main.png';
import xboxLB from '../../../assets/gamepads/xbox/LB.png';
import xboxLT from '../../../assets/gamepads/xbox/LT.png';

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
      <>
        {/* A/B/X/Y */}
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
      </>
      <>
        {/* LB/RB */}
        <img
          className={`${styles.xboxBumper} ${styles.xboxLB} ${
            gamepad.buttons[4].pressed ? styles.xboxBumperPressed : ''
          }`}
          src={xboxLB}
          alt='LB'
        />
        <img
          className={`${styles.xboxBumper} ${styles.xboxRB} ${
            gamepad.buttons[5].pressed ? styles.xboxBumperPressed : ''
          }`}
          src={xboxLB}
          alt='RB'
        />
      </>
      <>
        {/* LT/RT */}
        <img
          src={xboxLT}
          alt='LT'
          className={`${styles.xboxTrigger} ${styles.xboxLT} ${
            gamepad.buttons[6].pressed ? styles.xboxTriggerPressed : ''
          }`}
        />
        <img
          src={xboxLT}
          alt='RT'
          className={`${styles.xboxTrigger} ${styles.xboxRT} ${
            gamepad.buttons[7].pressed ? styles.xboxTriggerPressed : ''
          }`}
        />
      </>
      <>
        {/* D-Pad */}
        <div
          className={`${styles.xboxDpad} ${styles.xboxDpadUP} ${
            gamepad.buttons[12].pressed ? styles.xboxDpadPressed : ''
          }`}
        ></div>
        <div
          className={`${styles.xboxDpad} ${styles.xboxDpadRight}  ${
            gamepad.buttons[15].pressed ? styles.xboxDpadPressed : ''
          }`}
        ></div>
        <div
          className={`${styles.xboxDpad} ${styles.xboxDpadDown}  ${
            gamepad.buttons[13].pressed ? styles.xboxDpadPressed : ''
          }`}
        ></div>
        <div
          className={`${styles.xboxDpad} ${styles.xboxDpadLeft}  ${
            gamepad.buttons[14].pressed ? styles.xboxDpadPressed : ''
          }`}
        ></div>
      </>
    </div>
  );
};

export default GamepadScheme;
