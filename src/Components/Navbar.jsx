import React, { useState } from 'react';
import Logo from '../Assets/Logo3.png';
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InfoIcon from '@mui/icons-material/Info';
import StarIcon from '@mui/icons-material/Star';



const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false)
    const menuOptions = [
        {
            text : "Vorteile",
            icon : <InfoIcon/>,
            target : "#about"
        },
        {
            text : "Features",
            icon : <StarIcon/>,
            target : "#slideshow"
        },
        {
            text : "Funktionen",
            icon : <InfoIcon/>,
            target : "#features"
        },
        {
            text : "Bewertungen",
            icon : <InfoIcon/>,
            target : "#testimonials"
        },
        {
            text : "Kontakt",
            icon : <InfoIcon/>,
            target : "#contact"
        },
    ]

  return (
    <nav>
        <div className="">
            <a href='#home'>
        <img src={Logo} alt="" style={{ width: "150px", height: "100px" }} /> </a>
        </div>
        <div className='navbar-links-container'>
        {/* <a href="#home">Home</a> */}
        <a href="#about">Vorteile</a>
        <a href="#slideshow">Features</a>
        <a href="#features">Funktionen</a>
        <a href="#testimonials">Bewertungen</a>
        <a href="#contact">Kontakt</a>

        <button
        className="primary-button"
        onClick={() => window.open("https://app.netznavi.net/", "_blank", "noopener,noreferrer")}>
        Zur App
        </button>    
        </div>
        <div className='navbar-menu-container'>
            <button onClick={() => setOpenMenu(true)} style={{ background: "none", border: "none" }}>
                <HiOutlineBars3 size={30} />
            </button>
        </div>
        <Drawer open={openMenu} onClose={()=> setOpenMenu(false)} anchor="right">
            <Box sx={{width : 250}} role="presentation" onClick={()=>setOpenMenu(false)} onKeyDown={()=>setOpenMenu(false)} >
            <List>
                {menuOptions.map((item) => (
                    <ListItem key={item.text} disablePadding>
                    <ListItemButton className='nav-mob-list'>
                        <a href={item.target} className='nav-mob-text'>
                        <ListItemText primary={item.text} />
                        </a>
                    </ListItemButton>
                    </ListItem>
                ))}
            </List>

            </Box>

        </Drawer>
    </nav>
  )
}

export default Navbar