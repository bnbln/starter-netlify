import React from 'react'
import { navigate } from 'gatsby-link'
import { Formik, Field, Form } from 'formik';
import Layout from '../../components/Layout'
import Map from "../../components/Map"
import icon from "../../assets/message-circle.svg"

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }

  render() {
    return (
      <Layout data={{title: "Kontakt", lead: "Nehmen Sie kontakt mit uns auf und vereinbaren Sie einen Beratungstermin", icon: icon}}>
        <div>
          <div className="mymargins">
            <div className="content">
              <form
                name="contact"
                method="post"
                action="/contact/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
              >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="contact" />
                <div hidden>
                  <label>
                    Don’t fill this out:{' '}
                    <input name="bot-field" onChange={this.handleChange} />
                  </label>
                </div>
                <div class="columns">
                  <div class="column">
                    <div className="field">
                    <label className="label" htmlFor={'vorname'}>
                      Vorname
                    </label>
                    <div className="control">
                      <input
                        className="input"
                        type={'text'}
                        name={'vorname'}
                        onChange={this.handleChange}
                        id={'vorname'}
                        required={true}
                        placeholder="Max"
                      />
                    </div>
                  </div>
                  </div>
                  <div class="column">
                    <div className="field">
                    <label className="label" htmlFor={'nachname'}>
                      Nachname
                    </label>
                    <div className="control">
                      <input
                        className="input"
                        type={'text'}
                        name={'nachname'}
                        onChange={this.handleChange}
                        id={'nachname'}
                        required={true}
                        placeholder="Mustermann"
                      />
                    </div>
                  </div>
                  </div>
                </div>
    
                <div class="columns">
                  <div class="column">
                    <div className="field">
                    <label className="label" htmlFor={'adresse'}>
                      Straße und Hausnummer
                    </label>
                    <div className="control">
                      <input
                        className="input"
                        type={'text'}
                        name={'adresse'}
                        onChange={this.handleChange}
                        id={'adresse'}
                        required={true}
                        placeholder="Musterstraße 10"
                      />
                    </div>
                  </div>
                  </div>
                  <div class="column">
                    <div className="field">
                    <label className="label" htmlFor={'stadt'}>
                      PLZ und Stadt
                    </label>
                    <div className="control">
                      <input
                        className="input"
                        type={'text'}
                        name={'stadt'}
                        onChange={this.handleChange}
                        id={'stadt'}
                        required={true}
                        placeholder="12161 Berlin"
                      />
                    </div>
                  </div>
                  </div>
                </div>

                <div class="columns">
                  <div class="column">
                    <div className="field">
                    <label className="label" htmlFor={'email'}>
                      Mailadresse
                    </label>
                    <div className="control">
                      <input
                        className="input"
                        type={'email'}
                        name={'email'}
                        onChange={this.handleChange}
                        id={'email'}
                        required={true}
                        placeholder="max.mustermann@mail.de"
                      />
                    </div>
                  </div>
                  </div>
                  <div class="column">
                    <div className="field">
                    <label className="label" htmlFor={'telefon'}>
                      Telefonnummer
                    </label>
                    <div className="control">
                      <input
                        className="input"
                        type={'text'}
                        name={'telefon'}
                        onChange={this.handleChange}
                        id={'telefon'}
                        required={true}
                        placeholder="030 1234567"
                      />
                    </div>
                  </div>
                  </div>
                </div>

                <div className="field">
                  <label className="label" htmlFor={'betreff'}>
                    Betreff
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'text'}
                      name={'betreff'}
                      onChange={this.handleChange}
                      id={'betreff'}
                      required={true}
                      placeholder="Mein Anliegen"
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'message'}>
                    Nachricht
                  </label>
                  <div className="control">
                    <textarea
                      className="textarea"
                      name={'message'}
                      onChange={this.handleChange}
                      id={'message'}
                      required={true}
                      placeholder="Meine Nachricht"
                    />
                  </div>
                </div>
                <div className="field">
                  <button className="button is-link" type="submit">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Map />
      </Layout>
    )
  }
}
