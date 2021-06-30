import React, { useState } from 'react';

import {
  AddContactTitle,
  AddContactWrap,
  ButtonAddContact,
  InputFirstName,
  InputLastName,
  InputPhoneNumber,
  ToTheMain,
} from './styled';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/ducks/application';

function AddContact() {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleToTheMain = () => {
    history.push('/main');
  };
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleAddContact = () => {
    setFirstName('');
    setLastName('');
    setPhoneNumber('');
    dispatch(addContact(firstName, lastName, phoneNumber));

    setTimeout(() => {
      history.push('/main');
    }, 100);
  };

  return (
    <AddContactWrap>
      <AddContactTitle>Добавление контакта</AddContactTitle>
      <InputFirstName
        type="text"
        placeholder="Имя"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <InputLastName
        type="text"
        placeholder="Фамилия"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <InputPhoneNumber
        type="number"
        placeholder="Номер телефона"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <ButtonAddContact onClick={handleAddContact}>Добавить</ButtonAddContact>
      <ToTheMain onClick={handleToTheMain}>На главную</ToTheMain>
    </AddContactWrap>
  );
}

export default AddContact;
