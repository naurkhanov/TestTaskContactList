import React from 'react';
import SearchAndButton from './SearchAndButton';
import { MainPageWrap } from './styled';
import Contacts from './Contacts';
import { Route, Switch } from 'react-router-dom';
import IndividualContactInfo from './IndividualContactInfo';
import AddContact from './AddContact';

function MainPage() {
  return (
    <MainPageWrap>
      <SearchAndButton />
      <Switch>
        <Route exact path="/main" component={Contacts} />
        <Route exact path="/main/addContact" component={AddContact} />
        <Route
          exact
          path="/main/:contactId?"
          component={IndividualContactInfo}
        />
      </Switch>
    </MainPageWrap>
  );
}

export default MainPage;
