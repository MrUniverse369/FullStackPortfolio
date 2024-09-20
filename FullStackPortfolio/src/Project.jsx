import './Project.css'
function Project(props){return(

 <div className='ProjectsContainer' id='projects'>
 <h2>Projects</h2>
 <div className='ProjectItemOne'>
 <img  className='projectImg' src='/images/Xylo.png'></img>
<div><h5>Xylo, website.</h5>
  <p>Xylo is a fullstack  website for a Fintech, featuring RESTful APIs and crud operations. The site allows users to  create accounts, shop for payment hardware and software, and request customer service/sales team support via form submission. This was a solo project in which I personally implemented EJS, CSS (using Flexbox and Grid), JavaScript,Node.js Express.js REST APIs, and SQL managed through postgresql to deliver a user-friendly, responsive, and visually appealing web experience</p>
     <a  href='https://xylo.ltd/' target="_blank"  className='btn'>Live Demo</a>
     <a  href='https://github.com/MrUniverse369/Xylo' target="_blank" className='btn'>GitHub</a>
</div>

</div>
 <div className='ProjectItemTwo'>
<img className='projectImg' src='/images/Set8JamsWeb.png'></img>
<div><h5>Set8Jams, website.</h5>
  <p>Set8 Jams is the website for my indie game studio. Developed using React, the site is  a single-page React application that provides users with detailed insights into the games I'm working on, their current status, and access to where they play them.
</p>
     <a href='https://set8jams.com/' target="_blank" className='btn' >Live Demo</a>
     <a href='https://github.com/MrUniverse369/Set8JamsReactWeb' target="_blank" className='btn'>GitHub</a>
</div>
 </div>
 <div className='ProjectItemThree'>
<img className='projectImg' src='/images/HNLSandFour.png'></img>
<div><h5>Harvey's Nine Lives, Game.</h5>
  <p>Harveys nine lives is a 2d platform where you step into the paws of a feline archaeologist navigating treacherous tombs whilst doing your best to avoid any traps to get to the hidden treasures these temples hold. I developed the game using C#, Unity and Aseprite.
</p>
 <a href='https://thamgamedevs.itch.io/haveys-nine-lives' target="_blank" className='btn' >Live Demo</a>
     <a href='https://github.com/MrUniverse369/AnalogueWay' target="_blank" className='btn'>GitHub</a>
</div>
 </div>

 <div className='ProjectItemFour'>
<img className='projectImg' src='/images/GTCCover.png'></img>
<div><h5>Galactic crusade, Game.</h5>
  <p>Galactic Crusade is a top down shoot 'em up where you are the pilot of a spaceship that must protect earth from a space colonization by shooting down all the enemies before they comprise the planet's shields. I created this game from scratch using C# Unity OOP principles and Aseprite</p>
  <a href='https://thamgamedevs.itch.io/galactic-crusade' target="_blank" className='btn' >Live Demo</a>
     <a href='https://github.com/MrUniverse369/GalacticCrusade' target="_blank" className='btn'>GitHub</a>
</div>
 </div>

 <div className='ProjectItemFive'>
<img className='projectImg' src='/images/BattleShip.png'></img>
<div><h5>BatttleShip, C++ Console application.</h5>
  <p className=''>A digital recreation of the board game battleship using c++ and the STL Library</p>
  <a href='https://github.com/MrUniverse369/BattleShip' target="_blank" className='btn'>GitHub</a>
</div>
 </div>
 <div className='ProjectItemSix'>
<img className='projectImg' src='/images/SnakesAndLadders.png'></img>
<div><h5>Snakes and Ladders, C++ Console application.</h5>
  <p className=''>A digital recreation of the board game Snake using c++ and the STL Library</p>
  <a href='https://github.com/MrUniverse369/SnakesandLadders' target="_blank" className='btn' >GitHub</a>
</div>
 </div>
</div>

)}

export default Project