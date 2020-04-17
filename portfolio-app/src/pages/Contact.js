import React from 'react';
import Wrapper from '../components/Wrapper';
import contacts from '../contacts.json';

function Contact() {
    return (
    <Wrapper>
        <div className="row">
            {contacts.map((contact, index) => 
            <div className="col-md-6" key={index}>
                <div className="card" style={{width: "100%"}}>
                    <h1>{contact.name}</h1>
                    <div className="img-container">
                        <img alt="beep beep" src={contact.image}
                        className="img-fluid"
                        style={{width: "100%"}}/>
                    </div>
                    <div className="content">
                        <p>
                            {contact.paragraph}
                        </p>
                        <a href={contact.link}>{contact.message}</a>
                    </div>
                </div>
            </div>
            )}
        </div>
    </Wrapper>
    );
};

export default Contact;

