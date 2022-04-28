import styled from 'styled-components';

export default styled.section`
  background-color: #d7e6d7;
  width: 100vw;
  .main {
    .bg_1 {
      margin-top: 8.5vh;
      width: 100%;
      height: 100%;
    }
    .title {
      position: relative;
      bottom: 12em;
      left: 0.6em;
      width: 54vw;
      height: 25vh;
      color: white;
      font-size: 2.2rem;
    }
    .main_category {
      background-color: #ffffff;
      display: flex;
      flex-direction: column;
      align-items: center;
      .div_button {
        font-size: 0.8rem;
        background-color: black;
        margin: 1%;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 75vw;
        height: 5vh;
        text-transform: uppercase;
        color: #d7e6d7;
      }
    }
  }
`;
