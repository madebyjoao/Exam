import { Slide } from '@revealjs/react';

export default function AT1DividerSlide() {
    return (
        <Slide background="linear-gradient(135deg, #183d3d 0%, #93b1a6 100%)">
            <div className="flex flex-col items-center justify-center h-full gap-4">
                <span className="text-green-400 text-sm font-semibold tracking-widest uppercase">
                    Activité Type 1
                </span>
                <h2 className="text-5xl font-black text-white text-center leading-tight">
                    Développer la partie<br />
                    <span className="text-green-400">front-end</span>
                </h2>
                <p className="text-slate-400 text-xl">d'une application web sécurisée</p>
                <div className="flex gap-4 mt-6 text-sm text-amber-500">
                    <span>CP1 · CP2 · CP3 · CP4</span>
                </div>
            </div>
        </Slide>
    );
}
