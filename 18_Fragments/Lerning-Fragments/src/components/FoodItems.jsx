const foodItems = () =>{

      let foodItems =  ['Dal', 'Fruits', 'Green Veg', 'Milk', 'Juices', 'Dry Fruits'];
  return <ul className="list-group">
  {foodItems.map((item) =>(
    <li key={item} className="list-group-item">{item}</li>
  ))}
</ul>
};

export default foodItems;