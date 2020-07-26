import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  width: 100%;
  overflow: scroll hidden;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Item = styled.li`
  padding: 0 8px;
`;


