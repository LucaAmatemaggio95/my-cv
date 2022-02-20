import { Card, CardContent, CardHeader, Chip } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'

const OtherTechs = () => {

    const techs = [
        {
            label: "MaterialUI",
            color: "#007FFF",
            textColor: '#fff'
        },
        {
            label: "Git & GitHub",
            color: "#000",
            textColor: '#fff'
        },
        {
            label: "PWA",
            color: "#3740ff",
            textColor: '#fff'
        },
        {
            label: "C#",
            color: "#512bd4",
            textColor: '#fff'
        },
        {
            label: "EntityFramework",
            color: "#512bd4",
            textColor: '#fff'
        },
        {
            label: "NodeJS",
            color: "#43853d",
            textColor: '#fff'
        },
        {
            label: "SQL",
            color: "#0C1F31",
            textColor: '#fff'
        },
        {
            label: "MVC",
            color: "#0C1F31",
            textColor: '#fff'
        },
        {
            label: "Typescript",
            color: "#3178c6",
            textColor: '#fff'
        },
        {
            label: "JWT",
            color: "#0C1F31",
            textColor: '#fff'
        },
        {
            label: "PHP",
            color: "#8892BF",
            textColor: '#fff'
        },
        {
            label: "Bootstrap",
            color: "#7952b3",
            textColor: '#fff'
        },
        {
            label: "Redux",
            color: "#764abc",
            textColor: '#fff'
        }
    ]

    return (
        <Box mt={3}>
            <Card>
                <CardHeader title="Familiar techs" />
                <CardContent>
                    <Box display={'flex'} flexDirection={'row'} flexWrap={'wrap'}>
                        {techs.map(c => {
                            return (
                                <Chip 
                                    key={c.label}
                                    sx={{backgroundColor: c.color, fontWeight: 500, color: c.textColor, marginRight: '8px', marginBottom: '8px'}}
                                    label={c.label}
                                />
                            )
                        })}
                    </Box>
                </CardContent>
            </Card>
        </Box>
    )
}

export default OtherTechs;