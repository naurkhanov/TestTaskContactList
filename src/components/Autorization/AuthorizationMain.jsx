import React from 'react';
import {
  AutorizationWrap,
  DemoData,
  MainBlock,
  TitleWrap,
  TextError,
} from './styled';

import InputPassword from './InputPassword';
import SendButton from './SendButton';
import InputLogin from './InputLogin';
import { useSelector } from 'react-redux';

function AuthorizationMain() {
  const error = useSelector((state) => state.application.error);

  return (
    <AutorizationWrap>
      <MainBlock>
        <TitleWrap>
          <h1>Sign In</h1>
        </TitleWrap>
        <InputLogin />
        <InputPassword />
        {error && <TextError>Данные введены не верно</TextError>}
        <SendButton />
        <DemoData>Данные для демо-входа: admin:12345</DemoData>
      </MainBlock>
    </AutorizationWrap>
  );
}

export default AuthorizationMain;
