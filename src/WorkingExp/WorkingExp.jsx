import { Card, CardContent, CardHeader, Hidden, Typography } from '@mui/material'
import { TodayOutlined } from '@mui/icons-material'
import React from 'react'
import { Box } from '@mui/system'

const WorkingExp = () => {
  return (
    <Card>
        <CardHeader title="Working experiences" />
        <CardContent>
          <Box display={'flex'} alignItems={'start'} justifyContent={'space-between'}>
            <Box>
              <Typography variant="h6">
                Bosch Rexroth
              </Typography>
              <Typography variant="body1" style={{fontWeight: 600}}>Senior Frontend Developer</Typography>
              <Typography variant="body2" gutterBottom>2015 - today</Typography>
            </Box>
            <Hidden smDown>
              <Box>
                <img src='./rexroth_logo.png' height={'50vh'} />
              </Box>
            </Hidden>
          </Box>
          <Typography variant="body1">
            I work in a team of 6 people following the Agile Scrum method, where I manage the frontend part of our internal and external applications, from initial design to code implementation. I am also involved on the backend part working with API and security.
            Along with simple survey apps we developed and deployed web applications related to strategic market planning, a product configurator for external dealers and a system to keep track of the technical data for customer's orders.
          </Typography>        
        </CardContent>
    </Card>
  )
}

export default WorkingExp