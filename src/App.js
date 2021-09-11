// import { Box } from "@material-ui/core";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AppWithRouterAccess from './AppWithRouterAccess ';
import ContextProvider from './Context/ContextProvider';
// import DetailView from "./components/Details/DetailView";
// import Header from "./components/Header/Header";
// import Home from "./components/Home/Home";
// import CreatePost from "./components/Create/CreatePost";
// import Update from "./components/Create/Update";

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <AppWithRouterAccess/>
         {/* <Header />
        <Box style={{marginTop: 64}}>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/details/:id' component={DetailView} />
            <Route exact path='/create' component={CreatePost} />
            <Route exact path='/update/:id' component={Update} />
          </Switch>
        </Box> */}
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
