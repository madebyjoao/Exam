import { Slide } from '@revealjs/react';

const rows = [
    [
        'Création valide',
        'Titre + description + repo_url valides, JWT valide, slug propriétaire',
        '200 + projet enregistré en base',
        '✅ 200 — projet visible dans le Builder',
    ],
    [
        'Sans token JWT',
        'Même requête, en-tête Authorization absent',
        '401 Unauthorized',
        '✅ 401 — accès refusé',
    ],
    [
        "Slug d'un autre utilisateur",
        'JWT valide mais slug non possédé (CheckSlug)',
        '403 Forbidden',
        '✅ 403 — accès refusé',
    ],
    [
        'Titre vide',
        'Formulaire soumis sans titre',
        'Erreur Zod (front) + 400 (back)',
        '✅ message « Le titre est requis » + 400',
    ],
    [
        'Image > 5 Mo',
        'Upload d\'un fichier de 8 Mo',
        'Refus Multer (limite fileSize)',
        '✅ erreur renvoyée, aucun fichier écrit',
    ],
];

export default function JeuEssai() {
    const notes = `Jeu d'essai — fonctionnalité la plus représentative : la création d'un projet (Mission n°1, CRUD).
Environnement : back sur localhost:3000, front sur localhost:5173, base seedée.
Chaque cas vérifie À LA FOIS le message affiché côté front ET le code HTTP renvoyé par l'API.
Les cas d'erreur suivent le diagramme d'activité de la mission 1 : validation front (Zod) → auth JWT (401) →
propriété du slug (403) → validation back (400) → enregistrement (200).
Tests de non-régression : chaque cas est rejoué après modification du code concerné.
Cahier de tests complet en annexe du dossier (page 48).`;

    return (
        <Slide background="linear-gradient(135deg, #183d3d 0%, #93b1a6 100%)">
            <div className="flex items-center gap-3 mb-5">
                <span className="bg-cyan-500/20 text-cyan-400 border border-cyan-400/30 px-3 py-1 rounded-full text-sm font-bold">Tests</span>
                <h2 className="text-3xl font-bold text-white">Jeu d'essai — création d'un projet <span className='text-sm'>dossier projet — p. 36</span></h2>
            </div>
            <div className="text-left text-xs">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="text-slate-400 border-b border-white/20">
                            <th className="py-2 pr-3 text-left font-semibold">Cas de test</th>
                            <th className="py-2 pr-3 text-left font-semibold">Données en entrée</th>
                            <th className="py-2 pr-3 text-left font-semibold">Résultat attendu</th>
                            <th className="py-2 text-left font-semibold">Résultat obtenu</th>
                        </tr>
                    </thead>
                    <tbody className="text-slate-300">
                        {rows.map(([cas, entree, attendu, obtenu]) => (
                            <tr key={cas} className="border-b border-white/10">
                                <td className="py-2 pr-3 font-semibold text-white">{cas}</td>
                                <td className="py-2 pr-3">{entree}</td>
                                <td className="py-2 pr-3">{attendu}</td>
                                <td className="py-2 text-green-400">{obtenu}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <p className="text-slate-300 text-xs mt-4">
                    Cahier de tests complet : annexe du dossier (p. 48) — rejoué en non-régression après chaque modification.
                </p>
            </div>
            <aside className="notes">
                <pre><code>{notes}</code></pre>
            </aside>
        </Slide>
    );
}
