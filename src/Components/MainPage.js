import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
    },
    paper: {
        marginTop: theme.spacing(35),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const MainPage = () => {
    const classes = useStyles();

    return (
        <Fragment>
                <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square></Grid>
                <div className={classes.paper}>
                    <Typography component="h1" variant="h1" style={{fontStyle: 'chalkduster'}}>
                        <h1 style={{fontFamily: 'chalkduster', fontSize: '80px'}}>AIR-DOK</h1>
                    </Typography>
                    <br />
                    <form className={classes.form} noValidate>
                        <Button
                            component={Link}
                            to="/signup"
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="secondary"
                            className={classes.submit}>
                            <h3>SIGN UP</h3>
                        </Button>
                        <Button
                            component={Link}
                            to="/login"
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="secondary"
                            className={classes.submit}>
                            <h3>LOGIN</h3>
                        </Button>
                    </form>
                </div>
                </Container>
        </Fragment>
    )
}

export default MainPage