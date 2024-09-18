import { useState } from 'react'
import './App.css'
import Nav from './Nav'
import Project from './Project'
import Skills from './Skills'
import About from './About'

function App() {
  const Projects =[ {id:1,ProjectImg:'./src/Azure.png',ProjectTitle:'Azure Horizon Hotel (FullStack/PernStack)',ProjectDisc:'Azure Horizon is a fullstack React website for a hotel, featuring RESTful APIs and CRUD applications. The site allows users to create accounts, book and plan holidays, and manage events—all through a single-page React application. This was a solo project in which I personally implemented HTML, CSS (using Flexbox and Grid), JavaScript, Express.js REST APIs, and PostgreSQL to deliver a user-friendly, responsive, and visually appealing web experience'},
  {id:2,ProjectImg:'',ProjectTitle:'',ProjectDisc:''},{id:3,ProjectImg:'',ProjectTitle:'',ProjectDisc:''}]

  return (
    <>
 <Nav/>
 <About/>
 <Skills/>
 <Project projectImg= {Projects.ProjectImg} projectTitle = {Projects.ProjectTitle} ProjectDisc ={Projects.ProjectDisc}/>
    </>
  )
}

export default App
