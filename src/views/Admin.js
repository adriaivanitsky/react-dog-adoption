import React from 'react';
import Header from '../components/Header';
import Form from '../components/Form';
import { useState } from 'react';
import { createDog } from '../services/dogData';

export default function Admin() {
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [bio, setBio] = useState('');
  const [image, setImage] = useState('');
  const [breed, setBreed] = useState('');
  const [success, setSuccess] = useState('');

  const save = async (e) => {
    try {
      e.preventDefault();
      await createDog({ name, age, bio, image, breed });
      setSuccess('dog successfully added');
    } catch {
      setSuccess('sorry! something went wrong. please try again');
    }
  };

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
