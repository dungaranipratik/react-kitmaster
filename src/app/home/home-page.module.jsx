import React, { Component } from 'react';
import homestyle from "./home-page.module.scss";
import WorkTab from "../../components/homebanner/tab/WorkTab";
import { Box,CardMedia,makeStyles} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Catslider from "../../components/cat-img-slider/CatSlider";
import ProductCard from "./../../components/product-card/product-card";
import Paper from '@material-ui/core/Paper';
import { withStyles } from "@material-ui/core/styles";

const useStyles = theme  => ({
    media:{
        width:'100%',
        height:'100%',
        objectFit:'cover',
        background:"#ff000"
    }
  });

class HomePage extends Component {
    render() {
        const classes = this.props;
        var settings = {
            infinite: true,
            speed: 300,
            autoplay: true,
            slidesToShow: 10,
            slidesToScroll: 2,
            autoplaySpeed: 2000,
          };
        return (
            <div>
                 <Grid container>
                    <Grid item xs={12} sm={6}>
                        <div className={homestyle.work_tab_wrap}>
                            <WorkTab />
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Box>
                            <img src="./bridge.jpg" width="100%" alt="banner"/>
                            <CardMedia className={classes.media} image="./bridge.jpg" title="Paella dish" />
                        </Box>
                    </Grid>
                 </Grid>
                <div className="theme_bg">
                    <div className={homestyle.cat_wrap}>
                        <Slider {...settings}>
                            <Catslider />
                            <Catslider />
                            <Catslider />
                            <Catslider />
                            <Catslider />
                            <Catslider />
                            <Catslider />
                            <Catslider />
                            <Catslider />
                            <Catslider />
                            <Catslider />
                            <Catslider />
                            <Catslider />
                            <Catslider />
                            <Catslider />
                            <Catslider />
                            <Catslider />
                            <Catslider />
                            <Catslider />
                            <Catslider />
                            <Catslider />
                            <Catslider />
                            <Catslider />
                            <Catslider />
                            <Catslider />
                            <Catslider />
                            <Catslider />
                        </Slider>
                    </div>
                </div>
                <div className="">
                    <div className={homestyle.product_wrap}>
                        <div className={homestyle['product_item']}>
                            <ProductCard />
                        </div>
                        <div className={homestyle['product_item']}>
                            <ProductCard />
                        </div>
                        <div className={homestyle['product_item']}>
                            <ProductCard />
                        </div>
                        <div className={homestyle['product_item']}>
                            <ProductCard />
                        </div>
                        <div className={homestyle['product_item']}>
                            <ProductCard />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(useStyles)(HomePage);