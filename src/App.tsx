import "styles/global.scss";
import "./i18n";
import Layout from "components/layout";
import RequireAuth from "./features/auth/requireAuth";
import Login from "pages/login";
import Home from "pages/home";
import Dashboard from "pages/dashboard";

import { Routes, Route } from "react-router-dom";

function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/*  public routes */}
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="dashboard/*" element={<Dashboard />} />
        {/*  protected routes */}
        <Route element={<RequireAuth />}>
          
        </Route>
        {/* page not found 404 */}
        <Route path="*" element={<div>Page not found</div>} />
      </Route>
    </Routes>
  );
}

export default App;
