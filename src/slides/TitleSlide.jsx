import { Slide } from '@revealjs/react';

export default function TitleSlide() {
    return (
        <Slide background="linear-gradient(135deg, #183d3d 0%, #93b1a6 100%)">
            <div className="flex flex-col items-center justify-center h-full gap-6">
                <span className="bg-blue-500/20 border font-semibold border-blue-400/40 rounded-full py-2 px-3 text-blue-300 text-sm tracking-widest uppercase">
                    Titre Professionnel DWWM
                </span>
                <h1 className="text-6xl font-black text-white leading-tight">
                    Portfolio Builder
                </h1>
                <p className="text-2xl text-slate-400 max-w-xl text-center">
                    Application full-stack de création et publication de portfolios professionnels
                </p>
                <p className="text-lg text-slate-300">
                    Présenté par <strong className="text-white">Joao Silva</strong> — Session 2026
                </p>
                <div className="flex gap-3 mt-4">
                    {['React', 'NodeJS', 'Express', 'MySQL', 'Sequelize', 'Tailwind CSS'].map(t => (
                        <span key={t} className="px-3 py-1 bg-white/10 rounded-full text-white text-sm">{t}</span>
                    ))}
                </div>
            </div>
        </Slide>
    );
}
