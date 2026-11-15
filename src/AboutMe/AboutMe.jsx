import { Avatar, Card, Group, Stack, Text, Title, Badge } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { IconPhone, IconMail, IconMapPin } from '@tabler/icons-react'
import ProfilePic from './ProfilePic_1.jpg'

const AboutMe = () => {
  const compact = useMediaQuery('(max-width: 48em)')

  return (
    <Card className="cv-card" padding="lg" radius="md">
      <Title order={3} className="section-title" mb="md">About me</Title>
      <Group align="center" justify={compact ? 'center' : 'flex-start'} wrap="wrap" gap="lg">
        <Avatar src={ProfilePic} alt="Luca Amatemaggio" size={160} radius={100} />
        <Stack gap="xs" style={{ flex: 1, minWidth: 240 }}>
          <Title order={4} ta={compact ? 'center' : 'left'}>Luca Amatemaggio</Title>
          <Text>
            I love to work in a team, sharing, completing, and overcoming difficulties together with other people on a common goal.
            Very detail-oriented, I always try to improve projects while keeping an eye on business needs.
          </Text>
        </Stack>
      </Group>
      <Group justify="space-around" mt="xl" gap="sm" wrap="wrap">
        <Badge component="a" href="tel:+393406289044" variant="outline" className="contact-info" size="lg" leftSection={<IconPhone size={16} />}>
          3406289044
        </Badge>
        <Badge component="a" href="mailto:lamatemaggio@gmail.com" variant="outline" className="contact-info" size="lg" leftSection={<IconMail size={16} />}>
          lamatemaggio@gmail.com
        </Badge>
        <Badge variant="outline" className="contact-info" size="lg" leftSection={<IconMapPin size={16} />}>
          Ornago, MB, Italy
        </Badge>
      </Group>
    </Card>
  )
}

export default AboutMe
