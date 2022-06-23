import { useState } from 'react';
import { Card, Elevation, Collapse, Icon, IconSize, Tag, Intent } from '@blueprintjs/core';
import { css } from '@emotion/react';

import { StateProps } from 'App';

import { FormNumInput } from './FormNumInput';

export const Interface: React.FC<StateProps> = ({ state, setState }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card
      elevation={Elevation.FOUR}
      css={css`
        padding: 10px;
        
        @media screen and (max-width: 750px) {
          width: 100%;
        }
      `}
    >
      <Tag
        fill={true}
        large={true}
        interactive={true}
        intent={Intent.PRIMARY}
        icon={<Icon icon={isOpen ? 'caret-down' : 'caret-right'} size={IconSize.LARGE} />}
        onClick={() => setIsOpen((prevState) => !prevState)}
        css={css`
          margin-bottom: ${isOpen ? '1rem' : '0'};
          font-weight: 700;
        `}
      >
        Dimensions
      </Tag>
      <Collapse isOpen={isOpen} keepChildrenMounted={true}>
        <FormNumInput
          label='Length'
          defaultValue={state.length}
          onValueChange={(value) => setState({ length: value })}
        />
        <FormNumInput
          label='Width'
          defaultValue={state.width}
          onValueChange={(value) => setState({ width: value })}
        />
        <FormNumInput
          label='Height'
          defaultValue={state.height}
          onValueChange={(value) => setState({ height: value })}
        />
      </Collapse>
    </Card>
  );
};
