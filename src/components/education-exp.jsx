import { useState } from "react";
import "../styles/education-exp.css";

function EducationExperience() {
  const [formData, setFormData] = useState({
    schoolName: "",
    titleOfStudy: "",
    startDate: "",
    endDate: "",
    currentlyStudying: false,
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  return (
    <section>
      <label htmlFor="schoolName">School Name:</label>
      <input
        name="schoolName"
        id="schoolName"
        type="text"
        maxLength={50}
        required
        value={formData.schoolName}
        onChange={handleChange}
      />
      <label htmlFor="titleOfStudy">Title of study:</label>
      <input
        name="titleOfStudy"
        id="titleOfStudy"
        type="text"
        required
        value={formData.titleOfStudy}
        onChange={handleChange}
      />
      <label htmlFor="startDate">Start date:</label>
      <input
        name="startDate"
        id="startDate"
        type="date"
        required
        value={formData.startDate}
        onChange={handleChange}
      />
      <label htmlFor="endDate">End date:</label>
      <input
        name="endDate"
        id="endDate"
        type="date"
        value={formData.endDate}
        onChange={handleChange}
      />
      <label htmlFor="currentlyStudying">Currently studying:</label>
      <input
        name="currentlyStudying"
        id="currentlyStudying"
        type="checkbox"
        checked={formData.currentlyStudying}
        onChange={(event) => setFormData({...formData, currentlyStudying: event.target.checked})}
      />
    </section>
  );
}

export default EducationExperience;