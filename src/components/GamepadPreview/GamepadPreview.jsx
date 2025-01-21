import { useEffect, useState } from 'react';
import styles from './GamepadPreview.module.css';
import ButtonTest from '../tests/ButtonTest/ButtonTest';
import { parseGamepadButtons } from '../../utils/parseGamepadButtons';
import { useSelector } from 'react-redux';

const GamepadPreview = (props) => {
  // Get Gampads From Store
  const gamepads = useSelector((state) => state.gamepads.gamepads);

  return (
    <div>
      {gamepads.length > 0 && (
        <div>
          <div>Name: {gamepads[0].id}</div>
          <div>Index: {gamepads[0].index}</div>
          <div>
            Pressed Button:
            {gamepads[0].buttons.map(
              (button, id) =>
                button.pressed && <span> {parseGamepadButtons(id)}</span>,
            )}
          </div>
          <div></div>
        </div>
      )}
    </div>
  );
};

export default GamepadPreview;
