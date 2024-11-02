import React, { useState } from 'react';

function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      // Handle successful Google Sign-In
      console.log(result.user);
      // Redirect to the desired page or perform other actions
    } catch (error) {
      console.error('Error signing in with Google:', error);
      // Handle error, e.g., display an error message to the user
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle email/password signup logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="container mx-auto px-4 py-16 bg-gray-100">
      <div className="max-w-md mx-auto bg-white p-10 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          {/* Email and password fields */}
          <button onClick={handleGoogleSignIn} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded flex items-center">
            <i className="fab fa-google"></i> Sign Up with Google
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignupPage;