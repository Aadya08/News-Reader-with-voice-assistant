import React from 'react';
import { Grid, Grow, Typography } from '@material-ui/core';
import SingleCard from '../SingleCard/SingleCard';
import useStyles from './styles.js';
import { GridList, GridListTile } from '@material-ui/core';

const infoCards = [
    { color:'#3f72af', title: 'Latest News', text: 'Try saying : Give me the latest news' },
    { color:'#112d4e', title: 'News by Categories', info: 'Business, Entertainment, General, Health, Science, Sports, Technology', text: 'Try saying : Give me the latest Technology news' },
    { color:'#3f72af', title: 'News by Terms', info: 'Bitcoin, PlayStation 5, Smartphones, Donald Trump...', text: 'Try saying : What\'s up with PlayStation 5' },
    { color:'#112d4e', title: 'News by Sources', info: 'CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...', text: 'Try saying : Give me the news from BBC news' },
  ];
  


const NewsCards = ({ articles }) => {

    const classes = useStyles();
    
    if(!articles.length){
         return(
             <Grow in>
                 <Grid container alignItems='stretch' spacing={3} className={classes.container}>

                     {infoCards.map((infoCard) =>(
                         <Grid item lg={3} className={classes.info}>
                             <div className={classes.card} style={{backgroundColor:infoCard.color}}>
                             <Typography variant='h6'>{infoCard.title}</Typography>
                             {infoCard.info ? (
                                 <Typography>{infoCard.title.split(" ")[2]}:<br/>{infoCard.info}</Typography>
                             ): null
                             }
                             <Typography><i>{infoCard.text}</i></Typography>
                             </div>
                         </Grid>
                     ))}
                 </Grid>
             </Grow>
         );
     }


    return (
        <Grow in>
            <Grid  container alignItems='stretch' spacing={3} className={classes.container}>
                
            {articles.map((article, i) => (
                <Grid item xs={12} md={6} lg={4} style={{display:"flex"}}>
                <SingleCard article={article} i={i}/>
                </Grid>
            ))}
            </Grid>
        </Grow>
    );
}

export default NewsCards;
