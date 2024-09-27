import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function Login(){

    //State to hold form inputs
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();


    //Handler to submit form
    const handleSubmit = async (e) =>{
        e.preventDefault(); 
        setError(null);

        //Basic validation
        if (!email || !password){
            setError('Please enter both email and password');
            return;
        }

        console.log({email,password});

        try {
            const response = await fetch('http://localhost:8080/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            });
        
            if (response.ok) {
                // Handle successful login
                const data = await response.json();
                console.log('Login successful!');
                console.log(data); // This should be your JWT token or user details
                navigate('/tasks'); // Redirect to tasks page
            } else {
                const errorData = await response.text();  // Read response as text in case it's not JSON
                setError(errorData || 'Login failed. Please try again.');
            }
        } catch (err) {
            console.log('Catch Error:', err); 
            setError('An error occurred. Please try again.');
        }
        
    }


    return (
        <div className="min-h-screen flex items-center justify-center bg-neutral-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h1 className="text-3xl font-heading text-zinc-900 mb-6">Login</h1>

        {/* Throw error here */}
        {error && <p className="text-red-500 mb-4">{error}</p>}

        <div className="mb-4">
          <label className="block text-neutral-700 font-body mb-2" htmlFor="email">Email</label>
          <input
            className="w-full px-4 py-2 border border-neutral-300 rounded focus:outline-none focus:border-slate-600"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-6">
          <label className="block text-neutral-700 font-body mb-2" htmlFor="password">Password</label>
          <input
            className="w-full px-4 py-2 border border-neutral-300 rounded focus:outline-none focus:border-slate-600"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>
        <button className="w-full bg-zinc-800 text-white py-2 rounded hover:bg-zinc-700 transition-colors duration-200" type="submit">
          Sign In
        </button>
      </form>
    </div>

    );
}

export default Login;