import { render } from '@testing-library/react';
import { Plus } from 'phosphor-react';
import { InputButton } from './index';

describe('InputButton', () => {
  it('should be render number 0', () => {
    const { getByText } = render(
      <InputButton typeButton="darkWhite" value="0" element="0" />,
    );
    expect(getByText('0')).toHaveTextContent('0');
  });

  it('should be render button disabled', () => {
    const { getByRole } = render(
      <InputButton
        typeButton="darkWhite"
        value="+"
        element={<Plus />}
        disabled
      />,
    );
    const button = getByRole('button');
    expect(button).toBeDisabled();
  });

  it('should be render clear all', () => {
    const { getByText } = render(
      <InputButton typeButton="darkWhite" value="ce" element="CE" />,
    );
    expect(getByText('CE')).toHaveTextContent('CE');
  });
});
