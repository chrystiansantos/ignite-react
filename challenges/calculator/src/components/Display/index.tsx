import { Equals } from 'phosphor-react';
import { useTheme } from 'styled-components';
import { useCalculation } from '../../context/CalculationContext';
import { Container } from './styles';

export default function Display() {
  const { colors } = useTheme();
  const { calcData, calcResult } = useCalculation();
  console.log(calcData);
  return (
    <Container>
      <span>
        {calcData.map(operator => {
          if (['–', '+', '×', '÷'].includes(operator)) {
            return <span>{operator}</span>;
          }
          return operator;
        })}
      </span>
      <div>
        <Equals color={colors.texrDark} size="20px" />
        <span>{calcResult}</span>
      </div>
    </Container>
  );
}
