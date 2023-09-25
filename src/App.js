import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import CreateTodo from "./components/create-todo.component";
import SignIn from './components/signIn.component';
import TodosList from './components/homePage.component';
import { ThemeProvider, createTheme } from "@mui/material/styles";

function App() {
  const [mode, setMode] = React.useState('dark');
const colorMode = React.useMemo(
  () => ({
    toggleColorMode: () => {
      setMode((prevMode) => (prevMode === 'dark' ? 'light' : 'dark'));
    },
  }),
  [],
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
          <Route path="/" element={<TodosList />} />
          <Route path="/signin" element={<SignIn colorMode={colorMode} mode={mode} />} />
          <Route path="/create" element={<CreateTodo />} />
  
        </Routes>
      </div>
    </Router>
    </ThemeProvider>
  );
}

export default App;
