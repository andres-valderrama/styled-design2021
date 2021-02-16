import styled from 'styled-components';
import { border, space, typography } from 'styled-system';

const BaseButton = styled('button')(
  {
    position: 'relative',
    display: 'inline-block',
    lineHeight: '20px',
    whiteSpace: 'nowrap',
    verticalAlign: 'middle',
    cursor: 'pointer',
    userSelect: 'none',
    appearance: 'none',

    '&:focus': {
      outlie: 'none',
    },

    '&:hover': {
      textDecoration: 'none',
    },

    '&:disabled': {
      cursor: 'default',
    },
  },
  border,
  space,
  typography,
);

BaseButton.defaultProps = {
  py: '5px',
  px: 'space3',
  fontSize: 'body',
  fontWeight: 'semibold',
  borderWidth: 1,
  borderStyle: 'solid',
  borderRadius: 'radius',
};

export default BaseButton;
