import { useNavigate } from 'react-router-dom';



export function contentGallery() {
    return (
        <div></div>
    )
}

export function ContentGallery() {
    const navigate = useNavigate();
    return (
        <div>
            <div>contentGallery</div>
            <div onClick={() => { navigate("/createQuiz/basket") }} >hello </div>
            <div onClick={() => { navigate("/createQuiz/memoryGame") }}>word </div>
            <div onClick={() => { navigate("/createQuiz/flashcard") }}>word </div>
        </div>
    )
}
// export const x=10