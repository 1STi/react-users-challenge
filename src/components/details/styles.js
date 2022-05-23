import styled from 'styled-components';

export const Container = styled.div`
  button {
    font-size: 1.5rem;
    line-height: 1.2;
  }
  .user-infos {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img {
      padding-top: 10px;
      border-radius: 100%;
    }
    p {
      font-size: 1.5rem;
      line-height: 1.2;
      text-align: center;
    }
  }
`;
