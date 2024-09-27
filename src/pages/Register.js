import React, {useState} from "react";
import { useNavigate } from "react-router-dom";


function Register() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) =>{
        e.preventDefault();
        setError(null);

        // Basic validation (expand as needed)
        if (!email || !username || !password) {
        setError('Please fill in all fields.');
        return;
        }

        // Log the input (will be replaced with backend API call)
        console.log({ email, username, password });

        try {
            // Call your backend's register API
            const response = await fetch('http://localhost:8080/api/auth/register', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                email,
                username,
                password,
              }),
            });
        
            if (response.ok) {
                navigate('/tasks');
              console.log('Registration successful!');
              // Redirect to login page or handle success
            } else {
              const errorData = await response.json();
              setError(errorData.message || 'Registration failed. Please try again.');
            }
          } catch (err) {
            setError('An error occurred. Please try again.');
          }

    }

    return (
      <div className="min-h-screen flex items-center justify-center bg-neutral-100">
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
          <h1 className="text-3xl font-heading text-zinc-900 mb-6">Register</h1>

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
          <div className="mb-4">
            <label className="block text-neutral-700 font-body mb-2" htmlFor="username">Username</label>
            <input
              className="w-full px-4 py-2 border border-neutral-300 rounded focus:outline-none focus:border-slate-600"
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Choose a username"
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
            Register
          </button>
        </form>
      </div>
    );
}
  
  export default Register;  