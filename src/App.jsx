import { BrowserRouter as Router } from 'react-router-dom';
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Header } from './components/Global/Header';
import { AppRoutes } from './services/routes/routes';
import { ScrollToTop } from './components/Global/ScrollToTop'

export default function App() {
  return (
    <Router>
      <SpeedInsights />
      <Header />
      <AppRoutes />
      <ScrollToTop />
    </Router>
  );
}


