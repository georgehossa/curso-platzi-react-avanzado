import styled from 'styled-components';

export const Anchor = styled.a`
  display: flex;
  flex-flow: column;
  width: 75px;
  text-align: center;
  text-decoration: none;
`;

export const Image = styled.img`
  width: 75px;
  height: 75px;
  border: 1px solid #ddd;
  border-radius: 50%;
  box-shadow: 0 10px 14px rgba(0,0,0,0.2);
  overflow: hidden;
  object-fit: cover;
`;