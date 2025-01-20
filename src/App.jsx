
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Homepage />
      </main>
      <Footer />
    </div>
  );
}

export default App;

