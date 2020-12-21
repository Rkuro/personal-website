import React from 'react';
import { globalStyles } from '../src/GlobalStyles';
import clsx from 'clsx';
import { Grid, Typography } from '@material-ui/core';
import Footer from '../src/Footer';
import { motion } from 'framer-motion';
import Image from 'next/image';
import IconButton from '@material-ui/core/IconButton';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

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
    /*
    @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
    }
    40% {
        transform: translateY(-30px);
    }
    60% {
        transform: translateY(-15px);
    }
    }
    */

    return (
        <React.Fragment>
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
                            <Image src="/blue-hills.jpg" alt="me" width="4032" height="3024" layout="responsive"/>
                        </motion.div>
                    </Grid>
                </Grid>
            </div>
            <Footer />
        </React.Fragment>
    );
}
