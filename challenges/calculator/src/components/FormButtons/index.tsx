import { Divide, Equals, Minus, Plus, PlusMinus, X } from 'phosphor-react';
import { useCalculation } from '../../context/CalculationContext';
import { InputButton } from '../InputButton';
import { Container } from './styles';

export function FormButtons() {
  const { calcData } = useCalculation();
  const lastValue = calcData[calcData.length - 1];
  const disabledOperations = ['–', '+', '×', '÷'].includes(lastValue);
  const disablePercent = calcData[calcData.length - 1] === '%';

  return (
    <Container>
      <InputButton typeButton="darkPurple" value="ce">
        <span>CE</span>
      </InputButton>
      <InputButton typeButton="darkWhite" value="c">
        <span>C</span>
      </InputButton>
      <InputButton typeButton="darkWhite" value="%" disabled={disablePercent}>
        <span>%</span>
      </InputButton>
      <InputButton
        typeButton="darkPurpleWhite"
        value="÷"
        disabled={disabledOperations}
      >
        <Divide />
      </InputButton>
      <InputButton typeButton="darkWhite" value="7">
        <span>7</span>
      </InputButton>
      <InputButton typeButton="darkWhite" value="8">
        <span>8</span>
      </InputButton>
      <InputButton typeButton="darkWhite" value="9">
        <span>9</span>
      </InputButton>
      <InputButton
        typeButton="darkPurpleWhite"
        value="×"
        disabled={disabledOperations}
      >
        <X />
      </InputButton>
      <InputButton typeButton="darkWhite" value="4">
        <span>4</span>
      </InputButton>
      <InputButton typeButton="darkWhite" value="5">
        <span>5</span>
      </InputButton>
      <InputButton typeButton="darkWhite" value="6">
        <span>6</span>
      </InputButton>
      <InputButton
        typeButton="darkPurpleWhite"
        value="–"
        disabled={disabledOperations}
      >
        <Minus />
      </InputButton>
      <InputButton typeButton="darkWhite" value="1">
        <span>1</span>
      </InputButton>
      <InputButton typeButton="darkWhite" value="2">
        <span>2</span>
      </InputButton>
      <InputButton typeButton="darkWhite" value="3">
        <span>3</span>
      </InputButton>
      <InputButton
        typeButton="darkPurpleWhite"
        value="+"
        disabled={disabledOperations}
      >
        <Plus />
      </InputButton>
      <InputButton typeButton="darkWhite" value="-/+">
        <PlusMinus />
      </InputButton>
      <InputButton typeButton="darkWhite" value="0">
        <span>0</span>
      </InputButton>
      <InputButton typeButton="darkWhite" value=".">
        <span>,</span>
      </InputButton>
      <InputButton
        typeButton="darkPurpleWhite"
        value="="
        disabled={disabledOperations}
      >
        <Equals />
      </InputButton>
    </Container>
  );
}
