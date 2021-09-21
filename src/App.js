import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Container from './components/Container';
import Loading from './components/Loading';
import Character from './pages/Character';
import Home from './pages/Home';
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <Loading/>
      <Switch>
        <Route exact path="/">
          <Container>
            <Home/>
          </Container>
        </Route>
        <Route exact path="/:id">
          <Container>
            <Character/>
          </Container>
        </Route>
      </Switch>
      </BrowserRouter>
    </Provider>
  );
}
 
export default App;