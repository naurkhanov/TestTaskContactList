import React from 'react';
import { InputWrap } from './styled';
import { useDispatch, useSelector } from 'react-redux';
import { setLogin } from '../../redux/ducks/application';

function InputPassword() {
  const dispatch = useDispatch();
  const login = useSelector((state) => state.application.login);

  const handleChangeLogin = (e) => {
    dispatch(setLogin(e.target.value));
  };

  return (
    <InputWrap>
      <input
        type="text"
        placeholder="Введите логин"
        value={login}
        onChange={handleChangeLogin}
      />
    </InputWrap>
  );
}

export default InputPassword;
