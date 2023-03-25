import { Link } from "react-router-dom"

interface IHamburgerMenuProps {
    handleOpenMenu(status:boolean): void;
    open: boolean;
}

export const HamburgerMenu = (props:IHamburgerMenuProps) => {
    const handleClick = () => {
        props.handleOpenMenu(false);
    }
    return (
        <>
            <ul>
                <li onClick={handleClick}>
                    <Link to="/">Startsida</Link>
                </li>
                <li onClick={handleClick}>
                    <Link to="/menu">Menu</Link>
                </li>
                <li onClick={handleClick}>
                    <Link to="/booking">Boka bord</Link>
                </li>
                <li onClick={handleClick}>
                    <Link to="/contact">Kontakta oss</Link>
                </li>
                <li onClick={handleClick}>
                    <Link to="/admin">Admin</Link>
                </li>
            </ul>
        </>
    )
}