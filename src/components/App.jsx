import { Component } from 'react';
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


export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '45912566' },
      { id: 'id-2', name: 'Hermione Kline', number: '44389125' },
      { id: 'id-3', name: 'Eden Clements', number: '64517793' },
      { id: 'id-4', name: 'Annie Copeland', number: '22791261' },
    ],
    filter: '',
  };

  componentDidMount() {
    if (localStorage.getItem('contacts')) {
      const storageContacts = JSON.parse(localStorage.getItem('contacts'));
    this.setState({contacts: storageContacts})
    }
  }

  componentDidUpdate(_, prevState) {
    if (this.state.contacts.length !== prevState.contacts.length) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
      }
    }

  addContact = (values, { resetForm }) => {
    if (this.state.contacts.find(contact => contact.name === values.name)) {
      alert(`${values.name} is already in contacts`)
    } else if (values.number === "" && values.name === "") {
      alert(`Enter name and number`)
    } else if (values.name === "") {
      alert(`Сontact must contain a name`)
    } else if (values.number === "") {
      alert(`Сontact must contain a number`)
    } else {
      this.setState({
        contacts: [...this.state.contacts, { id: nanoid(), ...values }]
      })
      resetForm();
    }
  };

  filterContactByName = (e) => {
    this.setState({
      filter: e.target.value.toLowerCase(),
    })
  };

  filteredContacts = () => {
    const result = this.state.contacts.filter((contact) => {
      const nameToLower = contact.name.toLowerCase();
      return nameToLower.includes(this.state.filter)
    })
    return result;
  }

  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }))
  }

  render() {
    return (
      <>
        <PageHeader>Phonebook</PageHeader>
        <ContactForm onAddContact={this.addContact} />
        <ContactsHeader>Your contacts</ContactsHeader>
        <Filter onFilterContact={this.filterContactByName}/>
        <ContactList contacts={this.filteredContacts()} onDeleteContact={this.deleteContact} />

      <GlobalStyle/>
    </>
  );
  }
};
