import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    border: 1px solid #1976d2;
    border-radius: 6px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  }
`;

export const Button = styled.button`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  align-items: center;
  letter-spacing: 0.04em;
  background-color: #1976d2;
  color: #ffffff;
  border: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  padding: 4px 8px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  margin-left: 20px;

  &:hover,
  &:focus {
    background-color: #111b87;
  }
`;
