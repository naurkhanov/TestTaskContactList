import AuthorizationMain from '../Autorization/AuthorizationMain';
import MainPage from '../MainPage';
import { useSelector } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

function App() {
  const token = useSelector((state) => state.application.token);

  let routes;

  if (!token) {
    routes = (
      <Switch>
        <Route path={'/authorization'} component={AuthorizationMain} />
        <Redirect to={'/authorization'} />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path={'/main'} component={MainPage} />
        <Redirect to={'/main'} />
      </Switch>
    );
  }

  return <div className="App">{routes}</div>;
}

export default App;
