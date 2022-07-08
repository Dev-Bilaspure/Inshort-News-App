
import { Card, CardContent, Typography, Box, makeStyles, Grid, Paper } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    component: {
        marginBottom: 20
    },
    container: {
        display: 'flex',
        padding: 8,
        paddingBottom: '4px!important'
    },
    image: {
        height: 268,
        width: '88%',
        borderRadius: 5,
        objectFit: 'cover'
    },
    rightContainer: {
        margin: '5px 0px 0 -25px',
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.down('sm')]: {
            margin: '5px 0'
        }
    },
    title: {
        fontWeight: 300,
        color: '#44444d',
        fontSize: 22,
        lineHeight: '27px'
    },
    author: {
        color: '#808290',
        fontSize: 12,
        lineHeight: '22px'
    },
    description: {
        lineHeight: '22px',
        color: '#44444d',
        marginTop: 5,
        fontFamily: "'Roboto',sans-serif",
        fontWeight: 300
    },
    short: {
        color: '#44444d',
        fontFamily: "'Convergence', sans-serif"
    },
    publisher: {
        fontSize: 12,
        marginTop: 'auto',
        marginBottom: 10,
        '& > *': {
            textDecoration: 'none',
            color: '#000',
            fontWeight: 900
        }
    },
    wrapper: {
        width: '67%',
        margin: '0 auto',
        height: 'auto'
    }
}))

const Article = ({ newsObj }) => {
    // console.log('dev', newsObj)
    const classes = useStyles();
    return (
        <div className={classes.wrapper}>
            <Paper elevation={3}  >
                <Card className={classes.component}>
                    <CardContent className={classes.container}>
                        <Grid container>
                            <Grid lg={5} md={5} sm={5} xs={12} item>
                                <img src={'https://previews.123rf.com/images/yehorlisnyi/yehorlisnyi2104/yehorlisnyi210400016/167492439-no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-comin.jpg?fj=1'} className={classes.image} />
                            </Grid>
                            <Grid lg={7} md={7} sm={7} xs={12} item className={classes.rightContainer}>
                                <Typography className={classes.title}>{newsObj.title}</Typography>
                                <Typography className={classes.author}>
                                    <b className={classes.short}>short</b> by {newsObj.author} / {`${newsObj.date.weekDay} ${newsObj.date.dateMonth} ${newsObj.date.dateDay} ${newsObj.date.dateYear} `}
                                </Typography>
                                <Typography className={classes.description}>{newsObj.description}</Typography>
                                <Typography className={classes.publisher}>
                                    read more at <a href={newsObj.authorPage.pageUrl} target='_blank'>{newsObj.authorPage.pageName}</a>
                                </Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Paper>
        </div>
        
        
    )
}

export default Article;