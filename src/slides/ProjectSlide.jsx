import { Slide, Fragment } from '@revealjs/react';

export default function ProjectSlide() {
    return (
        <Slide background="linear-gradient(135deg, #183d3d 0%, #93b1a6 100%)">
            <h2 className="text-4xl font-bold text-white mb-8">Présentation du projet</h2>
            <div className="grid grid-cols-2 gap-6 text-left">
                <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                    <p className="text-blue-400 font-semibold mb-3 text-lg">Objectif</p>
                    <Fragment as="p" className="text-slate-300 text-base">
                        Permettre à des clients de créer, personnaliser et publier leur portfolio via une URL unique <code className="text-blue-300">/u/:slug</code>
                    </Fragment>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                    <p className="text-green-400 font-semibold mb-3 text-lg">Utilisateurs</p>
                    <Fragment as="ul" className="text-slate-300 text-sm space-y-1 list-none">
                        <li>👤 <strong>CLIENT</strong> — gère son portfolio dans le Builder</li>
                        <li>🛡️ <strong>ADMIN</strong> — tableau de bord, gestion des utilisateurs</li>
                        <li>🌐 <strong>Visiteur</strong> — consulte les portfolios publics</li>
                    </Fragment>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                    <p className="text-purple-400 font-semibold mb-3 text-lg">Front-end</p>
                    <ul className="text-slate-300 text-sm space-y-1 list-none">
                        <li>React 19 + Vite + React Router</li>
                        <li>TanStack Query · Tailwind CSS 4</li>
                        <li>3 templates de portfolio</li>
                    </ul>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                    <p className="text-orange-400 font-semibold mb-3 text-lg">Back-end</p>
                    <ul className="text-slate-300 text-sm space-y-1 list-none">
                        <li>Express 5 + Sequelize ORM</li>
                        <li>MySQL 8 · JWT · Multer + Sharp</li>
                        <li>8 migrations · seeders</li>
                    </ul>
                </div>
            </div>
        </Slide>
    );
}
