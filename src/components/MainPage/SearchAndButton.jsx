import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonAdd, SearchAndAddWrap, SearchInput } from './styled';

function SearchAndButton() {
  return (
    <div>
      <SearchAndAddWrap>
        <SearchInput type="text" placeholder="Поиск" />
        <Link to={'/main/addContact'}>
          <ButtonAdd>Добавить контакт</ButtonAdd>
        </Link>
      </SearchAndAddWrap>
    </div>
  );
}

export default SearchAndButton;
