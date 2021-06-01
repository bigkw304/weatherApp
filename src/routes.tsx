import { Route, Switch } from "react-router-dom";
import { Home } from "./containers/Home/Home";
import { Weather } from "./containers/Weather/Weather";

export const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/weather" component={Weather} exact />
      <Route path="*" render={() => <p>Page not found.</p>} />
    </Switch>
  );
};
