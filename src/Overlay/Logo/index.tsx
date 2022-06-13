import { Card, Elevation, Icon, IconSize, Tag } from '@blueprintjs/core';
import { css } from '@emotion/react';
import { AnchorHTMLAttributes } from 'react';

const linkProps: AnchorHTMLAttributes<HTMLAnchorElement> & { [key: string]: any } = {
  target: '_blank',
  rel: 'noopener noreferrer',
  css: css`white-space: nowrap;`,
};

export const Logo = () => (
  <Card
    elevation={Elevation.FOUR}
    css={css`
      padding: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;

      @media screen and (max-width: 750px) {
        width: 100%;
      }
    `}
  >
    <Icon icon='cube' size={IconSize.LARGE} />
    <div>
      {'Демо '}
      <a href='https://threejs.org/' {...linkProps}>
        Three.js
      </a>
      {' и '}
      <a href='https://docs.pmnd.rs/' {...linkProps}>
        React Three Fiber
      </a>
    </div>
    <a href='https://github.com/yohgen/react-three-demo' {...linkProps}>
      GitHub
    </a>
  </Card>
);
