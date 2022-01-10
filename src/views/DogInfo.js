import React from 'react';
import { useEffect, useState } from 'react';
import { deleteDog, getDogById } from '../services/dogData';
import DogDetail from '../components/DogDetail';
import Header from '../components/Header';
import { Link, useHistory } from 'react-router-dom';

export default function DogInfo(props) {
  const id = props.match.params.id;
  const [loading, setLoading] = useState(true);
  const [dog, setDog] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDogById(id);
      setDog(data);
      setLoading(false);
    };
    fetchData();
  }, [id]);

  async function handleDelete(e) {
    try {
      e.preventDefault();
      await deleteDog(id);
      history.push('/');
    } catch {
      alert('oops! something went wrong. please try again');
    }
  }

  if (loading) return <h1>Loading...</h1>;

  return (
    <>
      <Header />
      <DogDetail {...dog} />
      <Link to={`/dogs/:id/edit`}>
        <button>edit</button>
      </Link>
      <button onClick={handleDelete}>delete</button>
    </>
  );
}
