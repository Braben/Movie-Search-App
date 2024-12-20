// import Hero from "../components/Hero";
// import LoginPage from "./LoginPage";

const HomePage = () => (
  <>
  <div
    className="bg-fixed bg-cover bg-no-repeat h-screen flex flex-col items-center justify-center text-white"
    style={{
      backgroundImage:
        "url('https://wallpapers.com/images/featured/movie-9pvmdtvz4cb0xl37.jpg')",
    }}
  >
    <div className="bg-black bg-opacity-50 p-10 rounded-lg shadow-lg text-center">
      <h1 className="text-5xl font-bold mb-4">Welcome!</h1>
      <p className="text-lg mb-6">Please choose an option:</p>
      <div className="flex justify-center space-x-4">
        <a
          href="/login"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition duration-200"
        >
          Log In
        </a>
        <a
          href="/signup"
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded transition duration-200"
        >
          Sign Up
        </a>
      </div>
    </div>
  </div>
  </>
);

export default HomePage;

// const HomePage = () => {
//   return (
//     <div>
//       <Hero />
//       {/* <LoginPage /> */}
//     </div>
//   );
// };

// export default HomePage;
