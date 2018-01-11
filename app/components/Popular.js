var React = require('react');
var PropTypes = require('prop-types');


function SelectLanguage(props){
  var languages = ['All','JavaScript','Ruby','Python','Java','CSS'];
  
  return(
    <ul className='languages'>
  {
    languages.map(function(lang){ 
    return (
      <li 
      style={lang ===props.selectedLanguage?{color: 'red' }:null }
      onClick={props.onSelect.bind(null,lang)}
      key={lang}>
      {lang}
      </li>)
  },this)}
</ul>)
}

SelectLanguage.propTypes={
  selectLanguage: propTypes.string.isRequired,
  onSelect: propTypes.func.isRequired,
}

class Popular extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selectedLanguage : 'All',
    };
   this.updateLanguage = this.updateLanguage.bind(this); 
  }

  updateLanguage(lang){
    this.setState(function(){
      return {selectedLanguage:lang,}
    });
  }



  render() {
    return (
      <div>
      <SelectLanguage 
      selectedLanguage = {this.state.selectedLanguage}
      onSelect = {this.updateLanguage}/>
      </div>
    );
  }
}
module.exports =  Popular;
