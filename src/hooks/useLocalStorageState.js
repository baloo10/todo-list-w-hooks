import {useState, useEffect} from "react";

function UseLocalStorageState(key, defaultVal) {
    //make piece of state, based off of value in localstorage(or default)
    const [state, setState] = useState(() => {
        let val;
        try {
            val = JSON.parse(window.localStorage.getItem(key) || String(defaultVal))
        }
        catch (e){
            val = defaultVal;
        }
        return val;
    })

    //use useEffect to update localstorage when state changes
    //we add a function that runs everytime we render
    //we want to sync todos, to local storage, every time something in the state changes
    //the [todos] in the end, just make it clear for useEffect when it shoud run, when it is 
    //change in [todos] then run the function
    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(state));
    }, [state]);
    return [state, setState];
}

export default UseLocalStorageState;