import React,{Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Link, Box } from '@material-ui/core';
import styles from "./product-card.module.scss";

const useStyles = makeStyles({
    media:{
        width:'100%',
        height:'290px',
        objectFit:'cover',
    },
    CardContent:{
        padding:"12px 0 6px"
    },
    whislistWrap :{
        padding:"0 0 0 8px"
    },
    whislist :{
        padding:"0"
    }
  });

export default function ProductCard() {
    const classes = useStyles();
        return (
            <div >
                <Card className={styles.product_card}>
                    <div className={styles['card_header']}>
                        <Avatar aria-label="recipe" src="./bridge.jpg"></Avatar>
                        <p>Savaannah</p>
                        <span className={styles['user_follow']}> Follow </span>
                    </div>
                    <CardMedia
                        className={classes.media}
                        image="./bridge.jpg"
                        title="Contemplative Reptile"
                    />
                    <CardContent className={classes.CardContent}>
                        <div className={styles['card_inner']}>
                            <div className={styles['top_wrap']}>
                                <div className={styles['top_left_content']}>
                                    <h3 className={styles['title']}>saint laurent</h3>
                                    <p className={styles['subtitle']}>Mid-length dress</p>
                                </div>
                                <div className="top_right_content flex_item_center">
                                    <span>12</span>
                                    <CardActions className={classes.whislistWrap}>
                                        <IconButton aria-label="add to favorites" className={classes.whislist}>
                                            <FavoriteIcon />
                                        </IconButton>
                                    </CardActions>
                                </div>
                            </div>
                            <div className={styles['bottom_content']}>
                                <div className="flex_center_just">
                                    <div className={styles['bottom_content_left']}>
                                        <h3>saint laurent</h3>
                                        <h3>Mid-length dress</h3>
                                    </div>
                                    <div className={styles['bottom_content_right']}>
                                        <p>xxl</p>
                                        <span>size</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        );
}
