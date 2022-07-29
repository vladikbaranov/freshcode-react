import React, { Component } from 'react'; 
import './ContactItem.css'; 
 
export class ContactItem extends Component { 
 
  onDeleteContact = (e) => { 
    e.stopPropagation(); 
    this.props.onDeleteContact(this.props.contact.id) 
  } 
 
  onEditContact = (e) =>{ 
    e.stopPropagation(); 
    this.props.onEditContact(this.props.contact) 
  } 
 
 
  render() { 
    return ( 
      <div className="contact-item" onDoubleClick={this.onEditContact}> 
        <p className="contact-name"> 
          {this.props.contact.firstName} {this.props.contact.lastName} 
        </p> 
        <span 
          className="btn-delete" 
          onClick={this.onDeleteContact}> 
          X 
        </span> 
      </div> 
    ); 
  } 
} 
 
export default ContactItem;