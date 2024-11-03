import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import MovieList from "./components/MovieList";
import Footer from "./components/Footer";

// const HomePage = () => (
//   <div
//     className="bg-fixed bg-cover bg-no-repeat h-screen flex flex-col items-center justify-center text-white"
//     style={{
//       backgroundImage:
//         "url('https://wallpapers.com/images/featured/movie-9pvmdtvz4cb0xl37.jpg')",
//     }}
//   >
//     <div className="bg-black bg-opacity-50 p-10 rounded-lg shadow-lg text-center">
//       <h1 className="text-5xl font-bold mb-4">Welcome!</h1>
//       <p className="text-lg mb-6">Please choose an option:</p>
//       <div className="flex justify-center space-x-4">
//         <a
//           href="/login"
//           className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition duration-200"
//         >
//           Log In
//         </a>
//         <a
//           href="/signup"
//           className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded transition duration-200"
//         >
//           Sign Up
//         </a>
//       </div>
//     </div>
//   </div>
// );

const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/movies" element={<MovieList />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
