import styles from './GamepadScheme.module.css';
import xboxLayout from '../../../assets/gamepads/xbox/main.png';
import xboxLB from '../../../assets/gamepads/xbox/LB.png';
import xboxLT from '../../../assets/gamepads/xbox/LT.png';
import XboxOne from './schemes/XboxOne';

const GamepadScheme = (props) => {
  const gamepad = props.gamepad;

  return <>{gamepad && <XboxOne buttons={gamepad.buttons} />}</>;
};

export default GamepadScheme;
