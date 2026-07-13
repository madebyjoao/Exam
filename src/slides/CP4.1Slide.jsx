import { Slide } from '@revealjs/react';
import Template3 from '../assets/template3.png';

export default function CP4_1Slide() {
    return (
        <Slide
            backgroundColor="white"
            backgroundImage={Template3}
            backgroundSize="60%"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
        >
            <div className="flex justify-center items-center gap-3 mb-6">
                <span className="bg-green-500/20 text-green-400 border border-green-400/30 px-3 py-1 rounded-full text-sm font-bold">CP4</span>
                <p className="text-5xl font-extrabold text-black">Template 3 — rendu public <span className="text-sm">/u/three · dossier projet — p. 31 · annexe p. 47</span></p>
            </div>
            <aside className="notes">
                Résultat du switch : le portfolio public rendu avec le Template 3, à partir des données
                saisies dans le Builder. Même logique de récupération, trois rendus possibles.
            </aside>
        </Slide>
    );
}
