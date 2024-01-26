// import { useState } from 'react';

export default function Contact() {
  // const [nameInput, setName] = useState('');
  // const [emailInput, setEmail] = useState('');
  // const [messageInput, setMessage] = useState('');
  // const [nameError, setNameError] = useState('');
  // const [emailError, setEmailError] = useState('');
  // const [messageError, setMessageError] = useState('');

  // const validateEmail = (email) => {
  //   // Email validation regular expression
  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   return emailRegex.test(email);
  // }

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   // Validate the fields
  //   if (!nameInput) {
  //     setNameError('Name is required');
  //     return;
  //   } else {
  //     setNameError('');
  //   }

  //   if (!emailInput || !validateEmail(emailInput)) {
  //     setEmailError('Valid email is required');
  //     return;
  //   } else {
  //     setEmailError('');
  //   }

  //   if (!messageInput) {
  //     setMessageError('Message is required');
  //     return;
  //   } else {
  //     setMessageError('');
  //   }

  //   // Proceed with form submission
  //   props.onSubmit({
  //     id: Math.random(Math.floor() * 1000),
  //     name: nameInput,
  //     email: emailInput,
  //     message: messageInput
  //   });

  //   console.log(props);

  //   // Clear the form
  //   setName('');
  //   setEmail('');
  //   setMessage('');
  // }

  // const handleChange = (e) => {
  //   const { name, value } = e.target;

  //   // Clear the error message when the user starts typing
  //   if (name === 'name') {
  //     setName(value);
  //     setNameError('');
  //   } else if (name === 'email') {
  //     setEmail(value);
  //     setEmailError('');
  //   } else if (name === 'message') {
  //     setMessage(value);
  //     setMessageError('');
  //   }
  // }

  // const handleBlur = (e) => {
  //   const { name, value } = e.target;

  //   // Validate the fields on blur
  //   if (name === 'name' && !value) {
  //     setNameError('Name is required');
  //   }

  //   if (name === 'email') {
  //     if (!value) {
  //       setEmailError('Email is required');
  //     } else if (!validateEmail(value)) {
  //       setEmailError('Valid email is required');
  //     } else {
  //       setEmailError('');
  //     }
  //   }

  //   if (name === 'message' && !value) {
  //     setMessageError('Message is required');
  //   }
  // }

  return (
    <div>
      <h1>Contact Me</h1>
      <h4>Email: josh.higginson201@gmail.com</h4>
      <h4>Phone: 385-479-5311</h4>
      {/* <form className='contactForm' onSubmit={handleSubmit}>
        <label htmlFor='name'>Name</label>
        <input type="text" id="name" placeholder="your name" name='name' onChange={handleChange} onBlur={handleBlur} value={nameInput}></input>
        {nameError && <div className="error">{nameError}</div>}
        <label htmlFor='email'>Email</label>
        <input type="text" id="email" placeholder="your email" name='email' onChange={handleChange} onBlur={handleBlur} value={emailInput}></input>
        {emailError && <div className="error">{emailError}</div>}
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" placeholder="your message" onChange={handleChange} onBlur={handleBlur} value={messageInput}></textarea>
        {messageError && <div className="error">{messageError}</div>}
        <input type="submit" value="Submit"></input>
      </form> */}
    </div>
  );
}