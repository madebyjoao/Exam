import { Slide } from '@revealjs/react';

export default function AT2DividerSlide() {
    return (
        <Slide background="linear-gradient(135deg, #183d3d 0%, #93b1a6 100%)">
            <div className="flex flex-col items-center justify-center h-full gap-4">
                <span className="text-purple-400 text-sm font-semibold tracking-widest uppercase">
                    Activité Type 2
                </span>
                <h2 className="text-5xl font-black text-white text-center leading-tight">
                    Développer la partie<br />
                    <span className="text-red-600">back-end</span>
                </h2>
                <p className="text-white text-md">d'une application web sécurisée</p>
                <div className="flex gap-4 mt-6 text-md text-red-500">
                    <span>CP5 · CP6 · CP7 · CP8</span>
                </div>^^^^^^^^^^^^^^^^^^
            </div>

           
        </Slide>
    );
}
