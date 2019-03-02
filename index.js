import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card1 from '../../Pages/About/harsh_mehta.jpg'
import Card2 from '../../Pages/About/nancy.jpg'
import Card3 from '../../Pages/About/romil.jpg'
import Card4 from '../../Pages/About/rohit.jpg'
import Card5 from '../../Pages/About/tapu.png'
import Card6 from '../../Pages/About/srishthi.jpg'
import './about.css'
import Card7 from '../../Pages/About/sarthik.jpg'
import Card8 from '../../Pages/About/sanjay.jpg'

const styles = {
  card: {
    width: 345,
    margin:'20px'
  },
  media: {
    height: 280,
    width:'350px'
  },
};


function MediaCard1(props) {
    const { classes } = props;
    return (
        <div>
        <div className="row">
        <div className="column">
        <Card className={classes.card}>
            <CardActionArea>
            <CardMedia
                className={classes.media}
                image={Card1}
                title="Contemplative Reptile"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                Harsh Mehta
                </Typography>
                <Typography component="p">
                <b>Mentor:</b><br/>
                Senior Software Engineer,Cimpress India Pvt.Ltd.
                </Typography>
            </CardContent>
            </CardActionArea>
        </Card>
        </div>
        <div className="column">
        <Card className={classes.card}>
            <CardActionArea>
            <CardMedia
                className={classes.media}
                image={Card2}
                title="Contemplative Reptile"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                Nancy Nadar
                </Typography>
                <Typography component="p">
                <b>Mentor:</b><br/>
                Faculty at D.J. Sanghvi
                </Typography>
            </CardContent>
            </CardActionArea>
        </Card>
        </div>
        <div className="column">
        <Card className={classes.card}>
            <CardActionArea>
            <CardMedia
                className={classes.media}
                image={Card3}
                title="Contemplative Reptile"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                Romil Shah
                </Typography>
                <Typography component="p">
                <b>Student:</b><br/>
                Second Year (Computer Engineering)
                </Typography>
            </CardContent>
            </CardActionArea>
        </Card>
        </div>
        <div className="column">
        <Card className={classes.card}>
            <CardActionArea>
            <CardMedia
                className={classes.media}
                image={Card4}
                title="Contemplative Reptile"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                Rohit Jain
                </Typography>
                <Typography component="p">
                <b>Student:</b><br/>
                Second Year (Information Technology)
                </Typography>
            </CardContent>
            </CardActionArea>
        </Card>
        </div>
        </div>
        <div className="row">
        <div className="column">
        <Card className={classes.card}>
            <CardActionArea>
            <CardMedia
                className={classes.media}
                image={Card5}
                title="Contemplative Reptile"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                Tapendu Bera
                </Typography>
                <Typography component="p">
                <b>Student:</b><br/>
                Second Year (Information Technology)
                </Typography>
            </CardContent>
            </CardActionArea>
        </Card>
        </div>
        <div className="column">
        <Card className={classes.card}>
            <CardActionArea>
            <CardMedia
                className={classes.media}
                image={Card6}
                title="Contemplative Reptile"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                Srishthi Priya
                </Typography>
                <Typography component="p">
                <b>Student:</b><br/>
                Second Year (Computer Engineering)
                </Typography>
            </CardContent>
            </CardActionArea>
        </Card>
        </div>
        <div className="column">
        <Card className={classes.card}>
            <CardActionArea>
            <CardMedia
                className={classes.media}
                image={Card7}
                title="Contemplative Reptile"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                Sarthik Bhat
                </Typography>
                <Typography component="p">
                <b>Student:</b><br/>
                Second Year (Computer Engineering)
                </Typography>
            </CardContent>
            </CardActionArea>
        </Card>
        </div>
        <div className="column">
        <Card className={classes.card}>
            <CardActionArea>
            <CardMedia
                className={classes.media}
                image={Card8}
                 title="Contemplative Reptile"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                Sanjay Nayak
                </Typography>
                <Typography component="p">
                <b>Student:</b><br/>
                Second Year (Computer Engineering)
                </Typography>
            </CardContent>
            </CardActionArea>
        </Card>
        </div>
        </div>
        </div>
    );
  }
MediaCard1.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard1);

