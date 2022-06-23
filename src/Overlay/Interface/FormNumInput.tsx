import { NumericInputProps, FormGroup, NumericInput } from '@blueprintjs/core';
import { css } from '@emotion/react';

export const FormNumInput: React.FC<Pick<NumericInputProps, ('defaultValue' | 'onValueChange')> & { label: string }> = (
  { label, defaultValue, onValueChange }
) => (
  <FormGroup label={label} labelFor={label} css={css`font-weight: 700;`}>
    <NumericInput
      defaultValue={defaultValue}
      onValueChange={onValueChange}
      locale='ru-RU'
      fill={true}
      large={true}
      selectAllOnFocus={true}
      minorStepSize={0.1}
      majorStepSize={1}
      min={0}
      max={15}
      onKeyDown={(e) => {
        if (e.key !== 'Enter') return;
        e.preventDefault();
        e.stopPropagation();
        e.currentTarget.blur();
      }}
    />
  </FormGroup>
);
