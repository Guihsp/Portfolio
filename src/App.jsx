import { BrowserRouter as Router } from 'react-router-dom';

import { Header } from './components/Global/Header';
import { AppRoutes } from './services/routes/routes';

export default function App() {
  return (
    <Router>
      <Header />
      <AppRoutes />
    </Router>
  );
}


