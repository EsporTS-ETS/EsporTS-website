import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Accueil from './routes/Accueil';
import Equipes from './routes/Equipes';
import Partenaires from './routes/Partenaires';
import Contact from './routes/Contact';
import FAQ from './routes/FAQ';

function App() {


    return (
        <div className='App'>
            <Header/>
            
            <main>
                <Routes>
                    <Route path='/' exact element={<Accueil/>}/>
                    <Route path='/equipes' element={<Equipes/>}/>
                    <Route path='/partenaires' element={<Partenaires/>}/>
                    <Route path='/contact' element={<Contact/>}/>
                    <Route path='/FAQ' element={<FAQ/>}/>
                </Routes>
            </main>

            <Footer/>
        </div>
    );
}
    
export default App;
    