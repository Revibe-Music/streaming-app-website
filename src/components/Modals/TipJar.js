import React, {Component} from 'react';
import PropTypes from "prop-types";

// reactstrap components
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  InputGroup,
  Row,
  Col,
} from "reactstrap";
import Select from "react-select";
import { FaTimes } from "react-icons/fa";
import RevibeAPI from "api/revibe"

const styles = {
  donationUnselectedButton: {
    display: "flex",
    borderColor: "#7248BD",
    borderWidth: 3,
    borderRadius: 4,
    width: "20%",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 20,
    textAlign: "center",
    verticalAlign: "middle",
    backgroundColor: "transparent",
    color: "white"
  },
  donationSelectedButton: {
    display: "flex",
    borderColor: "#7248BD",
    borderWidth: 3,
    borderRadius: 4,
    width: "20%",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 20,
    textAlign: "center",
    verticalAlign: "middle",
    backgroundColor: "#7248BD",
    color: "white"
  }

}


class TipJarModal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      displayPaymentMethods: false,
      paymentMethod: null,
      amount: '1',
    }

    this.availablelaymentMethods = ["Venmo", "Cash App"]
    this.revibe = new RevibeAPI()
    this.selectPaymentMethod = this.selectPaymentMethod.bind(this)
    this.selectAmount = this.selectAmount.bind(this)
    this.close = this.close.bind(this)
    this.openVenmo = this.openVenmo.bind(this)
    this.openCashApp = this.openCashApp.bind(this)
  }
  close() {
    this.setState({paymentMethod: null,amount: 1, displayPaymentMethods:false})
    this.props.onClose()
  }

  openVenmo() {
    this.revibe.recordTip(this.props.artist.artist_id, this.state.amount, "venmo")
    var win = window.open(`https://venmo.com/${this.props.venmoHandle}?txn=pay&amount=${this.state.amount}&note=Supporting local artists through Revibe`, '_blank');
    win.focus();
  }

  openCashApp() {
    this.revibe.recordTip(this.props.artist.artist_id, this.state.amount, "cashapp")
    var win = window.open(`https://cash.app/$${this.props.cashAppHandle}/${this.state.amount}`, '_blank');
    win.focus();
  }

  selectPaymentMethod(paymentMethod) {
    this.setState({paymentMethod: paymentMethod})
  }

  selectAmount(amount) {
    this.setState({amount: amount})
  }

  render() {
    var header = this.state.displayPaymentMethods ? "Method" : this.props.artist ? `Tip ${this.props.artist.name}` : "Tip"

    return (
      <Modal
        isOpen={this.props.isVisible}
        onClose={this.close}
        modalClassName="modal-grey"
      >
        <ModalHeader cssModule={{'modal-title': 'w-100 text-center'}}>
        <Row>
          <Col xs="2" md="2">
          <a onClick={this.close}>
            <FaTimes style={{fontSize: "20px", color: "white"}} />
          </a>
          </Col>
          <Col xs="8" md="8">
          <h1 style={{color: "white", textAlign: "center"}}>{header}</h1>
          </Col>
          </Row>
        </ModalHeader>
        <ModalBody cssModule={{'modal-body': 'w-100 text-center'}}>
        <>
        {!this.state.displayPaymentMethods ?
          <>
            <Row style={{alignItems: "center", justifyContent: "space-between", marginLeft: "10%", width: "80%", marginBottom: "10%"}}>
              <button style={this.state.amount == 1 ? styles.donationSelectedButton : styles.donationUnselectedButton} onClick={() => this.selectAmount(1)}>
                $1
              </button>
              <button color="primary" style={this.state.amount == 2 ? styles.donationSelectedButton : styles.donationUnselectedButton} onClick={() => this.selectAmount(2)}>
                $2
              </button>
              <button color="primary" style={this.state.amount == 5 ? styles.donationSelectedButton : styles.donationUnselectedButton} onClick={() => this.selectAmount(5)}>
                $5
              </button>
            </Row>
            <Row style={{alignItems: "center", justifyContent: "space-between", marginLeft: "10%", width: "80%"}}>
              <button style={this.state.amount == 10 ? styles.donationSelectedButton : styles.donationUnselectedButton} onClick={() => this.selectAmount(10)}>
                $10
              </button>
              <button style={this.state.amount == 15 ? styles.donationSelectedButton : styles.donationUnselectedButton} onClick={() => this.selectAmount(15)}>
                $15
              </button>
              <button style={this.state.amount == 20 ? styles.donationSelectedButton : styles.donationUnselectedButton} onClick={() => this.selectAmount(20)}>
                $20
              </button>
            </Row>
          </>
        :
        <>
          <div style={{display: "flex",alignItems: "center", justifyContent: "center"}}>
            {this.props.venmoHandle ?
              <button style={{backgroundColor:"white", borderWidth: 0, borderRadius: 5, width: "30%", height: "30%"}} onClick={this.openVenmo}>
                <img src={require("assets/img/venmo_logo_blue.png")} style={{ width: "80%", height: "auto", margin: "10%" }} />
              </button>
            :
              null
            }
          </div>
          <div style={{marginTop: "4%", alignItems: "center", justifyContent: "center"}}>
            {this.props.cashAppHandle ?
              <button style={{backgroundColor:"white", borderWidth: 0, borderRadius: 5, width: "30%", height: "30%"}} onClick={this.openCashApp}>
                <img src={require("assets/img/cash_app_logo.png")} style={{ width: "80%", height: "auto", margin: "10%" }} />
              </button>
            :
              null
            }
          </div>
        </>
        }
        </>
        </ModalBody>
        <ModalFooter style={{display: "flex",justifyContent: "center", alignItems: "center"}}>
          {!this.state.displayPaymentMethods ?
            <button
              style={{backgroundColor: "transparent", fontSize: 25, color: "#7248BD", borderWidth: 0}}
              onClick={() => this.setState({displayPaymentMethods:true})}
            >
              Next
            </button>
          :
            <button
              style={{backgroundColor: "transparent", fontSize: 25, color: "#7248BD", borderWidth: 0}}
              onClick={() => this.setState({displayPaymentMethods:false})}
            >
              Back
            </button>
          }
        </ModalFooter>
      </Modal>
    )
  }
}

TipJarModal.propTypes = {
  isVisible: PropTypes.bool,
  artist: PropTypes.object,
  venmoHandle: PropTypes.string,
  cashAppHandle: PropTypes.string,
  onClose: PropTypes.func,
};

TipJarModal.defaultProps = {
  isVisible: false,
  venmoHandle: null,
  cashAppHandle: null,
  onClose: () => console.log("Must pass function to onClose props."),
};

export default TipJarModal
