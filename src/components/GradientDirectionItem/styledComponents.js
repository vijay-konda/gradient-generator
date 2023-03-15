// Style your elements here
import styled from 'styled-components/macro'

export const ListItem = styled.li`
  list-style-type: none;
  width: 58px;

  @media screen and (min-width: 768px) {
    width: 34px;
  }
`

export const DirectionButton = styled.button`
  text-align: center;
  color: ${props => (props.isActive ? '#334155' : '#1e293b')};
  background-color: #ffffff;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 600;
  width: 100%;
  border-radius: 6px;
  border: none;
  padding-left: 59px;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-right: 58px;
  margin-right: 14px;
  margin-left: 14px;
  margin-bottom: 10px;
  outline: none;
  opacity: ${props => (props.isActive ? 1 : 0.5)};
  cursor: pointer;
`
