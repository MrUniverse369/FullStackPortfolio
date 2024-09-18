import './Project.css'
function Project(props){return(
    <>
 <div className='ProjectsHolder'>
    <h2>Projects</h2>
    <div className='Project'>
<div className='projectImg'><img src='./src/Azure.png'></img></div>
<div><h5>Azure Horizon Inn </h5>
  <p className=''>Azure Horizon is a fullstack React website for a hotel, featuring RESTful APIs and CRUD applications. The site allows users to create accounts, book and plan holidays, and manage events—all through a single-page React application. This was a solo project in which I personally implemented HTML, CSS (using Flexbox and Grid), JavaScript, Express.js REST APIs, and PostgreSQL to deliver a user-friendly, responsive, and visually appealing web experience</p>
     <a className='btn'>Live Demo</a>
     <a className='btn'>GitHub</a>
</div>
</div>
</div>
    </>
)}

export default Project