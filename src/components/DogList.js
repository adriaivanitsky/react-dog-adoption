import { Link } from 'react-router-dom';
import './doglist.css';

export default function DogList({ dogs }) {
  return (
    <>
      <h1>dogs</h1>
      <div>
        {dogs.map((dog) => (
          <Link key={dog.id} to={`./dogs/${dog.id}`}>
            {dog.name}
          </Link>
        ))}
      </div>
    </>
  );
}
