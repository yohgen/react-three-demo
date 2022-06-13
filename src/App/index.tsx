import { useState } from 'react';

import Overlay from 'Overlay';
import Theater from 'Theater';

import BaseStyles from './BaseStyles';
import NormalizedStyles from './NormalizedStyles';

export type State = {
  width: number,
  height: number,
  length: number,
};

export type StateProps = {
  state: State,
  setState: (newState: Partial<State> | ((oldState: State) => Partial<State>)) => void,
};

const App = () => {
  const [state, setState] = useState<State>({ width: 3, height: 3, length: 3 });

  const mergeState: StateProps['setState'] = (newState) => setState((oldState) => {
    const finalState = typeof newState === 'function' ? newState(oldState) : newState;
    return { ...oldState, ...finalState };
  });

  return (
    <>
      <NormalizedStyles />
      <BaseStyles />
      <Overlay state={state} setState={mergeState} />
      <Theater state={state} setState={mergeState} />
    </>
  );
}

export default App;
