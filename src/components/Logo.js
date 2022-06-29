import LogoImg from '../images/freecodecamp-logo.png'
import '../styles/Logo.css'

function Logo() {
  return (
    <div className="freecodecamp-logo-container">
        <img src={LogoImg} className='freecodecamp-logo' alt="freecodecamp-logo" />
    </div>
  )
}

export default Logo