const Nav = () => {

return (
  <>
<div className='header'>
<ul className="noBullets ">
  <a className='logo' href="#home"><li> CHEW</li></a>
  <a href='#map'><li>Find Restaurant Near You 📍</li></a>
  <a href='#restaurant'><li>Restaurant Details 📚</li></a>
  <a href='reservation'><li>Make a Reservation 🎉</li></a>
</ul>

<svg className='close' width="46" height="32" viewBox="0 0 46 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="21" height="5" rx="2" fill="white"/>
  <rect x="24" y="27" width="22" height="5" rx="2" fill="white"/>
  <rect y="14" width="46" height="4" rx="2" fill="white"/>
</svg>
</div>

</>
)

}


export default Nav
