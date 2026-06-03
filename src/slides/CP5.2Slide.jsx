import { Slide, Fragment, Code } from '@revealjs/react';
import { DatabaseZap, FolderOpen } from 'lucide-react';
import MLD from "../assets/MPD.png"

export default function CP5_2Slide() {
    return (
        <Slide backgroundImage={MLD} backgroundSize="90%" backgroundPosition="center" backgroundRepeat="no-repeat">
            
            <div className="flex items-center justify-center gap-3 mb-4">
                <span className="absolute left-0 bg-purple-500/20 text-purple-400 border border-purple-400/30 px-3 py-1 rounded-full text-sm font-bold">CP5</span>
                <h3
                 className="text-3xl font-bold text-white">
                    Base de données relationnelle
                 </h3>
            </div>
            <Fragment>
                {/* <div className="flex flex-col justify-center h-[70vh] mt-10">
                    <span className="text-3xl font-bold text-white">Base de données relationnelle</span>
                    <img
                    className='h-full object-contain'
                    src={MLD}
                    alt="Model"
                />
                </div> */}
                
            </Fragment>
            <aside className="notes">8 fichiers de migration pour l'évolution du schéma. Mentionner les foreign keys et les ENUM pour les rôles.</aside>
        </Slide>
    );
}
