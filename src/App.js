import React, { Component } from 'react';
import './App.css';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [],
    contactForEdit: this.createEmptyFields(),
  };

  createEmptyFields() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      // id: null,
    };
  }

  componentDidMount(){
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    if (!contacts) {
      this.setState({
        contacts: [],
      }) 
    } else {
      this.setState({
        contacts: [...contacts]
      })
    }
  }

  saveToLocalStorage(contacts) {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }

  deleteContact = (id) => {
    const contacts = [...this.state.contacts.filter((contact) => contact.id !== id)];
    this.setState({
      contacts: contacts,
    });
    this.saveToLocalStorage(contacts);
  };

  saveContact = (contact) => {
    if (!contact.id) {
      this.createNewContact(contact);
    } else {
      this.updateContact(contact);
    }
  };

  addNewContact = () => {
    this.setState({
      contactForEdit: this.createEmptyFields(),
    });
  };

  selectContact = (contact) => {
    this.setState({
      contactForEdit: contact,
    });
  };

  createNewContact(contact) {
    contact.id = Date.now();
    const contacts = [...this.state.contacts, contact];
    this.saveToLocalStorage(contacts);
    this.setState({
      contacts: contacts,
      contactForEdit: this.createEmptyFields(),
    });
  }

  updateContact(contact) {
    const contacts = [
      ...this.state.contacts.map((item) => (item.id === contact.id ? contact : item)),
    ];
    this.setState({
      contacts: contacts,
      contactForEdit: contact,
    });
    this.saveToLocalStorage(contacts);
  }

  render() {
    return (
      <div className="container">
        <h1 className="title">Contact List</h1>
        <div className="wrap">
          <ContactList
            contacts={this.state.contacts}
            onAddNewContact={this.addNewContact}
            onEditContact={this.selectContact}
            onDeleteContact={this.deleteContact}
          />
          <ContactForm
            key={this.state.contactForEdit.id}
            contactForEdit = {this.state.contactForEdit}
            onSubmit={this.saveContact}
            onDelete={this.deleteContact}
          />
        </div>
      </div>
    );
  }
}

export default App;
