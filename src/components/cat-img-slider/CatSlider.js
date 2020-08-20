import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box,CardMedia} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    media: {
        height: 80,
        width: 80,
        objectFit: 'cover',
        borderRadius:'50%',
        margin:'0 auto 10px',
    },
}))

export default function CatSlider(props) {
    const classes = useStyles();
    return (
        <Box>
            <Box className="cat_sm_img">
                <CardMedia
                    className={classes.media}
                    image="./bridge.jpg"
                    title="Paella dish"
                    />
            </Box>
            <Box align="center">off-White</Box>
        </Box>
    );
}

