import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { publicRoutes } from "../routes";
import mainLayout from "../layouts/MainLayout";
import GoToTop from "../components/GoToTop";
import "./style.scss";
import "react-toastify/dist/ReactToastify.minimal.css";
import { store } from "./store";
import { Provider } from "react-redux";

function App() {
  const [showGoToTop, setShowGoToTop] = useState(false);
  useEffect(() => {
    window.onscroll = () => setShowGoToTop(window.scrollY > 200);
  }, []);
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
