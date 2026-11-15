import { Card, Group, Pill, Title } from '@mantine/core'

const techs = [
  'Vite', 'Mantine UI', 'Git & GitHub', 'PWA', 'C#', 'Entity Framework',
  'NodeJS', 'SQL', 'MVC', 'TypeScript', 'JWT', 'PHP', 'Bootstrap', 'Redux',
]

const OtherTechs = () => (
  <Card className="cv-card" padding="lg" radius="md">
    <Title order={3} className="section-title" mb="md">Familiar techs</Title>
    <Group gap="xs">
      {techs.map((tech) => <Pill key={tech} className="tech-pill">{tech}</Pill>)}
    </Group>
  </Card>
)

export default OtherTechs
