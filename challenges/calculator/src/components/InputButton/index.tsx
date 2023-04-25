import { ButtonHTMLAttributes, ReactElement } from 'react';
import { useCalculation } from '../../context/CalculationContext';
import { IInputButtonTypes } from '../../types/InputButtonTypes.interface';
import { Container } from './styles';

interface IInputButtonProps
  extends IInputButtonTypes,
    ButtonHTMLAttributes<HTMLButtonElement> {
  element: ReactElement | string;
  value: string;
}

export function InputButton({
  children,
  typeButton,
  element,
  value,
  ...rest
}: IInputButtonProps) {
  const { addCalc } = useCalculation();

  return (
    <Container typeButton={typeButton} onClick={() => addCalc(value)} {...rest}>
      <span>{element}</span>
    </Container>
  );
}
