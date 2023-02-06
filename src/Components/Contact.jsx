import React from 'react';

function Contact() {
    return ( 
        <div id='contact'>
            <h1>CONTACT US</h1>
            <from>
                <input type='text' placeholder='Full Name' required/>
                <input type='email' placeholder='Type Your E-Mail' required/>
                <textarea placeholder='Write Here .....' name='message'></textarea>
                <input type='submit' valute='Send'/>
            </from>
        </div>
     );
}

export default Contact;