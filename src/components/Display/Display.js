import { useSelector } from "react-redux";
import "../Display/Display.css";
import { filterGames } from "../../helpers/filterGames";

const Display = () => {

    const filterGames = useSelector(state => { return state });

    let firstToBeRendered = false;

    const titlesToBeRendered = filterGames.map(game => {
        if (firstToBeRendered === false) {
            firstToBeRendered = true;
            return( <section key={game.title} className="display">
                <h2>{game.title}</h2>
                <figure className="display__play">Play this!</figure>
            </section>)

        }
        return <section key={game.title} className="display">
            <h2>{game.title}</h2>
        </section>
    })

    return (
        <>
            {titlesToBeRendered}
        </>
    )
}

export default Display;