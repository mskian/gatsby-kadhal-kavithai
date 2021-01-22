import React, { Component } from "react"
import "bulma/css/bulma.min.css"
import "./app.css"

class ErroPage extends Component {
  render() {
    return (
      <section className="section">
        <div className="container content">
          <div className="columns is-centered">
            <div className="column is-half">
              <br />
              <h1
                style={{ color: "#bee5d3" }}
                className="title has-text-centered"
              >
                Oops Error page or Something went Wrong
              </h1>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
export default ErroPage
