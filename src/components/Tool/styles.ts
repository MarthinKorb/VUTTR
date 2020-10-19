import styled from 'styled-components';

export const Container = styled.div`
  background: #fcfcfd;
  border-radius: 8px;
  max-width: 100%;
  margin-bottom: 2rem;

  section.body {
    padding: 30px;

    div.icon-container {
      display: flex;
      justify-content: flex-end;
      flex-direction: row;

      #icon-delete {
        background-color: #f95e5a;
        transition: all 0.2s;
      }
      #icon-delete:hover {
        background-color: #fcaeac;
      }
      button {
        background: #12db89;
        padding: 10px;
        border-radius: 8px;
        display: flex;
        border: none;
        transition: all 0.2s;

        svg {
          color: #fff;
        }

        & + button {
          margin-left: 6px;
        }
      }
      button:hover {
        background-color: #88edc4;
        svg {
          color: #000;
        }
      }
    }

    div.main-content {
      margin-top: -40px;
      max-width: 85%;

      a {
        color: #353372;
        padding: 12px 0;
        text-decoration: none;
        transition: color 0.2s;
      }

      a:hover {
        color: #b2a9df;
      }
    }

    h2 {
      color: #3d3d4d;
      text-decoration: solid;
      text-decoration-line: underline;
    }

    p {
      color: #3d3d4d;
      margin-top: 16px;
    }

    .tags {
      font-style: normal;
      font-size: 18px;
      line-height: 34px;
      color: #12db89;

      b {
        font-weight: 600;
      }
    }
  }

  section.footer {
    display: flex;
    padding: 30px;
    background: #e4e4eb;
    border-radius: 0px 0px 8px 8px;
  }
`;
