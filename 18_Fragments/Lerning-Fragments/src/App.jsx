import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
    
  let foodItems =  ['Dal', 'Fruits', 'Green Veg', 'Milk', 'Juices', 'Dry Fruits'];
  let emptymsg = 
  foodItems.length === 0 ? <h3>I am still hungry.</h3>: null; 

return  (
  <center>
    <>
       <h1>Healthy Food</h1>
       {emptymsg}
  <ul className="list-group">
  {foodItems.map((item) =>(
    <li key={item} className="list-group-item">{item}</li>
  ))}
</ul>
  </> 
  </center>
)
}

export default App
