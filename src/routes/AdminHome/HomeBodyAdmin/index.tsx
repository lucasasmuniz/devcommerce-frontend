import { useEffect, useState } from "react";
import { userDTO } from "../../../models/user";
import * as userService from '../../../services/userService.js'

export default function HomeBodyAdmin(){

    const [user, setUser] = useState<userDTO>()

    useEffect(() => {
        userService.findMe()
            .then(response => {
                setUser(response.data);
            })
            .catch(error => {console.log("erro" , error)})
    }, [] )

    return(
        <main>
    <section id="admin-home-section" className="devc-container devc-pd-top-20">
        <div className="devc-section-title devc-mb-20">
            <h2>Bem-vindo à área administrativa, {user?.name}</h2>
        </div>
    </section>
</main>
    );
}
