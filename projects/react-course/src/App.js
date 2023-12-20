import { Route, Routes } from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetupsPage';
import NewMeetupPage from './pages/NewMeetupPage';
import FavoritesPage from './pages/FavoritesPage';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetupsPage />} exact />
        <Route path="/new-meetup" element={<NewMeetupPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
