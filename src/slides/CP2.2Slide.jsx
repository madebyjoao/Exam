import { Slide, Fragment } from '@revealjs/react';
import Figma from "../assets/figma.png";

export default function CP2_2Slide() {
    return (
        <Slide 
            data-background-color="white"
            backgroundImage={Figma} backgroundSize="69%" backgroundPosition="center" backgroundRepeat="no-repeat">
            <div className="flex justify-center items-center gap-3">
                <span className="bg-green-500/20 text-green-400 border border-green-400/30 px-3 py-1 rounded-full text-sm font-bold">CP2</span>
                <h2 className="text-3xl font-bold text-white">Figma <span className='text-sm'>page nr: X </span></h2>                
            </div>
        </Slide>
    );
}
