import React,{useEffect,useState} from "react";

function App() {
  const [resourceType,setResourceType]=useState('posts')
  const [item,setItem]=useState([])

  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
      .then(json => setItem(json))

  },[resourceType] //whenever the resourceType changes the useEffect hook will run.//
)
  return (
   <>
    <div>
      <button onClick={()=>setResourceType('posts')}>Posts</button>
      <button onClick={()=>setResourceType('users')}>Users</button>
      <button onClick={()=>setResourceType('comments')}>Comments</button>
    </div>
    <h1>{resourceType}</h1>
    {item.map(item=>{
      return <pre>{JSON.stringify(item)}</pre>
    })}
   </>
  );
}

export default App;
