import { Link } from 'react-router-dom';

export default function DogDetail({ name, image, breed, bio }) {
  return (
    <>
      <h1>individual dog</h1>
      <h1>{name}</h1>
      <div>
        <p>
          <img src={image} />
          <p>{bio}</p>
          <p>{breed}</p>
        </p>
      </div>
    </>
  );
}
