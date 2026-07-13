import { Slide } from '@revealjs/react';
import { Rss, Wrench, CalendarClock, ShieldAlert } from 'lucide-react';

export default function Veille() {
    const notes = `Veille sur les vulnérabilités de sécurité (exigence du référentiel) :
- Sources suivies : OWASP Top 10 (référence des risques web), alertes du CERT-FR (ANSSI),
  blog sécurité de Node.js (security releases), newsletters (Node Weekly / JavaScript Weekly).
- Outils automatiques : npm audit à chaque installation de dépendance, alertes GitHub Dependabot sur le dépôt.
- Cadence : hebdomadaire + systématique avant chaque ajout ou mise à jour de dépendance.
- Application concrète au projet :
  * Multer : la branche 1.x dépendait de dicer, vulnérable (CVE-2022-24434, DoS via multipart malformé)
    → choix de Multer 2.x dès le départ pour le pipeline d'upload.
  * npm audit exécuté avant chaque « livraison » d'une fonctionnalité → dépendances maintenues à jour
    (Express 5, bcrypt 6, versions actives).
  * Le payload JWT n'est pas chiffré (seulement encodé base64) — point appris en veille → aucune donnée
    sensible dans le token.`;

    return (
        <Slide background="linear-gradient(135deg, #183d3d 0%, #93b1a6 100%)">
            <div className="flex items-center gap-3 mb-5">
                <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-400/30 px-3 py-1 rounded-full text-sm font-bold">Veille</span>
                <h2 className="text-3xl font-bold text-white">Veille — vulnérabilités de sécurité</h2>
            </div>
            <div className="grid grid-cols-2 gap-4 text-left text-sm">
                <div className="bg-white/5 border border-white/10 p-4">
                    <p className="flex items-center gap-2 text-blue-400 font-semibold mb-2"><Rss size={18} /> Sources</p>
                    <ul className="text-slate-300 text-xs space-y-1 list-none">
                        <li>OWASP Top 10 — risques applicatifs web</li>
                        <li>CERT-FR (ANSSI) — alertes et avis</li>
                        <li>Node.js security releases</li>
                        <li>Newsletters : Node Weekly, JavaScript Weekly</li>
                    </ul>
                </div>
                <div className="bg-white/5 border border-white/10 p-4">
                    <p className="flex items-center gap-2 text-purple-400 font-semibold mb-2"><Wrench size={18} /> Outils</p>
                    <ul className="text-slate-300 text-xs space-y-1 list-none">
                        <li><code>npm audit</code> à chaque installation de dépendance</li>
                        <li>Alertes GitHub Dependabot sur le dépôt</li>
                    </ul>
                </div>
                <div className="bg-white/5 border border-white/10 p-4">
                    <p className="flex items-center gap-2 text-orange-400 font-semibold mb-2"><CalendarClock size={18} /> Cadence</p>
                    <ul className="text-slate-300 text-xs space-y-1 list-none">
                        <li>Hebdomadaire pendant toute la durée du projet</li>
                        <li>Systématique avant tout ajout / mise à jour de dépendance</li>
                    </ul>
                </div>
                <div className="bg-white/5 border border-white/10 p-4">
                    <p className="flex items-center gap-2 text-red-400 font-semibold mb-2"><ShieldAlert size={18} /> Exemple concret</p>
                    <ul className="text-slate-300 text-xs space-y-1 list-none">
                        <li>Multer 1.x : dépendance <em>dicer</em> vulnérable (CVE-2022-24434)</li>
                        <li>→ choix de <strong>Multer 2.x</strong> pour le pipeline d'upload</li>
                    </ul>
                </div>
            </div>
            <aside className="notes">
                <pre><code>{notes}</code></pre>
            </aside>
        </Slide>
    );
}
