import React from 'react';

import {NavLink} from 'react-router-dom';
import  avatar from '../assets/images/avatar2.jpeg'
import {AiFillInstagram,AiFillTwitterCircle,AiFillYoutube} from 'react-icons/ai'


const Navbar = () => {

    return ( 
        <div className="Navbar">
            
            <nav className="nav">
               <div className="profile">
                  <img src={avatar} alt=""/>
               </div>
                 <ul className="nav-items">
                     <li className="nav-item">
                        <NavLink to="/" exact activeClassName="active"> 
                           Home
                        </NavLink>
                     </li>
                     <li className="nav-item">
                        <NavLink to="/about" exact > 
                            About Us
                        </NavLink>
                     </li>
                     <li className="nav-item">
                        <NavLink to="/x" exact > 
                           Restaurants
                        </NavLink>
                     </li>
                     <li className="nav-item">
                        <NavLink to="/suggestion" exact > 
                            Suggestion
                        </NavLink>
                     </li>
                     <li className="nav-item">
                        <NavLink to="/contact" exact > 
                           Contact Us
                        </NavLink>
                     </li>
                 </ul>

               <div className="icons">
                  <a className="icon-holder" target="_blank" href="https://www.linkedin.com/in/can-okan-ta%C5%9Fk%C4%B1ran-a9519017b/"  without rel="noreferrer">
                        <AiFillInstagram  className="icon lik" />
                  </a>
                  <a className="icon-holder" target="_blank" href="https://www.linkedin.com/in/can-okan-ta%C5%9Fk%C4%B1ran-a9519017b/"  without rel="noreferrer">
                        <AiFillTwitterCircle  className="icon lik" />
                  </a>
                  <a className="icon-holder" target="_blank" href="https://www.linkedin.com/in/can-okan-ta%C5%9Fk%C4%B1ran-a9519017b/"  without rel="noreferrer">
                        <AiFillYoutube  className="icon lik" />
                  </a>
               </div>                   

               <footer className="footer">
                  <p>@2021 Ekin Göcekli</p>
               </footer>
            </nav>
            
        </div>
     );
}
 
export default Navbar;