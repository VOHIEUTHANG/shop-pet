import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { publicRoutes } from "../../routes";
import mainLayout from "../../layouts/MainLayout";
import GoToTop from "../GoToTop";
import "./style.scss";

function App() {
  const [showGoToTop, setShowGoToTop] = useState(false);
  useEffect(() => {
    window.onscroll = () => setShowGoToTop(window.scrollY > 200);
  }, []);
  return (
    <div className="app flex flex-col min-h-screen">
      <Routes>
        {publicRoutes.map((route, index) => {
          const Element = route.element;
          const Layout = route.layout || mainLayout;
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Element />
                </Layout>
              }
            />
          );
        })}
      </Routes>
      {showGoToTop && <GoToTop />}
    </div>
  );
}

export default App;
