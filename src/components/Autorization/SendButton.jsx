import React from 'react';
import { ButtonSendWrap } from './styled';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from '../../redux/ducks/application';

function SendButton() {
  const login = useSelector((state) => state.application.login);
  const password = useSelector((state) => state.application.password);
  const dispatch = useDispatch();

  const handleClickLogin = () => {
    dispatch(logIn(login, password));
  };

  return (
    <ButtonSendWrap>
      <button onClick={handleClickLogin}>SIGN IN</button>
    </ButtonSendWrap>
  );
}

export default SendButton;
