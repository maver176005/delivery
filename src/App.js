import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RegistrationPage from "./components/RegistrationPage";
import ProfilePage from "./components/ProfilePage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <RegistrationPage />
        </Route>
        <Route path="/profile">
          <ProfilePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
