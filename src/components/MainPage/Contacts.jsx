import React, { useEffect } from 'react';
import { ContactsMain, ContactsScroll, ContactsWrap } from './styled';
import { useDispatch, useSelector } from 'react-redux';
import { loadContacts } from '../../redux/ducks/application';
import ContactsItems from './ContactsItems';

function Contacts() {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.application.items);
  const filterText = useSelector((state) => state.application.filter);

  const FilteredContacts = contacts?.filter((contact) => {
    const contactInitial =
      contact.firstName + ' ' + contact.lastName + ' ' + contact.number;

    return contactInitial.toUpperCase().indexOf(filterText.toUpperCase()) > -1;
  });

  useEffect(() => {
    dispatch(loadContacts());
  }, [dispatch]);
  return (
    <ContactsMain>
      <ContactsScroll>
        <ContactsWrap>
          {FilteredContacts.map((contacts) => {
            return <ContactsItems contacts={contacts} key={contacts.id} />;
          })}
        </ContactsWrap>
      </ContactsScroll>
    </ContactsMain>
  );
}

export default Contacts;
