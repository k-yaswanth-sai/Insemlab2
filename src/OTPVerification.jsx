import { useState } from 'react'
import React from 'react'

function OTPVerification() {
    const [input, setInput] = useState('')
    const [status, setStatus] = useState('')
    function Verify() {
        if (input === "1234") {
            setStatus('success')
        } else {
            setStatus('error')
        }
    }
    if (status === 'success') {
        return (
            <div>
            <p><b>Verified</b></p>
            </div>
        )
    }
    return (
        <div>
            <label>OTP: </label>
            <input 
                type="text" 
                value={input} 
                onChange={(e) => setInput(e.target.value)} 
            />
            <button type="button" onClick={Verify}>Submit</button>
            {status === 'error' && (
                <p><b>WRONG OTP</b></p>
            )}
        </div>
    )
}

export default OTPVerification