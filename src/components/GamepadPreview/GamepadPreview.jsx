import { useEffect, useState } from 'react';
import styles from './GamepadPreview.module.css';
import ButtonTest from '../tests/ButtonTest/ButtonTest';

const GamepadPreview = (props) => {
  const [gamepads, setGamepads] = useState([]);
  const [pressedButtons, setPressedButtons] = useState({});

  useEffect(() => {
    const updateGamepads = () => {
      const connectedGamepads = Array.from(navigator.getGamepads()).filter(
        Boolean,
      );
      setGamepads(connectedGamepads);

      // Обновление состояния нажатых кнопок
      const buttonsState = {};
      connectedGamepads.forEach((gamepad) => {
        if (gamepad) {
          buttonsState[gamepad.index] = gamepad.buttons
            .map((button, index) => (button.pressed ? index : null))
            .filter((index) => index !== null);
        }
      });
      setPressedButtons(buttonsState);
    };

    const pollGamepads = () => {
      updateGamepads();
      requestAnimationFrame(pollGamepads);
    };

    pollGamepads();

    return () => {
      cancelAnimationFrame(pollGamepads);
    };
  }, []);

  return (
    <div>
      <h1>Gamepad Inspector</h1>
      {gamepads.length === 0 ? (
        <p>Геймпады не подключены</p>
      ) : (
        gamepads.map((gamepad) => (
          <div key={gamepad.index} style={{ marginBottom: '20px' }}>
            <h2>Геймпад {gamepad.index + 1}</h2>
            <p>
              <strong>ID:</strong> {gamepad.id}
            </p>
            <p>
              <strong>Mapping:</strong>{' '}
              {gamepad.mapping || 'Нестандартная раскладка'}
            </p>
            <p>
              <strong>Количество кнопок:</strong> {gamepad.buttons.length}
            </p>
            <p>
              <strong>Количество осей:</strong> {gamepad.axes.length}
            </p>
            <p>
              <strong>Нажатые кнопки:</strong>{' '}
              {pressedButtons[gamepad.index]?.length > 0
                ? pressedButtons[gamepad.index].join(', ')
                : 'Нет'}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default GamepadPreview;
