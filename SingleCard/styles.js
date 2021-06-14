import {makeStyles} from '@material-ui/core/styles';
import '../../index.css'

export default makeStyles({
    media:{
        height:200,
        borderRadius:20
    },
    border: {
        border: 'solid',
      },
      fullHeightCard: {
        height: '100%',
      },
      card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderBottom: '10px solid white',
      },
      activeCard: {
        borderBottom: '10px solid #22289a',
      },
      grid: {
        display: 'flex',
      },
      details: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '10px',
      },
      title: {
        padding: '0 16px',
        fontSize:'1.2rem',
        fontWeight:250,
        fontFamily: 'Ubuntu'
      },
      cardActions: {
        padding: '0 16px 8px 16px',
        display: 'flex',
        justifyContent: 'space-between',
      },
    
});