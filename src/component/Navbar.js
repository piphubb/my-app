import React from "react";

const Navbar = () => {

        const menus = [
            {id: 1, title: 'Home', path: '/home'},
            {id: 2, title: 'News', path: '/news'},
            {id: 3, title: 'About', path: '/about'},
            {id: 4, title: 'Contact', path: '/contact'},
        ]

    return (
        <>
           {/* <a href={props.path}>{props.title}</a> */}
           {/* <a href={props.item.path}>{props.item.title}</a> */}

            <ul>
                {menus.map((item) => (
                    <li key={item.id}>
                        <a href={item.path}>{item.title}</a>
                    </li>
                ))}
            </ul>

        </>
    )
}

export default Navbar;