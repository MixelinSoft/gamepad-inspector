import styles from './GamepadScheme.module.css';
import XboxOne from './schemes/XboxOne';

const GamepadScheme = (props) => {
  const gamepad = props.gamepad;

  return <>{gamepad && <XboxOne buttons={gamepad.buttons} />}</>;
};

export default GamepadScheme;
