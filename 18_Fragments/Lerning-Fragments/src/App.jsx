import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
    
  let foodItems =  ['Dal', 'Fruits', 'Green Veg', 'Milk', 'Juices', 'Dry Fruits'];

return  (
  <center>
    <>
       <h1>Healthy Food</h1>
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
