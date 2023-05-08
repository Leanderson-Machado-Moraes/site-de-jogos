import "./style.css/"
import profile from "../../assets/ulbra-csl.jpeg"

function Header(){
   return( <header>
    <div>
        <img 
        src={profile}
        alt="Foto de perfil" />
    </div>
    </header>
   )
}
export default Header