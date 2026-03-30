import { useState } from "react"

export default function Form(){
    const [form, setForm]=useState({name:"", mail: ""})
    const [data, setData]=useState([])

    // veye chanjman
    function handleChange(event) {
    setForm((previous) => ({
      ...previous,
      [event.target.name]: event.target.value,
    }));
  }
  
    
   const handleSoumission = async (event)=>{
    event.preventDefault();

    try{
        const reponse = await fetch("https://formspree.io/f/mwvrrrob", {
            method: "POST",
            headers:{"content-type":"application/json"},
            body: JSON.stringify(data),
        })
    }
    catch(error){
        console.log(error)
    }
   }

    
    return(
        <>
       <input type="text"
       name="name"
       placeholder="Enter youn name"
       onChange={handleChange}
       value={form.name}
       />

       <input type="email"
       name="mail"
       placeholder="Enter your mail"
       onChange={handleChange}
       value={form.mail}
       />

       <button onClick={()=>handleSoumission}>Soumettre</button>
        </>

        
    )}

    
