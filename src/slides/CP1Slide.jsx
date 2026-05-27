import { Slide, Fragment } from '@revealjs/react';

export default function CP1Slide() {
    return (
        <Slide background="linear-gradient(135deg, #183d3d 0%, #93b1a6 100%)">
            <div className="flex items-center gap-3 mb-6">
                <span className="bg-green-500/20 text-green-400 border border-green-400/30 px-3 py-1 rounded-full text-sm font-bold">CP1</span>
                <h2 className="text-3xl font-bold text-white">Environnement de travail</h2>
            </div>
            <div className="grid grid-cols-3 gap-4 text-left">
                <div asChild>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                        <p className="text-blue-400 font-semibold mb-2">Front-end</p>
                        <ul className="text-slate-300 text-sm space-y-1 list-none">
                            <li>⚡ Vite — build tool</li>
                            <li>⚛️ React 19</li>
                            <li>🎨 Tailwind CSS 4</li>
                            <li>🔍 ESLint</li>
                        </ul>
                    </div>
                </div>
                <Fragment asChild>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                        <p className="text-orange-400 font-semibold mb-2">Back-end</p>
                        <ul className="text-slate-300 text-sm space-y-1 list-none">
                            <li>🟢 Node.js 24</li>
                            <li>🚂 Express 5</li>
                            <li>🔄 Nodemon</li>
                            <li>🗃️ Sequelize CLI</li>
                        </ul>
                    </div>
                </Fragment>
                <Fragment asChild>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                        <p className="text-purple-400 font-semibold mb-2">Base de données</p>
                        <ul className="text-slate-300 text-sm space-y-1 list-none">
                            <li>🐬 MySQL 8</li>
                            <li>📦 Variables .env</li>
                            <li>🌱 Seeders</li>
                            <li>📜 Migrations</li>
                        </ul>
                    </div>
                </Fragment>
            </div>
            <aside className="notes">Expliquer le choix de Vite vs CRA, et pourquoi Node 24 + Express 5.</aside>
        </Slide>
    );
}
