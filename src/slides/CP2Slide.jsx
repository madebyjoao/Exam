import { Slide, Fragment } from '@revealjs/react';
import Figma from "../assets/figma.png";
import Wireframe from "../assets/wireframe.png";


export default function CP2Slide() {
    return (
        <Slide background="linear-gradient(135deg, #183d3d 0%, #93b1a6 100%)">
            <div className="flex items-center gap-3 mb-6">
                <span className="bg-green-500/20 text-green-400 border border-green-400/30 px-3 py-1 rounded-full text-sm font-bold">CP2</span>
                <h2 className="text-3xl font-bold text-white">Maquettage des interfaces <span className='text-sm'>dossier projet — p. 12-13</span></h2>
            </div>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 text-left max-h-150">
                <div className=' p-5'>
                    <p className="text-slate-400 text-md mb-4">Wireframe</p>
                    
                </div>
                <div className='col-start-2'>
                    <img src={Wireframe} alt="" />                    
                </div>              
                <div className="row-start-2 p-5">
                    <p className="text-green-400 font-semibold mb-3">Maquette Figma</p>
                    
                </div>
                <div>
                    <img src={Figma} alt="" />
                </div>
            </div>
        </Slide>
    );
}
