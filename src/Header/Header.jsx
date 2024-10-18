import porfile from "../assets/images/profile.png"
import './Header.css'


const Header = () => {
    return (
        <header>
            <div className="container sec-container">
                <div className="header-wrapper">
                    <div>
                        <h2>Prime Deal Shop</h2>
                    </div>
                    <div>
                        <div className="img-container">
                            <img src={porfile} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;