import { Slide, Fragment, Code } from '@revealjs/react';

export default function CP8Slide() {
    return (
        <Slide background="linear-gradient(135deg, #183d3d 0%, #93b1a6 100%)">
            <div className="flex items-center gap-3 mb-5">
                <span className="bg-purple-500/20 text-purple-400 border border-purple-400/30 px-3 py-1 rounded-full text-sm font-bold">CP8</span>
                <h2 className="text-3xl font-bold text-white">Documentation du déploiement</h2>
            </div>
            <div className="grid grid-cols-2 gap-5 text-left text-sm">
                <div className="space-y-3">
                    <p className="text-slate-400">Étapes documentées dans le <code className="text-blue-300">README.md</code> :</p>
                    {[
                        ['1', 'npm install (racine, front, back)'],
                        ['2', 'Créer back/.env depuis .env.example'],
                        ['3', 'Créer la base MySQL'],
                        ['4', 'npm run db:migrate'],
                        ['5', 'npm run db:seed (données de démo)'],
                        ['6', 'npm run back + npm run front'],
                    ].map(([n, step]) => (
                        <Fragment key={n} as="div" animation="fade-up" className="flex items-center gap-3">
                            <span className="w-6 h-6 bg-purple-500/30 text-purple-300 rounded-full flex items-center justify-center text-xs font-bold shrink-0">{n}</span>
                            <span className="text-slate-300">{step}</span>
                        </Fragment>
                    ))}
                </div>
                <Fragment asChild>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                        <p className="text-orange-400 font-semibold mb-3">Variables d'environnement</p>
                        <Code language="bash">
{`PORT=3000
DB_NAME=portfoliobuilder
DB_USER=root
DB_PASSWORD=rootroot
DB_HOST=localhost
DB_PORT=3306
JWT_SECRET=your_secret_here
JWT_EXPIRES_IN=12h`}
                        </Code>
                    </div>
                </Fragment>
            </div>
            <aside className="notes">Mentionner le README.md, l'API_GUIDE.md et le RESPONSIVE_TIPS.md fournis avec le projet.</aside>
        </Slide>
    );
}
