import React, { Component } from 'react'
import { Form, FormGroup } from 'react-bootstrap';
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

    async handleSubmit (e)  {
        const { name, email, phone, message, sent} = this.state;
         await axios.post('/api/form', {
            name,
            email,
            phone,
            message,
            sent: true
        })

        this.setState({
            name: '',
            email: '',
            phone: '',
            message: '',
            sent: false
        })
        e.location.reload();
    }
    
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    
    render() {
        return (
          <>
            <h2 className="contact__title" id="contact">
              Get in touch with us...
            </h2>

            <div className="contact">
              <Form className="contact__form">
                <FormGroup className="contact__form-name">
                  <label htmlFor="name">Name</label>
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
                  <label htmlFor="email">Email</label>
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
                  <label htmlFor="phone">Phone</label>
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
                  <label htmlFor="message">Message</label>
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
                  onClick={this.handleSubmit}
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



        // resetForm = () => {
    //     this.setState({
    //       name: this.state.name,
    //       email: this.state.email,
    //       phone: this.state.phone,
    //       message: this.state.message
    //     });
    // }