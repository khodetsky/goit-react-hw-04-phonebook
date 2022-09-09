import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import styled from 'styled-components';

import { GlobalStyle } from './GlobalStyles';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

// Styles for App

const PageHeader = styled.h1`
margin: 20px 0 20px 75px`;

const ContactsHeader = styled.h2`
margin: 20px 0 20px 90px`;


export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  const [firstRender, setFirstRender] = useState(true)

  useEffect(() => {
    if (window.localStorage.getItem('contacts')) {
       setContacts(JSON.parse(window.localStorage.getItem('contacts')))
    }
  }, [])

  useEffect(() => {
    if (firstRender) {
      return;
    }
    window.localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts, firstRender])

  const addContact = (values, { resetForm }) => {
    if (contacts.find(contact => contact.name === values.name)) {
      alert(`${values.name} is already in contacts`)
    } else if (values.number === "" && values.name === "") {
      alert(`Enter name and number`)
    } else if (values.name === "") {
      alert(`Сontact must contain a name`)
    } else if (values.number === "") {
      alert(`Сontact must contain a number`)
    } else {
      setFirstRender(false)
      setContacts([...contacts, { id: nanoid(), ...values }])
      resetForm();
    }
  };

  const filterContactByName = (e) => {
    setFilter(e.target.value.toLowerCase())
  };

  const filteredContacts = () => {
      const result = contacts.filter((contact) => {
      const nameToLower = contact.name.toLowerCase();
      return nameToLower.includes(filter)
      })
      return result;
  }

  const deleteContact = (contactId) => {
    setFirstRender(false)
    setContacts(prevState => (prevState.filter(contact => contact.id !== contactId)
    ))
  }

    return (
      <>
        <PageHeader>Phonebook</PageHeader>
        <ContactForm onAddContact={addContact} />
        <ContactsHeader>Your contacts</ContactsHeader>
        <Filter onFilterContact={filterContactByName}/>
        <ContactList contacts={filteredContacts()} onDeleteContact={deleteContact} />

      <GlobalStyle/>
    </>
  );
};
