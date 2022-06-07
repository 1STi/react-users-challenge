import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  flex-direction: column;
  display: flex;
  align-items: center;
  padding-top: 10px;
  justify-content: center;
`;
export const Input = styled.input`
  font-size: 16px;
  padding: 15px;
  text-align: left;
  margin: 10px;
  width: 90%;
  border: none;
  background-color: #d7dbdd;
  border-radius: 8px;
  margin: 50px;
`;

export const InputSelectName = styled.select`
  width: 70%;
  display: flex;
  justify-content: start;
  border-radius: 8px;
  height: 50px;
  padding: 50px;
  font-size: 10px;
  border: none;
`;

export const Row = styled.div`
  display: flex;
  width: 100%;
`;

export const Column = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  color: white;
  border: 0.2rem solid white;
  width: 100%;
`;

export const Space = styled.div`
  display: flex;
  width: 60%;
  justify-content: flex-start;
`;

export const Checkbox = styled.input`
  background-color: #000;
  width: 100%;
  display: none;
`;
export const Toogle = styled.div`
  position: absolute;
  width: 75px;
  display: inline-block;
  top: 8px;
`;

export const Switch = styled.span`
  display: flex;
  width: 24px;
  margin: 5px;
  background: #000;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 40px;
  border: 0 solid #bbb;
  border-radius: 20px;
  transition: all 0.3s ease-in 0s;
`;

export const Button = styled.button`
  margin: 40px;
  width: 15%;
  height: 45px;
  padding: 10px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  color: #fff;
  background-color: #1e90ff;
  transition: opacity 0.3s;

  @media (max-width: 1024px) {
    width: 40%;
  }
`;

export const Direction = styled.div`
  display: flex;
  width: 100%;
`;
