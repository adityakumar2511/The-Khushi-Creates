import AboutHeader from "../components/AboutHeader";
import AboutIntro from "../components/AboutIntro";
import MissionVision from "../components/MissionVision";
import WhatMakesUsDifferent from "../components/WhatMakeUsDifferent";
import FounderNotes from "../components/FounderNotes";
import CTA from "../components/CTA";
export default function AboutPage() {
    return (
        <div>
            <AboutHeader />
            <AboutIntro />
            <MissionVision />
            <WhatMakesUsDifferent />
            <FounderNotes />
            <CTA />
        </div>
    );
}