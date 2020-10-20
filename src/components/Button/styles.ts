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
    background: #e4e4eb;
    color: #3a3a3a;

    display: flex;
    flex-direction: row;
    align-items: center;
    transition: all 0.2s;

    .text {
      padding: 16px 24px;
    }
    .icon {
      display: flex;
      padding: 16px 16px;
      background: #c7c4cd;
      border-radius: 0 8px 8px 0;
      margin: 0 auto;
    }
  }
  button:hover {
    opacity: 0.8;
  }
`;
