import './Header.css';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { IconButton } from '@material-ui/core';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';

function Header() {
  return (
    <header className="header">
      <IconButton>
        <AccountCircleIcon fontSize="large" className="header__icon"/>
      </IconButton>

      <img className="header__logo" src="https://1000logos.net/wp-content/uploads/2018/07/Tinder-logo.png" alt="tinder logo"/>
    
      <IconButton>
        <ChatBubbleOutlineIcon fontSize="large" className="header__icon"/>
      </IconButton>
    </header>
  );
}

export default Header;