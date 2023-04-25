/* eslint-disable no-param-reassign */
export const formattedData = (dataCalc: string[]) => {
  const { newArray } = dataCalc.reduce(
    (acc, current, index) => {
      if (['–', '+', '×', '÷'].includes(current)) {
        if (acc.concatNumber === '') {
          return {
            ...acc,
            concatNumber: '-',
          };
        }
        return {
          newArray: [...acc.newArray, acc.concatNumber, current],
          concatNumber: '',
        };
      }

      if (index + 1 === dataCalc.length) {
        return {
          newArray: [...acc.newArray, `${acc.concatNumber}${current}`],
          concatNumber: '',
        };
      }

      return {
        ...acc,
        concatNumber: `${acc.concatNumber}${current}`,
      };
    },
    {
      newArray: [] as string[],
      concatNumber: '',
    },
  );

  return newArray;
};

export const calculation = (calcFormatted: string[]): string => {
  const existePorcetagem = calcFormatted.findIndex(el => el.includes('%'));
  if (existePorcetagem !== -1) {
    const percent =
      parseFloat(calcFormatted[existePorcetagem].split('%')[0]) / 100;
    const calcPercent = Number(calcFormatted[existePorcetagem - 2]) * percent;
    calcFormatted[existePorcetagem] = String(calcPercent);
    if (calcFormatted.findIndex(el => el.includes('%')))
      calculation(calcFormatted);
  }

  const existeDivisao = calcFormatted.findIndex(el => el === '÷');
  if (existeDivisao !== -1) {
    const calcResult =
      Number(calcFormatted[existeDivisao - 1]) /
      Number(calcFormatted[existeDivisao + 1]);
    calcFormatted[existeDivisao - 1] = String(calcResult);
    calcFormatted.splice(existeDivisao, 2);
    if (calcFormatted.findIndex(el => el === '÷')) calculation(calcFormatted);
  }

  const existeMultiplicacao = calcFormatted.findIndex(el => el === '×');
  if (existeMultiplicacao !== -1) {
    const calcResult =
      Number(calcFormatted[existeMultiplicacao - 1]) *
      Number(calcFormatted[existeMultiplicacao + 1]);
    calcFormatted[existeMultiplicacao - 1] = String(calcResult);
    calcFormatted.splice(existeMultiplicacao, 2);
    if (calcFormatted.findIndex(el => el === '×')) calculation(calcFormatted);
  }

  const existeSoma = calcFormatted.findIndex(el => el === '+');
  if (existeSoma !== -1) {
    const calcResult =
      Number(calcFormatted[existeSoma - 1]) +
      Number(calcFormatted[existeSoma + 1]);
    calcFormatted[existeSoma - 1] = String(calcResult);
    calcFormatted.splice(existeSoma, 2);
  }

  const existeSubtracao = calcFormatted.findIndex(el => el === '–');

  if (existeSubtracao !== -1) {
    const calcResult =
      Number(calcFormatted[existeSubtracao - 1]) -
      Number(calcFormatted[existeSubtracao + 1]);
    calcFormatted[existeSubtracao - 1] = String(calcResult);
    calcFormatted.splice(existeSubtracao, 2);
  }
  if (calcFormatted.length > 1) {
    return calculation(calcFormatted);
  }

  return calcFormatted[0];
};
