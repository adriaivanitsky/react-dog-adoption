export default function DogDetail({ name, image, breed, bio }) {
  return (
    <>
      <h1>{name}</h1>
      <div>
        <img src={image} />
        <p>{bio}</p>
        <p>{breed}</p>
      </div>
    </>
  );
}
