import { Slide, Fragment } from '@revealjs/react';

export default function CP2Slide() {
    return (
        <Slide background="linear-gradient(135deg, #183d3d 0%, #93b1a6 100%)">
            <div className="flex items-center gap-3 mb-6">
                <span className="bg-green-500/20 text-green-400 border border-green-400/30 px-3 py-1 rounded-full text-sm font-bold">CP2</span>
                <h2 className="text-3xl font-bold text-white">Maquettage des interfaces</h2>
            </div>
            <div className="grid grid-cols-2 gap-6 text-left">
                <div>
                    <p className="text-slate-400 text-sm mb-4">Interfaces identifiées et maquettées :</p>
                    <ul className="space-y-2 list-none">
                        {[
                            ["🌐", "Page d'accueil publique"],
                            ["🔐", "Login / Register"],
                            ["🛠️", "Builder (3 onglets)"],
                            ["📊", "Dashboard admin"],
                            ["👤", "Portfolio public /u/:slug"],
                            ["🏅", "Page certificats"],
                        ].map(([icon, label]) => (
                            <Fragment key={label} as="li" animation="fade-left" className="flex items-center gap-2 text-slate-300 text-sm">
                                <span>{icon}</span> {label}
                            </Fragment>
                        ))}
                    </ul>
                </div>
                <Fragment asChild>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                        <p className="text-green-400 font-semibold mb-3">3 templates de portfolio</p>
                        <ul className="text-slate-300 text-sm space-y-2 list-none">
                            <li>🎨 <strong>Template 1</strong> — classique, mise en page centrée</li>
                            <li>🎨 <strong>Template 2</strong> — moderne avec sidebar</li>
                            <li>🎨 <strong>Template 3</strong> — accordéon pour les projets</li>
                        </ul>
                        <p className="text-slate-500 text-xs mt-4">Choix de template persisté en base de données</p>
                    </div>
                </Fragment>
            </div>
        </Slide>
    );
}
