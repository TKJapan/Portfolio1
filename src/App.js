import React from 'react';
import './App.css';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

// import { PostsList } from './features/posts/PostsList'
import { JsonsList } from './features/jsons/JsonsList';
import AddJsonForm from './features/jsons/AddJsonForm'

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <React.Fragment>
              <div className="AddJsonForm">
                <AddJsonForm />
              </div>
              <JsonsList />
              {/* <PostsList /> */}
            </React.Fragment>
          )}
          />
          <Redirect to="/" />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
