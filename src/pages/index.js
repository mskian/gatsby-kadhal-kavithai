import React, { Component } from "react"
import "bulma/css/bulma.min.css"
import "./app.css"
import axios from "axios"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { CopyToClipboard } from "react-copy-to-clipboard"
import { Helmet } from "react-helmet"

class RetrieveList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      persons: [],
    }
  }
  componentDidMount() {
    this.getQuote()
  }
  getQuote() {
    toast.dark("🦄 Kavithai Updated", {
      position: "top-right",
      autoClose: 800,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
    axios.get("https://app.santhoshveer.com/kadhal.php").then(res => {
      const tamilsms = res.data
      this.setState({ isLoading: false, persons: tamilsms })
    })
  }
  Copykavithai() {
    toast.dark("🦄 Kavithai Copied", {
      position: "top-right",
      autoClose: 800,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
  }
  getNewQuote = () => {
    this.getQuote()
  }
  render() {
    return (
      <section className="section">
        <div className="container content">
          <div className="columns is-centered">
            <div className="column is-half">
              <br />
              <Helmet>
                <title>Kadhal Kavithai - Tamil SMS Blog</title>
                <meta
                  name="description"
                  content="Tamil SMS Blog - Get Random Kadhal kavithai and Tamil Love Quotes."
                />
                <link rel="canonical" href="https://kadhal.tamilsms.blog/" />
                <meta property="og:site_name" content="Kadhal Kavithai" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Kadhal Kavithai" />
                <meta
                  property="og:description"
                  content="Tamil SMS Blog - Get Random Kadhal kavithai and Tamil Love Quotes."
                />
                <meta
                  property="og:url"
                  content="https://kadhal.tamilsms.blog/"
                />
                <meta
                  property="og:image"
                  content="https://kadhal.tamilsms.blog/tmsblog-cover.png"
                />
                <meta
                  property="article:publisher"
                  content="https://www.facebook.com/tamilsmsblog"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Kadhal Kavithai" />
                <meta
                  name="twitter:description"
                  content="Tamil SMS Blog - Get Random Kadhal kavithai and Tamil Love Quotes."
                />
                <meta
                  name="twitter:url"
                  content="https://kadhal.tamilsms.blog/"
                />
                <meta
                  name="twitter:image"
                  content="https://kadhal.tamilsms.blog/tmsblog-cover.png"
                />
                <meta name="twitter:site" content="@tamilsmsblog" />
              </Helmet>
              <h1
                style={{ color: "#bee5d3" }}
                className="title has-text-centered"
              >
                <span role="img" aria-label="Growing Heart">
                  💗
                </span>{" "}
                Kadhal Kavithai{" "}
                <span role="img" aria-label="Growing Heart">
                  💗
                </span>
              </h1>
              {this.state.isLoading ? (
                ""
              ) : (
                <div className="notification has-text-weight-bold read-more">
                  {this.state.persons.map(person => (
                    <p
                      key={person.id}
                      dangerouslySetInnerHTML={{ __html: person.content }}
                    ></p>
                  ))}
                </div>
              )}
              <div className="buttons is-centered">
                <button
                  className="button is-warning read-random"
                  onClick={this.getNewQuote}
                  disabled={this.state.isLoading}
                >
                  {this.state.isLoading ? "Loading..." : "🔄 Random"}
                </button>
                <ToastContainer />
                <CopyToClipboard
                  text={this.state.persons.map(person =>
                    person.content.replace(/<br \/>/g, "\n")
                  )}
                  onCopy={() => this.setState({ copied: true })}
                >
                  <button
                    className="button is-link read-random"
                    onClick={this.Copykavithai}
                    disabled={this.state.isLoading}
                  >
                    {this.state.isLoading ? "Loading..." : "📝 Copy"}
                  </button>
                </CopyToClipboard>
              </div>
              <br />
              <br />
              <hr />
              <p
                style={{ color: "#9dad7f" }}
                className="has-text-weight-bold has-text-centered"
              >
                தமிழ் எஸ் எம் எஸ்{" "}
                <span role="img" aria-label="Yello Heart">
                  💛
                </span>
                <br />
                PWA Web App from the Creator of tamilsms.blog - Built using
                GatsbyJS <br />
                <br />
                <img
                  src="./react.png"
                  loading="lazy"
                  height="40"
                  width="40"
                  alt="Tamil SMS"
                />
              </p>
              <br />
              <br />
            </div>
          </div>
        </div>
      </section>
    )
  }
}
export default RetrieveList
