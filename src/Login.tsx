import React, { useState } from 'react';

export default function Login() {
    const [email, setEmail] = useState('');

    const[password, setPassWord] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            console.log("trying"); // 
            /* const response = await fetch('https://your-backend.com/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                throw new Error('Login failed');
            }

            // 3. Parse the response (e.g., get JWT or session info)
            const data = await response.json();
            const { token } = data; // assuming your server returns { token: '...' }

            // 4. Store token (or other credentials) in localStorage or a cookie
            localStorage.setItem('authToken', token);

            // 5. Redirect user (e.g., with React Router)
            window.location.href = '/dashboard'; // or use navigate(...) from react-router-dom */
        } catch (err) {
            console.error(err);
            alert("Login failed");
        }
    };

    // this is not right 
    return (
        <div style={{ width: 300, margin: 'auto' }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input 
            type="email" 
            value={email}
            onChange={(event) => setEmail(event.target.value)} 
            required 
          />
        </div>

        <div>
          <label>Password</label>
          <input 
            type="password" 
            value={password}
            onChange={(event) => setPassWord(event.target.value)} 
            required 
          />
        </div>

        <button type="submit">Log In</button>
      </form>
    </div>
  );
}