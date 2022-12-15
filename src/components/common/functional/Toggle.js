import React from "react";
import { ToggleWrapper, Notch } from "../CommonIndex"; 

export function Toggle({isActive, onToggle}){
    return(
        <ToggleWrapper onClick={onToggle}>
            <Notch isActive={isActive}/>
        </ToggleWrapper>
    )

}