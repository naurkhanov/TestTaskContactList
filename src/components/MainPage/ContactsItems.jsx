import React from 'react';
import {
  ContactsList,
  FirstName,
  IconsWrap,
  LastName,
  PhoneNumber,
} from './styled';
import { NavLink } from 'react-router-dom';

function ContactsItems({ contacts }) {
  return (
    <ContactsList>
      <FirstName>{contacts?.firstName}</FirstName>
      <LastName>{contacts?.lastName}</LastName>
      <PhoneNumber>{contacts?.phoneNumber}</PhoneNumber>
      <IconsWrap>
        <NavLink to={`main/${contacts?.id}`}>
          <span className="material-icons" style={{ color: 'white' }}>
            settings
          </span>
        </NavLink>
        <span className="material-icons">favorite_border</span>
      </IconsWrap>
    </ContactsList>
  );
}

export default ContactsItems;
