import { Slide } from '@revealjs/react';

export default function AT1DividerSlide() {
    const notes = `AT1 - Développer la partie front-end d’une application web ou web mobile sécurisée ->
CP1 - Installer et configurer son environnement de travail en fonction du projet web ou web mobile ->
CP2 - Maquetter des interfaces utilisateur web ou web mobile 
CP3 - Réaliser des interfaces utilisateur statiques web ou web mobile ->
CP4 - Développer la partie dynamique des interfaces utilisateur web ou web mobile`
    return (
        <Slide background="linear-gradient(135deg, #183d3d 0%, #93b1a6 100%)">
            <div className="flex flex-col items-center justify-center h-full gap-4">
                <span className="text-green-400 text-sm font-semibold tracking-widest uppercase">
                    Activité Type 1
                </span>
                <h2 className="text-5xl font-black text-white text-center leading-tight">
                    Développer la partie<br />
                    <span className="text-blue-500">front-end</span>
                </h2>
                <p className="text-white text-md">d'une application web sécurisée</p>
                <div className="flex gap-4 mt-6 text-md text-blue-400 ">
                    <span>CP1 · CP2 · CP3 · CP4</span>
                </div>
            </div>
            <aside className='notes'>

                <pre>
                    <code>
                        
                        {notes}

                    </code>
                </pre>

            </aside>
        </Slide>
    );
}
