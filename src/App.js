import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Classes from "./components/pages/classes.component";
import SignIn from "./components/account/signIn.component";
import SignUp from "./components/account/signUp.component";
import ForgotPassword from "./components/account/forgotPassword.component";
import MyApp from "./components/pages/homePage.component";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Races from "./components/pages/races.component";
import Backgrounds from "./components/pages/backgrounds.component";
import Spells from "./components/pages/spells.component";
import Inventory from "./components/pages/inventory.component";
import Monsters from "./components/pages/monsters.component";
import Feats from "./components/pages/feats.component";
import Account from "./components/account/userAccount.component";
import BlogPostDetail from "./sections/@dashboard/blog/BlogPostDetail";
import jwt_decode from 'jwt-decode';
import { setCurrentUser } from './actions/authActions';
import setAuthToken from './utils/setAuthToken';
import store from './store';
import Characters from './components/pages/createCharacter.component';

function App() {
  useEffect(() => {
    // Check for token
    if (localStorage.jwtToken) {
      // Set token to Auth header
      setAuthToken(localStorage.jwtToken);
      
      // Decode token and get user info
      const decoded = jwt_decode(localStorage.jwtToken);
      
      // Set user and isAuthenticated
      store.dispatch(setCurrentUser(decoded));

      // Check for expired token
      const currentTime = Date.now() / 1000;
      if (decoded.exp < currentTime) {
        // Handle logout here (e.g., redirect to login, clear user from Redux state)
        // Remove token from localStorage
        localStorage.removeItem('jwtToken');
      }
    }
  }, []);
  const [mode, setMode] = React.useState("dark");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
      },
    }),
    []
  );
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <MyApp mode={mode} theme={theme} colorMode={colorMode} />
              }
            />
            <Route
              path="/signin"
              element={<SignIn mode={mode} theme={theme} />}
            />
            <Route
              path="/signup"
              element={<SignUp mode={mode} theme={theme} />}
            />
            <Route
              path="/forgotpassword"
              element={<ForgotPassword mode={mode} theme={theme} />}
            />
            <Route
              path="/userAccount"
              element={
                <Account mode={mode} theme={theme} colorMode={colorMode} />
              }
            />
            <Route
              path="/classes"
              element={
                <Classes mode={mode} theme={theme} colorMode={colorMode} />
              }
            />
            <Route
              path="/races"
              element={
                <Races mode={mode} theme={theme} colorMode={colorMode} />
              }
            />
            <Route
              path="/blog/:postId"
              element={
                <BlogPostDetail
                  mode={mode}
                  theme={theme}
                  colorMode={colorMode}
                />
              }
            />
            <Route
              path="/backgrounds"
              element={
                <Backgrounds mode={mode} theme={theme} colorMode={colorMode} />
              }
            />
            <Route
              path="/spells"
              element={
                <Spells mode={mode} theme={theme} colorMode={colorMode} />
              }
            />
            <Route
              path="/inventory"
              element={
                <Inventory mode={mode} theme={theme} colorMode={colorMode} />
              }
            />
            <Route
              path="/monsters"
              element={
                <Monsters mode={mode} theme={theme} colorMode={colorMode} />
              }
            />
            <Route
              path="/feats"
              element={
                <Feats mode={mode} theme={theme} colorMode={colorMode} />
              }
            />
            <Route
              path="/characters"
              element={
                <Characters mode={mode} theme={theme} colorMode={colorMode} />
              }
            />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
