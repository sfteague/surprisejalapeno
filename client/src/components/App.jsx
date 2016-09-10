import React from 'react';
import ReactDOM from 'react-dom';
// import NewsView from './NewsView.jsx';
import Search from './Search.jsx';
// import ArticleEntry from './ArticleEntry.jsx';
import Geosuggest from 'react-geosuggest';
import SpecialBubbleChart from './BubbleChart.jsx';  //adding BubbleChart

// FOR TESTING // 
var dummyData = [
  {
    storyName: "example storyname 1",
    newsCategory: "example category",
    rating: 22,
    url: "https://www.google.com/"
  },
  {
    storyName: "example storyname 1",
    newsCategory: "example category",
    rating: 22,
    url: "https://www.google.com/"
  },
  {
    storyName: "example storyname 1",
    newsCategory: "example category",
    rating: 22,
    url: "https://www.google.com/"
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      location: '',
      data: dummyData    //remember to change back to empty array after done using dummy data
    };

    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.handleSuggestionSelect = this.handleSuggestionSelect.bind(this);
    this.getNewsByLocation = this.getNewsByLocation.bind(this);
  }

  handleSearchChange (e) {
    console.log('inside handleSearchChange');
    e.preventDefault();
    this.setState({location: e.target.value});
  }

  handleSearchSubmit (e) {
    console.log('inside handleSearchSubmit');
    e.preventDefault();
    const location = this.state.location;
    if (!location) {
      return;
    }

    this.getNewsByLocation(location);
  }

  handleSuggestionSelect (e) {
    console.log('selection e:', e);
    const loc = e.label;
    this.setState({location: loc});
    this.getNewsByLocation(loc);
  }

  getNewsByLocation (loc) {
    console.log('inside getNewsByLocation');
    $.ajax({
      method: 'GET',
      url: '/query',
      dataType: 'json',
      data: {q: loc},
      success: (data) => {
        data = JSON.parse(data);
        this.setState({data: data.value});
      },  //need to .bind(this)  here??
      error: (err) => {
        console.log('getNews err ', err);
      }   //need to .bind(this)  here too??
    })
  }

//replaced NewsView with BubbleChart, below
  render() {
    return (
      <div>
        <section>
          <Search props={this.props} handleSearchChange={this.handleSearchChange} handleSearchSubmit={this.handleSearchSubmit} handleSuggestionSelect={this.handleSuggestionSelect} />
        </section>
        <section>
          <SpecialBubbleChart data={this.state.data} />
        </section>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));