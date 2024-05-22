import Nav from "./components/Nav"
import Header from "./components/Header"
import Products from "./components/Products"
import Model from "./components/Model"
import Features from "./components/Features"
import Footers from "./components/Footers"


const App = () => {
  // useEffect(() => {
  //   // Apply overflow: hidden to the body's y-axis when the component mounts
  //   document.body.style.overflowX = 'hidden';

  //   // Cleanup function to remove overflow: hidden when the component unmounts
  //   return () => {
  //     document.body.style.overflowX = ''; // Reset overflowY property
  //   };
  // }, []);
  return (
    <div className='bg-gradient-to-b from-logoGreen via-green-400 to-green-700 bg-center  w-screen min-h-screen overflow-x-hidden '
    >
      <Nav />
      <Header/>
      <Products/>
      <Model/>
      <Features/>
      <Footers/>
    </div>
  )
}
export default App