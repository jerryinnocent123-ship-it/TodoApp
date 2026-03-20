import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./task.css"


export default function Task() {

    const [input, setInput] = useState({ nom: "", desc: "" })
    const [data, setData] = useState([])

    const [chan, setChan] = useState({ text: "", def: "" })
    const [done, setDone] = useState([])

    function veyeChan(e) {
    setChan((prev) => ({
        ...prev,
        [e.target.name]: e.target.value
    }))
}

   const mete = () => {
    const newDone = { ...chan, id: uuidv4() }

    setDone((e) => [
        ...e,
        newDone
    ])

    setChan({ text: "", def: "" })
}


        const handleChange = (event) => {
            setInput((change) => ({
                ...change,
                [event.target.name]: event.target.value
            }))

        }


        const addTask = (list) => {
            const newList = { ...list, id: uuidv4() }
            setData((ev) =>
                [...ev, newList]
            )
            setInput({ nom: "", desc: "" })
        }
        return (
            <>
                <div className="tasklist-containers">
                    <h1>Ajouter des taches</h1>

                    <div className="task-input">
                        <input type="text"
                            name="nom"
                            placeholder="Enter your Task..."
                            onChange={handleChange}
                            value={input.nom}

                        />

                        <input type="text"
                            name="desc"
                            placeholder="Enter your description..."
                            onChange={handleChange}
                            value={input.desc}

                        />
                        <button onClick={() => addTask(input)}>Add Task</button>
                    </div>

                    <div className="task">
                        <h3>
                            ListTask
                        </h3>
                        <div>
                            {data.map((e) => (
                                <li key={e.id}>
                                    <p>{e.nom}</p>
                                    <p> {e.desc} </p>
                                </li>
                            ))}
                        </div>
                    </div>

                </div>

                <div className="blackList-container">
                    <h2>Black List</h2>
                    <div className="listNoir">


                        <input type="text"
                            placeholder="Add something in black list..."
                            name="text"
                            onChange={veyeChan}
                            value={chan.text}

                        />

                        <input type="text"
                            placeholder="Why you added this..."
                            name="def"
                            onChange={veyeChan}
                            value={chan.def}
                        />

                        <button onClick={()=>mete(chan)}>Ajouter</button>
                    </div>

                    <div className="chanAjoute">
                        {done.map((i) => (
                            <li key={i.id}>
                                <p>{i.text} </p>
                                <p>{i.def} </p>
                            </li>
                        ))}
                    </div>
                </div>

            </>
        );
    }