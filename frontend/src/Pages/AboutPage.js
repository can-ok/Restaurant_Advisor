import React from "react";
import {FaPen,FaBinoculars} from 'react-icons/fa';

const About = () => {
  return (
    <div className="about">
      <div className="main-article">
        <div className="header">Who we are?</div>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            quis neque tristique, aliquet metus at, rutrum mauris. Nam eget sem in
            risus sodales aliquam. Pellentesque habitant morbi tristique senectus et
            netus et malesuada fames ac turpis egestas. Vivamus et viverra velit, id
            sollicitudin nulla. Sed justo turpis, bibendum mollis scelerisque in,
            suscipit a leo. Nunc mattis id turpis non vestibulum. Nam condimentum
            convallis ullamcorper. 
            Mauris porta aliquet lacus, nec luctus risus
            imperdiet sed. Ut mi justo, bibendum eget ligula in, auctor interdum
            felis. Aliquam dapibus, augue eget blandit volutpat, ante est pulvinar
            tellus, elementum ultricies diam nibh ac odio. Duis ac ipsum cursus
            </p>
      </div>

    <div className="side-content">
        <div className="row">
        
            <div className="column-vision">
                <h3>Our Mission <FaPen/></h3>
            Mauris porta aliquet lacus, nec luctus risus
            imperdiet sed. Ut mi justo, bibendum eget ligula in, auctor interdum
            felis. Aliquam dapibus, augue eget blandit volutpat, ante est pulvinar
            </div>
            <div className="column-mision">
                <h3>Our Vision <FaBinoculars/></h3>
                Mauris porta aliquet lacus, nec luctus risus
                imperdiet sed. Ut mi justo, bibendum eget ligula in, auctor interdum
                felis. Aliquam dapibus, augue eget blandit volutpat, ante est pulvinar
            </div>

        </div>
    </div>

    </div>
  );
};

export default About;
