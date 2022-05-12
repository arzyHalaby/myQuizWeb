

import './OverSaid.css';


export function OverSaid(props: { overSaidItems: { title: string, url: string }[] }) {

    return (

        <div className="overSaidAll">

            <ul className="pagesItemsUl">
                {props.overSaidItems.map((curr, i) => (
                    <li key={i}> <a href={curr.url}> {curr.title} </a></li>
                ))}
            </ul>
        </div>


    )
}
//=====================================================================================


