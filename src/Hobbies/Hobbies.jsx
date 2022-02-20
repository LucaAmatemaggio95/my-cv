import { Card, CardContent, CardHeader, Typography } from '@mui/material'
import React from 'react'

const Hobbies = () => {

    const EmojiBike = React.memo(({ className, label, symbol }) =>
    <span className={className} role="img" aria-label={label}>
        {String.fromCodePoint('0x1F6B5')}
    </span>);

    const EmojiCar = React.memo(({ className, label, symbol }) =>
    <span className={className} role="img" aria-label={label}>
        {String.fromCodePoint('0x1F697')}
    </span>);

    const EmojiTech = React.memo(({ className, label, symbol }) =>
    <span className={className} role="img" aria-label={label}>
        {String.fromCodePoint('0x1F4BB')}
    </span>);

    return (
        <Card>
            <CardHeader title="Hobbies" />
            <CardContent>
                <Typography variant="body1">
                    I love hiking and mountin biking, I like to ride on downhill tracks and make long bike tours with friends <EmojiBike /><br/>
                    I'm very passionate about cars and the automotive world, from F1 to Lego supercars models <EmojiCar /><br/>
                    I also really like to stay up to date with the latest tech news and trends, discovering new technologies and learning how they work <EmojiTech />
                </Typography>
            </CardContent>
        </Card>   
    )
}

export default Hobbies