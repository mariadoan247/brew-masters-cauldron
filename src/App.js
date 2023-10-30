import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Classes from "./components/pages/classes.component";
import SignIn from "./components/signIn.component";
import SignUp from "./components/signUp.component";
import ForgotPassword from "./components/forgotPassword.component";
import MyApp from "./components/pages/homePage.component";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Races from "./components/pages/races.component";
import Backgrounds from "./components/pages/backgrounds.component";
import Spells from "./components/pages/spells.component";
import Inventory from "./components/pages/inventory.component";
import Monsters from "./components/pages/monsters.component";
import Feats from "./components/pages/feats.component";
import Account from "./components/userAccount.component";
import BlogPostDetail from "./sections/@dashboard/blog/BlogPostDetail";

function App() {
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
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
