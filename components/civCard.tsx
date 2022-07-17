import React from 'react';
import { Card, CardContent, CardActions, Button, Typography, Box } from '@mui/material'
import { ICivCardProps } from '../interfaces/componentInterfaces';

export const CivCard = (props: ICivCardProps) => {
    const { name, armyType, teamBonus } = props
    return (
        <Card sx={{ maxWidth: 350, minHeight: 200,  display: 'flex', flexDirection: 'row' }}>
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                    {name}
                </Typography>
                <Box>
                <Typography>
                    Army Type: {armyType}
                </Typography>
                </Box>
                <Box>
                <Typography>
                Team Bonus: {teamBonus}
                </Typography>
                </Box>
            </CardContent>
            <CardActions>
                <Button size="small">View</Button>
            </CardActions>
        </Card>
    )
}



