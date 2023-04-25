import { Equals } from 'phosphor-react';
import { useTheme } from 'styled-components';
import { useCalculation } from '../../context/CalculationContext';
import { Container } from './styles';

export default function Display() {
  const { colors } = useTheme();
  const { calcData, calcResult } = useCalculation();

  return (
    <Container>
      <span>
        {calcData.map(operator =>
          ['–', '+', '×', '÷'].includes(operator) ? ` ${operator} ` : operator,
        )}
      </span>
      <div>
        <Equals color={colors.texrDark} size="20px" />
        <span>{calcResult}</span>
      </div>
    </Container>
  );
}
