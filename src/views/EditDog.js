import React from 'react';
import Header from '../components/Header';
import Form from '../components/Form';
import { useState } from 'react';

export default function EditDog() {
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [bio, setBio] = useState('');
  const [image, setImage] = useState('');
  const [breed, setBreed] = useState('');

  //useEffect for preloading dogdata so the form can already be filled out
  //almost identical to admin as far as save function but inside of save function call updateDog
  //instead of createDog().

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
        }}
      />
    </>
  );
}
