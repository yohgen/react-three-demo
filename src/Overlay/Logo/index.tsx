import { Card, Elevation, Icon, IconSize } from '@blueprintjs/core';
import { css } from '@emotion/react';

const Link: React.FC<React.PropsWithChildren<{ href: string }>> = ({ href, children }) => (
  <a
    href={href}
    target='_blank'
    rel='noopener noreferrer'
    css={css`white-space: nowrap;`}
  >
    {children}
  </a>
);

export const Logo = () => (
  <Card
    elevation={Elevation.FOUR}
    css={css`
      padding: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1.5rem;

      @media screen and (max-width: 750px) {
        width: 100%;
      }
    `}
  >
    <Icon icon='cube' size={IconSize.LARGE} />
    <div
      css={css`
        display: flex;
        gap: 0.25rem;
        font-weight: 700;
      `}
    >
      <Link href='https://threejs.org'>Three.js</Link>
      <span>And</span>
      <Link href='https://docs.pmnd.rs'>React Three Fiber</Link>
      <span>Demo</span>
    </div>
    <Link href='https://github.com/yohgen/react-three-demo'>{'< GitHub >'}</Link>
  </Card>
);
