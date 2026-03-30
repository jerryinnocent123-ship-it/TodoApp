
export default function EmployeeCard({ name, position, department, actif }) {


    return (
        <>
            {/* Lap Affiche information sou yn moun */}

            <div className="profil-containers">
                <div className="profil">

                    <div className="name">
                        <h2> {name} </h2>
                        <span className={actif}>
                            {actif === true ? "Actif" : "Inactif"}
                        </span>
                    </div>

                    <p className={position}> {position} </p>
                    <p className={department}> {department} </p>
                </div>
            </div>
        </>
    )
}
