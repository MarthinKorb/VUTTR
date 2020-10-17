import styled from 'styled-components';

export const Container = styled.div`
  background: #f0f0f5;
  padding: 1px;
  color: #000;
  display: flex;
  button {
    font-weight: 600;
    border-radius: 8px;
    border: 0;
    background: #12db89;
    color: #fff;

    display: flex;
    flex-direction: row;
    align-items: center;

    .text {
      padding: 16px 24px;
    }
    .icon {
      display: flex;
      padding: 16px 16px;
      background: #10b26c;
      border-radius: 0 8px 8px 0;
      margin: 0 auto;
    }
  }
`;
