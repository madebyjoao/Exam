import { Slide, Fragment, Code } from '@revealjs/react';
import { DatabaseZap, FolderOpen } from 'lucide-react';
import MLD from "../assets/MPD.png"

export default function CP5_3Slide() {
    return (
        <Slide 
            
            backgroundImage={MLD} backgroundSize="69%" backgroundPosition="center" backgroundRepeat="no-repeat">
            
            
            <aside className="notes">8 fichiers de migration pour l'évolution du schéma. Mentionner les foreign keys et les ENUM pour les rôles.</aside>
        </Slide>
    );
}
