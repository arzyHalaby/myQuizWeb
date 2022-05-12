

import { Outlet, useNavigate } from "react-router-dom"
import { CratQuizArry } from "./CreatQuizAryy"
import './CreatQuiz.css';


export function CreateQuiz() {
    const navigate = useNavigate();
    return (
        <div className='mainCreatQuiz'>


            <div className="lestOfTheGames">
                <div className="theGameListHeader">THE GAMES LIST:</div>
                
                <div onClick={() => { navigate("/createQuiz/ContentGallery/basket") }} >Drag and drop game </div>
                <div onClick={() => { navigate("/createQuiz/ContentGallery/memoryGame") }}>Memory game </div>
                <div onClick={() => { navigate("/createQuiz/ContentGallery/flashcardGame") }}>Flashcard game </div>
            </div>
            <Outlet />
        </div>
    )
}

// export function Navigat(props: { Pro: { title: string, url: string }[] }) {
//     const navigate = useNavigate()
//     return (
//         < div className='CreatQuiz' >
//             {props.Pro.map((curr, i) => (
//                 <div className='CreatQuizNavigat' key={i}
//                     onClick={() => { navigate('/CreatQuiz/' + curr.url) }}>
//                     {curr.title}

//                 </div>
//             ))}
//         </div >
//     )
// }

