const Person = ({ props }) => {
  return (
    <div>
      <img src={props.img} alt={props.name} width="250px" />
      <h2>{props.name}</h2>
      <p>{props.age}</p>
      <p>{props.profession}</p>
    </div>
  );
}

export default Person;
