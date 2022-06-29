import '../Css/TopNav.css'
import { GoMarkGithub, GoTriangleDown, GoSearch, GoThreeBars } from "react-icons/go";
import { useEffect, useState } from 'react';


const TopNav = ({ showNav }) => {
    const [hide, setHide] = useState(false)
    const [shouldShow, setsetShouldShow] = useState(false)

    const showSearch = () => {
        setHide(!hide)
    }
    const handelClick = () => {
        setsetShouldShow(!shouldShow)
        showNav(shouldShow)
    }
    useEffect(() => { handelClick() }, [])

    return (
        <div className='nav'>
            <div className='top-nav'>
                <div className='logo'>ITSoch</div>
                <GoThreeBars className='hamburger' onClick={handelClick} />
                <div className='nav-ess'>
                    <div className='search' onMouseEnter={showSearch} onMouseLeave={showSearch}>
                        <GoSearch onClick={handelClick} />
                        {hide && <input className='search-entry-lg' placeholder='search'></input>}
                    </div>
                    <div className='profile'>
                        <div className='username'>
                            <p>Memby_Poudel</p>
                            <GoTriangleDown className='down-tri' />
                        </div>
                        <GoMarkGithub className='profile-pic' />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TopNav;