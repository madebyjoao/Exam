import { Slide, Fragment } from '@revealjs/react';
import { Atom, Database, HardDriveDownload, Hexagon, Palette, RefreshCcw, Sprout, Superscript, Zap } from 'lucide-react';

export default function CP1Slide() {

    const notes =`- Frontend: - reactjs project build with vite, 
    - use of React-router dependency for for our navigation router;
    - Tanstack Query dependency because it eliminates the need for manual data fetching;
- Backend: -NodeJs pour une question de convenience est la stack que je me sent le plus confortable;
- use Express.js because its a high-performance framework for building web APIs and server-side applications in Node.js;
- use MySQL + Sequelize pour une question de securite vue que sequilize donne sanitazation des donnes, 
system de migration, gere les relation entre table (hasMany ou belongsTo)
     JWT auth, Multer, Sharp
- Tooling: Nodemon, ESLint
    
    `

    return (
        <Slide background="linear-gradient(135deg, #183d3d 0%, #93b1a6 100%)">
            <div className="flex items-center gap-3 mb-6">
                <span className="bg-green-500/20 text-green-400 border border-green-400/30 px-3 py-1 rounded-full text-sm font-bold">CP1</span>
                <h2 className="text-3xl font-bold text-white">Environnement de travail</h2>
            </div>
            <div className="grid grid-cols-3 gap-4 text-left">
                <div asChild>
                    <div className="bg-white/5 border border-white/10 p-4 min-h-60">
                        <p className="text-blue-500 font-semibold mb-2">Front-end</p>
                        <ul className="text-slate-300 text-sm space-y-1 list-none">
                            <li className="flex items-center gap-2"><Zap /> Vite — build tool</li>
                            <li className="flex items-center gap-2"><Atom /> ReactJS</li>
                            <li className="flex items-center gap-2"><Palette /> Tailwind CSS</li>
                        </ul>
                    </div>
                </div>
                <div asChild>
                    <div className="bg-white/5 border border-white/10 p-4 min-h-60">
                        <p className="text-red-600 font-semibold mb-2">Back-end</p>
                        <ul className="text-slate-300 text-sm space-y-1 list-none">
                            <li className="flex items-center gap-2"><Hexagon /> Node.js + Express</li>
                            <li className="flex items-center gap-2"><Superscript />Express 5</li>
                            <li className="flex items-center gap-2"><RefreshCcw /> Nodemon</li>
                        </ul>
                    </div>
                </div>
                <div asChild>
                    <div className="bg-white/5 border border-white/10 py-4 min-h-60">
                        <p className="text-purple-600 font-semibold mb-0">Base de données</p>
                        <ul className="text-slate-300 text-sm space-y-1 list-none px-4">
                            <li className="flex items-center gap-2"><Database />MySQL + Sequelize-cli</li>
                            <li className="flex items-center gap-2"><Sprout /> Seeders</li>
                            <li className="flex items-center gap-2"><HardDriveDownload /> Migrations</li>
                        </ul>
                    </div>
                </div>
            </div>
             <aside className='notes'>

                <pre>
                    <code>
                        {notes}
                    </code>
                </pre>

            </aside>
        </Slide>
    );
}
