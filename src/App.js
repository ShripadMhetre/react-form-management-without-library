import './App.css';
import useForm from './Hooks/useForm';

function App() {
  //Final submit function
  const formLogin = () => {
    console.log('Callback function when form is submitted!');
    console.log('Form Values ', values);
  };

  //Custom hook call
  const { handleChange, values, errors, handleSubmit } = useForm(formLogin);

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        <div className="formInput">
          <label>Username</label>
          <input
            type="text"
            minLength="5"
            name="username"
            placeholder="username"
            onChange={handleChange}
            autoComplete="off"
            required
          />
          {errors.username && <span>{errors.username}</span>}
        </div>
        <div className="formInput">
          <label>Email ID</label>
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            onChange={handleChange}
            autoComplete="off"
            required
          />
          {errors.email && <span>{errors.email}</span>}
        </div>
        <div className="formInput">
          <label>Password</label>
          <input
            minLength="8"
            type="password"
            name="password"
            placeholder="password"
            onChange={handleChange}
            required
          />
          {errors.password && <span>{errors.password}</span>}
        </div>
        {/* <input type="submit" value="Submit" className="submit" /> */}
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
