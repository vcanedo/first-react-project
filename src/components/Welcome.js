const Welcome = ({ name }) => {
  const generateWelcome = (name) => {
    return `Hello ${name}, how are you?`
  }
  return (
    <>
      {name && <p>{generateWelcome(name)}</p>}
    </>
  )
}
export default Welcome;
