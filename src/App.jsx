import { useEffect, useState } from 'react'
import { AppShell, Container, Grid, Space } from '@mantine/core'
import AboutMe from './AboutMe/AboutMe'
import AppbarTitle from './AppbarTitle/AppbarTitle'
import Formation from './Formation/Formation'
import Hobbies from './Hobbies/Hobbies'
import OtherTechs from './TechSkills/OtherTechs'
import TechSkills from './TechSkills/TechSkills'
import WorkingExp from './WorkingExp/WorkingExp'

function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const updateScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', updateScroll)
    return () => window.removeEventListener('scroll', updateScroll)
  }, [])

  return (
    <AppShell header={{ height: 64, fixed: true }}>
      <AppbarTitle scrolled={scrolled} />
      <AppShell.Main>
        <Container size="lg" py="xl">
          <AboutMe />
          <Space h="lg" />
          <Grid gutter="lg">
            <Grid.Col span={{ base: 12, md: 8 }}>
              <WorkingExp />
              <div className="mobile-only">
                <Space h="lg" />
                <TechSkills />
                <Space h="lg" />
                <OtherTechs />
              </div>
              <Space h="lg" />
              <Formation />
              <Space h="lg" />
              <Hobbies />
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 4 }} className="desktop-only">
              <TechSkills />
              <Space h="lg" />
              <OtherTechs />
            </Grid.Col>
          </Grid>
        </Container>
      </AppShell.Main>
    </AppShell>
  )
}

export default App
