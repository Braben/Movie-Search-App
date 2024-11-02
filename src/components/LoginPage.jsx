import { useState } from 'react';



function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

    return (
        <>
        <div className="bg-fixed bg-cover bg-no-repeat" style={{ backgroundImage: "url('https://wallpapers.com/images/featured/movie-9pvmdtvz4cb0xl37.jpg')" }}>
        <div className="container-full mx-auto px-10 py-11 h-screen bg-image">
      <div className="max-w-md mx-auto bg-white p-10 rounded shadow-md mt-20">
        <h2 className="text-3xl font-bold mb-5 justify-center text-center">LOGIN</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign In
            </button>
            <a
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
        </form>
        <div className="mt-8 text-center">
          <p>Don't have an account? <a href="#" className="text-blue-500 hover:text-blue-800">Sign Up</a></p>
        </div>
      </div>
    </div>
    </div>
        </>
  );
}

export default LoginPage;