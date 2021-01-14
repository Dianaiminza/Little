
import './App.css';
import Data from "./grocery.json";
function App() {
  return (
    <div className="App">
      <div className="grocery">
      {Data.map(post=>{
        return (
          <div key={post.id}className="post">
          <h2>{post.title}</h2>
          <p>{post.description}</p>
          <p>{post.cost}</p>

          </div>
        )
      })}

      </div>

    </div>
  );
}

export default App;
