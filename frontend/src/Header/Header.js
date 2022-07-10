import {useState} from 'react';
import './Header.css';


function Header() {
    const [header,setHeader] = useState()
    return(
        
        <header widthFull>
            {header}
        </header>

        
    )
}
export default Header;