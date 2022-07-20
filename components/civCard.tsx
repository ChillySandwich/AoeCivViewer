import React from 'react';
import { Card, CardContent, CardActions, Button, Typography, Box } from '@mui/material'
import { ICivCardProps } from '../interfaces/componentInterfaces';
import Link from 'next/link';

export const CivCard = (props: ICivCardProps) => {
    const { name, armyType, teamBonus, id } = props
    return (
        <Card sx={{display: 'flex' }}>
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
                <Link href={`/Civilization/${encodeURIComponent(id)}`}>
                    <Button size="small">View</Button>
                </Link>
                
            </CardActions>
        </Card>
    )
}



