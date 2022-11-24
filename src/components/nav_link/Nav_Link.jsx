import "./nav_link.css";


const NAV_LINK = ({href,children}) => {
    return (
        <li><a href={href}>{children}</a></li>
    )
};
export default NAV_LINK;