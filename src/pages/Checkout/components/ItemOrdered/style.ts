import styled from 'styled-components'

export const ItemOrderedContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2.4rem;
`

export const Item = styled.div`
  padding: 8px;
  display: flex;
  justify-content: space-between;
`

export const Description = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  img {
    height: 64px;
  }
`

export const Separator = styled.div`
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme['base-button']};
`

export const Operations = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 8px;
`

export const ButtonRemove = styled.button`
  background-color: ${({ theme }) => theme['base-button']};
  padding: 0 8px;
  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  transition: all 0.3s;
  svg {
    color: ${({ theme }) => theme.purple};
  }

  &:hover {
    background-color: ${({ theme }) => theme['base-hover']};
    svg {
      color: ${({ theme }) => theme['purple-dark']};
    }
  }
`

export const Price = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Information = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  &:last-child {
    text-align: end;
  }
`

export const ButtonConfirm = styled.button`
  background-color: ${({ theme }) => theme.yellow};
  padding: 12px 8px;
  border-radius: 6px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: background-color 0.3s;
  &:hover {
    background-color: ${({ theme }) => theme['yellow-dark']};
  }
`
