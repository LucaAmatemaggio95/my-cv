import { Avatar, Card, CardContent, CardHeader, List, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText, Typography } from '@mui/material'
import React from 'react'

const TechSkills = () => {

    const techs = [
        {
            logo: "./logo192.png",
            primary: 'ReactJS',
            score: '8/10'
        },
        {
            logo: "./js_logo.png",
            primary: 'Javascript',
            score: '8/10'
        },
        {
            logo: "./css_logo.png",
            primary: 'CSS3',
            score: '8/10'
        },
        {
            logo: "./html_logo.png",
            primary: 'HTML5',
            score: '7/10'
        },
        {
            logo: "./net_core_logo.png",
            primary: '.NET Core',
            score: '7/10'
        },
    ]

  return (
    <Card>
        <CardHeader title="Tech skills" />
        <CardContent>
            <List>
                {techs.map(t => {
                    return (
                        <ListItem key={t.primary}>
                            <ListItemAvatar>
                                <Avatar src={t.logo} sx={{borderRadius: 0}} />
                            </ListItemAvatar>
                            <ListItemText primary={t.primary} />
                            <ListItemSecondaryAction>
                                <Typography sx={{fontWeight: 600}}>
                                    {t.score}
                                </Typography>
                            </ListItemSecondaryAction>
                        </ListItem>
                    )
                })}
            </List>
        </CardContent>
    </Card>
  )
}

export default TechSkills