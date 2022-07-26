import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Navigation from './components/Navigation'
import HomeBody from './components/HomeBody';
import ArticlesBody from './components/ArticlesBody';
import ArticleBody from './components/ArticleBody';

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
            <Route path='/articles' element={<ArticlesBody />} />
            <Route path='/articles/:article_id' element={<ArticleBody />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
