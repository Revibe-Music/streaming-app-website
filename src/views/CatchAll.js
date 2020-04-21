import React, {Component} from 'react';

import Error404 from "./Error404";
import { BuilderComponent } from '@builder.io/react';
import Button from 'components/Button/Button'

export default class CatchAllPage extends Component {
  state = { notFound: false }

  render() {
    return (
      <>

      {!this.state.notFound ?
        <>
          <BuilderComponent
            apiKey="9f839cd6c49b4dc0966d1d4ce892eecd"
            model="page"
            name="page"
            contentLoaded={content => {
              if (!content) {
                this.setState({ notFound: true });
              }
            }}
            />
          <div className="loading">Loading...</div>
      </>
      :
        <Error404 />
      }
      </>

  )
  }
}
