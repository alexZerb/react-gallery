import './App.css';
import SearchButton from './components/SearchButton';
import PhotoContainer from './components/PhotoContainer';
import { Component } from 'react';

class App extends Component {
  constructor(){
    super();
    this.state = {
      apiKey: config,
      query: '',
      photos: [],
      loading: true
    };
  }

  handleSearch = (query) => {
    
  }
  
  
  render() { 
    return (

    <div className="container">
      
      {/* Search bar needs function to update query for axios call */}
      
      <form className='search-form'>
        <input type='search' name='search' placeholder='Search' required/>
        <SearchButton />
      </form>
    
      <nav className='main-nav'>
        <ul>
          <li>Cats</li>
          <li>Dogs</li>
          <li>Computers</li>
        </ul>
      </nav>
    
      <PhotoContainer />


    </div>
  )};
}

export default App;
