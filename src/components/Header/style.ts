import styled from 'styled-components'
import { textStyle } from '../../styles/textStyle'

export const HeaderContainer = styled.header`
  padding: 3.2rem 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    a,
    button {
      padding: 8px;
      border: 0;
      border-radius: 8px;

      display: flex;
      align-items: center;
      justify-content: center;
    }

    button {
      gap: 0.4rem;
      color: ${({ theme }) => theme['purple-dark']};
      background-color: ${({ theme }) => theme['purple-light']};
      cursor: pointer;
    }

    a {
      color: ${({ theme }) => theme['yellow-dark']};
      background-color: ${({ theme }) => theme['yellow-light']};
      position: relative;
    }
  }
`

export const CountShop = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 2rem;
  height: 2rem;
  border-radius: 50%;

  background-color: ${({ theme }) => theme['yellow-dark']};
  color: ${({ theme }) => theme.white};

  position: absolute;
  top: -8px;
  right: -8px;

  ${textStyle.fonts.textXS}
  letter-spacing: -0.72px;
`
