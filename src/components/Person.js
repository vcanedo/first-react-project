const Person = ({ img, name, age, profession }) => {
  return (
    <div>
      <img src={img} alt={name} width="250px" />
      <h2>{name}</h2>
      <p>{age}</p>
      <p>{profession}</p>
    </div>
  );
}

export default Person;
