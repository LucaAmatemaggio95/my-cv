import { Card, Group, Stack, Text, Title, Image, Divider } from '@mantine/core'
import { IconSchool } from '@tabler/icons-react'

const learn = [
  { name: 'Azure Administration A', location: 'Microsoft', date: '09/04/2021', image: './microsoft_logo.png' },
  { name: 'Exin Certification', location: 'Agile Scrum Foundation', date: '18/06/2018', image: './exin_logo.jpg' },
  { name: 'SQL MOC 20761C', location: 'Microsoft', date: '01/09/2018', image: './microsoft_logo.png' },
  { name: 'IELTS Certification', location: 'SELC - Sydney (AU)', date: '2014 – 2015', image: './ielts_logo.png' },
  { name: 'Diploma: IT & Telecommunications', location: 'ITSOS Marie Curie', date: '2009 – 2014' },
]

const Formation = () => (
  <Card className="cv-card" padding="lg" radius="md">
    <Title order={3} className="section-title" mb="md">Formation &amp; Courses</Title>
    <Stack gap="md">
      {learn.map((item, index) => (
        <div key={item.name}>
          {index > 0 && <Divider mb="md" color="dark.4" />}
          <Group align="center" wrap="nowrap" gap="md">
            {item.image ? <Image src={item.image} alt={`${item.location} logo`} w={48} h={48} fit="contain" /> : <IconSchool size={28} />}
            <Stack gap={2}>
              <Title order={5}>{item.name}</Title>
              <Text fw={600}>{item.location}</Text>
              <Text size="sm" c="dimmed">{item.date}</Text>
            </Stack>
          </Group>
        </div>
      ))}
    </Stack>
  </Card>
)

export default Formation
