import React from 'react';
import './form.css';

export default function Form() {
  return (
    <form>
      <label>
        name<input type="text" placeholder="name here"></input>
      </label>
      <label>
        age<input type="number" placeholder="age"></input>
      </label>
      <label>
        bio<input type="text" placeholder="bio"></input>
      </label>
      <label>
        image<input type="text"></input>
      </label>
      <label>
        breed<input type="text" placeholder="breed"></input>
      </label>
      <button>save</button>
    </form>
  );
}
