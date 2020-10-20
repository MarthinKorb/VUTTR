import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;

  .span-text {
    height: 100px;
    margin-top: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
  }

  .buttons-confirmation {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    background: #f0f0f5;
    padding: 1px;
    color: #3a3a3a;
    margin-top: 50px;

    #button-cancel {
      background-color: #12db89;
      margin-right: 0px;
      transition: all 0.2s;
    }
    #button-cancel:hover {
      opacity: 0.8;
    }

    button {
      font-weight: 600;
      border-radius: 8px;
      border: 0;
      background: #f95e5a;
      color: #fff;
      margin: 0 auto;

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
        background: #cc4c4c;
        border-radius: 0 8px 8px 0;
        margin: 0 auto;
      }
    }

    button:hover {
      opacity: 0.8;
    }
  }
`;
