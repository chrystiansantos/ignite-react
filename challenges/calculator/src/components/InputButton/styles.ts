import styled, { css } from 'styled-components';
import theme from '../../styles/theme';
import { IInputButtonTypes } from '../../types/InputButtonTypes.interface';

const styleButton = {
  darkPurple: {
    color: theme.colors.textPurple,
    bg: theme.colors.bgButtonDark,
  },
  darkWhite: {
    color: theme.colors.textWhite,
    bg: theme.colors.bgButtonDark,
  },
  darkPurpleWhite: {
    color: theme.colors.textWhite,
    bg: theme.colors.bgButtonPurple,
  },
  lightPurpleWhite: {
    color: theme.colors.textWhite,
    bg: theme.colors.bgButtonLight,
  },
};

export const Container = styled.button<IInputButtonTypes>`
  border: none;

  width: 64px;
  height: 64px;
  border-radius: 50%;
  box-shadow: 0px 11px 7px rgba(0, 0, 0, 0.01), 0px 7px 7px rgba(0, 0, 0, 0.04),
    0px 4px 6px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.26),
    0px 0px 2px rgba(0, 0, 0, 0.29), inset 0px 2px 3px rgba(255, 255, 255, 0.06);

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 24px;
  line-height: 28px;

  letter-spacing: -0.02em;

  color: ${({ typeButton }) => styleButton[typeButton].color};
  background: ${({ typeButton }) => styleButton[typeButton].bg};
`;
