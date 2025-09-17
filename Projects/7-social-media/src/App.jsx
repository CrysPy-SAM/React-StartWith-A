import './App.css'
import Header from './components/header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Sidebar></Sidebar>
      <Header></Header>
      <Footer></Footer>
    </>
  )
}

export default App
