import { Slide, Fragment } from '@revealjs/react';
import { Globe, Server, Target, User2, Users, UserStar, Wallpaper } from 'lucide-react';

export default function ProjectSlide() {
    return (
        <Slide background="linear-gradient(135deg, #183d3d 0%, #93b1a6 100%)">
            <h2 className="text-4xl font-bold text-white mb-8">Présentation du projet</h2>
            <div className="grid grid-cols-2 gap-6 text-left">
                <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                    <p className="flex items-center gap-2 text-purple-400 font-semibold mb-3 text-lg"><Target  />Objectif</p>
                    <div as="p" className="text-slate-300 text-base">
                        Permettre à des clients de créer, personnaliser et publier leur portfolio via une URL unique <code className="text-black">/u/:slug</code>
                    </div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                    <p className="flex items-center gap-2 text-green-400 font-semibold mb-3 text-lg"><Users />Utilisateurs</p>
                    <div as="ul" className="text-slate-300 text-sm space-y-1 list-none">
                        <li className='flex items-center gap-2'><User2  /> <strong className='text-lg'>CLIENT</strong> — gère son portfolio dans le Builder</li>
                        <li className='flex items-center gap-2'><UserStar  /> <strong className='text-lg'>ADMIN</strong> — tableau de bord, gestion des utilisateurs</li>
                        <li className='flex items-center gap-2'><Globe  /> <strong className='text-lg'>Visiteur</strong> — consulte les portfolios publics</li>
                    </div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                    <p className="flex items-center gap-2 text-blue-500 font-bold mb-3 text-3xl"><Wallpaper />Front-end</p>
                    <ul className="text-slate-300 text-sm space-y-1 list-none">
                        <li>React 19 + Vite + React Router</li>
                        <li>TanStack Query · Tailwind CSS 4</li>
                        <li>3 templates de portfolio</li>
                    </ul>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                    <p className="flex items-center gap-2 text-red-600 font-bold mb-3 text-3xl"><Server />Back-end</p>
                    <ul className="text-slate-300 text-sm space-y-1 list-none">
                        <li>Express 5 + Sequelize ORM</li>
                        <li>MySQL 8 · JWT · Multer + Sharp</li>
                        <li>8 migrations · seeders</li>
                    </ul>
                </div>
            </div>
            <aside className='notes'>
                bla bla
            </aside>
        </Slide>
    );
}
