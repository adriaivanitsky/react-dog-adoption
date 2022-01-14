import React from 'react';
import './form.css';

export default function Form({
  name,
  age,
  bio,
  image,
  breed,
  setName,
  setAge,
  setBio,
  setImage,
  setBreed,
  save,
  success,
}) {
  return (
    <form>
      <p>{success}</p>
      <label>
        name
        <input
          type="text"
          placeholder="name here"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
      </label>
      <label>
        age
        <input
          type="number"
          placeholder="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        ></input>
      </label>
      <label>
        bio
        <input
          type="text"
          placeholder="bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        ></input>
      </label>
      <label>
        image<input type="text" value={image} onChange={(e) => setImage(e.target.value)}></input>
      </label>
      <label>
        breed
        <input
          type="text"
          placeholder="breed"
          value={breed}
          onChange={(e) => setBreed(e.target.value)}
        ></input>
      </label>
      <button onClick={save}>save</button>
    </form>
  );
}
