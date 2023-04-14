const Form = () => {

  const loginUser = (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    // if name is empty, alert user to input name otherwise it will send the name to the console
    if (name === '') {
      alert('Please input your name');
      return;
    } else {
    console.log(`${name} is logged in`);
  }
  }


  return (
    <div>
      <form onSubmit={loginUser}>
        <div>
          <h1>Login</h1>

          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="input your name"
          />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="input your password"
          />
        </div>

        <div>
          <input type="submit" value="Login"/>
        </div>
      </form>
    </div>
  );

}

export default Form
