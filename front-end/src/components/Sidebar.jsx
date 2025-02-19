import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faGlobe, faPlus } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
    return (
        <div className="sidebar">
            
            <div className="library">
                <div className="library__content">
                    <button className="library__button">
                    <span><FontAwesomeIcon icon={faBook} /></span>
                        <span>Sua biblioteca</span>
                    </button>
                    <span><FontAwesomeIcon icon={faPlus} /></span>
                </div>
                <section className="section-playlist">
                    <div className="section-playlist__content">
                        <span className="text title">Crie sua primeira playlist</span>
                        <span className="text subtitle">É fácil, vamos te ajudar.</span>
                        <button className="section-playlist__button">
                            <span>Criar playlist</span>
                        </button>
                    </div>
                </section>
                <section className="section-playlist">
                    <div className="section-playlist__content">
                        <span className="text title">Que tal seguir um podcast novo?</span>
                        <span className="text subtitle">Avisaremos você sobre novos epsódios.</span>
                        <button className="section-playlist__button">
                            <span>Explore podcasts</span>
                        </button>
                    </div>
                </section>
                <div className="cookies">
                   
                    <a href="/cookies"> Legal </a>
                    <a href="/cookies"> Segurança e centro de Privacidade </a>                   
                    <a href="/cookies"> Política de Privacidade </a>
                    <a href="/cookies"> Cookies </a>
                </div>
                <div className="languages">
                    <button className="languages__button">
                        <span><FontAwesomeIcon icon={faGlobe} /></span>
                        <span>Português do Brasil</span>
                    </button>
                </div>
            </div>
        </div>
    )
};

export default Sidebar;