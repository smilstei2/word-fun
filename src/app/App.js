
// import './App.css';
// import { Rhyme } from "";
// import { Header } from ".//header/header";

// import { HashRouter, Routes, Route } from "react-router-dom";
// import React, { useState } from "react";
// import { TodoProvider } from ".//state/context";


// function App() {
//   return (
//     <div>
//       <TodoProvider>
//         <HashRouter>
//           <Header />
//           <Routes>
//             {/* <Route path="/" element={<Home />} /> */}
//             {/* <Route path="/todo" element={<Todo />} /> */}
//             <Route path="/rhyme" element={<Rhyme />} />
//           </Routes>
//         </HashRouter>
//       </TodoProvider>
//     </div>
//   );
// }

// export default App;

import * as React from 'react';
//import ReactDOM from 'react-dom';
// import Button from '@mui/material/Button';
import { Header } from "../header/header";
import { AppProvider } from "../state/context";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Dictionary } from "../dictionary/dictionary";
import { Catalog } from "../catalog/catalog";
import { Wordle } from "../wordle/Wordle";

function App() {
  return (
  <div>
      <AppProvider>
        <HashRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Dictionary />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/wordle" element={<Wordle />} /> 
          </Routes>
        </HashRouter>
      </AppProvider>
      
    </div>
  );
}
export default App;