import { Slide, Fragment, Code } from '@revealjs/react';
import { FileCode2, Link2, Tags, Contrast } from 'lucide-react';

const scores = [
    ['97', 'Performance'],
    ['94', 'Accessibilité'],
    ['100', 'Bonnes pratiques'],
    ['92', 'SEO'],
];

export default function SEO() {
    const notes = `SEO, accessibilité et performances (dossier §7) :
- Audit Lighthouse exécuté sur le BUILD DE PRODUCTION (vite preview, localhost:4173) sur la page publique /u/three.
  Scores : Performance 97, Accessibilité 94, Bonnes pratiques 100, SEO 92. Rejoué après chaque évolution notable du front.
- HTML sémantique : header / main / section / footer, un seul h1 par page puis h2/h3.
- Meta : title descriptif + meta description par page.
- URLs lisibles : /u/:slug (slug parlant) plutôt qu'un id numérique → meilleur référencement.
- alt sur toutes les images porteuses de sens (projets, certifications, photo de profil) → SEO + accessibilité.
- Contraste vérifié avec le Contrast Checker de WebAIM : texte #161B25 sur fond #FFFFFF = ratio 17,24:1
  → valide WCAG 2.1 niveaux AA ET AAA (AA exige 4,5:1 pour le texte normal). WCAG = référence du RGAA en France.
- Performance : images optimisées côté back par Sharp (mission n°2 : 8 Mo → ~100 Ko), composants légers.`;

    return (
        <Slide background="linear-gradient(135deg, #183d3d 0%, #93b1a6 100%)">
            <div className="flex items-center gap-3 mb-5">
                <span className="bg-yellow-500/20 text-yellow-400 border border-yellow-400/30 px-3 py-1 rounded-full text-sm font-bold">SEO</span>
                <h2 className="text-3xl font-bold text-white">SEO, accessibilité & performances <span className='text-sm'>dossier projet — p. 15-16</span></h2>
            </div>

            <p className="text-slate-300 text-left text-sm mb-3">
                Audit <strong>Lighthouse</strong> sur le build de production (<code className="text-blue-300">vite preview</code>) :
            </p>
            <div className="grid grid-cols-4 gap-4 mb-4">
                {scores.map(([score, label]) => (
                    <div key={label} asChild animation="fade-up">
                        <div className="bg-white/5 border border-white/10 l p-1 text-center">
                            <p className={`text-3xl font-black ${score === '100' ? 'text-green-400' : 'text-green-300'}`}>{score}</p>
                            <p className="text-slate-400 text-xs mt-1">{label}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-2 gap-4 text-left text-sm">
                <div className="bg-white/5 border border-white/10 p-4">
                    <p className="flex items-center gap-2 text-blue-400 font-semibold mb-2"><FileCode2 size={18} /> HTML sémantique</p>
                    <Code language="html">
{`<header>…</header>
<main>
  <h1>João Silva — Développeur web</h1>  <!-- h1 unique -->
  <section>
    <h2>Projets</h2>
    <img src="cover.webp" alt="Aperçu du projet" />
  </section>
</main>
<footer>…</footer>`}
                    </Code>
                    <p className="flex items-center gap-2 text-blue-400 font-semibold mb-2"><FileCode2 size={18} />Balise Meta</p>
                    <Code language="html">
{`<meta name="description" content="Make your own Portfolio, ... portfolio builder"/>
<meta property="og:title" content="Portfolio Builder"> 
<meta property="og:description" content="Create ..., no design skills required.">`}
                    </Code>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="bg-white/5 border border-white/10 p-4">
                        <p className="flex items-center gap-2 text-blue-400 font-semibold mb-2"><FileCode2 size={18} /> Référencement</p>
                        <ul className="text-white text-md space-y-1 list-none">
                            <li className="flex items-center gap-2"><Tags size={14} /> HTML sémantique + <code>title</code> / <code>meta description</code></li>
                            <li className="flex items-center gap-2"><Link2 size={14} /> URLs lisibles par slug : <code>/u/:slug</code></li>
                            <li>Attributs <code>alt</code> sur toutes les images porteuses de sens</li>
                        </ul>
                    </div>
                    <div className="bg-white/5 border border-white/10 p-4">
                        <p className="flex items-center gap-2 text-green-400 font-semibold mb-2"><Contrast size={18} /> Accessibilité — WCAG 2.1 / RGAA <span className="text-slate-900 text-md font-normal">annexe p. 42</span></p>
                        <ul className="text-white text-md space-y-1 list-none">
                            <li>Contraste vérifié (WebAIM) : <strong>17,24:1</strong></li>
                            <li>Niveau <strong>AA et AAA</strong> validés (minimum AA : 4,5:1)</li>
                        </ul>
                    </div>
                </div>
            </div>

            <aside className="notes">
                <pre><code>{notes}</code></pre>
            </aside>
        </Slide>
    );
}
