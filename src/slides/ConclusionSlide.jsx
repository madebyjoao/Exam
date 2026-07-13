import { Slide } from '@revealjs/react';

const styles = {
    blue: {
        card: 'bg-blue-500/10 border border-blue-400/20',
        text: 'text-blue-800',
    },
    purple: {
        card: 'bg-red-500/10 border border-red-400/20',
        text: 'text-red-600',
    },
};

const competences = [
    ['CP1', 'Environnement', 'blue'],
    ['CP2', 'Maquettage', 'blue'],
    ['CP3', 'UI statiques', 'blue'],
    ['CP4', 'UI dynamiques', 'blue'],
    ['CP5', 'Base de données', 'purple'],
    ['CP6', 'Accès données', 'purple'],
    ['CP7', 'Composants métier', 'purple'],
    ['CP8', 'Déploiement', 'purple'],
];

export default function ConclusionSlide() {
    return (
        <Slide background="linear-gradient(135deg, #183d3d 0%, #93b1a6 100%)">
            <div className="flex flex-col items-center justify-center h-full gap-6">
                <h2 className="text-5xl font-black text-white">Conclusion</h2>
                <p className="text-slate-400 text-xl">Des questions ?</p>
                <div className="grid grid-cols-4 gap-3 mt-6">
                    {competences.map(([cp, label, color]) => (
                        <div
                            key={cp}
                            className={`${styles[color].card} p-3 text-center`}
                        >
                            <p className={`${styles[color].text} font-bold text-sm`}>{cp}</p>
                            <p className="text-white text-xs mt-1">{label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </Slide>
    );
}
