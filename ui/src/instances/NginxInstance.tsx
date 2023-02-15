import { Card, CardContent, List, ListItem, Typography } from '@mui/material';
import React from 'react';

export const NginxInstance = (props) => {
    return (
        <Card className="Instance-component">
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {props.name}Container Name
                </Typography>
                <List>
                    <ListItem>
                        Version: {props.version}
                    </ListItem>
                    <ListItem>
                        Uptime: {props.uptime}
                    </ListItem>
                </List>
            </CardContent>
        </Card>
    );
}
