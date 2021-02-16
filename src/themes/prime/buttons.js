import { rgba } from 'polished';

import colors, { baseColors } from 'themes/prime/colors';

const { black, gray } = baseColors;

export default {
  default: {
    color: {
      default: colors.text.grayDark,
      disabled: gray[4],
    },
    border: {
      default: rgba(black, 0.12),
      active: colors.border.grayDark,
      disabled: colors.border.grayLight,
      focus: rgba(black, 0.15),
    },
    bg: {
      default: colors.bg.grayLight,
      hover: '#f3f4f6',
      active: '#edeff2',
      disabled: colors.bg.grayLight,
    },
    shadow: {
      default:
        '0px 1px 0px rgba(27, 31, 35, 0.04), inset 0px 2px 0px rgba(255, 255, 255, 0.25)',
      hover:
        '0px 1px 0px rgba(209, 213, 218, 0.2), inset 0px 2px 0px rgba(255, 255, 255, 0.1)',
      active: 'inset 0px 2px 0px rgba(149, 157, 165, 0.1)',
      focus: '0 0 0 3px rgba(3, 102, 214, 0.3)',
    },
  },
};
