import styled from 'styled-components';

export const Container = styled.section`
  margin: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 900px;
  background-color: aqua;

  .search {
    padding: 10px;
    font-size: 20px;
    align-items: center;
    justify-content: center;
    margin-left: 80vh;
    margin-top: 20px;
  }

  .list {
    padding: 0;
    list-style: none;
    text-align: center;
  }

  .listUsers {
    margin-bottom: 20px;
    font-size: 25px;
    color: #444;
    font-weight: 300;
  }

  table {
    width: 100%;
    margin: 50px 0px;
    border-spacing: 15px;
    color: #444;
  }

  tr {
    margin-bottom: 20px;
  }

  th {
    width: 250px;
    text-align: left;
    font-size: 20px;
  }

  td {
    width: 250px;
    font-size: 20px;
  }
`;
