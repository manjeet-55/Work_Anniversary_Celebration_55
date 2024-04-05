import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import supabase from "../../utils/SupabaseClient";
import { AuthStyles } from "./Auth.styles";

async function sendInvitation(email) {
  // Check if the email exists in the database
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("email", email);

  if (error) {
    console.error("Error checking email:", error.message);
    return;
  }

  if (data && data.length > 0) {
    const { error: emailError } = await supabase.auth.api.inviteUserByEmail(
      email
    );
    if (emailError) {
      console.error("Error sending invitation email:", emailError.message);
      return;
    }
    console.log(`Invitation link sent to ${email}`);
  } else {
    // Email doesn't exist, handle accordingly (e.g., prompt user to sign up)
    console.log(`Email ${email} not found. Please sign up.`);
  }
}

export const Invite = async () => {
  const { mainContainerStyles, formStyles, inputStyles, buttonStyles } =
    AuthStyles;
  let navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
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
      sendInvitation(formData.email);
      if (error) throw error;
      navigate("/login");
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
        <button type='submit' style={buttonStyles}>
          Send Invitation
        </button>
        {/* <p style={{ color: "#333" }}>
          Don't have an account?{" "}
          <Link
            to='/signup'
            style={{ color: "#007bff", textDecoration: "none" }}
          >
            Sign Up
          </Link>
        </p> */}
      </form>
    </div>
  );
};
