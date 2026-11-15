import { Card, Group, Stack, Text, Title, Image, Divider } from '@mantine/core'

const experiences = [
  {
    company: 'Abstract',
    role: 'Senior Consultant',
    dates: '2023 – Present',
    logo: './abstract_logo.svg',
    description: 'I work in a team of 6 people where I am responsible for the development of highly responsive frontend components and applications for different customers. My main tasks include creating new features for multiple screen sizes and bug fixing, alongside testing and analysis of new requests. I am also involved in the development and maintenance of the backend microservices.',
  },
  {
    company: 'Cleafy S.p.a',
    role: 'Frontend Engineer',
    dates: '2022 – 2023',
    logo: './cleafy_logo.svg',
    description: 'I work in a team of 4 people where I manage the development, testing and maintainability of the frontend components of our products. I am also involved in UI/UX improvements, working alongside the marketing team to keep our software aligned with the latest trends.',
  },
  {
    company: 'Bosch Rexroth',
    role: 'Senior Frontend Developer',
    dates: '2015 – 2022',
    logo: './rexroth_logo.png',
    description: "I worked in a team of 6 people following the Agile Scrum method, managing the frontend of internal and external applications from initial design to implementation. I was also involved in backend APIs and security. We developed web applications for strategic market planning, a product configurator for external dealers, and a system to track technical data for customer orders, as well as survey apps.",
  },
]

const WorkingExp = () => (
  <Card className="cv-card" padding="lg" radius="md">
    <Title order={3} className="section-title" mb="md">Working experiences</Title>
    <Stack gap="lg">
      {experiences.map((experience, index) => (
        <div key={experience.company}>
          {index > 0 && <Divider mb="lg" color="dark.4" />}
          <Group justify="space-between" align="flex-start" mb="sm" wrap="nowrap">
            <Stack gap={2}>
              <Title order={4}>{experience.company}</Title>
              <Text fw={600}>{experience.role}</Text>
              <Text size="sm" c="dimmed">{experience.dates}</Text>
            </Stack>
            {experience.logo && (
              <div className="company-logo">
                <Image src={experience.logo} alt={`${experience.company} logo`} w={90} h={48} fit="contain" />
              </div>
            )}
          </Group>
          <Text>{experience.description}</Text>
        </div>
      ))}
    </Stack>
  </Card>
)

export default WorkingExp
