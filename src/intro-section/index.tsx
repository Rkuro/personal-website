import { Grid, IconButton, makeStyles, Typography } from '@material-ui/core';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import React, { FC } from 'react';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { globalStyles } from '../GlobalStyles';
import Image from 'next/image';

const localStyles = makeStyles(() => {
    return {
        personalPic: {
            minHeight: '500px',
            position: 'relative',
        },
        buttonRotate: {
            transform: 'rotate(90deg)',
        },
    };
});

const IntroSection: FC = (): JSX.Element => {
    const globalClasses = globalStyles();
    const localClasses = localStyles();

    const fadeIn = {
        opacity: [0, 1],
    };

    const animate = {
        opacity: [0, 1],
        y: [-100, 0],
    };

    const buttonAnimate = {
        x: [0, 0, -5, 0, 20, 0],
    };
    const buttonTransition = {
        loop: Infinity,
        ease: 'easeIn',
        duration: 1.5,
    };
    return (
        <div className={clsx(globalClasses.fullScreenHeight, globalClasses.centerAll)}>
            <Grid container>
                <Grid item xs={12} sm={6} className={clsx(globalClasses.centerAll, globalClasses.paddingDefault)}>
                    <div>
                        <motion.div
                            className={globalClasses.centerAll}
                            animate={animate}
                            transition={{ ease: 'easeInOut', delay: 0.2 }}
                        >
                            <Typography variant="h1">Hi.</Typography>
                        </motion.div>
                        <motion.div animate={animate} transition={{ ease: 'easeInOut', delay: 2 }}>
                            <Typography variant="h1"> I&apos;m Robin.</Typography>
                        </motion.div>
                        <motion.div
                            className={globalClasses.centerAll}
                            animate={animate}
                            transition={{ ease: 'easeInOut', delay: 3 }}
                        >
                            <Typography variant="h6"> Check out my stuff</Typography>
                            <div className={localClasses.buttonRotate}>
                                <motion.div
                                    animate={buttonAnimate}
                                    transition={buttonTransition}
                                    className={localClasses.buttonRotate}
                                >
                                    <IconButton aria-label="go-to-stuff">
                                        <ArrowForwardIcon />
                                    </IconButton>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} className={clsx(globalClasses.paddingDefault, globalClasses.centerAll)}>
                    <motion.div
                        animate={fadeIn}
                        transition={{ ease: 'easeIn' }}
                        className={clsx(localClasses.personalPic, globalClasses.flexGrow)}
                    >
                        <Image src="/blue-hills.jpg" alt="Picture of the author" layout="fill" objectFit="contain" />
                        {/* <img src={bluehills} className={localClasses.personalPicImg} /> */}
                    </motion.div>
                </Grid>
            </Grid>
        </div>
    );
};

export default IntroSection;
