import ListGroup from "./components/ListGroup";
function App(){
  let items=["new york","san frans","tokyo","london","paris"];
  return <div>
    <ListGroup items={items} heading="Cities"/>
    </div>;

}
export default App;