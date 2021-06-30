import styled, { css } from 'styled-components';

export const MainPageWrap = styled.div`
  width: 890px;
  height: 500px;
  background-color: rgba(256, 256, 256, 0.9);
  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  padding: 25px 25px;
`;

export const SearchAndAddWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SearchInput = styled.input`
  width: 70%;
  height: 40px;
  border-radius: 10px;
  text-align: center;
  outline: none;
  padding: 10px 10px;
  font-weight: 300;
  font-size: 16px;
  border: 1px solid purple;
`;

export const ButtonAdd = styled.button`
  width: 200px;
  height: 40px;
  border-radius: 5px;
  outline: none;
  background-color: #fff;
  border: 1px solid purple;
  cursor: pointer;
  font-weight: 300;
  transition: 500ms;
  &:hover {
    background-color: purple;
    color: white;
    border: none;
  }
`;

export const ContactsMain = styled.div`
  width: 100%;
  height: 400px;
  background-color: rgba(196, 196, 196, 0.5);
  margin-top: 10px;
  border-radius: 10px;
`;
export const ContactsScroll = styled.div`
  width: 100%;
  height: 400px;
  overflow: auto;
  padding: 20px 20px;

  ::-webkit-scrollbar {
    width: 0;
  }
`;

export const ContactsWrap = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: normal;
`;

export const ContactsList = styled.div`
  width: 170px;
  height: 150px;
  border-radius: 10px;
  background-color: #2d3436;
  background-image: linear-gradient(315deg, #2d3436 0%, #000000 74%);
  padding: 10px 10px;
  margin-top: 20px;
`;

export const FirstName = styled.div`
  width: 100%;
  height: 20px;
  text-align: center;
  border-radius: 10px;
  color: #fff;
  font-weight: 300;
  margin-bottom: 10px;

  ${(props) =>
    props.individ &&
    css`
      color: black;
      background-color: #fff;
    `}
`;

export const LastName = styled.div`
  width: 100%;
  height: 20px;
  text-align: center;
  border-radius: 10px;
  color: #fff;
  font-weight: 300;
  margin-bottom: 10px;

  ${(props) =>
    props.individ &&
    css`
      background-color: #fff;
      color: black;
    `}
`;

export const PhoneNumber = styled.div`
  width: 100%;
  height: 20px;
  text-align: center;
  border-radius: 10px;
  color: #fff;
  font-weight: 300;

  ${(props) =>
    props.individ &&
    css`
      color: black;
      background-color: #fff;
    `}
`;

export const IconsWrap = styled.div`
  display: flex;
  width: 100%;
  margin-top: 10px;
  justify-content: center;
  & > span {
    color: #fff;
    padding: 0 5px 0 5px;
    cursor: pointer;
  }
`;

export const IndividualClientWrap = styled.div`
  width: 300px;
  height: 320px;
  background-color: #000000;
  background-image: linear-gradient(147deg, #000000 0%, #2c3e50 74%);
  margin: 50px auto;
  border-radius: 10px;
  padding: 20px 20px;
  color: white;
`;

export const IndividualTitle = styled.div`
  text-align: center;
  font-weight: 300;
  margin-bottom: 10px;
`;

export const InputFirstName = styled.input`
  width: 100%;
  height: 40px;
  margin-bottom: 10px;
  outline: none;
  border: none;
  background-color: #fff;
  border-radius: 10px;
  font-size: 16px;
  padding: 10px 10px;
  box-sizing: border-box;
  font-weight: 300;
  &:focus {
    border: 2px solid purple;
  }
`;

export const InputLastName = styled.input`
  width: 100%;
  height: 40px;
  margin-bottom: 10px;
  outline: none;
  border: none;
  background-color: #fff;
  border-radius: 10px;
  font-size: 16px;
  padding: 10px 10px;
  box-sizing: border-box;

  font-weight: 300;
  &:focus {
    border: 2px solid purple;
  }
`;

export const InputPhoneNumber = styled.input`
  width: 100%;
  height: 40px;
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
`;

export const ButtonChange = styled.button`
  display: flex;
  margin: 0 auto;
  width: 120px;
  height: 30px;
  border-radius: 5px;
  outline: none;
  background-color: #fff;
  border: none;
  cursor: pointer;
  font-weight: 300;
  transition: 500ms;
  padding: 5px 0 5px 20px;
  &:hover {
    background-color: purple;
    color: white;
  }
`;

export const ToTheMain = styled.div`
  font-weight: 300;
  font-size: 12px;
  text-align: center;
  margin-right: 8px;
  margin-top: 10px;
  cursor: pointer;
  transition: 500ms;

  &:hover {
    text-decoration: underline;
  }
`;

export const AddContactWrap = styled.div`
  width: 300px;
  height: 300px;
  background-color: #000000;
  background-image: linear-gradient(147deg, #000000 0%, #2c3e50 74%);
  margin: 50px auto;
  border-radius: 10px;
  padding: 20px 20px;
  color: white;
  font-weight: 300;
`;

export const AddContactTitle = styled.div`
  text-align: center;
  margin-bottom: 10px;
`;

export const ButtonAddContact = styled.button`
  display: flex;
  margin: 0 auto;
  width: 120px;
  height: 30px;
  border-radius: 5px;
  outline: none;
  background-color: #fff;
  border: none;
  cursor: pointer;
  font-weight: 300;
  transition: 500ms;
  padding: 5px 0 5px 20px;
  &:hover {
    background-color: purple;
    color: white;
  }
`;

export const ButtonDelete = styled.button`
  display: flex;
  margin: 0 auto;
  width: 120px;
  height: 30px;
  border-radius: 5px;
  outline: none;
  background-color: #fff;
  border: none;
  cursor: pointer;
  font-weight: 300;
  transition: 500ms;
  align-items: center;
  padding: 0 5px 0 28px;
  margin-top: 10px;
  &:hover {
    background-color: purple;
    color: white;
  }
`;
