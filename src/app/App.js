import { ThemeProvider } from 'styled-components';

import BaseButton from 'design-system/BaseButton';
import Button from 'design-system/Button';

import { prime } from 'themes';

export default function App() {
  return (
    <ThemeProvider theme={prime}>
      <p>
        <button>button</button>
      </p>
      <p>
        <BaseButton>Base button</BaseButton>
        <Button>Button</Button>
      </p>
    </ThemeProvider>
  );
}
