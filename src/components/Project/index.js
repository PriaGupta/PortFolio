import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectStyle'
import ProjectCard from '../Cards/ProjectCard'
import { projects } from '../../data/data';
const Project = ({openModal,setOpenModal}) => {
    const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
    <Wrapper>
      <Title>Projects</Title>
      <Desc>
         Here are some of my projects.
      </Desc>
      <ToggleButtonGroup >
        {toggle === 'all' ?
          <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          :
          <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
        }
        <Divider />
        {toggle === 'css' ?
          <ToggleButton active value="css" onClick={() => setToggle('css')}>CSS</ToggleButton>
          :
          <ToggleButton value="css" onClick={() => setToggle('css')}>CSS</ToggleButton>
        }
        <Divider />
        {toggle === 'React' ?
          <ToggleButton active value="React" onClick={() => setToggle('React')}>React</ToggleButton>
          :
          <ToggleButton value="React" onClick={() => setToggle('React')}>React</ToggleButton>
        }
        <Divider />
        {toggle === 'MERN' ?
          <ToggleButton active value="MERN" onClick={() => setToggle('MERN')}>MERN</ToggleButton>
          :
          <ToggleButton value="MERN" onClick={() => setToggle('MERN')}>MERN</ToggleButton>
        }
      </ToggleButtonGroup>
      <CardContainer>
        {toggle === 'all' && projects
          .map((project) => (
            <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
          ))}
        {projects
          .filter((item) => item.category == toggle)
          .map((project) => (
            <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
          ))}
      </CardContainer>
    </Wrapper>
  </Container>
  )
}

export default Project
