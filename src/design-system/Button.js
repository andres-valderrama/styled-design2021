import styled from 'styled-components';
import { color } from 'styled-system';

import { get } from 'themes/prime/utils';

import BaseButton from 'design-system/BaseButton';

const Button = styled(BaseButton)(
  {
    color: get('buttons.default.color.default'),
    backgroundColor: get('buttons.default.bg.default'),
    border: `1px solid ${get('buttons.default.border.default')}`,
    boxShadow: get('buttons.default.shadow.default'),

    '&:hover': {
      backgroundColor: get('buttons.default.bg.hover'),
      borderColor: get('buttons.default.border.hover'),
      boxShadow: get('buttons.default.shadow.hover'),
    },

    '&:focus': {
      borderColor: get('buttons.default.border.focus'),
      boxShadow: get('buttons.default.shadow.focus'),
    },
  },
  color,
);

Button.defaultProps = {};

export default Button;
