export const parseGamepadButtons = (button) => {
  const xboxButtons = {
    0: 'A',
    1: 'B',
    2: 'X',
    3: 'Y',
    4: 'LB',
    5: 'RB',
    6: 'LT',
    7: 'RT',
    8: 'Back',
    9: 'Start',
    10: 'LS',
    11: 'RS',
    12: 'Up',
    13: 'Down',
    14: 'Left',
    15: 'Right',
    16: 'Xbox',
  };

  return xboxButtons[+button] || button;
};
