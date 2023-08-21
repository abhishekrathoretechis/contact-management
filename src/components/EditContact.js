
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { editContact } from '../redux/actions';
import { useParams } from 'react-router-dom';
import './EditContact.css'

const EditContact = ({ match }) => {
    const { contactId } = useParams(); 
    
  const contactToEdit = useSelector((state) =>
    state.contacts.find((contact) => contact.id === contactId)
  );

  const dispatch = useDispatch();
  const [name, setName] = useState(contactToEdit.name);
  const [phone, setPhone] = useState(contactToEdit.phone);

  const handleSubmit = (e) => {
    e.preventDefault();
    const editedContact = {
      ...contactToEdit,
      name,
      phone,
    };
    dispatch(editContact(editedContact));
    setName('');
    setPhone('');
  };

  return (
    <div className="create-contact">
    <h2>Edit Contact</h2>
    <form onSubmit={handleSubmit} className="contact-form">
      <div className="form-group">
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Phone:</label>
        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
      </div>
      <button type="submit" className="create-button">Save Changes</button>
    </form>
  </div>
  );
};

export default EditContact;
