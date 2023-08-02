import HomePage from "./HomePage";
import InputPage from "./InputPage";
/*import DataBaseTest from "./databasetest";*/
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import ViewExpenses from "./ViewExpenses";
import NewNav from "./NewNav";
import FindExpense from "./FindExpense";
import SearchByDate from "./SearchByDate";
function App() {
<NewNav></NewNav>
  return (
    <div>
    
      <Router>
            <Switch>
                <Route exact path="/" component={withRouter(HomePage)} />
                <Route exact path="/InputPage" component={withRouter(InputPage)} />
                <Route exact path="/ViewExpenses" component={withRouter(ViewExpenses)} />
                <Route exact path="/FindExpenses" component={withRouter(FindExpense)} />
                <Route exact path="/SearchByDate" component={withRouter(SearchByDate)} />
            </Switch>


        </Router>
        

    </div>
  );
}

export default App;
