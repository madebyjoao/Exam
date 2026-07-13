import { Slide, Fragment } from '@revealjs/react';
import Wireframe from "../assets/wireframe.png";

export default function CP2_1Slide() {
    return (
        <Slide backgroundImage={Wireframe} backgroundSize="69%" backgroundPosition="center" backgroundRepeat="no-repeat">
            <div className="flex justify-center items-center gap-3 mb-6">
                <span className="bg-green-500/20 text-green-400 border border-green-400/30 px-3 py-1 rounded-full text-sm font-bold">CP2</span>
                <h2 className="text-3xl font-bold text-white">Wireframe <span className='text-sm'>dossier — annexe p. 39</span></h2>
            </div>
        </Slide>
    );
}
