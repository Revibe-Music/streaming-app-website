import axios from "axios"
import Fingerprint2 from 'fingerprintjs2'
import Cookies from 'js-cookie'
import { API_HOST } from './config.js'

const cookieName = "bshdcce3gcw473q839hxkqabxe3q7qhxbaekc"  // should probably try and set somewhere in env

export default class RevibeAPI {

  constructor() {
    this._saveDeviceData = this._saveDeviceData.bind(this)
    Fingerprint2.get(this._saveDeviceData);
  }

  _saveDeviceData(components) {
    // sets fingerprinted device id and device name to user agent
    var values = components.map(function (component) { return component.value })
    var id = Fingerprint2.x64hash128(values.join(''), 31)
    this.device_id = id
    this.device_name = components.filter(x=>x.key==="userAgent")[0].value
  }

  _setCookie(value) {
    Cookies.set(cookieName, value, { expires: .19}) // expire=4.56 hours
  }

  _getCookie() {
    return Cookies.get(cookieName)
  }

  _deleteCookie() {
    Cookies.remove(cookieName)
  }

  _cookieIsValid() {
    return !!Cookies.get(cookieName)
  }

  _handleErrors(response) {
    var errors = {}
    if(response.status === 400) {
      // bad request ish
      window.location.href = "/400";
    }
    if(response.status === 401) {
      // unauthorized ish
      window.location.href = "/account/login";
    }
    if(response.status === 403) {
      // forbidden ish
      var errorKeys = Object.keys(response.data)
      for(var x=0; x<errorKeys.length; x++) {
        errors[errorKeys[x]] = response.data[errorKeys[x]]
      }
    }
    if(response.status === 404) {
      // not found ish
      window.location.href = "/404";
    }
    else if(response.status === 409) {
      // conflict ish
      var errorKeys = Object.keys(response.data)
      for(var x=0; x<errorKeys.length; x++) {
        errors[errorKeys[x]] = response.data[errorKeys[x]]
      }
    }
    else if(response.status === 415) {
      // unsupported media type ish
      var errorKeys = Object.keys(response.data)
      for(var x=0; x<errorKeys.length; x++) {
        errors[errorKeys[x]] = response.data[errorKeys[x]]
      }
    }
    else if(response.status === 417) {
      var errorKeys = Object.keys(response.data)
      for(var x=0; x<errorKeys.length; x++) {
        errors[errorKeys[x]] = response.data[errorKeys[x]][0]
      }
    }
    else if(response.status === 500) {
      // internal server error ish
      // window.location.href = "/400";
    }
    else if(response.status === 501){
      // not implemented error ish
      window.location.href = "/400";
    }
    else if(response.status === 503){
      // Service unavailable error ish
      window.location.href = "/400";
    }
    return errors
  }

  async _request(endpoint, body, requestType, isAuthenticated, content_type="application/json") {
    var headers = {"Content-Type": content_type}
    if(isAuthenticated) {
      this.isLoggedIn()
      headers.Authorization = "Bearer "+ this._getCookie()
    }

    var numRequestsSent = 0
    var maxRequestAttempts = 2
    var response = null

    while(numRequestsSent < maxRequestAttempts) {
      try {
        response = await axios({
          url: API_HOST + endpoint,
          method: requestType,
          headers: headers,
          responseType: "json",
          data: body
         }
       )
        break
      }
      catch(error) {
        response = error.response
        //response.data = this._handleErrors(error.response)
        numRequestsSent += 1
      }
    }
    return response
  }


  ////////////////////////////////////
  ////////// AUTHENTICATION //////////
  ////////////////////////////////////

  async register(username, email, password) {
    var data = {
      username: username,
      password: password,
      profile: {
        email: email,
      },    // just need to pass this
      // device_id: this.device_id,
      // device_name: this.device_name,
      device_type: "browser"
    }
    var response = await this. _request("account/register/", data, "POST", false)
    this._setCookie(response.data.access_token)
    return response

  }

  async login(username, password) {
    var data = {
      username: username,
      password: password,
      // device_id: this.device_id,
      // device_name: this.device_name,
      device_type: "browser"
    }
    var response = await this. _request("account/login/", data, "POST", false)
    this._setCookie(response.data.access_token)
    return response
  }

  isLoggedIn() {
    if(!this._cookieIsValid()) {
      window.location.href = "/account/login";
    }
  }

  async logout() {
    const data = {access_token: this._getCookie()}
    this._deleteCookie()
    return await this. _request("account/logout/", data, "POST", true)
  }

  async logoutAll() {
    this._deleteCookie()
    return await this. _request("account/logout-all/", null, "POST", true)
  }

  async contactUs(data) {
    return await this. _request("administration/forms/contact-form/", data, "POST", false)
  }

  async leaveFeedback(data) {
    return await this. _request("administration/forms/contact-form/", data, "POST", true)
  }

  async sendInvitation(data) {
    return await this. _request("account/send-email", data, "POST", true)
  }

  async getBlogPosts(query) {
    return await this._request(`administration/blog/${(query ? query : "")}`, null, "GET", false)
  }

  async getBlogPost(id) {
    return await this._request(`administration/blog/${id}`, null, "GET", false)
  }

  async getRelinkArtists() {
    return await this._request(`content/public/`, null, "GET", false)
  }

  async getRelinkArtist(id) {
    return await this._request(`content/public/${id}`, null, "GET", false)
  }

  ////////////////////////////////////
  //////////// USER DATA /////////////
  ////////////////////////////////////

  async getProfile() {
    // returns artist and user profile data
    return await this._request("account/artist/", null, "GET", true)
  }

  async editUserProfile(username=null, email=null) {
    var data = {}
    // only add variables to form if they arent null
    if(username !== null) data.username = username
    if(email !== null) data.email = email
    return await this._request("account/profile/", data, "PATCH", true)
  }
}