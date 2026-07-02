import { useState } from "react";
import "../styles/general-info.css";

function PersonalInfo() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    location: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  return (
    <section>
      <label htmlFor="firstName">First Name:</label>
      <input
        name="firstName"
        id="firstName"
        type="text"
        minLength={3}
        required
        value={formData.firstName}
        onChange={handleChange}
      />
      <label htmlFor="lastName">Last Name:</label>
      <input
        name="lastName"
        id="lastName"
        type="text"
        minLength={3}
        required
        value={formData.lastName}
        onChange={handleChange}
      />
      <label htmlFor="email">Email address:</label>
      <input
        name="email"
        id="email"
        type="email"
        placeholder="abc@example.com"
        required
        value={formData.email}
        onChange={handleChange}
      />
      <label htmlFor="phoneNumber">Phone number:</label>
      <input
        name="phoneNumber"
        id="phoneNumber"
        type="tel"
        value={formData.phoneNumber}
        onChange={handleChange}
      />
      <label htmlFor="location">Location:</label>
      <input
        name="location"
        id="location"
        type="text"
        placeholder="eg. Tokyo, Japan"
        pattern="[A-Za-z\s.-]+,\s*[A-Za-z\s.-]+"
        value={formData.location}
        onChange={handleChange}
      />
    </section>
  );
}

export default PersonalInfo;