import { Deck, Stack } from '@revealjs/react';
import RevealHighlight from 'reveal.js/plugin/highlight';
import RevealNotes from 'reveal.js/plugin/notes';
import 'reveal.js/reveal.css';
import 'reveal.js/theme/black.css';
import 'reveal.js/plugin/highlight/monokai.css';
import './index.css';

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
import CP5_1Slide from './slides/CP5.1Slide';
import Roadmap from './slides/Roadmap';
import CP5_2Slide from './slides/CP5.2Slide';
import CP2_1Slide from './slides/CP2.1Slide';
import CP2_2Slide from './slides/CP2.2Slide';
import CP5_3Slide from './slides/CP5.3Slide';


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
                center: false,
                
            }}
        >   
            {/* Debout de la presentation petit slide avec le non do project et presentation de soi meme */}
            <TitleSlide />

            {/* Illustrer le parcours de la presentation */}
            <Roadmap />

            {/*  */}
            <ProjectSlide />

            {/*  */}
            <AT1DividerSlide />
            <AT2DividerSlide />

            {/* Installer et configurer son environnement de travail en fonction du projet web ou web mobile */}
            <CP1Slide />

            {/* Maquetter des interfaces utilisateur web ou web mobile */}
            <CP2Slide />
            <CP2_1Slide />
            <CP2_2Slide />
            
            {/* Réaliser des interfaces utilisateur statiques web ou web mobile */}
            <CP3Slide />

            
            {/* Mettre en place une base de données relationnelle */}
            <CP5_1Slide />
            <CP5_2Slide />
            <CP5_3Slide />
            <CP5Slide />

            {/* Développer des composants d’accès aux données SQL et NoSQL */}
            <CP6Slide />


            {/* Développer des composants métier coté serveur */}
            <CP7Slide />

            {/* Développer la partie dynamique des interfaces utilisateur web ou web mobile */}
            <CP4Slide />            

            {/* Documenter le déploiement d’une application dynamique web ou web mobile */}
            <CP8Slide />

            {/*  */}
            <DemoSlide />

            {/*  */}
            <ConclusionSlide />
        </Deck>
    );
}
