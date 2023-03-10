import { ButtonHTMLAttributes, ReactElement } from 'react';
import { useCalculation } from '../../context/CalculationContext';
import { IInputButtonTypes } from '../../types/InputButtonTypes.interface';
import { Container } from './styles';

interface IInputButtonProps
  extends IInputButtonTypes,
    ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactElement;
  value: string;
}

export function InputButton({
  children,
  typeButton,
  value,
  ...rest
}: IInputButtonProps) {
  const { addCalc } = useCalculation();

  return (
    <Container typeButton={typeButton} onClick={() => addCalc(value)} {...rest}>
      {children}
    </Container>
  );
}
