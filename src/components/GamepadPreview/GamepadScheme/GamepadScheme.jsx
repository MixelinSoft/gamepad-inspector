import styles from './GamepadScheme.module.css';
import XboxOne from './schemes/XboxOne';

const GamepadScheme = (props) => {
  const gamepad = props.gamepad;

  return (
    <>{gamepad && <XboxOne axes={gamepad.axes} buttons={gamepad.buttons} />}</>
  );
};

export default GamepadScheme;
