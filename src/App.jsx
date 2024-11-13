import { useEffect } from 'react';
import './App.scss';
import Home from './pages/Home';

function App() {
    useEffect(() => {
        // Check if the page is already scrolled to the top
        if ('scrollRestoration' in history) {
            history.scrollRestoration = 'manual';
        }
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="app">
            <Home />
        </div>
    );
}

export default App;
