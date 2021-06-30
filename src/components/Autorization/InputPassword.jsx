import React from 'react';
import { InputWrap } from './styled';

function InputPassword() {
  return (
    <InputWrap>
      <input type="text" placeholder="Введите пароль" />
    </InputWrap>
  );
}

export default InputPassword;
