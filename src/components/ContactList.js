// ContactList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../redux/actions';
import { Link } from 'react-router-dom';
import CreateContact from './CreateContact';
import { useNavigate } from 'react-router-dom';
import './ContactList.css'


const ContactList = () => {
  const contacts = useSelector((state) => state.contacts);
  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <div className="contact-list">
      <h2>Contact List</h2>
      <button onClick={() => navigate('/create')}>Create Contact</button>
      {contacts.length === 0 ? (
        <p className="no-contacts-message">
          No contacts found. Click on "Create Contact" to add a contact.
        </p>
      ) : (
        <ul className="contacts">
          {contacts.map(contact => (
            <li key={contact.id} className="contact-item">
              <div className="contact-info">
                <div className="contact-name">Name: {contact.name}</div>
                <div className="contact-name">Phone: {contact.phone}</div>
              </div>
              <div className="contact-actions">
                <button onClick={() => handleDelete(contact.id)}>Delete</button>
                <Link to={`/edit/${contact.id}`}>Edit</Link>
              </div>
            </li>
          ))}
        </ul>
      )}

    </div>
  );
};

export default ContactList;

