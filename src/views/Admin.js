import React from 'react';
import Header from '../components/Header';
import Form from '../components/Form';
import { useState } from 'react';

export default function Admin() {
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [bio, setBio] = useState('');
  const [image, setImage] = useState('');
  const [breed, setBreed] = useState('');
  const [success, setSuccess] = useState('');

  function save(e) {
    e.preventDefault();
    setSuccess('dog successfully added');
  }

  return (
    <>
      <Header />
      <Form
        {...{
          loading,
          setLoading,
          name,
          setName,
          age,
          setAge,
          bio,
          setBio,
          image,
          setImage,
          breed,
          setBreed,
          save,
          success,
        }}
      />
    </>
  );
}
