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

function AuthorizationMain() {
  return (
    <AutorizationWrap>
      <MainBlock>
        <TitleWrap>
          <h1>Sign In</h1>
        </TitleWrap>
        <InputLogin />
        <InputPassword />
        {/*<TextError>Данные введены не верно</TextError>*/}
        <SendButton />
        <DemoData>Данные для демо-входа: admin:12345</DemoData>
      </MainBlock>
    </AutorizationWrap>
  );
}

export default AuthorizationMain;
