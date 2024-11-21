import { useState } from "react";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import AllPostsPage from "./pages/AllPostsPage/AllPostsPage";

const App = () => {
  const [currentPage, setCurrentPage] = useState(true);

  return (
    <>
      {currentPage ? <HomePage /> : <AllPostsPage />}
      <button onClick={() => setCurrentPage(!currentPage)}>Promeni Page</button>
      {console.log(currentPage)}
    </>
  );
};

export default App;
