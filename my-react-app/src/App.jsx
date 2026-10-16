// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <section id="center">
//         <div className="hero">
//           <img src={heroImg} className="base" width="170" height="179" alt="" />
//           <img src={reactLogo} className="framework" alt="React logo" />
//           <img src={viteLogo} className="vite" alt="Vite logo" />
//         </div>
//         <div>
//           <h1>Get started</h1>
//           <p>
//             Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
//           </p>
//         </div>
//         <button
//           type="button"
//           className="counter"
//           onClick={() => setCount((count) => count + 1)}
//         >
//           Count is {count}
//         </button>
//       </section>

//       <div className="ticks"></div>

//       <section id="next-steps">
//         <div id="docs">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#documentation-icon"></use>
//           </svg>
//           <h2>Documentation</h2>
//           <p>Your questions, answered</p>
//           <ul>
//             <li>
//               <a href="https://vite.dev/" target="_blank">
//                 <img className="logo" src={viteLogo} alt="" />
//                 Explore Vite
//               </a>
//             </li>
//             <li>
//               <a href="https://react.dev/" target="_blank">
//                 <img className="button-icon" src={reactLogo} alt="" />
//                 Learn more
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div id="social">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#social-icon"></use>
//           </svg>
//           <h2>Connect with us</h2>
//           <p>Join the Vite community</p>
//           <ul>
//             <li>
//               <a href="https://github.com/vitejs/vite" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#github-icon"></use>
//                  </svg>
//                 GitHub
//               </a>
//             </li>
//             <li>
//               <a href="https://chat.vite.dev/" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#discord-icon"></use>
//                 </svg>
//                 Discord
//               </a>
//             </li>
//             <li>
//               <a href="https://x.com/vite_js" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#x-icon"></use>
//                 </svg>
//                 X.com
//               </a>
//             </li>
//             <li>
//               <a href="https://bsky.app/profile/vite.dev" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#bluesky-icon"></use>
//                 </svg>
//                 Bluesky
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>

//       <div className="ticks"></div>
//       <section id="spacer"></section>
//     </>
//   )
// }

// export default App

// import React from 'react';
// import './App.css';
// import reactimg  from './assets/reactimg.png';

// const App = () => {
//   return (
//     <div>
     
//      <h1 className="great">Hello + React</h1>
// <img src={reactimg} alt="React" />
//     </div>
//   );
// }
// export default App;
// 
// import React from 'react';    
//  import './App.css';
//  import img from './assets/reactimg.png';
//  import Button from './components/UI/button/button.jsx';

//  const App = () => {
//   return (
//     <div>
//     {/* <h1 className="great">Hello React</h1>
//       <img src={img} alt="Sample" width="200" />
//      <br /><br />
//      <label htmlFor="username">Enter your name:</label>
//      <input type="text" id="username" placeholder="Enter name" />
//        <br /><br />
//       <Button name="Click Me" onClick={() => alert('Hello React!')} />*/}
// <label>Counter:{counter}</label>
//       <button name= {"Increment"} onClick={()=>setCounter(counter+1)}>Increment</button>
//       <button name= {"Decrement"} onClick={()=>setCounter(counter-1)}>Decrement</button>

//    </div>
//   );
//  };
// export default App; 

// import { useState } from 'react';
// import './App.css';
// import img from './assets/reactimg.png';
// import Button from './components/UI/button/button';

// const App = () => {
//   const [counter, setCounter] = useState(0);

//   return (
//     <div>
//       <h1 className="greet">Hello React</h1>
//       <img src={img} alt="Sample" width="200" />
//       <br /><br />
//       <label htmlFor="username">Enter your name:</label>
//       <input type="text" id="username" placeholder="Enter name" />
//       <br /><br />
//       <label>Counter: {counter}</label>
//       <Button name="Increment" onClick={() => setCounter((prev) => prev + 1)} />
//       <Button name="Decrement" onClick={() => setCounter((prev) => prev - 1)} />
//     </div>
//   );
// };

// export default App;

// import { useEffect, useState } from 'react';
// import './App.css';

// const App = () => {
//   const [counter, setCounter] = useState(0);
//   const [data, setData] = useState([]);
  
//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch('https://jsonplaceholder.typicode.com/users');
//       const data = await response.json();
//       setData(data);
//     }
//     fetchData();
//   }, []);

//   return (
//     <div>
//       {/* <h1 className="greet">Hello! Vite + React</h1>
//       <img className="image" src={tulipImage} alt="Tulip" /><br />
//       <label>Name:</label> 
//       <input type="text" ></input><br></br>
//       <Button name="Hello all" onClick={() => alert('Button is clicked')} /> */}
//       <label>Counter:{counter}</label>
//       <button name= {"Increment"} onClick={()=>setCounter(counter+1)}>Increment</button>
//       <button name= {"Decrement"} onClick={()=>setCounter(counter-1)}>Decrement</button>

//       <h2>Users</h2>
//       <ul>
//         {data.map((user) => (
//           <li key={user.id}>
//             <strong>{user.name}</strong> - {user.email}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
// export default App;         






// import {useState} from "react";
// import Title from "./components/Title.jsx";
// function App() {
//   const [count, setCount]=useState(0);
//   return(
//     <>
//     <Title count={count} />
//     <button onClick={() => setCount(count + 1)}>Click me</button>
//     </>
//   );
// }
// export default App;



// import { useState } from 'react'

// export default function App() {
//   const [text, setText] = useState('')

//   return (
//     <div style={{ padding: 40 }}>
//       <input
//         type="text"
//         placeholder="Type Here..."
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//       />
//       <h2>You typed: {text}</h2>
//     </div>
//   )
// }

import { useState } from "react";

const App = () => {
  const [form, setForm] = useState({
    firstName: "",
    email: "",
    age: "",
  });

  const [submitted, setSubmitted] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(form);
  };

  return (
    <div>
      <h1>Registration Form</h1>

      <form onSubmit={handleSubmit}>
        <label>First Name:</label>
        <input
          name="firstName"
          value={form.firstName}
          onChange={handleChange}
          required
        />

        <br /><br />

        <label>Email:</label>
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <br /><br />

        <label>Age:</label>
        <input
          name="age"
          type="number"
          value={form.age}
          onChange={handleChange}
          required
        />

        <br /><br />

        <button type="submit">Submit</button>
      </form>

      {submitted && (
        <div>
          <h2>Submitted Details</h2>
          <p>First Name: {submitted.firstName}</p>
          <p>Email: {submitted.email}</p>
          <p>Age: {submitted.age}</p>
        </div>
      )}
    </div>
  );
};

export default App;













