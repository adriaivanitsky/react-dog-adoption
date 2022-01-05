import React from 'react';
import { useEffect, useState } from 'react';
import { getDogs } from '../services/dogData';
import { DogList } from '../components/DogList';

export default function Dogs() {
  const [loading, setLoading] = useState(true);
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDogs();
      setDogs(data);
      setLoading(false);
    };
    fetchData();
  }, []);
  if (loading) return <h1>Loading...</h1>;
  return <div>this page should show a list of dogs</div>;
}
