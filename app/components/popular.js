const React = require('react');
const PropTypes = require('prop-types');

function SelectLanguage(props) {
    const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
    return (
        <ul className="language__container">
            {languages.map(
                language => <li
                    style={ language === props.selectedLanguage? {color: '#d0021b'}: null}
                    key={language}
                    className="language"
                    onClick={props.onSelect.bind(null, language)}>{language}</li>,
                this)}
        </ul>)
}

SelectLanguage.PropTypes = {
    selectedLanguage: PropTypes.string.required,
    onSelect: PropTypes.func.required
};

class PopularComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedLanguage: 'All'
        };
        this.changeLanguage = this.changeLanguage.bind(this);
    }

    changeLanguage(language) {
        this.setState({selectedLanguage: language});
    }

    render(){
        return (
            <div>
                <SelectLanguage
                    selectedLanguage = {this.state.selectedLanguage}
                    onSelect = {this.changeLanguage}
                />
            </div>

        )
    }
}

module.exports = PopularComponent;