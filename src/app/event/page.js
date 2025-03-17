import React from 'react';
import EventBanner from '../EventBanner/EventBanner';
import Events from '../component/shared/Event/page';
import Footer from '../component/shared/Footer/page';
import FivePillars from '../component/shared/Five/page';
import Slide from '../component/shared/Slider/page';

const page = () => {
    return (
        <div>
            <Slide/>
            <EventBanner />
            <Events />
            <FivePillars/>
            <Footer/>
        </div>
    );
};

export default page;