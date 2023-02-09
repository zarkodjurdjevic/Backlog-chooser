import { useState } from "react";
import { useDispatch } from "react-redux";
import { filterGamesByTitle, filterGamesByPlatform } from "../../helpers/filterGames";
import {games} from "../../data/games";
import "../Form/Form.css";

const Form = () => {

    const [inputs, setInputs] = useState([
        {
            id: "title",
            value: "",
            label: "TITLE",
            filter: filterGamesByTitle,
        },
        {
            id: "platform",
            value: "",
            label: "PLATFORM",
            filter: filterGamesByPlatform,
        }
    ]);

    let dispatch = useDispatch();

    const onInputChanged = (event) => {
        let copy = [...inputs];
        copy.map(input => {
            if (input.id === event.target.id) {
                input.value = event.target.value;
            }
        })
        setInputs(copy);
    }

    const inputsToBeRendered = inputs.map(objectFromStateArray => {
        return (
        <div key={objectFromStateArray.id} className="form__wrapper">
            <label className="form__label" htmlFor={objectFromStateArray.id}>{objectFromStateArray.label}</label>
            <input className="form__input" onChange={onInputChanged} id={objectFromStateArray.id} type="text" value={objectFromStateArray.value} />
        </div>
        );
    })

    //dispatch schrijft het naar de store toe'
    //door het dispatch kan je gebruik maken van filteren 

    const submit = (event) => {
        event.preventDefault();
        let result = games;//is de hele game lijst voorbeeld [a,b,c,d]
        inputs.forEach(input => {
            //[a,b,c,d] => [a,b] => [a]
            result = input.filter(input.value, result);
        })
        dispatch({
            type: "FILTEREDGAMES",
            payload: result, 
        })
    }

    return (
        <form className="form1" onSubmit={submit}>
            <div className="formInputWrapper">
                {inputsToBeRendered}
            </div>
            <button className="form__knop" onClick={submit}>Zoeken</button>
            <h1></h1>
        </form>
    );


}

export default Form;