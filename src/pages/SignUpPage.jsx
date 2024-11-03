import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { auth } from '../Config/Firebase'; 
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

function SignUpPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // console.log('Attempting to sign up with email:', email); // Log email
    // console.log('Password:', password); // Log password

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/homepage'); // Redirect to the homepage after successful signup
    } catch (err) {
      setError(err.message); // Set error message if signup fails
    }
  };

  const handleGoogleSignUp = async () => {
    const provider = new GoogleAuthProvider();

    try {
      await signInWithPopup(auth, provider);
      navigate('/homepage'); // Redirect to homepage after Google sign-up
    } catch (err) {
      setError(err.message); // Set error message if Google sign-up fails
    }
  };

  return (
    <div
      className="bg-fixed bg-cover bg-no-repeat h-screen flex items-center justify-center"
      style={{ backgroundImage: "url('https://wallpapers.com/images/featured/movie-9pvmdtvz4cb0xl37.jpg')" }}
    >
      <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-10 max-w-md w-full">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">SIGN UP</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
            <input
              className="shadow-md appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="email"
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
            <input
              className="shadow-md appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="password"
              type="password" // Ensure this is set correctly
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full transition duration-200"
            type="submit"
          >
            Sign Up
          </button>
        </form>
        <div className="flex items-center justify-center mt-4">
          <span className="text-gray-500">or</span>
        </div>
        <div className="flex items-center justify-center mt-4">
          <button className="flex items-center bg-white border border-gray-300 rounded px-4 py-2" onClick={handleGoogleSignUp}>
            <FontAwesomeIcon icon={faGoogle} className="h-5 w-5 mr-2 text-gray-700" />
            <span className="text-gray-700">Sign Up with Google</span>
          </button>
        </div>
        <div className="mt-8 text-center">
          <p className="text-gray-700">Already have an account?{' '}
            <Link to="/login" className="text-blue-500 hover:text-blue-800">Log In</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
