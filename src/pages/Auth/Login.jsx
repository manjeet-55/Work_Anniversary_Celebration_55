import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import supabase from "../../utils/SupabaseClient";
import { AuthStyles } from "./Auth.styles";
export const Login = () => {
  const { mainContainerStyles, formStyles, inputStyles, buttonStyles } =
    AuthStyles;
  let navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });

      if (error) throw error;
      console.log(data);
      sessionStorage.setItem("token", JSON.stringify(data));
      navigate("/");

      //   alert('Check your email for verification link')
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div style={mainContainerStyles}>
      <form onSubmit={handleSubmit} style={formStyles}>
        <input
          placeholder='Email'
          name='email'
          value={formData.email}
          onChange={handleChange}
          style={inputStyles}
        />

        <input
          placeholder='Password'
          name='password'
          type='password'
          value={formData.password}
          onChange={handleChange}
          style={inputStyles}
        />

        <button type='submit' style={buttonStyles}>
          Submit
        </button>
        <p style={{ color: "#333" }}>
          Don't have an account?{" "}
          <Link
            to='/signup'
            style={{ color: "#007bff", textDecoration: "none" }}
          >
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};
