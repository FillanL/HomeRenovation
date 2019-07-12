import React, { Component } from 'react'

class Contact extends Component {
    render() {
        return (
            <div>
                <form action="mailto:fillanleee@gmail.com" method="post" encType="text/plain">
                    <label htmlFor="name">Name:</label><br></br>
                    <input type="text" name="name"/><br></br>

                    <label htmlFor="phone">Enter your phone number:</label><br></br>
                    <input 
                        type="number"    
                        name="phone"
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        required 
                    /><br></br>

                    <label htmlFor="zip">Zip Code:</label><br></br>
                    <input type="text" maxLength="5" name="zip"/><br></br>
                    <label htmlFor="message">Message:</label><br></br>
                    <textarea type="text" name="message" size="50"/><br></br>
    
                    <button >send</button>
                    <input type="reset" value="Reset"></input>

                </form>
                
            </div>
        )
    }
}

export default Contact
