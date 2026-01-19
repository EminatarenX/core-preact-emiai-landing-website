import { Router } from 'preact-router';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';

export function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Router>
          <Home path="/" />
          <Privacy path="/privacy" />
          <Terms path="/terms" />
        </Router>
      </main>
      <Footer />
    </div>
  );
}
