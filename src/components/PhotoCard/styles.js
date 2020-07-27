import styled from 'styled-components';
import { fadeIn } from '../../styles/animation';

export const ImgWrapper = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: 0;
  padding: 56.25% 0 0 0;
  overflow: hidden;
  border-radius: 10px;
`;

export const Img = styled.img`
  ${fadeIn()}
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  box-shadow: 0 10px 14px rgba(0,0,0,.2);
  object-fit: cover;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 8px;
  & svg {
    margin-right: 4px;
  }
`