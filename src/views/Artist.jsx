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
import Footer from "components/Footers/ArtistFooter.jsx";
import TipJarModal from "components/Modals/TipJar.js";
import MetaHelmet from "components/MetaHelmet/MetaHelmet.jsx"
import RevibeAPI from "api/revibe"
import history from "helpers/history";
import Icon from "components/Icons/icons";
import ReactGA from 'react-ga'

const revibe = new RevibeAPI()


class Artist extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoaded: false,
      artist: null,
      showTipJar: false,
      displayTipJarModal: false,
      venmoHandle: "",
      cashAppHandle: ""
    }
  }

  async componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.wrapper.scrollTop = 0;
    document.body.classList.add("artist-page");

    var res = await revibe.getRelinkArtist(this.props.match.params.id)
    if (res.status === 200) {
      var artist = res.data
      if(artist.social_media.filter(x => x.social_media === "venmo").length > 0 ) {
        this.setState({showTipJar: true, venmoHandle: artist.social_media.filter(x => x.social_media === "venmo")[0].handle})
      }
      if(artist.social_media.filter(x => x.social_media === "cashapp").length > 0) {
        this.setState({showTipJar: true, cashAppHandle: artist.social_media.filter(x => x.social_media === "cashapp")[0].handle})
      }
      this.setState({
        isLoaded: true,
        artist: artist
      })
    } else
      history.push({ pathname: "/" + res.data.status_code, state: res.data })
  }

  componentWillUnmount() {
    document.body.classList.remove("artist-page");
  }

  analyticsClick = (e, obj, link) => {
    e.preventDefault()
    const hostname = window && window.location && window.location.hostname;

    if(hostname === "revibe.tech") {
      ReactGA.event({
        category: 'Relink',
        action: obj.artist,
        label: obj.socialId
      })
    }

    var win = window.open(link, "_blank")
    win.focus()
  }

  processSocial(socialObj) {
    switch(socialObj.social_media) {
      case "twitter":
        return { icon: <FaTwitter fontSize="24px" />, link: socialObj.handle, socialId: socialObj.id }
      case "instagram":
        return { icon: <FaInstagram fontSize="24px" />, link: socialObj.handle, socialId: socialObj.id }
      case "facebook":
        return { icon: <FaFacebook fontSize="24px" />, link: socialObj.handle, socialId: socialObj.id }
      case "applemusic": case "apple_music":
        return { icon: <FaApple fontSize="24px" />, link: socialObj.handle, socialId: socialObj.id }
      case "spotify":
        return { icon: <FaSpotify fontSize="24px" />, link: socialObj.handle, socialId: socialObj.id }
      case "amazonmusic": case "amazon_music":
        return { icon: <FaAmazon fontSize="24px" />, link: socialObj.handle, socialId: socialObj.id }
      case "soundcloud":
        return { icon: <FaSoundcloud fontSize="24px" />, link: socialObj.handle, socialId: socialObj.id }
      case "googleplaymusic": case "google_play_music":
        return { icon: <FaGooglePlay fontSize="24px" />, link: socialObj.handle, socialId: socialObj.id }
      case "youtube":
        return { icon: <FaYoutube fontSize="24px" />, link: socialObj.handle, socialId: socialObj.id }
      case "tidal":
        return { icon: <Icon icon="tidal" width="24px" height="24px" color="#7248BD" />, link: socialObj.handle, socialId: socialObj.id }
      case "cashapp":
        return { icon: <Icon icon="cashapp" width="24px" height="24px" color="#7248BD" />, link: socialObj.handle, socialId: socialObj.id }
      case "venmo":
        return { icon: <Icon icon="venmo" width="24px" height="24px" color="#7248BD" />, link: socialObj.handle, socialId: socialObj.id }
      default:
        return { icon: <p style={{ textSize: "24px" }} className="text-primary" >{socialObj.social_media}</p>, link: socialObj.handle, socialId: socialObj.id }
    }
  }

  render() {
    const { isLoaded, artist } = this.state
    const isMobile = window.innerWidth < 576
    var socials = [], colSize

    if(artist){
      var sortedSocials = artist.social_media.filter(x => x.social_media !== "venmo" && x.social_media !== "cashapp").sort((a,b) => (a.order > b.order) ? 1 : ((b.order > a.order) ? -1 : 0))

      sortedSocials.forEach(elem => socials.push(this.processSocial(elem)))

      var columnizedSocials = []
      const linksPerCol = 3
      colSize = 12/linksPerCol

      for(let i = 0; i < socials.length; i++) {
        let rowIndex = Math.floor(i/linksPerCol)
        let colIndex = (i % linksPerCol)

        if(colIndex == 0) columnizedSocials[rowIndex] = []

        columnizedSocials[rowIndex][colIndex] = socials[i]
      }

    }

    return (
    <>
      <MetaHelmet
        title={artist ? artist.name : "Artist Page"}
        url={window.location}
        image={artist && artist.images.length > 0 ? (artist.images[2] ? artist.images[2].url : artist.images[0].url) : null}
      />
      {/*<ScrollNavbar />*/}
      <div className="wrapper d-flex" style={{ flexDirection: "column" }} ref="wrapper">
        {isLoaded ?
          <>
            <div className={`section ${!isMobile ? "pt-md" : "pt-sm pb-2"}`} style={{ flex: "1 0 auto" }}>
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
                      <h1 className={`title text-white mb-2 ${isMobile ? "mt-3" : ""}`} style={isMobile ? { fontSize: "3.5rem", fontFamily: "FuturaHeavy" } : { fontSize: "4.25rem", fontFamily: "FuturaHeavy" }}>{artist.name}</h1>
                      {artist.location ? <h4 className="text-purple">{artist.location}</h4> : null}
                      <h6 className="description">{artist.bio}</h6>
                    </div>
                  </Col>

                  {this.state.showTipJar ?
                    <Col md="4" className="d-flex justify-content-center">
                    <div className="mt-auto mb-auto text-center">
                      <button style={{alignSelf: "flex-end",alignItems: "center",justifyContent: "center",flexDirection: "column",backgroundColor: "transparent", borderWidth: 0}} onClick={() => this.setState({displayTipJarModal: true})}>
                        <img src={require("assets/img/tip_jar.png")} style={isMobile ? { width: "20%", height: "auto", margin: "10%" } : { width: "25%", height: "auto" } } />
                      </button>
                    </div>
                    </Col>

                  :
                    null
                  }
                </Row>
              </Container>
            </div>
            <div className="social-line social-line-big-icons mb-md pt-1 pb-0" style={{ flex: "1 0 auto" }}>
              <Container>
                {columnizedSocials.map((row, i) => (
                  <Row className={`d-flex justify-content-center ${i != 0 && !isMobile ? "mt-2" : ""}`}>
                    {row.map((col, i) => (
                    <Col md={colSize} className={`${isMobile ? "border-right-0 mb-3" : "border-right-0"}`}>
                      <Button
                        className="btn-simple btn-icon btn-footer"
                        color="primary"
                        onClick={e => this.analyticsClick(e, { artist: artist.name, socialId: `${col.socialId}` }, col.link)}
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
        <Footer style={{ flex: "none" }} />
      </div>
      <TipJarModal
        isVisible={this.state.displayTipJarModal}
        onClose={() => this.setState({displayTipJarModal: false})}
        artist={this.state.artist}
        venmoHandle={this.state.venmoHandle}
        cashAppHandle={this.state.cashAppHandle}
      />
    </>
    )
  }
}

export default Artist
