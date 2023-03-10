/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, ReactNode, useContext, useState } from 'react';
import { calculation, formattedData } from '../util/functionCalcs';

interface CalculationContextData {
  calcData: string[];
  setCalcData: React.Dispatch<React.SetStateAction<string[]>>;
  addCalc: (value: string) => void;
  calcResult: string;
}

const CalculationContext = createContext({} as CalculationContextData);

interface ICalculationContextProps {
  children: ReactNode;
}

function CalculationContextProvider({ children }: ICalculationContextProps) {
  const [calcData, setCalcData] = useState<string[]>([]);
  const [calcResult, setCalcResult] = useState('0');

  const addCalc = (value: string) => {
    if (value === 'ce') {
      setCalcData([]);
      setCalcResult('0');
      return;
    }
    if (value === 'c') {
      setCalcData(oldValue => oldValue.slice(0, -1));
      return;
    }

    if (value === '-/+') {
      if (calcData[calcData.length - 1] === '–') {
        const newData = calcData;
        newData[calcData.length - 1] = '+';
        setCalcData(() => newData);
      } else if (calcData[calcData.length - 1] === '+') {
        const newData = calcData;
        newData[calcData.length - 1] = '–';
        setCalcData(() => newData);
      } else {
        setCalcData([...calcData, '–']);
      }
      return;
    }

    if (value === '=') {
      /* REFATORAR */
      const formatedArr = formattedData(calcData);
      const calcResult123 = calculation(formatedArr);
      setCalcResult(calcResult123);
      return;
    }

    setCalcData(oldValue => [...oldValue, value]);
  };

  return (
    <CalculationContext.Provider
      value={{
        calcData,
        setCalcData,
        addCalc,
        calcResult,
      }}
    >
      {children}
    </CalculationContext.Provider>
  );
}

function useCalculation() {
  return useContext(CalculationContext);
}

export { CalculationContextProvider, useCalculation };
