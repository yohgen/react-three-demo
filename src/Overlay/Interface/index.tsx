import { NumericInputProps, FormGroup, NumericInput, Card, Elevation, Collapse, Icon, IconSize, Tag, Intent } from '@blueprintjs/core';
import { css } from '@emotion/react';
import { StateProps } from 'App';
import { useState } from 'react';

const numeticInputProps: NumericInputProps & { [key: string]: any } = {
  fill: true,
  locale: 'ru-RU',
  selectAllOnFocus: true,
  minorStepSize: 0.01,
  majorStepSize: 1,
  min: 0,
  max: 15,
  onKeyDown: (event: any) => event.key === 'Enter' && event.target.blur(),
};

export const Interface = ({ state, setState }: StateProps) => {
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
        `}
      >
        Размеры
      </Tag>
      <Collapse isOpen={isOpen} keepChildrenMounted={true}>
        <FormGroup
          label='Длина'
          labelFor='length'
        >
          <NumericInput
            {...numeticInputProps}
            defaultValue={state.length}
            onValueChange={(value) => setState({ length: value })}
          />
        </FormGroup>
        <FormGroup
          label='Ширина'
          labelFor='length'
        >
          <NumericInput
            {...numeticInputProps}
            defaultValue={state.width}
            onValueChange={(value) => setState({ width: value })}
          />
        </FormGroup>
        <FormGroup
          label='Высота'
          labelFor='length'
        >
          <NumericInput
            {...numeticInputProps}
            defaultValue={state.height}
            onValueChange={(value) => setState({ height: value })}
          />
        </FormGroup>
      </Collapse>
    </Card>
  );
};
