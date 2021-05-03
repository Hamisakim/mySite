import React, { useState } from 'react'
import axios from 'axios'


const ContactForm = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })


  const handleChange = (event) => {
    console.log('LOGGING')
    const newFormData = { ...formData, [event.target.name]: event.target.value }
    setFormData(newFormData)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log('🐝 ~ formData', formData)
    try {
      const response = await axios.post('/send', formData)
      console.log('🐝 ~ response', response)
    } catch (err) {
      console.log('🐝 ~ err', err)
      
    }
  }





  return (
    <form className="signup-form box column is-half" onSubmit={handleSubmit}>
      <div className="field">
        <p className="control ">
          <input className="input is-medium" 
            name="name" 
            placeholder="Your Name" 
            value={formData.name}
            // value={errors.username}
            onChange={handleChange}
          />
        </p>
      </div>
      <div className="field">
        <p className="control ">
          <input className="input is-medium" 
            name="email" 
            placeholder="Email" 
            value={formData.email}
            onChange={handleChange}
          />
        </p>
      </div>
      <div className="field">
        <p className="control ">
          <input className="input is-medium" 
            name="subject" 
            placeholder="Subject" 
            value={formData.subject}
            onChange={handleChange}
          />
        </p>
      </div>

      <div className="field">
        <p className="control ">
          <input className="input is-medium" 
            name="message" 
            placeholder="message" 
            value={formData.message}
            onChange={handleChange}
          />
        </p>
      </div>


      <div className="field-button">
        <button id="form-button " className="is-medium button is-fullwidth">Send</button><br />
      </div>
    </form>
  )
}

export default ContactForm
