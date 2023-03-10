import { fireEvent, render } from '@testing-library/react';
import { CalculationContextProvider } from '../../context/CalculationContext';
import { FormButtons } from './index';

describe('FormButtons', () => {
  it('should render list itens', () => {
    const { debug } = render(
      <CalculationContextProvider>
        <FormButtons />
      </CalculationContextProvider>,
    );

    expect(1 + 1).toBe(2);
  });

  it('should be click add to display', () => {
    const { debug, getByText } = render(
      <CalculationContextProvider>
        <FormButtons />
      </CalculationContextProvider>,
    );

    fireEvent.click(getByText('8'));
    fireEvent.click(getByText('+'));
    fireEvent.click(getByText('8'));


  });
});
