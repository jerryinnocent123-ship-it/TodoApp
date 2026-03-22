import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react"
import { Trash } from "lucide-react";
import { CheckCircle } from "lucide-react";


export default function AddTodo() {

    const [input, setInput] = useState({ nom: "", descri: "" })

    const [dataInput, setDataInput] = useState(() => {
        const saved = localStorage.getItem("tasks")
        return saved ? JSON.parse(saved) : []
    })

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(dataInput))
    }, [dataInput])

    function veyeChanjman(event) {
        setInput((suiv) => ({
            ...suiv,
            [event.target.name]: event.target.value
        }))


    }

    function ajoute(done) {

        if (input.nom.trim() === "" || input.descri.trim() === "") {
            alert("Tanpri ranpli tout chan yo")
            return
        }
        const newData = { ...done, id: uuidv4() }
        setDataInput((res) => [...res, newData])
        setInput({ nom: "", descri: "" })




    }


    function suprime(id) {
        const newTask = dataInput.filter((r) => r.id != id)
        setDataInput(newTask)

    }

    function complete(id) {
        setDataInput(
            dataInput.map((i) =>
                i.id === id ? { ...i, complete: true } : i
            )

        )
    }

    const completeTask = dataInput.filter((e) => e.complete)


    function clear(){
        setDataInput([])
    }

    return (
        <>
            <h1> Sa se todo app Jerry</h1>

            <input type="text"
                name="nom"
                placeholder="Enter the name of task..."
                onChange={veyeChanjman}
                value={input.nom}

            />

            <input type="text"
                name="descri"
                placeholder="Enter the description of task..."
                onChange={veyeChanjman}
                value={input.descri}
            />

            <button onClick={() => ajoute(input)}> Add Task</button>


            <button onClick={clear}>Clear all task</button>


            <h1>Sa se kote task yo pral afiche</h1>
            <div className="data-list">
                {dataInput.map((e) => (
                    <ul key={e.id}>
                        <li> Nom:{e.nom}</li>
                        <li>Description:  {e.descri}</li>
                        <button onClick={() => suprime(e.id)}><Trash color="red" size={15}/>Remove</button>


                        <button onClick={() => complete(e.id)}><CheckCircle color="bleu" size={15}/>Complete</button>
                    </ul>

                ))}


            </div>

            <h1>sa se kote task complete yo ap ye</h1>

            <div className="data-complete">
                {completeTask.map((e) =>
                    <ul key={e.id}>

                        <li> {e.nom} </li>
                        <li> {e.descri} </li>
                    </ul>
                )}
            </div>

        </>
    )
}