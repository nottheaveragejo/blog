import React, {Component} from "react"
import Img from 'gatsby-image'
import city from "../images/city.jpg"
import "../components/headerImage.css"


class headerImage extends Component {

  constructor(props) {
    super(props);
    this.cityImageHd = null;
  }

  componentDidMount() {
        
    const hdLoaderImg = new Image();

    hdLoaderImg.src = this.props.srcLoaded;

    hdLoaderImg.onload = () => {
      this.cityImageHd.setAttribute(
        'style',
        `background-image: city.jpg`
      );
      this.cityImageHd.classList.add('ciy-image-fade-in');
    }

  };

  render() {
    return (
      <div className="city-image-container">
      
        <div 
          className="city-image-loaded" 
          ref={imageLoadedElem => this.cityImageHd = imageLoadedElem}>
        </div>
        <div 
          className="city-image-preload" 
          style={{ backgroundImage: city.jpg }}>
        </div>
      
      </div>
    )
  }

}

export default headerImage;