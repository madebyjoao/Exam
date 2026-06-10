import { Slide } from '@revealjs/react';

export default function AT2DividerSlide() {
    const notes = `AT1 - Développer la partie front-end d’une application web ou web mobile sécurisée ->
CP5 - Installer et configurer son environnement de travail en fonction du projet web ou web mobile ->
CP6 - Maquetter des interfaces utilisateur web ou web mobile 
CP7 - Réaliser des interfaces utilisateur statiques web ou web mobile ->
CP8 - Développer la partie dynamique des interfaces utilisateur web ou web mobile`

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
