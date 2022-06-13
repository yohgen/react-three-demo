import { Global, css } from '@emotion/react';

const baseStyles = css`
  html, body, #root, #theater, #overlay {
    height: 100%;
    min-height: 100%;
    min-width: 100%;
  }

  body, #root, #theater, #overlay  {
    margin: 0;
    padding: 0;
    pointer-events: none;
  }

  #root {
    position: relative;
  }

  #theater, #overlay {
    position: absolute;
    top: 0;
    left: 0;
  }

  #theater > *, #overlay > * {
    pointer-events: all;
  }

  #theater {
    z-index: 0;
  }

  #overlay {
    z-index: 1;
  }
`;

const BaseStyles = () => <Global styles={baseStyles} />;

export default BaseStyles;
