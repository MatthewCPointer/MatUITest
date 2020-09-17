import React from 'react';
import {
    Typography,
    Avatar,
    Grid,
    Box
} from '@material-ui/core';
import avatar from '../images/MonitorPhoto.png';
import Typed from 'react-typed';
import {makeStyles, withStyles} from '@material-ui/core/styles';

// CSS Classes
const useStyles = makeStyles(theme => ({
    avatar: {
        width: theme.spacing(25),
        height: theme.spacing(25),
        margin: theme.spacing(1)
    },
    title: {
        color: "tomato"
    },
    subtitle: {
        color: "tan",
        marginBottom: "3rem"
    },
    typedContainer: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100vw",
        textAlign: "center",
        zIndex: 1
    }
}));

const CustomAvatar = withStyles({
    img: {
        objectFit: 'contain'
    },
    root: {
        overflow: 'visible'
    }
})(Avatar);

const Header = () => {
    const classes = useStyles();
    return (
        <Box className={classes.typedContainer}>
            <Grid container justify="center">
            <CustomAvatar src={avatar} className={classes.avatar} alt="Matthew C. Pointer"></CustomAvatar>
            </Grid>
            <Typography variant="h4" className={classes.title}>
                <Typed strings={["Matthew Pointer"]} typeSpeed={40}></Typed>
            </Typography>

            <Typography variant="h5" className={classes.subtitle}>
                <Typed strings={["Web Developer", "Computer Scientist", "Agile"]} typeSpeed={40} backSpeed={60} loop></Typed>
            </Typography>
        </Box>
    )
}

export default Header
