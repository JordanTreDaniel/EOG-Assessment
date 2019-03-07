import React from "react";
import createStore from "./store";
import { Provider } from "react-redux";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import HomeContainer from "./containers/HomeContainer";
import DashboardContainer from "./containers/DashboardContainer";
const store = createStore();
const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    primary: {
      main: "rgb(39,49,66)"
    },
    secondary: {
      main: "rgb(197,208,222)"
    },
    background: {
      main: "rgb(226,231,238)"
    }
  }
});

const App = props => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <Provider store={store}>
      <Router>
        <Wrapper>
          <Header />
          <>
            <Route path="/" exact component={HomeContainer} />
            <Route path="/dashboard" component={DashboardContainer} />
          </>
        </Wrapper>
      </Router>
    </Provider>
  </MuiThemeProvider>
);

export default App;
