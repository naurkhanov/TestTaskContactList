import React, { useEffect } from 'react';
import { ContactsMain, ContactsScroll, ContactsWrap } from './styled';
import { useDispatch, useSelector } from 'react-redux';
import { loadContacts } from '../../redux/ducks/application';
import ContactsItems from './ContactsItems';

function Contacts() {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.application.items);
  useEffect(() => {
    dispatch(loadContacts());
  }, [dispatch]);
  return (
    <ContactsMain>
      <ContactsScroll>
        <ContactsWrap>
          {contacts.map((contacts) => {
            return <ContactsItems contacts={contacts} key={contacts.id} />;
          })}
        </ContactsWrap>
      </ContactsScroll>
    </ContactsMain>
  );
}

export default Contacts;
