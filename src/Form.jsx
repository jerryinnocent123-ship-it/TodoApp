import { useState } from "react"

export default function Form(){
    const [form, setForm]=useState({name:"", descr: ""})
    const [data, setData]=useState([])

    // function ki veye chanjman
    function change(e){
       
    setForm((previous) => ({
      ...previous,
      [e.target.name]: e.target.value,
      
    }));
  }  


    
    //function ki ajoutel nan list la
    function addData(f){
        const newData = { ...f, id: Date.now()}
        setData((pr)=>[...pr, newData])
        setForm({name:"", descr:""})

    }
    
    return(
        <>
        <div className="form">
            <form>

                <input type="text"
                        name="name"
                        placeholder="Enter your name"
                        onChange={change}
                        value={form.name}
                 /> 
                 <br />

                <input type="text"
                        name="descr"
                         placeholder="Enter your description"
                        onChange={change}
                        value={form.descr}
                 />
                 <br />
                 <button type="button" onClick={()=>addData(form)}>Add</button>
            </form>

            <div>
                <h1>les choix:

                </h1>

                <div>
                    {data.map((i) => {
                     return (
                             <ul key={i.id}>
                                <p>{i.name}</p>
                                <p>{i.descr}</p>
                            </ul>
                             )
                            })}
                </div>
            </div>
        </div>
        </>
    )}
