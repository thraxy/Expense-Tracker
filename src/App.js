import HomePage from "./HomePage";
import InputPage from "./InputPage";
/*import DataBaseTest from "./databasetest";*/
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ViewExpenses from "./ViewExpenses";
import NewNav from "./NewNav";
import FindExpense from "./FindExpense";
import SearchByDate from "./SearchByDate";
import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";
import RequireAuth from "./RequireAuth";
import Layout from "./Layout";
import { Routes, Route } from 'react-router-dom';
import Unauthorized from "./Unauthorized";
import Admin from "./Admin";
import PersistLogin from "./PersistLogin";

const ROLES = {
  'User': 2001,
  'Editor': 1984,
  'Admin': 5150
}

function App() {
  <NewNav></NewNav>
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/*Public Routes */}
        <Route path="unauthorized" element={<Unauthorized />} />
        <Route path="LoginPage" element={<LoginPage />} />
        <Route path="SignUp" element={<SignUpPage />} />

        {/*Protected Routes */}
        <Route element={<PersistLogin />}>
          <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
            <Route path="/" element={<HomePage />} />
          </Route>
          <Route element={<RequireAuth allowedRoles={[ROLES.Editor, ROLES.Admin]} />}>
            <Route path="InputPage" element={<InputPage />} />
            <Route path="ViewExpenses" element={<ViewExpenses />} />
            <Route path="FindExpenses" element={<FindExpense />} />
            <Route path="SearchByDate" element={<SearchByDate />} />
            <Route path="Admin" element={<Admin />} />
          </Route>
        </Route>

        {/*Catch Other Routes and give 404 */}
        <Route path="*" element={<p>There is nothing on this page: Error 404</p>} />
      </Route>
    </Routes>

  );
}

/*This is with react-router-dom versions below v6 */
{/* <Router>
            <Routes>
                <Route exact path="/" component={withRouter(HomePage)} />
                
                <Route element={<RequireAuth />}>
                <Route exact path="/InputPage" component={withRouter(InputPage)} />
                <Route exact path="/ViewExpenses" component={withRouter(ViewExpenses)} />
                <Route exact path="/FindExpenses" component={withRouter(FindExpense)} />
                <Route exact path="/SearchByDate" component={withRouter(SearchByDate)} />
                </Route>
                <Route exact path="/LoginPage" component={withRouter(LoginPage)} />
                <Route exact path="/SignUp" component={withRouter(SignUpPage)} />
            </Routes>


        </Router> */}

export default App;
