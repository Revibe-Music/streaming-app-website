import React from 'react'
import { Button } from "reactstrap";
import { Builder } from '@builder.io/react';
import ReactGA from "react-ga";

class CustomButton extends React.Component {
  constructor(props) {
    super(props)

    this.buttonClick.bind(this)
  }

  buttonClick(e, props) {
    e.preventDefault()
    const hostname = window && window.location && window.location.hostname;

    if(hostname === "revibe.tech") {
      if(props.event)
        ReactGA.event({
          category: props.category,
          action: props.action,
          label: props.label
        })
    }

    if(props.href && props.newTab){
      var win = window.open(props.href, "_blank")
      win.focus()
    } else if(props.href && !props.newTab) {
      window.location.href = props.href
    }
  }

  render() {
    return (
      <Button
        color={this.props.color ? this.props.color : "primary"}
        onClick={e => this.buttonClick(e, this.props)}
      >
        {this.props.children ? this.props.children : "Submit"}
      </Button>
    )
  }
}

Builder.registerComponent(CustomButton, {
  name: "Button",
  inputs: [
    {
      name: 'color',
      type: 'string',
      defaultValue: 'primary'
    },
    {
      name: 'children',
      type: 'string',
      defaultValue: 'Submit'
    },
    {
      name: 'newTab',
      type: 'boolean',
      defaultValue: false
    },
    {
      name: 'href',
      type: 'string',
      defaultValue: ''
    },
    {
      name: 'event',
      type: 'boolean',
      defaultValue: false
    },
    {
      name: 'category',
      type: 'string',
      defaultValue: ''
    },
    {
      name: 'action',
      type: 'string',
      defaultValue: ''
    },
    {
      name: 'label',
      type: 'string',
      defaultValue: ''
    },
  ]
})

export default CustomButton