import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddData from "./Pages/AddData/AddData";
import Home from "./Pages/Home/Home/Home";
import SearchResult from "./Pages/SearchResult/SearchResult/SearchResult";

export const UserContext = createContext()

function App() {

  const [userInfo, setUserInfo] = useState([])

  return (

    <div className="App">
      <UserContext.Provider value={[userInfo, setUserInfo]}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/addData" element={<AddData />} />
            <Route path="/searchingResult" element={<SearchResult />} />
            <Route path="/searchingResult/:searchInput" element={<SearchResult />} />
          </Routes>
        </Router>
      </UserContext.Provider>
    </div>

  );
}

export default App;
