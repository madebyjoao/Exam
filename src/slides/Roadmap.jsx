import { Slide } from '@revealjs/react';

const cps = [
    ['CP1', 'Environnement', 'front'],
    ['CP2', 'Maquettage', 'front'],
    ['CP3', 'UI statiques', 'front'],
    ['CP5', 'Base de données', 'back'],
    ['CP6', 'Accès données', 'back'],
    ['CP7', 'Composants métier', 'back'],
    ['CP4', 'UI dynamiques', 'front'],
    ['CP8', 'Déploiement', 'back'],
];

const colors = {
    front: 'text-blue-400 border-blue-400',
    back: 'text-red-500 border-red-500',
};

export default function Roadmap() {
    return (
        <Slide background="linear-gradient(135deg, #183d3d 0%, #93b1a6 100%)">
            <div className="flex flex-col h-full gap-4 pt-2">
                <h2 className="text-3xl font-black text-white text-left">Plan de présentation</h2>

                <div className="flex flex-col gap-3 text-left text-sm">
                    <p className="text-xl text-slate-300">Présentation du projet</p>

                    <div className="flex gap-2">
                        <div className="border-3 border-blue-400 px-3 py-2">
                            <p className="text-lg text-blue-400 font-semibold">AT1</p>
                            <p className="text-slate-200 text-xs">Front-end</p>
                        </div>
                        <div className="border-3 border-red-500 px-3 py-2">
                            <p className="text-lg text-red-500 font-semibold">AT2</p>
                            <p className="text-slate-200 text-xs">Back-end</p>
                        </div>
                    </div>

                    <div className="flex gap-2 flex-wrap">
                        {cps.map(([cp, label, color]) => (
                            <div key={cp} className={`border-3 px-3 py-2 ${colors[color]}`}>
                                <p className="text-lg font-bold">{cp}</p>
                                <p className="text-slate-200 text-xs">{label}</p>
                            </div>
                        ))}
                    </div>

                    <div className="flex gap-2">
                        <div className="border-3 border-white px-3 py-2">
                            <p className="text-lg text-slate-200">Démo</p>
                        </div>
                        <div className="border-3 border-white/40 px-3 py-2">
                            <p className="text-lg text-slate-200">Conclusion</p>
                        </div>
                    </div>
                </div>
            </div>
        </Slide>
    );
}
