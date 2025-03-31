import { Routes, Route } from "react-router-dom"; // Import Routes and Route
import HomePage from "./pages/HomePage"; // Import HomePage
import ArticlePage from "./pages/ArticlePage"; // Import ArticlePage

function App() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Tailwind CSS Utilities</h1>
      <main>
        <Routes>
          {" "}
          {/* Use Routes */}
          <Route path="/" element={<HomePage />} />{" "}
          {/* Define route for HomePage */}
          {/* Add other routes here in the future */}
          <Route path="/:section/:articleName" element={<ArticlePage />} />{" "}
          {/* Route for individual articles */}
        </Routes>
      </main>
    </div>
  );
}

export default App;
