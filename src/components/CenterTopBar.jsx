import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons"
export function CenterTopBar(){
    return (
        <div className="flex flex-row justify-between items-center">
            <div>
                <input className="border border rounded-md p-1 outline-none" placeholder="Search item"/>
            </div>
            <div className="flex gap-5 font-medium">
                <div>Login</div>
                <div>Register</div>
                <div><FontAwesomeIcon icon={faBasketShopping}/></div>
            </div>
        </div>
    )
}