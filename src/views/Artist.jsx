/*!

=========================================================
* BLK Design System PRO React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-pro-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  FormGroup,
  Input,
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem
} from "reactstrap";

import { FaExternalLinkAlt, FaTwitter, FaInstagram, FaFacebook, FaApple, FaSpotify, FaAmazon, FaSoundcloud, FaGooglePlay, FaYoutube, FaCompass, FaGlobe } from 'react-icons/fa'

// core components
import ScrollNavbar from "components/Navbars/ScrollNavbar.jsx";
import Footer from "components/Footers/Footer.jsx";
import MetaHelmet from "components/MetaHelmet/MetaHelmet.jsx"
import RevibeAPI from "api/revibe"
import history from "helpers/history";
import Icon from "components/Icons/icons";

const revibe = new RevibeAPI()


class Artist extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoaded: false,
      artist: null
    }
  }
  
  async componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.wrapper.scrollTop = 0;
    document.body.classList.add("artist-page");

    var res = await revibe.getRelinkArtist(this.props.match.params.id)

    if (res.status === 200) {
      this.setState({
        isLoaded: true,
        artist: res.data
      })
    } else
      history.push({ pathname: "/" + res.data.status_code, state: res.data })
  }

  componentWillUnmount() {
    document.body.classList.remove("artist-page");
  }

  processSocial(socialObj) {
    switch(socialObj.social_media) {
      case "twitter":
        return { icon: <FaTwitter fontSize="24px" />, link: socialObj.handle }
      case "instagram":
        return { icon: <FaInstagram fontSize="24px" />, link: socialObj.handle }
      case "facebook":
        return { icon: <FaFacebook fontSize="24px" />, link: socialObj.handle }
      case "apple_music":
        return { icon: <FaApple fontSize="24px" />, link: socialObj.handle }
      case "spotify":
        return { icon: <FaSpotify fontSize="24px" />, link: socialObj.handle }
      case "amazon_music":
        return { icon: <FaAmazon fontSize="24px" />, link: socialObj.handle }
      case "soundcloud":
        return { icon: <FaSoundcloud fontSize="24px" />, link: socialObj.handle }
      case "google_play_music":
        return { icon: <FaGooglePlay fontSize="24px" />, link: socialObj.handle }
      case "youtube":
        return { icon: <FaYoutube fontSize="24px" />, link: socialObj.handle }
      case "tidal":
        return { icon: <Icon icon="tidal" width="24px" height="24px" color="#7248BD" />, link: socialObj.handle }
      case "cashapp":
        return { icon: <Icon icon="cashapp" width="24px" height="24px" color="#7248BD" />, link: socialObj.handle }
      case "venmo":
        return { icon: <Icon icon="venmo" width="24px" height="24px" color="#7248BD" />, link: socialObj.handle }
      default:
        return { icon: <p style={{ textSize: "24px" }} className="text-primary" >{socialObj.social_media}</p>, link: socialObj.handle }
    }
  }

  render() {
    const { isLoaded, artist } = this.state
    const isMobile = window.innerWidth < 576
    var socials = [], colSize

    if(artist){
      console.log(artist)
      var sortedSocials = artist.social_media.sort((a, b) => a.order - b.order)

      sortedSocials.forEach(elem => socials.push(this.processSocial(elem)))
      //console.log(socials)

      var columnizedSocials = []
      const linksPerCol = 3
      colSize = 12/linksPerCol

      for(let i = 0; i < socials.length; i++) {
        let rowIndex = Math.floor(i/linksPerCol)
        let colIndex = (i % linksPerCol)

        console.log({ rowIndex, colIndex })

        if(colIndex == 0) columnizedSocials[rowIndex] = []
        
        columnizedSocials[rowIndex][colIndex] = socials[i]
      }

      //console.log(columnizedSocials)
    }

    return (
    <> 
      <MetaHelmet 
        title={artist ? artist.name : "Artist Page"}
        url={window.location}
        image={artist && artist.images.length > 0 ? (artist.images[2] ? artist.images[2].url : artist.images[0].url) : null}
      />
      {/*<ScrollNavbar />*/}
      <div className="wrapper" ref="wrapper">
        {isLoaded ?
          <>
            <div className={`section ${!isMobile ? "pt-md" : "pt-sm pb-2"}`}>
              <Container>
                <Row className="d-flex justify-content-center">
                  <Col md="4" sm="auto" className="d-flex justify-content-center" style={isMobile ? { height: "120px" } : null}>
                    {artist.images.length > 0 ? <img
                      src={artist.images[1] ? artist.images[1].url : artist.images[0].url}
                      style={isMobile ? { width: "35%", height: "auto" } : { width: "65%", height: "auto" } }
                      className="img rounded mt-auto mb-auto d-block"
                    /> : null}
                  </Col>
                  <Col md="4" className="d-flex justify-content-center">
                    <div className="mt-auto mb-auto text-center">
                      <h1 className="title text-white mb-2 mt-0" style={isMobile ? { fontSize: "3.5rem", fontFamily: "FuturaHeavy" } : { fontSize: "4.25rem", fontFamily: "FuturaHeavy" }}>{artist.name}</h1>
                      {artist.location ? <h4 className="text-purple">{artist.location}</h4> : null}
                      <h6 className="description">{artist.bio}</h6>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
            <div className="social-line social-line-big-icons mb-md pt-1 pb-0">
              <Container>
                {columnizedSocials.map((row, i) => (
                  <Row className={`d-flex justify-content-center ${i != 0 && !isMobile ? "mt-2" : ""}`}>
                    {row.map((col, i) => (
                    <Col md={colSize} className={`${isMobile ? "border-right-0 mb-3" : "border-right-0"}`}>
                      <Button
                        className="btn-simple btn-icon btn-footer"
                        color="primary"
                        href={col.link}
                        target="_blank"
                      >
                        {col.icon}
                      </Button>
                    </Col>
                    ))}
                  </Row>
                ))}
              </Container>
            </div>
          </>
          :
          <>
            <h1>Loading...</h1>
          </>
        }
        {/*<Footer />*/}
      </div>
    </>
    )
  }
}

export default Artist