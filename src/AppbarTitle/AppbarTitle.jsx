import { AppShell, Container, Title } from '@mantine/core'

const AppbarTitle = ({ scrolled }) => (
  <AppShell.Header
    px="md"
    style={{
      background: 'rgba(12, 31, 49, 0.92)',
      backdropFilter: 'blur(10px)',
      borderBottom: `1px solid ${scrolled ? '#2E7665' : '#22384b'}`,
    }}
  >
    <Container size="lg" h="100%" style={{ display: 'flex', alignItems: 'center' }}>
      <Title order={scrolled ? 4 : 3} c="white">My CV · Luca Amatemaggio</Title>
    </Container>
  </AppShell.Header>
)

export default AppbarTitle
