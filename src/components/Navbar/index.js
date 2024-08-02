import React from 'react'
import {Nav,NavLink,NavbarContainer,NavLogo,MobileIcon,NavItems,GitHubButton, ButtonContainer, MobileMenu, MobileNavLogo, MobileMenuLink, Span} from './NavbarStyledComponent';
import { FaBars } from 'react-icons/fa';
import { Bio } from '../../data/data'; 
// import { Close, CloseRounded } from '@mui/icons-material';
import { useTheme } from 'styled-components';
import {Link} from 'react-router-dom'

const Navbar = () => {
  const [open,setOpen]= React.useState(false);
  const theme = useTheme();

  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setOpen(false); // Close the menu after clicking a link
  };
  return (
    <div>
     <Nav>
      <NavbarContainer>
      <NavLogo to="/">
      <a style={{
        display:"flex",
        alignItems:"center",
        color: "white",
        marginBottom:"20",
        cursor:"pointer",
      }}>
     <Span>Portfolio</Span> </a></NavLogo>
      <MobileIcon>
        <FaBars 
         onClick={()=>{
          setOpen(!open);
         }}
        />
      </MobileIcon>
      <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href='#skills'>Skills</NavLink>
          <NavLink href='#experience'>Experience</NavLink>
          <NavLink href='#projects'>Projects</NavLink>
          <NavLink href='#education'>Education</NavLink>
        </NavItems>
      <ButtonContainer>
     <GitHubButton href={Bio.github} target="_blank"> Github Profile</GitHubButton>  
      </ButtonContainer>
     
      {/* { open && <MobileMenu open={open}>
      <MobileMenuLink href="#about"
      //  onClick={() => {
      //         setOpen(!open)
      //       }}
      >About</MobileMenuLink>
            <MobileMenuLink href='#skills' onClick={() => {
              setOpen(!open)
            }}>Skills</MobileMenuLink>
            <MobileMenuLink href='#experience' onClick={() => {
              setOpen(!open)
            }}>Experience</MobileMenuLink>
           
            <MobileMenuLink href='#projects' onClick={() => {
              setOpen(!open)
            }}>Projects</MobileMenuLink>
      
            <MobileMenuLink href='#education' onClick={() => {
              setOpen(!open)
            }}>Education</MobileMenuLink>
            <GitHubButton style={{padding: '10px 16px',background: `${theme.primary}`, color: 'white',width: 'max-content'}} href={Bio.github} target="_blank">
              Github Profile</GitHubButton>
        </MobileMenu>} */}
        {open && (
          <MobileMenu open={open}>
            <MobileMenuLink onClick={() => handleScrollToSection('about')}>About</MobileMenuLink>
            <MobileMenuLink onClick={() => handleScrollToSection('skills')}>Skills</MobileMenuLink>
            <MobileMenuLink onClick={() => handleScrollToSection('experience')}>Experience</MobileMenuLink>
            <MobileMenuLink onClick={() => handleScrollToSection('projects')}>Projects</MobileMenuLink>
            <MobileMenuLink onClick={() => handleScrollToSection('education')}>Education</MobileMenuLink>
            <GitHubButton 
              style={{ padding: '10px 16px', background: `${theme.primary}`, color: 'white', width: 'max-content' }} 
              href={Bio.github} 
              target="_blank"
            >
              Github Profile
            </GitHubButton>
          </MobileMenu>
        )}
        </NavbarContainer>
     </Nav>
    </div>
  )
}

export default Navbar
