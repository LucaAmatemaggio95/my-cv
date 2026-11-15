import { Avatar, Card, Group, Stack, Text, Title } from '@mantine/core'

const techs = [
  { logo: './react_logo.svg', name: 'ReactJS', score: '8/10' },
  { logo: './js_logo.png', name: 'JavaScript', score: '8/10' },
  { logo: './css_logo.png', name: 'CSS3 & HTML5', score: '7/10' },
  { logo: './nextjs_logo.svg', name: 'NextJS', score: '7/10' },
  { logo: './java_logo.svg', name: 'Java', score: '7/10' },
  { logo: './net_core_logo.png', name: '.NET Core', score: '7/10' },
  { logo: './php_logo.svg', name: 'PHP', score: '6/10' },
  { logo: './nodejs_logo.svg', name: 'NodeJS', score: '7/10' },
  { logo: './azure_logo.svg', name: 'MS Azure', score: '6/10' },
  { logo: './googlecloud_logo.svg', name: 'GCP', score: '7/10' },
  { logo: './firebase_logo.svg', name: 'Firebase', score: '7/10' },
  { logo: './typescript_logo.svg', name: 'TypeScript', score: '7/10' },
  { logo: './neondb_logo.svg', name: 'Neon DB', score: '8/10' },
  { logo: './git_logo.svg', name: 'Git & GitHub', score: '8/10' },
]

const TechSkills = () => (
  <Card className="cv-card" padding="lg" radius="md">
    <Title order={3} className="section-title" mb="md">Tech skills</Title>
    <Stack gap="sm">
      {techs.map((tech) => (
        <Group key={tech.name} justify="space-between" wrap="nowrap">
          <Group gap="sm" wrap="nowrap">
            <Avatar src={tech.logo} alt={`${tech.name} logo`} radius={0} size="sm" />
            <Text>{tech.name}</Text>
          </Group>
          <Text fw={600}>{tech.score}</Text>
        </Group>
      ))}
    </Stack>
  </Card>
)

export default TechSkills
