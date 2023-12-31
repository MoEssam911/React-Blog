import Navbar from "./components/Navbar.js";
import Home from "./pages/Home.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./pages/Create.js";
import BlogDetails from "./pages/blogs/BlogDetails.js";
import NotFound from "./pages/NotFound.js";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

