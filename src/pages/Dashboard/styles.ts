import styled from 'styled-components';

export const Container = styled.div``;

export const ToolsContainer = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 0;
  margin-top: 30px;

  display: block;
  color: #3a3a3a;

  .button-add-new {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 0 40px;

    .input-container {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      input {
        height: 56px;
        padding: 0 24px 0 32px;
        /* margin-left: -20px; */
        border: 0;
        border-radius: 8px;
        color: #3a3a3a;
        border: 1px solid #fff;
        border-right: 0;

        &::placeholder {
          color: #a8a8b3;
        }
      }
      svg {
        position: absolute;
        margin-left: 12px;
        color: #a8a8b3;
      }
    }
  }
`;
