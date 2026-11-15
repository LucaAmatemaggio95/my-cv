import { Card, Text, Title } from '@mantine/core'

const Hobbies = () => (
  <Card className="cv-card" padding="lg" radius="md">
    <Title order={3} className="section-title" mb="md">Hobbies</Title>
    <Text>
      I love mountain biking and downhill racing, so every now and then I organize bike park days or long tours with my friends 🚵.
      I am also really into Formula 1 and very passionate about the wine world. I like to keep up with the latest tech trends and always try to learn something new 💻.
    </Text>
  </Card>
)

export default Hobbies
