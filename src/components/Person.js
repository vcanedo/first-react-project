const Person = ({ img, name, age, profession }) => {
  return (
    <div>
      <h1>Testing CSS</h1>
      <img src={img} alt={name} width="250px" />
      <h2>{name}</h2>
      <p>{age}</p>
      <p>{profession}</p>
    </div>
  );
}

export default Person;
