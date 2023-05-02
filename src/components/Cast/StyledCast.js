import styled from 'styled-components';

export const Styled = {
  Wrapper: styled.div`
    margin-top: 30px;
    padding-right: 80px;
    padding-left: 80px;
    padding-bottom: 40px;
  `,
  CastHeader: styled.h3`
    font-size: 25px;
    font-weight: 500;
    text-align: center;
  `,
  CastList: styled.ul`
    margin-top: 30px;
    display: flex;
    align-items: center;
    gap: 40px;
    flex-wrap: wrap;
  `,
  CastItem: styled.li`
    width: calc((100% - 4 * 40px) / 5);
    height: 400px;
    word-wrap: break-word;
  `,
  CastInfo: styled.div`
    margin-top: 20px;
    max-width: 220px;
  `,
  CastName: styled.div`
    margin-bottom: 10px;
  `,
  NoCastText: styled.p`
    margin: 30px auto 0 auto;
    text-align: center;
    padding: 20px;
    background-color: #f8f8f8;
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    max-width: 500px;
  `,
};
