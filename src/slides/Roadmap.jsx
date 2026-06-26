import { Slide, Fragment } from '@revealjs/react';

export default function Roadmap() {
    return (
        <Slide background="linear-gradient(135deg, #183d3d 0%, #93b1a6 100%)">
            <h2 className="">Présentation Roadmap</h2>
            
            <div className="bg-black/5 p-1 text-left text-(--roadmap-text) backdrop-blur shadow-md">
                <p className="text-(--roadmap-text) font-semibold mb-3 text-lg">Présentation du projet</p>
                <p className="font-semibold mb-3 text-lg">Activité type 1</p>
                <p className="font-semibold mb-3 text-lg">Activité type 2</p>
                <p className="font-semibold mb-3 text-lg">CP1 · Environnement de travail</p>
                <p className="font-semibold mb-3 text-lg">CP2 · Maquettage des interfaces</p>
                <p className="font-semibold mb-3 text-lg">CP3 · Interfaces statiques</p>
                <p className="font-semibold mb-3 text-lg">CP5 · Base de données relationnelle</p>
                <p className="font-semibold mb-3 text-lg">CP6 · Composants d’accès aux données</p>
                <p className="font-semibold mb-3 text-lg">CP7 · Composants métier coté serveur</p>
                <p className="font-semibold mb-3 text-lg">CP4 · Interfaces dynamiques</p>
                <p className="font-semibold mb-3 text-lg">CP8 · Documentation de le deploiement </p>
                <p className="font-semibold mb-3 text-lg">Demo</p>
                <p className="font-semibold mb-3 text-lg">Conclusion</p>
                
            </div>
                
            
        </Slide>
    );
}
