import React, { Component } from 'react'
import { Form, FormGroup, Button } from 'react-bootstrap';
import axios from 'axios';

export class Contact extends Component {
    constructor() {
        super()

        this.state = {
            name: '',
            email: '',
            phone: '',
            message: '',
            sent: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    async handleSubmit (e)  {
        e.preventDefault();

        // const { name, email, phone, message } = this.state

        // let data = {
        //   name: this.state.name,
        //   email: this.state.email,
        //   phone: this.state.phone,
        //   message: this.state.message
        // };

        //  axios.post('/api/form', data).then(res => {
        //     this.setState({
        //         sent: true
        //     })
        // })

        const { name, email, phone, message, sent} = this.state;

        const form = await axios.post('/api/form', {
            name,
            email,
            phone,
            message,
            sent: true
        })

        // e.target.reset();
        // form.reset();
        this.setState({
            name: '',
            email: '',
            phone: '',
            message: '',
            sent: false
        })

    }


    // resetForm = () => {
    //     this.setState({
    //       name: this.state.name,
    //       email: this.state.email,
    //       phone: this.state.phone,
    //       message: this.state.message
    //     });
    // }


    render() {
        return (
          <>
            <h2 className="contact__title">Get in touch with us...</h2>

            <div className="contact">
              <Form className="contact__form">
                <FormGroup className="contact__form-name">
                  <label for="name">Name</label>
                  <br />
                  <input
                    className="contact__form-name"
                    type="text"
                    name="name"
                    onChange={this.handleChange}
                    placeholder="How do we call you?"
                  />
                </FormGroup>

                <FormGroup className="contact__form-email">
                  <label for="email">Email</label>
                  <br />
                  <input
                    className="contact__form-email"
                    type="email"
                    name="email"
                    onChange={this.handleChange}
                    placeholder="We can email you at?"
                  />
                </FormGroup>

                <FormGroup className="contact__form-phone">
                  <label for="phone">Phone</label>
                  <br />
                  <input
                    className="contact__form-phone"
                    type="tel"
                    name="phone"
                    onChange={this.handleChange}
                    placeholder="Type in your digits"
                  />
                </FormGroup>

                <FormGroup className="contact__form-message">
                  <label for="message">Message</label>
                  <br />
                  <textarea
                    className="contact__form-message"
                    name="message"
                    onChange={this.handleChange}
                    placeholder="How can we help?"
                    
                  />
                </FormGroup>

                {/* <FormGroup>
                  <Button className="contact__btn" on={this.handleSubmit}>
                    <i className="fa fa-paper-plane-o" aria-hidden="true" />
                    <i className="fab fa-telegram-plane" />
                    &nbsp;SUBMIT
                  </Button>
                </FormGroup> */}
                <button
                  type="submit"
                  className="contact__btn"
                  onSubmit={this.handleSubmit}
                >
                  SUBMIT
                </button>
              </Form>
            </div>
          </>
        );
    }
}

export default Contact;
