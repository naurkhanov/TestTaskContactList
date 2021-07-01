import React, { useEffect, useState } from 'react';
import {
  ButtonChange,
  ButtonDelete,
  IndividualClientWrap,
  IndividualTitle,
  InputFirstName,
  InputLastName,
  InputPhoneNumber,
  ToTheMain,
} from './styled';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteContact,
  loadIndividContact,
  setContact,
} from '../../redux/ducks/application';

function IndividualContactInfo() {
  const history = useHistory();
  const id = useParams().contactId;
  const dispatch = useDispatch();
  const individContact = useSelector(
    (state) => state.application.individContact,
  );
  const handleGoToMain = () => {
    history.push('/main');
  };
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSetContact = () => {
    setFirstName('');
    setLastName('');
    setPhoneNumber('');
    dispatch(setContact(id, firstName, lastName, phoneNumber));

    setTimeout(() => {
      history.push('/main');
    }, 100);
  };

  const handleDelete = () => {
    dispatch(deleteContact(id));
    setTimeout(() => {
      history.push('/main');
    }, 100);
  };

  useEffect(() => {
    dispatch(loadIndividContact(id));
  }, [dispatch, id]);
  return (
    <IndividualClientWrap>
      <IndividualTitle>Изменение контакта</IndividualTitle>
      <InputFirstName
        type="text"
        placeholder={individContact?.firstName}
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <InputLastName
        type="text"
        placeholder={individContact?.lastName}
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <InputPhoneNumber
        type="number"
        placeholder={individContact?.phoneNumber}
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <ButtonChange onClick={handleSetContact}>Изменить</ButtonChange>
      <ButtonDelete onClick={handleDelete}>Удалить</ButtonDelete>
      <ToTheMain onClick={handleGoToMain}>На главную</ToTheMain>
    </IndividualClientWrap>
  );
}

export default IndividualContactInfo;
