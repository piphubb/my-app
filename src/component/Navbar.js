import React from "react";
import "../css/Navbar.css";
import style from "../css/Navbar.module.css";

const Navbar = () => {

        const menus = [
            {id: 1, title: 'Home', path: '/home'},
            {id: 2, title: 'News', path: '/news'},
            {id: 3, title: 'About', path: '/about'},
            {id: 4, title: 'Contact', path: '/contact'},
        ]

//         const myStlye = {

//             color : '#black',
//             background: 'blue',
//         }


    return (
        <>
           {/* <a href={props.path}>{props.title}</a> */}
           {/* <a href={props.item.path}>{props.item.title}</a> */}

            <ul className={style.nav}>
                {menus.map((item) => (
                    <li key={item.id}  style={{listStyleType:'none'}}>
                        <a href={item.path}>{item.title}</a>
                    </li>
                ))}
            </ul>

        </>
    )
}

export default Navbar;
