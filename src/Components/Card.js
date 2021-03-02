import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/grid'
import '../store/reducers.js'

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

export default function MediaCard() {
    const classes = useStyles();
    const dispatch = useDispatch()
    const hangars = useSelector(state => state.hangars)

    useEffect(() => {
        const token = localStorage.token
        if(hangars.length === 0) {
            getHangars()
        }
    })

    const getHangars = () => {
        fetch('http://localhost:3000/hangars')
        .then(res => res.json())
        .then(hangars => {
            console.log(hangars)
        dispatch({
            type: 'SET_HANGARS',
            hangars: hangars
        })})
    }

    const renderCard = () => {return hangars.map(hangar => (
        <Grid className={classes.stack}>
            <Card 
            classname={classes.root}
            id={hangar.id}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={hangar.picture}
                        title={hangar.title}
                    />
                </CardActionArea>
                <CardActions>
                    <Button 
                        size="small"
                        color="secondary">
                            Stack
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    ))}

    return (
        <div>
            {/* <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Lizard
          </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
          </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Share
        </Button>
                <Button size="small" color="primary">
                    Learn More
        </Button>
            </CardActions>
        </Card> */}
        {renderCard()}
        </div>
    );
}