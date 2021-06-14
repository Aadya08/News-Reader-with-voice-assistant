import React, { useEffect, useState, createRef } from 'react';
import {Card, CardActions, CardActionArea, CardContent, CardMedia, Button, Typography} from '@material-ui/core';
import useStyles from './styles.js'
const SingleCard = ({article: {description, publishedAt, source, title, url, urlToImage}, i}) => {
    const classes = useStyles();
    const[elRef, setElRef] = useState([]);
    useEffect(()=>{
        setElRef((refs)=>Array(20).fill().map((_,j)=>refs[j]||createRef()));
    },[]);

    return (
        <Card style={{borderRadius:20}} className={classes.card}>
            <CardActionArea href={url} targert="_blank">
                <CardMedia className={classes.media} image={urlToImage} />
                
                <div className={classes.details}>
                    <Typography variant="body2" color="textSecondary" style={{marginTop:4}}>{(new Date(publishedAt)).toDateString()}</Typography>
                    <Typography variant="body2" color="textSecondary">{source.name}</Typography>
                </div>
                <Typography className={classes.title} gutterBottom >{title}</Typography>
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">{description}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary">Learn more</Button>
                <Typography variant="h5" color="textSecondary">{i+1}</Typography>
            </CardActions>
        </Card>
    )
}

export default SingleCard;
