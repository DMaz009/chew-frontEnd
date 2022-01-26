import Nav from './components/Nav'
import RestaurantDetailsPage from './components/RestaurantDetailsPage'
import ReviewsBox from './components/ReviewsBox'
import './App.css';

function App() {
  return (
    <div className="App">
      <img src="https://i.imgur.com/RpWwxC9.jpg" />
      <Nav />
      <h1 className="title">CHEW</h1>
      <RestaurantDetailsPage />
      <ReviewsBox />
    </div>
  );
}

export default App;
