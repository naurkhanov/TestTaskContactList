import styled from 'styled-components';

export const AutorizationWrap = styled.div`
  width: 400px;
  height: 300px;
  background-color: rgba(256, 256, 256, 0.8);
  margin: 0 auto 0 0;
  border-radius: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px 20px;
`;

export const InputWrap = styled.div`
  & > input {
    width: 100%;
    height: 50px;
    outline: none;
    border: none;
    background-color: #fff;
    border-radius: 10px;
    font-size: 16px;
    padding: 10px 10px;
    box-sizing: border-box;
    margin-bottom: 20px;
    font-weight: 300;
    &:focus {
      border: 2px solid purple;
    }
  }
`;

export const MainBlock = styled.div``;
export const TitleWrap = styled.div`
  text-align: center;

  & > h1 {
    font-size: 20px;
  }
`;

export const TextError = styled.div`
  text-align: center;
  margin-bottom: 5px;
  font-weight: 300;
  color: red;
`;

export const DemoData = styled.div`
  text-align: center;
  font-weight: 300;
  margin-top: 10px;
  color: rgba(104, 104, 104, 0.8);
`;

export const ButtonSendWrap = styled.div`
  display: flex;
  justify-content: center;
  & > button {
    width: 120px;
    height: 30px;
    border-radius: 5px;
    outline: none;
    background-color: #fff;
    border: none;
    cursor: pointer;
    font-weight: 300;
    transition: 500ms;
    &:hover {
      background-color: purple;
      color: white;
    }
  }
`;
