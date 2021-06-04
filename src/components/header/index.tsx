import React,{FC} from 'react'
import Logo from '../../assets/image/logo.svg'
import avatar from '../../assets/image/avatar.jpg'

const Header:FC = () => {
    return (
        <header className="header">
            <div className="main">
                <div className="header-center">
                   <img src={Logo} alt="logo" />
                </div>
                <div className="user-avatar">
                    <img src={avatar} alt="avatar" />
                </div>
            </div>
        </header>
    )
}

export default Header