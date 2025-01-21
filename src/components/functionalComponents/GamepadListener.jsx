import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { gamepadsActions } from '../../store/slices/gamepadsSlice';

const GamepadListener = () => {
  const dispatch = useDispatch();
  const gamepadsRef = useRef([]);

  // Serialize Gamepad Data
  const serializeGamepad = (gamepad) => ({
    id: gamepad.id,
    index: gamepad.index,
    connected: gamepad.connected,
    buttons: gamepad.buttons.map((btn) => ({
      pressed: btn.pressed,
      value: btn.value,
    })),
    axes: [...gamepad.axes],
  });

  useEffect(() => {
    const updateGamepads = () => {
      // Get Connected Gamepads
      const connectedGamepads = Array.from(navigator.getGamepads()).filter(
        Boolean,
      );

      // Save Connected Gamepads to Ref
      gamepadsRef.current = connectedGamepads;

      // Set Gamepads to Store
      const serializedGamepads = connectedGamepads.map(serializeGamepad);
      dispatch(gamepadsActions.setGamepads(serializedGamepads));
    };

    const pollGamepads = () => {
      updateGamepads();
      requestAnimationFrame(pollGamepads);
    };

    pollGamepads();

    return () => {
      cancelAnimationFrame(pollGamepads);
    };
  }, [dispatch]);

  return null;
};

export default GamepadListener;
