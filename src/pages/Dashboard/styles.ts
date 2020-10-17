import styled from 'styled-components';

export const Container = styled.div``;

export const ToolsContainer = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 0;
  margin-top: 30px;

  display: block;

  .button-add-new {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 0 40px;

    h2 {
      color: #3d3d4d;
    }
  }

  /* grid-template-columns: repeat(3, 1fr); */
  /* grid-gap: 32px; */
`;
