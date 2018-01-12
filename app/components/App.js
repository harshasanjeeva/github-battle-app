var React = require('react');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
var Nav = require('./Nav');
// var Home = require('./Home');
// var Battle = require('./Battle');


var Popular = require('./Popular');
class App extends React.Component {
  render() {
    return (
      <Router>
      <div className="container">
      <Nav />
      <Route path='/popular' component={Popular} />
      
      </div>
      </Router>
    );
  }
}

module.exports = App;