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
      button {
        background: #12db89;
        padding: 10px;
        border-radius: 8px;
        display: flex;
        border: none;
        transition: 0.1s;

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
    justify-content: space-between;
    align-items: center;

    padding: 20px 30px;
    background: #e4e4eb;
    border-radius: 0px 0px 8px 8px;

    div.icon-container {
      display: flex;

      button {
        background: #fff;
        padding: 10px;
        border-radius: 8px;
        display: flex;
        border: none;
        transition: 0.1s;

        svg {
          color: #3d3d4d;
        }

        & + button {
          margin-left: 6px;
        }
      }
    }

    div.availability-container {
      display: flex;
      align-items: center;

      p {
        color: #3d3d4d;
      }

      .switch {
        position: relative;
        display: inline-block;
        width: 48px;
        height: 22px;
        margin-left: 12px;

        & input {
          opacity: 0;
          width: 0;
          height: 0;
        }

        .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #f95e5a;
          -webkit-transition: 0.4s;
          transition: 0.4s;
          border-radius: 16px;

          &:before {
            position: absolute;
            content: '';
            height: 10px;
            width: 20px;
            left: 6px;
            bottom: 6px;
            background-color: white;
            -webkit-transition: 0.4s;
            transition: 0.4s;
            border-radius: 8px;
          }
        }

        input:checked + .slider {
          background-color: #12db89;
        }

        input:focus + .slider {
          box-shadow: 0 0 1px #2196f3;
        }

        input:checked + .slider:before {
          -webkit-transform: translateX(14px);
          -ms-transform: translateX(14px);
          transform: translateX(14px);
        }
      }
    }
  }
`;
