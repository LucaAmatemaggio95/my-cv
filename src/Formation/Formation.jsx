import { SchoolOutlined } from '@mui/icons-material'
import { Card, CardContent, CardHeader, List, ListItem, ListItemIcon, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Formation = () => {

  const learn = [
    {
      name: 'Azure Administration A',
      location: 'Microsoft',
      date: "09/04/2021",
      image: './microsoft_logo.png'
    },
    {
      name: 'Exin Certification',
      location: 'Agile Scrum Foundation',
      date: "18/06/2019",
      image: './exin_logo.jpg'
    },
    {
      name: 'Querying Data with Transact SQL - MOC 20761C',
      location: 'Microsoft',
      date: "01/09/2018",
      image: './microsoft_logo.png'
    },
    {
      name: 'IELTS Certification',
      location: 'SELC - Sydney (AU)',
      date: "2014 - 2015",
      image: './ielts_logo.png',
      description: "I studied English in a six months program based on an advanced English course of 3 months and an IELTS preparation course of 3 months"
    },
    {
      name: 'Diploma: IT & Telecommunications',
      location: 'ITSOS Marie Curie',
      date: '2009 - 2014'
    }
  ]

  return (
    <Card>
        <CardHeader title="Formation & Courses" />
        <CardContent>
          <List>
            {learn.map(l => {
              return (
                <ListItem key={l.name}>
                  <ListItemIcon>
                    {l.image?
                      <img
                        alt="logo"
                        src={l.image}
                        width={'48px'}
                      />
                      : <SchoolOutlined color="primary" />
                    }
                  </ListItemIcon>
                <Box>
                  <Typography variant="h6">
                      {l.name}
                  </Typography>
                  <Typography variant="body1" style={{fontWeight: 600}}>{l.location}</Typography>
                  <Typography variant="body1">{l.date}</Typography>
                  {l.description
                    ? <Typography variant="subtitle2">{l.description}</Typography>
                    : null
                  }
                </Box>
              </ListItem>
              )
            })}
          </List>

        </CardContent>
    </Card>
  )
}

export default Formation