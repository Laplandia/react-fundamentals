const React = require('react');
const ReactDOM = require('react-dom');
const Popular = require('./popular');

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Popular/>
            </div>
        )
    }
}

module.exports = App;