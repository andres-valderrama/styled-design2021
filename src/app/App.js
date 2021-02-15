import { ThemeProvider } from 'styled-components';

import { prime } from 'themes';

export default function App() {
  return (
    <ThemeProvider theme={prime}>
      <p>
        <button>button</button>
      </p>
      <p>
        <button>button</button>
      </p>
    </ThemeProvider>
  );
}
