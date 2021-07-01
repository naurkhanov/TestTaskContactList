import React from 'react';
import {
  ButtonAdd,
  MainPageWrap,
  SearchAndAddWrap,
  SearchInput,
} from './styled';
import Contacts from './Contacts';
import { Link, Route, Switch } from 'react-router-dom';
import IndividualContactInfo from './IndividualContactInfo';
import AddContact from './AddContact';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/ducks/application';

function MainPage() {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.application.filter);

  const handleChangeFilter = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <MainPageWrap>
      <SearchAndAddWrap>
        <SearchInput
          type="text"
          placeholder="Поиск"
          value={filter}
          onChange={handleChangeFilter}
        />
        <Link to={'/main/addContact'}>
          <ButtonAdd>Добавить контакт</ButtonAdd>
        </Link>
      </SearchAndAddWrap>
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
