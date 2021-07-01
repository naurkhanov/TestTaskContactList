import React from 'react';
import { InputWrap } from './styled';
import { useDispatch, useSelector } from 'react-redux';
import { setPassword } from '../../redux/ducks/application';

function InputPassword() {
  const dispatch = useDispatch();

  const password = useSelector((state) => state.application.password);
  const handleSetPassword = (e) => {
    dispatch(setPassword(e.target.value));
  };
  return (
    <InputWrap>
      <input
        type="text"
        placeholder="Введите пароль"
        value={password}
        onChange={handleSetPassword}
      />
    </InputWrap>
  );
}

export default InputPassword;
