import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
    
    const deleteContactHandler = (id) => {
        props.getContactId(id);
    };

    const contacts = [{
        id: "1",
        "name": "Dipesh",
        "email": "cs@gmail.com"
    }]

    const renderContactList = contacts.map((contact) => {
        return(
           <ContactCard contact={contact} clickHandler={deleteContactHandler} key={contact.id}/>
        );
    });
    return (
        <div className="main">
            <h2>
                Contact List
                <button className="ui button blue right">Add Contact</button>
            </h2>
            <div className="ui celled list">{renderContactList}</div>
        </div>
    );
}

export default ContactList;