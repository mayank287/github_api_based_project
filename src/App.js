import './App.css';
import {useState} from "react";
import axios from "axios";

function App() {
  const [user,setUser] = useState("");
  const [followers,setfollowers] = useState([]);
  const [change,setchange] = useState("");
  const [repo,setRepo] = useState([]);
  
  const fetchuser = async () =>{
    const result =  await axios.get(`https://api.github.com/users/${change}`).then(res =>{
      setUser(res.data)
    })
   const followert = await axios.get(`https://api.github.com/users/${change}/followers`).then(
     resp =>{
       setfollowers(resp.data);
     

     }
   )
   const repos = await axios.get(`https://api.github.com/users/${change}/repos`).then(
    resp =>{
      setRepo(resp.data);
    

    }
  )
  } 
 
  return (
    
    <>

    <input type ="text" onChange={(e) => setchange(e.target.value)}></input>
    <button onClick={fetchuser}   >Click Here To Get User Github Info Info</button>
    <img src={user.avatar_url} />
   
    <h1>Followers = {user.followers} </h1>
    <h1>Following = {user.following} </h1>
    <h1>Bio = {user.bio} </h1>
    <h1>Location = {user.location} </h1>
    <h1>User Followers</h1>
    <a href= {user.html_url} target = "_blank">Click Here to Open His Github</a>
    {followers.map((e)=>{
       return (
         <div>


      <h1>{e.login}</h1>
     <a href={e.html_url} target ="_blank"><img src = {e.avatar_url}></img></a>
         </div>
     
     );})}
     <h1>User Repos</h1>
    <a href= {user.html_url} target = "_blank">Click Here to Open His Github</a>
    {repo.map((e)=>{
       return (
         <div>


      <h1>{e.name}</h1>
     <a href={e.html_url} target ="_blank"> <h3>{e.full_name}</h3></a>
         </div>
     
     );})}
    </>
  );
}

export default App;
