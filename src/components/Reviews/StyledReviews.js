import styled from 'styled-components';

export const Styled = {
  Wrapper: styled.div`
    margin-top: 30px;
    padding-right: 40px;
    padding-left: 40px;
    padding-bottom: 40px;
  `,
  Header: styled.h3`
    font-size: 25px;
    font-weight: 500;
    text-align: center;
  `,
  List: styled.ul`
    margin-top: 30px;
    display: flex;
    align-items: center;
    gap: 40px;
    flex-wrap: wrap;
  `,
  ListItem: styled.li`
    padding-bottom: 10px;
    border-bottom: 1px solid #d3d3d3;
  `,
  Author: styled.h4`
    margin-bottom: 10px;
    font-size: 20px;
    font-weight: 500;
  `,
  Review: styled.p`
    line-height: 1.3;
  `,
  NoText: styled.p`
    margin: 30px auto 0 auto;
    text-align: center;
    padding: 20px;
    background-color: #f8f8f8;
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    max-width: 500px;
  `,
};
