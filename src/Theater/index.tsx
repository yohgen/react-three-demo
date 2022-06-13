import { Canvas } from '@react-three/fiber';
import { css } from '@emotion/react';

import { StateProps } from 'App';

import { Light } from './Light';
import { Camera } from './Camera';
import { Controls } from './Controls';
import { Background } from './Background';
import { Room } from './Room';


const Theater = (props: StateProps) => (
  <Canvas id='theater' css={css`
    background-color: #000000;
  `}>
    <Light />
    <Camera />
    <Controls />
    <Background />
    <Room {...props} />
  </Canvas>
);

export default Theater;
