const iconButtonStyle = {
	mr: 2,
	display: { sm: 'none' },
};

const desktopLogoStyle = { flexGrow: 1, 
    display: { xs: 'none', sm: 'flex'},
    justifyContent: 'start'
};

const navItemStyle = { 
    display: { xs: 'none', sm: 'block' },
    marginRight: '5rem' 
};

const drawerStyle = {
    display: { xs: 'block', sm: 'none' },
    '& .MuiDrawer-paper': { 
        boxSizing: 'border-box', 
        width: 220, 
        backgroundColor: 'rgb(48, 48, 48)' 
    }
};

const navLinkStyle = {
    textDecoration: 'none',
    color: '#fff',
    '&:hover': {
        color: '#FEDD58'
    }
};

const navLinkStyleMobile = {
    textDecoration: 'none',
    color: '#fff',
    textAlign: 'center',
    '&:hover': {
        color: '#FEDD58'
    }
};

const navButtonStyle = {
    backgroundColor: '#FEDD58',
    marginLeft: '2em',
    '&:hover': {
        backgroundColor: 'inherit',
        border: '1px #FEDD58 solid',
        '& .cta': {
            color: '#FEDD58'
        }
    }
};

const navBtnTextStyle = {
    textDecoration: 'none',
    color: '#000000',
    '&:hover': {
        color: '#FEDD58'
    }
}

const drawerButton = { 
    display: 'flex',
    justifyContent: 'center'
};

export { 
    iconButtonStyle, 
    desktopLogoStyle, 
    navItemStyle, 
    drawerStyle, 
    navLinkStyle,
    navLinkStyleMobile, 
    navButtonStyle, 
    navBtnTextStyle,
    drawerButton
};
