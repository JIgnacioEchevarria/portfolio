import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import { Header } from './components/Header'
import { Presentation } from './components/Presentation';
import { Technologies } from './components/Technologies';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"  
        progressStyle={{
          backgroundColor: '#FF0000',
          height: '5px',
        }}
      />
      <Presentation />
      <Technologies />
      <Projects />
      <Footer />
    </>
  )
}

export default App
