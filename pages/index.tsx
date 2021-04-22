import React, { ReactElement } from 'react';
import { Divider, makeStyles, Theme } from '@material-ui/core';
import Footer from '../src/Footer';
import TimelineSection from '../src/timeline-section';
import ContactSection from '../src/contact-section';
import IntroSection from '../src/intro-section';
import Image from 'next/image';

const localStyles = makeStyles((theme: Theme) => {
    return {
        sourceButton: {
            position: 'fixed',
            height: '32px',
            width: '32px',
            top: `${theme.spacing(2)}px`,
            right: `${theme.spacing(3)}px`,
            zIndex: 99999,
        },
    };
});

export default function Index(): ReactElement {
    const localClasses = localStyles();

    return (
        <React.Fragment>
            <div className={localClasses.sourceButton}>
                <a href="https://github.com/Rkuro/personal-website" target="_blank" rel="noreferrer">
                    <Image src="/GitHub-Mark/PNG/GitHub-Mark-Light-32px.png" layout="fill" objectFit="contain" />
                </a>
            </div>

            {/* Intro */}
            <IntroSection />

            <Divider orientation="horizontal" />

            {/* Map & Timeline */}
            <TimelineSection />

            {/* Contact */}
            <ContactSection />

            <Footer />
        </React.Fragment>
    );
}
