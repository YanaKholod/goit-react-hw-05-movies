import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Styled = {
  Wrapper: styled.div`
    display: flex;
    gap: 40px;
    margin-top: 20px;
  `,
  Img: styled.img`
    height: 600px;
    width: 400px;
  `,
  Info: styled.div`
    padding-top: 20px;
    max-width: 1100px;
  `,
  Name: styled.div`
    margin-bottom: 20px;
  `,
  InfoText: styled.p`
    &:not(:last-child) {
      margin-bottom: 20px;
    }
  `,
  InfoTextBold: styled.span`
    display: block;
    margin-bottom: 20px;
    font-size: 20px;
    font-weight: 500;
  `,
  MoreInfo: styled.div`
    margin-top: 20px;
    padding-top: 20px;
    padding-bottom: 20px;
    border-top: 1px solid #d3d3d3;
    border-bottom: 1px solid #d3d3d3;
  `,
  MoreInfoHeader: styled.h3`
    font-size: 25px;
    font-weight: 500;
  `,
  List: styled.ul`
    margin-top: 20px;
    display: flex;
    gap: 20px;
    font-size: 18px;
  `,
  ListItem: styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  Link: styled(Link)`
    font-size: 16px;
    margin-right: 5px;
    padding: 5px 15px;
    border: 1px solid #0d57aa;
    border-radius: 6px;
    background-color: #b5d1f2;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    color: #0d57aa;
    &:hover,
    &:focus {
      background-color: #0d57aa;
      color: #ffffff;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
    }
  `,
};
