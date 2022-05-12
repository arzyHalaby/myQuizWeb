import './Navbar.css';
// import { useNavigate } from 'react-router-dom';


export function Navbar(props: { navItems: { title: string, url: string }[]}) {
    // const navigat= useNavigate()
    return (
        <div className="Navbar">
            {/* <div className="navlogo"> */}
              {/* <img className="logoImg" src={props.logoImageUrl} alt="teatcerCartoon.jpg" /> </div> */}
                <ul className="NavItemsUl">
                    {props.navItems.map((curr, i) => (
                        <li key={i}> <a href={curr.url}> {curr.title} </a></li>

                    ))}
                </ul>
            </div>


    )
}
