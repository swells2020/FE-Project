import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Navigation from './components/Navigation'
import HomeBody from './components/HomeBody';
import ArticleList from './components/ArticleList';
import TopicBody from './components/TopicBody';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>NC-News</h1>
          <Navigation />
        </header>
        <main>
          <Routes>
            <Route path='/' element={<HomeBody />} />
            <Route path='/articles' element={<ArticleList />} />
            <Route path='/topics/*' element={<TopicBody />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
