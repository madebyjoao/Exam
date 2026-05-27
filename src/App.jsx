import { Deck, Stack } from '@revealjs/react';
import RevealHighlight from 'reveal.js/plugin/highlight';
import RevealNotes from 'reveal.js/plugin/notes';
import 'reveal.js/reveal.css';
import 'reveal.js/theme/black.css';
import 'reveal.js/plugin/highlight/monokai.css';

import TitleSlide from './slides/TitleSlide';
import ProjectSlide from './slides/ProjectSlide';
import AT1DividerSlide from './slides/AT1DividerSlide';
import CP1Slide from './slides/CP1Slide';
import CP2Slide from './slides/CP2Slide';
import CP3Slide from './slides/CP3Slide';
import CP4Slide from './slides/CP4Slide';
import AT2DividerSlide from './slides/AT2DividerSlide';
import CP5Slide from './slides/CP5Slide';
import CP6Slide from './slides/CP6Slide';
import CP7Slide from './slides/CP7Slide';
import CP8Slide from './slides/CP8Slide';
import DemoSlide from './slides/DemoSlide';
import ConclusionSlide from './slides/ConclusionSlide';

export default function App() {
    return (
        <Deck
            plugins={[RevealHighlight, RevealNotes]}
            config={{
                hash: true,
                controls: true,
                progress: true,
                transition: 'slide',
                backgroundTransition: 'fade',
            }}
        >
            <TitleSlide />
            <ProjectSlide />

            <AT1DividerSlide />

            <CP1Slide />
            <CP2Slide />
            <CP3Slide />
            <CP4Slide />

            <AT2DividerSlide />
            <CP5Slide />
            <CP6Slide />
            <CP7Slide />
            <CP8Slide />

            <DemoSlide />
            <ConclusionSlide />
        </Deck>
    );
}
