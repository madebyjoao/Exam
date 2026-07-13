import { Slide } from '@revealjs/react';
import { KeyRound, BadgeCheck, ShieldCheck, Database, Bug, ImageUp } from 'lucide-react';

const items = [
    {
        icon: KeyRound,
        color: 'text-orange-400',
        title: 'Mots de passe — bcrypt',
        points: [
            'Hachage bcrypt, jamais stockés en clair',
            'Algorithme volontairement lent → anti brute-force',
        ],
    },
    {
        icon: BadgeCheck,
        color: 'text-blue-400',
        title: 'Authentification — JWT',
        points: [
            'Token signé, aucune donnée sensible dans le payload',
            "Messages d'erreur identiques → anti-énumération de comptes",
        ],
    },
    {
        icon: ShieldCheck,
        color: 'text-green-400',
        title: "Contrôle d'accès",
        points: [
            'Rôles CLIENT / ADMIN vérifiés par middleware',
            'CheckSlug : propriété de la ressource, sinon 403 (dossier p. 26 · 31)',
        ],
    },
    {
        icon: Database,
        color: 'text-purple-400',
        title: 'Injection SQL',
        points: [
            'ORM Sequelize → requêtes paramétrées',
            'Jamais de concaténation de valeurs utilisateur',
        ],
    },
    {
        icon: Bug,
        color: 'text-red-700',
        title: 'XSS',
        points: [
            'React échappe le contenu inséré dans le DOM',
            'Validation Zod (front) + contrôles back, pas de dangerouslySetInnerHTML',
            'title: z.string().min(1, "title is required")',
        ],
    },
    {
        icon: ImageUp,
        color: 'text-cyan-400',
        title: 'Upload de fichiers',
        points: [
            'Limite 5 Mo + contrôle du type MIME',
            'Renommage UUID + re-encodage Sharp (neutralise les fichiers déguisés)',
        ],
    },
];

export default function Securite() {
    const notes = `Sécurité — transversale (security by design), bonnes pratiques OWASP :
- bcrypt : hash + salt, lent par design → brute-force coûteux. Jamais de mot de passe en clair.
- JWT : signé avec JWT_SECRET (.env). Le payload est encodé en base64, PAS chiffré → aucune donnée sensible dedans.
- Anti-énumération : "email inconnu" et "mot de passe incorrect" renvoient le même message.
- Contrôle d'accès : AuthMiddleware (rôle) + CheckSlug (propriété) → un client ne modifie que SON portfolio (403 sinon).
  CheckSlug dans le dossier : code des routes p. 26, diagramme du rendu public p. 31, section sécurité 14.b p. 35.
- SQL : Sequelize = requêtes paramétrées, les valeurs ne sont jamais concaténées dans le SQL.
- XSS : React échappe par défaut ; validation Zod côté front (UX) + validation back (la vraie sécurité).
- Upload : 5 Mo max, MIME vérifié, nom UUID (pas d'écrasement possible), Sharp re-encode → un "faux jpg" malveillant ne survit pas à la conversion.
Question probable du jury : JWT en localStorage → exposé en cas de XSS ; alternative = cookie httpOnly (mais CSRF à gérer). Réponse : React limite fortement le XSS, et c'est une piste d'amélioration identifiée.`;

    return (
        <Slide background="linear-gradient(135deg, #183d3d 0%, #93b1a6 100%)">
            <div className="flex items-center gap-3 mb-5">
                <span className="bg-red-500/20 text-red-400 border border-red-400/30 px-3 py-1 rounded-full text-sm font-bold">Sécurité</span>
                <h2 className="text-3xl font-bold text-white">Security by design — OWASP <span className='text-sm'>dossier projet — p. 35</span></h2>
            </div>
            <div className="grid grid-cols-3 gap-4 text-left text-sm">
                {items.map(({ icon: Icon, color, title, points }) => (
                    <div key={title} className="bg-white/5 border border-white/10 p-4">
                        <p className={`flex items-center gap-2 font-semibold mb-2 ${color}`}>
                            <Icon size={18} /> {title}
                        </p>
                        <ul className="text-slate-300 text-xs space-y-1 list-none">
                            {points.map((p) => (
                                <li key={p}>{p}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <aside className="notes">
                <pre><code>{notes}</code></pre>
            </aside>
        </Slide>
    );
}
