import { Slide, Fragment } from '@revealjs/react';

export default function CP3Slide() {
    return (
        <Slide background="linear-gradient(135deg, #183d3d 0%, #93b1a6 100%)">
            <div className="flex items-center gap-3 mb-5">
                <span className="bg-green-500/20 text-green-400 border border-green-400/30 px-3 py-1 rounded-full text-sm font-bold">CP3</span>
                <h2 className="text-3xl font-bold text-white">Interfaces statiques</h2>
            </div>
            <div className="grid grid-cols-2 gap-5 text-left">
                <div>
                    <p className="text-blue-400 font-semibold mb-3">Composants réutilisables</p>
                    <ul className="text-slate-300 text-sm space-y-1 list-none">
                        <Fragment as="li" animation="fade-up">📦 <code>Navbar</code>, <code>Footer</code>, <code>FormField</code></Fragment>
                        <Fragment as="li" animation="fade-up">📦 <code>StatsBox</code>, <code>TopAlert</code>, <code>ThemeToggle</code></Fragment>
                        <Fragment as="li" animation="fade-up">📦 <code>AddsLeft</code> / <code>AddsRight</code> — layouts</Fragment>
                        <Fragment as="li" animation="fade-up">📦 <code>TemplateOne</code>, <code>TemplateTwo</code>, <code>TemplateThree</code></Fragment>
                    </ul>
                </div>
                <Fragment asChild>
                    <div>
                        <p className="text-purple-400 font-semibold mb-3">Responsive & accessibilité</p>
                        <ul className="text-slate-300 text-sm space-y-1 list-none">
                            <li>📱 Hook <code>use-mobile.js</code> pour adapter l'UI</li>
                            <li>🎨 Tailwind CSS 4 — utility-first</li>
                            <li>🌙 Dark mode via <code>ThemeToggle</code></li>
                            <li>📐 Layouts : Public / Builder / Admin / Portfolio</li>
                        </ul>
                    </div>
                </Fragment>
            </div>
            <aside className="notes">Montrer un exemple de composant réutilisable si possible.</aside>
        </Slide>
    );
}
