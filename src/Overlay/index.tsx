import { css } from '@emotion/react';

import { StateProps } from 'App';

import { Interface } from './Interface';
import { Logo } from './Logo';

const Overlay = (props: StateProps) => (
  <div
    id='overlay'
    css={css`
      padding: 1vh 1vw 1vh 1vw !important;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      flex-flow: row wrap;

      @media screen and (max-width: 750px) {
        flex-flow: column;
      }
    `}
  >
    <Logo />
    <Interface {...props} />
  </div>
);

export default Overlay;
