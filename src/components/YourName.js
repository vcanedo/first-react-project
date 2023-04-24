const YourName = ({ setName }) => {

  return (
    <div>
      <p>Input your name:</p>
      <input type="text" placeholder="What's your name?" onChange={(e) => setName(e.target.value)}/>
    </div>
  )
}

export default YourName;
