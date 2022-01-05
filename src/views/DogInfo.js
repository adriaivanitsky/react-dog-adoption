import React from 'react';
import { useEffect, useState } from 'react';
import { getDogById } from '../services/dogData';
import DogDetail from '../components/DogDetail';

export default function DogInfo(props) {
  const id = props.match.params.id;
  const [loading, setLoading] = useState(true);
  const [dog, setDog] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getDogById(id);
      setDog(data);
      setLoading(false);
    };
    fetchData();
  }, [id]);
  if (loading) return <h1>Loading...</h1>;

  return <DogDetail {...dog} />;
}
