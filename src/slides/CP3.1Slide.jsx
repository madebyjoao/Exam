import { Slide, Fragment, Code } from '@revealjs/react';
import StaticPage from "../assets/static.png"

export default function CP3_1Slide() {
  const notes = `Résultat du HTML/CSS de la slide précédente : la page statique rendue,
intégrée en sémantique (header/main/section/footer) et responsive (breakpoints Tailwind).`;
    return (
      <Slide 
        backgroundColor='white'
        backgroundImage={StaticPage} backgroundSize="69%" backgroundPosition="center" backgroundRepeat="no-repeat">
        
        <div className="flex justify-center items-center gap-3 mb-5">
            <span className="bg-green-500/20 text-green-400 border border-green-400/30 px-3 py-1 rounded-full text-sm font-bold">CP3</span>
            <p className="text-6xl font-extrabold text-black">Interface statique — rendu </p>
        </div>
        
        <aside className="notes text-lg">
            <pre><code>{notes}</code></pre>
        </aside>
    </Slide>
    );
}
