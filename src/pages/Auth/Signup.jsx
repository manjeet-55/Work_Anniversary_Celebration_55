import { useState } from "react";
import { Link } from "react-router-dom";
import supabase from "../../utils/SupabaseClient";
import { AuthStyles } from "./Auth.styles";

export const SignUp = () => {
  const { mainContainerStyles, formStyles, inputStyles, buttonStyles } =
    AuthStyles;
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  console.log(formData);

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
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            full_name: formData.fullName,
          },
        },
      });
      if (error) throw error;
      alert("Check your email for verification link");
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div style={mainContainerStyles}>
      <form onSubmit={handleSubmit} style={formStyles}>
        <input
          placeholder='Fullname'
          name='fullName'
          onChange={handleChange}
          style={inputStyles}
        />

        <input
          placeholder='Email'
          name='email'
          onChange={handleChange}
          style={inputStyles}
        />

        <input
          placeholder='Password'
          name='password'
          type='password'
          onChange={handleChange}
          style={inputStyles}
        />

        <button type='submit' style={buttonStyles}>
          Submit
        </button>

        <p style={{ color: "#333" }}>
          Already have an account?
          <Link
            to='/login'
            style={{ color: "#007bff", textDecoration: "none" }}
          >
            LogIn
          </Link>
        </p>
      </form>
    </div>
  );
};
