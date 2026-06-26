import { Slide } from '@revealjs/react';

const at1 = [['CP1', 'Environnement'], ['CP2', 'Maquettage'], ['CP3', 'UI statiques']];
const at2 = [['CP5', 'Base de données'], ['CP6', 'Accès données'], ['CP7', 'Composants métier']];

export default function Roadmap() {
    return (
        <Slide background="linear-gradient(135deg, #183d3d 0%, #93b1a6 100%)">
            <div className="flex flex-col h-full gap-4 pt-2">
                <h2 className="text-3xl font-black text-white text-left">Plan de présentation</h2>

                <div className="flex flex-col gap-3 text-left text-sm">
                    <div className="flex items-center gap-2 px-1">
                        <span className="text-slate-500 text-xs">01</span>
                        <span className="text-slate-300 font-semibold">Présentation du projet</span>
                    </div>

                    <div className="bg-green-500/10 border border-green-400/20 rounded-xl p-4">
                        <p className="text-green-400 text-xs font-bold tracking-widest uppercase mb-3">
                            Activité Type 1 — Front-end
                        </p>
                        <div className="flex gap-3">
                            {at1.map(([cp, label]) => (
                                <div key={cp} className="flex-1 bg-green-500/10 border border-green-400/30 rounded-lg px-3 py-2 text-center">
                                    <p className="text-green-400 font-bold text-sm">{cp}</p>
                                    <p className="text-slate-400 text-xs mt-0.5">{label}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-purple-500/10 border border-purple-400/20 rounded-xl p-4">
                        <p className="text-purple-400 text-xs font-bold tracking-widest uppercase mb-3">
                            Activité Type 2 — Back-end
                        </p>
                        <div className="flex gap-3">
                            {at2.map(([cp, label]) => (
                                <div key={cp} className="flex-1 bg-purple-500/10 border border-purple-400/30 rounded-lg px-3 py-2 text-center">
                                    <p className="text-purple-400 font-bold text-sm">{cp}</p>
                                    <p className="text-slate-400 text-xs mt-0.5">{label}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex gap-3">
                        <div className="flex-1 bg-blue-500/10 border border-blue-400/20 rounded-lg px-3 py-2">
                            <p className="text-blue-400 font-bold text-sm">CP4</p>
                            <p className="text-slate-400 text-xs">UI dynamiques</p>
                        </div>
                        <div className="flex-1 bg-purple-500/10 border border-purple-400/20 rounded-lg px-3 py-2">
                            <p className="text-purple-400 font-bold text-sm">CP8</p>
                            <p className="text-slate-400 text-xs">Déploiement</p>
                        </div>
                        <div className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-center">
                            <p className="text-slate-300 text-sm font-semibold">Démo</p>
                        </div>
                        <div className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-center">
                            <p className="text-slate-300 text-sm font-semibold">Conclusion</p>
                        </div>
                    </div>
                </div>
            </div>
        </Slide>
    );
}
