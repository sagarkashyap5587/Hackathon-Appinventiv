import React from "react";
import PrivateRoute from "./routes/privateRoute";
import PublicRoute from "./routes/publicRoute";
import PageRoutes from "./routes/pageRoutes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";


function App() {
  return (
   <>
   <BrowserRouter>
    <Routes>
    <Route path="/" element={<Layout />}>
      {
        PageRoutes.map((route, index) => {
          return ( 
            <Route path={route.path} element = {
              route.isPrivate ? (
                <PrivateRoute>
                  <route.Components/>
                </PrivateRoute>
              ): (
                <PublicRoute>
                  <route.Components/>
                </PublicRoute>
              )
            } >
            </Route>
          )
        })
      }
      </Route>
    </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;


