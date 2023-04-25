import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 0px 22px 0px 18px;
  width: 288px;
  height: 86px;

  > span {
    font-size: 20px;
    line-height: 140%;
    color: ${({ theme }) => theme.colors.texrDark};
    width: 100%;
    height: 1.75rem;

    text-align: right;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: block;
  }

  > div {
    margin-top: 0.5rem;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 36px;
    line-height: 140%;
    color: ${({ theme }) => theme.colors.textWhite};
  }
`;
