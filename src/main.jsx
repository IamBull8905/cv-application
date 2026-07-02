import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import PersonalInfo from './components/general-info'
import EducationExperience from './components/education-exp'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PersonalInfo></PersonalInfo>
    <EducationExperience></EducationExperience>
  </StrictMode>,
)
