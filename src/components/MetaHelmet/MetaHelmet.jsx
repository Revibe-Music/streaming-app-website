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
import React from 'react'
import { Helmet } from 'react-helmet'

import previewImg from '../../assets/img/revibe/preview.png'

const MetaHelmet = props => {
  return (
    <Helmet>
      <title>{props.title ? props.title : "Revibe"}</title>
      <meta name="title" content={props.title ? props.title : "Revibe"} />
      <meta name="description" content={props.description ? props.desctiption : "Stream everything in one place."} />
      <meta name="image" content={props.image ? props.image : previewImg} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={props.url} />
      <meta property="og:title" content={props.title ? props.title : "Revibe"} />
      <meta property="og:description" content={props.description ? props.desctiption : "Stream everything in one place."} />
      <meta property="og:image" content={props.image ? props.image : previewImg} />
      
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={props.url} />
      <meta property="twitter:title" content={props.title ? props.title : "Revibe"} />
      <meta property="twitter:description" content={props.description ? props.desctiption : "Stream everything in one place."} />
      <meta property="twitter:image" content={props.image ? props.image : previewImg} />
    </Helmet>
  )
}

export default MetaHelmet