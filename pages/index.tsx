import React, { ReactElement } from 'react';
import { Divider, makeStyles } from '@material-ui/core';
import Footer from '../src/Footer';
import TimelineSection from '../src/timeline-section';
import ContactSection from '../src/contact-section';
import IntroSection from '../src/intro-section';
import Image from 'next/image';

const localStyles = makeStyles(() => {
    return {
        sourceButton: {
            position: 'fixed',
            height: '32px',
            width: '32px',
            top: '10px',
            right: '10px',
        },
    };
});

export default function Index(): ReactElement {
    const localClasses = localStyles();

    return (
        <React.Fragment>
            <div className={localClasses.sourceButton}>
                <a href="https://github.com/Rkuro/personal-website" target="_blank" rel="noreferrer">
                    <Image src="/GitHub-Mark/PNG/GitHub-Mark-32px.png" layout="fill" objectFit="contain" />
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
