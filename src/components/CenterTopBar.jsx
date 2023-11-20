import React,{useEffect, useState} from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons"
export function CenterTopBar(props){
    const onChangeSearch = (e)=>{
        props.onChangeSearch(e.target.value)
    }

    return (
        <div className="flex flex-row justify-between items-center">
            <div>
                <input className="border border border-green-200 rounded-md p-1 outline-none" placeholder="Search item" onChange={onChangeSearch}/>
            </div>
            <div className="flex gap-5 font-medium">
                <div>Login</div>
                <div>Register</div>
                <div className="text-green-500"><FontAwesomeIcon icon={faBasketShopping}/></div>
            </div>
        </div>
    )
}