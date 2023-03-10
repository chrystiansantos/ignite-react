import { render, screen } from '@testing-library/react';
import { InputButton } from './index';

describe('InputButton', () => {
  it('should be render number correct', () => {
    const { getByText } = render(
      <InputButton typeButton="darkWhite" value="8">
        <span>8</span>
      </InputButton>,
    );

    /* expect(screen.getByText('8')).toHaveTextContent('8') */
    expect(getByText('8')).toHaveTextContent('8')
  });
});
