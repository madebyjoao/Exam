import { Slide, Fragment } from '@revealjs/react';
import { Globe, Server, Target, User2, Users, UserStar, Wallpaper } from 'lucide-react';

export default function ProjectSlide() {
    return (
        <Slide background="linear-gradient(135deg, #183d3d 0%, #93b1a6 100%)">
            <h2 className="text-4xl font-bold text-white mb-8">Présentation du projet <span className='text-sm'>dossier projet — p. 6</span></h2>
            <div className="grid grid-cols-2 gap-6 text-left">
                <div className="bg-white/5 border border-white/10 px-8 py-5">
                    <p className="flex items-center gap-2 text-purple-400 font-semibold mb-3 text-lg"><Target  />Objectif</p>
                    <div as="p" className="text-slate-300 text-base">
                        Permettre à des clients de créer, personnaliser et publier leur portfolio via une URL unique <code className="text-blue-300">/u/:slug</code>
                    </div>
                </div>
                <div className="bg-white/5 border border-white/10 px-8 py-5">
                    <p className="flex items-center gap-2 text-green-400 font-semibold mb-3 text-lg"><Users />Utilisateurs</p>
                    <div as="ul" className="text-slate-300 text-sm space-y-1 list-none">
                        <li className='flex items-center gap-2'><User2 /> <strong className='text-lg'>CLIENT</strong> — gère son portfolio dans le Builder</li>
                        <li className='flex items-center gap-2'><UserStar /> <strong className='text-lg'>ADMIN</strong> — tableau de bord, gestion des utilisateurs</li>
                        <li className='flex items-center gap-2'><Globe /> <strong className='text-lg'>Visiteur</strong> — consulte les portfolios publics</li>
                    </div>
                </div>
                <div className="bg-white/5 border border-white/10 px-8 py-5">
                    <p className="flex items-center gap-2 text-blue-500 font-bold mb-3 text-3xl"><Wallpaper />Front-end</p>
                    <ul className="text-slate-300 text-sm space-y-1 list-none">
                        <li>React 19 + Vite + React Router</li>
                        <li>TanStack Query + Tailwind CSS 4</li>
                        <li>3 templates de portfolio</li>
                    </ul>
                </div>
                <div className="bg-white/5 border border-white/10 px-8 py-5">
                    <p className="flex items-center gap-2 text-red-600 font-bold mb-3 text-3xl"><Server />Back-end</p>
                    <ul className="text-slate-300 text-sm space-y-1 list-none">
                        <li>NodeJS + Express</li>
                        <li>MySQL(sequelize-cli) + 8 migrations + seeders</li>
                        <li>JWT + Multer + Sharp</li>
                    </ul>
                </div>
            </div>
            <aside className="notes">
                <pre><code>{`Portfolio Builder — présentation du projet:
- Objectif: SaaS de création de portfolio. Un client s'inscrit, configure son portfolio dans le Builder,
  et obtient une URL publique /u/:slug accessible à n'importe qui sans connexion.
- 3 rôles: CLIENT (gère son propre portfolio), ADMIN (accès au dashboard et gestion des utilisateurs),
  Visiteur (lecture seule des portfolios publics via /u/:slug).
- 3 templates de portfolio: chacun avec ses propres composants Navbar/Footer/Projects/Certificates.
  Le client choisit le template et personnalise couleurs, police, sections dans le Builder.
- Architecture full-stack découplée: front React sur :5173, API Express sur :3000.
  Communication via Axios avec JWT Bearer token.
- Upload d'images: photo de profil, images de projets, certificats — pipeline Multer + Sharp.`}</code></pre>
            </aside>
        </Slide>
    );
}
