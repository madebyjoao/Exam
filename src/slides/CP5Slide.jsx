import { Slide, Fragment, Code } from '@revealjs/react';
import { DatabaseZap, FolderOpen } from 'lucide-react';
import MLD from "../assets/MPD.png"

export default function CP5Slide() {
    return (
        <Slide background="linear-gradient(135deg, #183d3d 0%, #93b1a6 100%)">
            
            <div className="flex items-center justify-center gap-3 mb-4">
                <span className="bg-purple-500/20 text-purple-400 border border-purple-400/30 px-3 py-1 rounded-full text-sm font-bold">CP5</span>
                <span className="text-3xl font-bold text-white">Base de données relationnelle</span>
            </div>
            <Fragment>
                <div className="flex justify-center h-[70vh]">
                    <img
                    className='h-full object-contain'
                    src={MLD}
                    alt="Model"
                />
                </div>
                
            </Fragment>
            <aside className="notes">8 fichiers de migration pour l'évolution du schéma. Mentionner les foreign keys et les ENUM pour les rôles.</aside>
        </Slide>
    );
}
