import { render } from '@testing-library/react';
import { FormButtons } from './index';

jest.mock('../../context/CalculationContext', () => ({
  useCalculation: () => ({
    calcData: [''],
  }),
}));

describe('FormButtons', () => {
  it('should render all buttons', () => {
    const { getByText } = render(<FormButtons />);
    expect(getByText('CE')).toBeInTheDocument();
    expect(getByText('C')).toBeInTheDocument();
    expect(getByText('%')).toBeInTheDocument();
    expect(getByText('7')).toBeInTheDocument();
    expect(getByText('8')).toBeInTheDocument();
    expect(getByText('9')).toBeInTheDocument();
    expect(getByText('4')).toBeInTheDocument();
    expect(getByText('5')).toBeInTheDocument();
    expect(getByText('6')).toBeInTheDocument();
    expect(getByText('1')).toBeInTheDocument();
    expect(getByText('2')).toBeInTheDocument();
    expect(getByText('3')).toBeInTheDocument();
    expect(getByText('0')).toBeInTheDocument();
    expect(getByText(',')).toBeInTheDocument();
  });
});
