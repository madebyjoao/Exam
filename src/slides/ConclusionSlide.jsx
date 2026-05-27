import { Slide } from '@revealjs/react';

const competences = [
    ['CP1', 'Environnement', 'green'],
    ['CP2', 'Maquettage', 'green'],
    ['CP3', 'UI statiques', 'green'],
    ['CP4', 'UI dynamiques', 'green'],
    ['CP5', 'Base de données', 'purple'],
    ['CP6', 'Accès données', 'purple'],
    ['CP7', 'Composants métier', 'purple'],
    ['CP8', 'Déploiement', 'purple'],
];

export default function ConclusionSlide() {
    return (
        <Slide background="linear-gradient(135deg, #183d3d 0%, #93b1a6 100%)">
            <div className="flex flex-col items-center justify-center h-full gap-6">
                <h2 className="text-5xl font-black text-white">Merci</h2>
                <p className="text-slate-400 text-xl">Des questions ?</p>
                <div className="grid grid-cols-4 gap-3 mt-6">
                    {competences.map(([cp, label, color]) => (
                        <div
                            key={cp}
                            className={`bg-${color}-500/10 border border-${color}-400/20 rounded-lg p-3 text-center`}
                        >
                            <p className={`text-${color}-400 font-bold text-sm`}>{cp}</p>
                            <p className="text-slate-400 text-xs mt-1">{label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </Slide>
    );
}
