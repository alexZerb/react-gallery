import './App.css';
import SearchButton from './components/SearchButton';

const App = () => {
  
  
  
  return (

    <div className="container">
      
      {/* Search bar needs function to update query for axios call */}
      
      <form className='search-form'>
        <input type='search' name='search' placeholder='Search' required/>
        <SearchButton />
      </form>
    
      <nav className='main-nav'>
        <ul>
          <li><a href='#'>Cats</a></li>
          <li><a href='#'>Dogs</a></li>
          <li><a href='#'>Computers</a></li>
        </ul>
      </nav>
    
    </div>
  );
}

export default App;
