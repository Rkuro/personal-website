import React from 'react';
import { globalStyles } from '../src/GlobalStyles';
import clsx from 'clsx';
import { Grid, Typography } from '@material-ui/core';
import Footer from '../src/Footer';
import { motion } from 'framer-motion';
import IconButton from '@material-ui/core/IconButton';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import CircleImg from '../src/CircleImg';
import Map from '../src/Map';

export default function Index() {
    const globalClasses = globalStyles();

    const fadeIn = {
        opacity: [0, 1]
    }

    const animate = {
        opacity: [0, 1],
        y: [-100, 0]
    }

    const buttonAnimate = {
        x: [0, 0, -5, 0, 20, 0, 0]
    }
    const buttonTransition = {
        loop: Infinity,
        ease: "easeIn",
        duration: 1.5
    }

    return (
        <React.Fragment>

            {/* Intro */}
            <div className={clsx(globalClasses.fullScreenHeight, globalClasses.centerAll)}>
                
                <Grid container>
                    <Grid item xs={12} sm={6} className={clsx(globalClasses.centerAll, globalClasses.paddingDefault)}>
                        <div>
                            <motion.div className={globalClasses.centerAll} 
                                        animate={animate} 
                                        transition={{ease: "easeInOut", delay: 0.2}}>
                                <Typography variant="h1">Hi.</Typography>
                            </motion.div>
                            <motion.div animate={animate} transition={{ease: "easeInOut", delay: 2}}>
                                <Typography variant="h1"> I'm Robin.</Typography>
                            </motion.div>
                            <motion.div className={globalClasses.centerAll}  animate={animate} transition={{ease: "easeInOut", delay: 3}}>
                                <Typography variant="h6"> Check out my stuff</Typography>
                                <motion.div animate={buttonAnimate} transition={buttonTransition}>
                                    <IconButton aria-label="go-to-stuff">
                                        <ArrowForwardIcon />
                                    </IconButton>    
                                </motion.div>
                                
                            </motion.div>
                        </div>

                    </Grid>
                    <Grid item xs={12} sm={6} className={globalClasses.paddingDefault}>
                        <motion.div animate={fadeIn} transition={{ease: "easeIn"}}>
                            <CircleImg src="/blue-hills.jpg" />
                        </motion.div>
                    </Grid>
                </Grid>
            </div>

            {/* Map & Timeline */}
            <div className={clsx(globalClasses.fullScreenHeight, globalClasses.flex)}>
                <Grid container>
                    <Grid item xs={12} sm={7} alignItems="center" justifyContent="center">
                        <div className={globalClasses.mapContainer}>
                            <Map />
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={5}>

                    </Grid>
                </Grid>
            </div>
            <Footer />
        </React.Fragment>
    );
}
