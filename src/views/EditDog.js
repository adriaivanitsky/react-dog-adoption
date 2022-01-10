import React from 'react';
import Header from '../components/Header';
import Form from '../components/Form';
import { useState, useEffect } from 'react';
import { getDogById } from '../services/dogData';
import { updateDog } from '../services/dogData';

export default function EditDog(props) {
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [bio, setBio] = useState('');
  const [image, setImage] = useState('');
  const [breed, setBreed] = useState('');
  const [success, setSuccess] = useState('');
  const id = props.match.params.id;
  //useEffect for preloading dogdata so the form can already be filled out
  //almost identical to admin as far as save function but inside of save function call updateDog
  //instead of createDog().

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDogById(id);
      setName(data.name);
      setAge(data.age);
      setBio(data.bio);
      setImage(data.image);
      setBreed(data.breed);
      setLoading(false);
    };
    fetchData();
  }, [id]);

  const save = async (e) => {
    try {
      e.preventDefault();
      await updateDog({ id, name, age, bio, image, breed });
      setSuccess('dog successfully updated');
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
          success,
          save,
        }}
      />
    </>
  );
}
