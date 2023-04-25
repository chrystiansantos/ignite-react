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
      <InputButton typeButton="darkPurple" value="ce" element="CE" />
      <InputButton typeButton="darkWhite" value="c" element="C" />
      <InputButton
        typeButton="darkWhite"
        value="%"
        disabled={disablePercent}
        element="%"
      />
      <InputButton
        typeButton="darkPurpleWhite"
        value="÷"
        disabled={disabledOperations}
        element={<Divide />}
      />
      <InputButton typeButton="darkWhite" value="7" element="7" />
      <InputButton typeButton="darkWhite" value="8" element="8" />
      <InputButton typeButton="darkWhite" value="9" element="9" />
      <InputButton
        typeButton="darkPurpleWhite"
        value="×"
        disabled={disabledOperations}
        element={<X />}
      />
      <InputButton typeButton="darkWhite" value="4" element="4" />
      <InputButton typeButton="darkWhite" value="5" element="5" />
      <InputButton typeButton="darkWhite" value="6" element="6" />
      <InputButton
        typeButton="darkPurpleWhite"
        value="–"
        disabled={disabledOperations}
        element={<Minus />}
      />
      <InputButton typeButton="darkWhite" value="1" element="1" />
      <InputButton typeButton="darkWhite" value="2" element="2" />
      <InputButton typeButton="darkWhite" value="3" element="3" />
      <InputButton
        typeButton="darkPurpleWhite"
        value="+"
        disabled={disabledOperations}
        element={<Plus />}
      />
      <InputButton typeButton="darkWhite" value="-/+" element={<PlusMinus />} />
      <InputButton typeButton="darkWhite" value="0" element="0" />
      <InputButton typeButton="darkWhite" value="." element="," />
      <InputButton
        typeButton="darkPurpleWhite"
        value="="
        disabled={disabledOperations}
        element={<Equals />}
      />
    </Container>
  );
}
