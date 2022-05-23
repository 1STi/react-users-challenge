import styled from 'styled-components';

export const ContainerAvatar = styled.div`
  ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    gap: 1rem;
    flex-wrap: wrap;
    max-width: 60rem;
    margin: 0 auto;
    justify-content: center;
    align-items: center;

    li {
      width: 12.5rem;
      height: 12.5rem;
      text-align: center;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      padding: 1rem 2rem;
      font-size: 1.5rem;
      line-height: 1.2;
    }

    a {
      object-fit: fill;
      img {
        border-radius: 100%;
        margin-bottom: 12px;
      }
    }
  }
`;

export const ContainerTable = styled.div`
  table {
    width: 70vw;
    margin: auto;
    text-align: center;
  }
  thead {
    font-size: 18px;
    padding: 1rem 2rem;
    height: 60px;
  }
  img {
    width: 50px;
    border-radius: 100%;
  }
  .user-notfound {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    margin-left: 20vw;
    margin-top: 15vh;
  }
`;
