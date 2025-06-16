import { BrowserRouter as Router } from 'react-router-dom';
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"
import { Header } from './components/Global/Header';
import { AppRoutes } from './services/routes/routes';
import { ScrollToTop } from './components/Global/ScrollToTop'

export default function App() {
  return (
    <Router>
      <Analytics />
      <SpeedInsights />
      <Header />
      <AppRoutes />
      <ScrollToTop />
    </Router>
  );
}


