import { Box, Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';
import React from 'react'


const InfoHeader = () => {
    const useStyles = makeStyles({
        container: {
            background: '#f54236',
            color: '#ffffff',
            height: 47,
            display: 'flex',
            alignItems: 'center',
            marginBottom: 25
        },
        text: {
            fontSize: 14,
            marginLeft: 50,
            fontWeight: 100
        },
        logo: {
            height: 39,
            '&:last-child': {
                margin: '0 50px 0 20px'
            },
            marginTop: 4
        }
    })
    const appleStore = 'https://assets.inshorts.com/website_assets/images/appstore.png';
    const googleStore = 'https://assets.inshorts.com/website_assets/images/playstore.png';
    const classes = useStyles();
    return (
        <Paper elevation={4}>
            <Box className={classes.container}>
                <Typography className={classes.text}><b>Stay Informed with Fast-Track-News.</b> Read latest news with Fast-Track in less than 60 words.</Typography>
                {/* <Box style={{marginLeft: 'auto'}}>
                
                <img src={'https://www.iconsdb.com/icons/preview/soylent-red/media-skip-forward-xxl.png'} alt="play-store-logo" className={classes.logo}/>
                    <img src={googleStore} alt="play-store-logo" className={classes.logo}/>
                    <img src={appleStore} alt="app-store-logo" className={classes.logo}/>
                </Box> */}

            </Box>
        </Paper>
        
    )
}

export default InfoHeader
