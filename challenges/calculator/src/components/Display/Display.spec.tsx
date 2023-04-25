import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import Display from '.';
import theme from '../../styles/theme';

jest.mock('../../context/CalculationContext', () => ({
  useCalculation: () => {
    return {
      calcData: ['2', 'x', '2', 'x', '3', 'x', '4', '-', '20'],
      calcResult: '28',
    };
  },
}));

describe('Display', () => {
  it('should be render display with data', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Display />
      </ThemeProvider>,
    );

    expect(getByText('2x2x3x4-20')).toBeInTheDocument();
    expect(getByText('28')).toBeInTheDocument();
  });
});
