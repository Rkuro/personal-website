import React, { ReactElement } from 'react';
import { Divider } from '@material-ui/core';
import Footer from '../src/Footer';
import TimelineSection from '../src/timeline-section';
import ContactSection from '../src/contact-section';
import IntroSection from '../src/intro-section';

export default function Index(): ReactElement {
    return (
        <React.Fragment>
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
