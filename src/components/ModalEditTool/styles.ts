import styled from 'styled-components';
import { Form as Unform } from '@unform/web';

export const Form = styled(Unform)`
  padding: 20px 20px;
  display: flex;
  flex-direction: column;

  h1 {
    font-weight: 600;
    font-size: 32px;
    line-height: 22px;
    margin-bottom: 30px;
  }
  label {
    padding: 12px 4px 8px;
  }

  button {
    margin-top: 32px;
    align-self: flex-end;
  }

  button {
    font-weight: 600;
    border-radius: 8px;
    border: 0;
    background: #12db89;
    color: #fff;

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
      background: #10b26c;
      border-radius: 0 8px 8px 0;
      margin: 0 auto;
    }
  }

  button:hover {
    opacity: 0.8;
  }
`;
