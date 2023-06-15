 import { useState } from 'react';
 import logo from '../../assets/TPQ-Detailing-yellow.png'
 import './navbar.css'

 //MUI Comps
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

//Styles

import { 
  desktopLogoStyle, 
  iconButtonStyle, 
  navItemStyle, 
  drawerStyle, 
  navLinkStyle,
  navButtonStyle,
  navBtnTextStyle,
  navLinkStyleMobile,
  drawerButton
 } from './navbarStyles';
import { Link } from '@mui/material';
// import { Link } from '@mui/material';


const navItems = ['Home', 'Pricing','About', 'Book Now'];

function NavBar({ window }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', color: 'white'}}>
      <Link href='#home'>
        <img src={logo} alt="TPQ Golden Logo" className='nav-logo'/>
      </Link>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton style={ drawerButton }>
              <Link href={`#${item === 'Book Now'? 'contact' :item.toLowerCase()}`} sx={ navLinkStyleMobile }>
                {item}
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" color='primary'>
        <Toolbar className='button-right'>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={iconButtonStyle}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={ desktopLogoStyle }>
              <Link href='#home'>
                <img src={logo} alt="TPQ Golden Logo" className='nav-logo'/>
              </Link>
            </Box>
          <Box sx={navItemStyle}>
            {navItems.map((item) => (
              <Button key={item} sx={ item === 'Book Now' && navButtonStyle}>
                <Link href={`#${item === 'Book Now'? 'contact' :item.toLowerCase()}`} 
                  sx={ item === 'Book Now' ? navBtnTextStyle : navLinkStyle}
                  className='cta'>
                  {item}
                </Link>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="dark"
          anchor='right'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={drawerStyle}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default NavBar