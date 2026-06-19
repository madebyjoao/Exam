import { Slide, Fragment, Code } from '@revealjs/react';
import { DatabaseZap, FolderOpen } from 'lucide-react';
import MCD from "../assets/MCD.png"


export default function CP5_1Slide() {

    const notes = `5 tables principales : users, portfolios, projects, project_images, et certificates.

La relation centrale est users → portfolios : un utilisateur peut avoir 1 portfolio. Chaque portfolio contient des projets et des certificats — deux entités indépendantes rattachées au portfolio, pas à l'utilisateur directement.

Les projets ont leur propre galerie via project_images, avec un order_index pour contrôler l'ordre d'affichage manuellement.

Points notables du schéma :
- Le champ slug dans portfolios permet des URLs propres et personnalisées.
- Les champs technologies sont stockés en JSON dans projects et portfolios — choix délibéré pour éviter une table de jointure technologies et rester flexible.
- Les champs font dans portfolios permettent la personnalisation typographique par portfolio.
- is_published et is_public ont comme valuer 1 ou 0 qui agissent comme booléens — contrôle de visibilité à deux niveaux.
- Le champ role dans users et type dans certificates utilisent des ENUM — les valeurs sont contraintes côté base.
- 8 fichiers de migration sequelize `

    return (
        <Slide backgroundImage={MCD} backgroundSize="69%" backgroundPosition="center" backgroundRepeat="no-repeat">
            
            <div className="flex items-center gap-3 mb-5">
                <span className="bg-purple-500/20 text-purple-400 border border-purple-400/30 px-3 py-1 rounded-full text-sm font-bold">CP5</span>
                <p className="text-6xl font-extrabold text-black">MCD</p>
            </div>
            <p className='text-sm text-left text-black'>Modèle Conceptuel des Données</p>
            
            <aside className="notes text-lg">
                <pre><code>{notes}</code></pre>
            </aside>
        </Slide>
    );
}