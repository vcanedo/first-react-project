const Form = () => {

  const loginUser = (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    console.log(`${name} is logged in`);
  }


  return (
    <div>
      <form onSubmit={loginUser}>
        <input type="text" placeholder="input your name"/>
        <input type="submit" value="Login"/>
      </form>
    </div>
  );

}

export default Form
