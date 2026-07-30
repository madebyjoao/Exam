import { Slide, Fragment, Code } from '@revealjs/react';

export default function CP3Slide() {
    return (
      <Slide background="linear-gradient(135deg, #183d3d 0%, #93b1a6 100%)">
        <div className="flex items-center gap-3 mb-5">
          <span className="bg-green-500/20 text-green-400 border border-green-400/30 px-3 py-1 rounded-full text-sm font-bold">
            CP3
          </span>
          <h2 className="text-3xl font-bold text-white">
            Interfaces statiques <span className='text-sm'>dossier projet — p. 14</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-5 text-left text-sm">
          <div>
            <div>
              <p className="text-orange-400 font-semibold mb-3">
                Html - Page Statique
              </p>
              <Code language="html" lineNumbers="1-42">
                {`<section class="col col-left">

  <article>
    <h2 class="kw">public static class</h2>
    <h3 class="class-name">EXPÉRIENCES</h3>
  </article>

  <div class="brace">{</div>

  <article class="method">
    <div class="method-sig">
      <span class="kw">public void</span>&nbsp;
      <span class="fn">FreelanceDev</span><span class="pt">()</span>
    </div>
    <div class="brace">{</div>
    <div class="method-body">
      <div class="field">
        <span class="kw">var</span> <span class="vc">_Client</span>
        <span class="pt">=</span> <span class="st">"NeoGec"</span>
        <span class="pt">;</span>
      </div>
      <div class="field">
        <span class="kw">var</span> <span class="vc">_Date</span>
        <span class="pt">=</span> Range(2026, en cours)
        <span class="pt">;</span>
      </div>
      <div class="field">
        <span class="kw">var</span> <span class="vc">_Type</span>
        <span class="pt">=</span> <span class="kw">new</span> 
        <span class="ty">Freelance</span><span class="pt">;</span>
      </div>
    </div>
    <div class="brace">}</div>
    <article class="comment-block">
      <span class="cbullet">Conception et développement web</span>
      <span class="cbullet">Analyse des besoins client</span>
      <span class="cbullet">Intégration front-end (HTML/CSS/React)</span>
      <span class="cbullet">Backend (Node.js / Express)</span>
      <span class="cbullet">Déploiement et mise en ligne</span>
    </article>
  </article>
</section>`}
              </Code>
            </div>
          </div>
          <div>
            <div>
              <p className="text-orange-400 font-semibold mb-3">
                CSS - Interface Statique + responsive
              </p>
              <Code language="css" lineNumbers="1-44">
                {`.brace { color: var(--punct); }
.class-name {
    font-size: 13.5px;
    font-weight: 700;
    color: var(--class);
}
.col { padding: 20px 24px; min-width: 0; }
.col-left { border-right: 1px solid var(--border); min-width: 0; }
.kw  { color: var(--keyword); }
.method { margin: 6px 0 0 18px; }
.method-sig { display: flex; align-items: baseline; flex-wrap: wrap; gap: 3px; }
.method-body { padding-left: 18px; margin: 3px 0 3px; }
.field { margin: 3px 0; }
.comment-block {
    margin: 6px 0 6px 18px;
    padding: 7px 12px;
    border-left: 2px solid var(--border);
    background: rgba(255,255,255,0.025);
    border-radius: 0 3px 3px 0;
    color: var(--comment);
    font-style: italic;
    font-size: 10.5px;
    line-height: 1.75;
    }
.cbullet { display: block; padding-left: 10px; position: relative; }

@media (max-width: 768px) {
    .grid {
        grid-template-columns: 1fr;
    }
    .col-left {
        border-right: none;
        border-bottom: 1px solid var(--border);
    }
    .col { padding: 14px 16px; }
    .class-name { font-size: 12px; }
}
 `}
              </Code>
            </div>
          </div>
        </div>
        <aside className="notes">
          Montrer un exemple de composant réutilisable si possible.
        </aside>
      </Slide>
    );
}
