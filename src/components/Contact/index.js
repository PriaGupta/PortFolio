import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  max-width: 600px;
  margin: 50px auto;
  padding: 40px;
  background-color: ${({ theme }) => theme.card};
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.primary};
  border-radius: 5px;
  font-size: 16px;
  outline: none;

  &:focus {
    border-color: ${({ theme }) => theme.text_secondary};
  }
`;

const TextArea = styled.textarea`
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.primary};
  border-radius: 5px;
  font-size: 16px;
  outline: none;
  resize: none;

  &:focus {
    border-color: ${({ theme }) => theme.text_secondary};
  }
`;

const SubmitButton = styled.button`
  padding: 12px;
  background-color: ${({ theme }) => theme.primary};
  color: white;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.text_secondary};
  }
`;

const StatusMessage = styled.p`
  margin-top: 20px;
  font-size: 16px;
  color: ${({ status }) => (status === 'success' ? 'green' : 'red')};
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '2fce8f99-d219-42f1-b14e-74ac3a07e8cd', // Replace with your Web3Forms access key
          ...formData,
        }),
      });

      const result = await response.json();
    //   console.log(result); 

      if (result.success) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
    //   console.error('Error:', error); 
      setStatus('error');
    }

    setFormData({ name: '', email: '', message: '' }); // Reset form after submission
  };

  return (
    <FormContainer>
      <Title>Contact</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
        />
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
        />
        <TextArea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          placeholder="Your Message"
          required
        />
        <SubmitButton type="submit">Send Message</SubmitButton>
      </Form>
      {status && (
        <StatusMessage status={status}>
          {status === 'success'
            ? 'Your message has been sent successfully!'
            : 'Failed to send the message. Please try again later.'}
        </StatusMessage>
      )}
    </FormContainer>
  );
};

export default Contact;
