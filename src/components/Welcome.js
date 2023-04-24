const Welcome = ({ name }) => {
  const generateWelcome = (name) => {
    return `Hello ${name}, how are you?`
  }
  return (
    <>
      <p>{generateWelcome(name)}</p>
    </>
  )
}
export default Welcome;
