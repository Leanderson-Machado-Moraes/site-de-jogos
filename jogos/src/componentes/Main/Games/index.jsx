import "./style.css/"
import darksouls from "../../../assets/dark-souls.png"
import re from "../../../assets/resident-evil.webp"
import gow from "../../../assets/god-of-war.webp"
function Games(){
    return(
        <section> 
        <div>
            <h2>Meus jogos</h2>
            <p>Meus jogos favoritos</p>
            <ul className="games-list">
                <li>
                    <a 
                    target="_blank"
                    href="https://www.twitch.tv/directory/game/Dark%20Souls">
                        <img src={darksouls} alt="Imagem do jogo Dark Souls"/>
                    </a>
                </li>

                <li>
                    <a 
                    target="_blank"
                    href="https://www.twitch.tv/directory/game/Resident%20Evil">
                        <img src={re} alt="Imagem do jogo Resident Evil"/>
                    </a>
                </li>

                <li>
                    <a 
                    target="_blank"
                    href="https://www.twitch.tv/directory/game/God%20of%20War">
                        <img src={gow} alt="Imagem do jogo God of War"/>
                    </a>
                </li>

            </ul>
        </div>
    </section>
    )
}
export default Games