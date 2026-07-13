import { Slide, Fragment } from '@revealjs/react';

export default function DemoSlide() {
    return (
        <Slide background="linear-gradient(135deg, #183d3d 0%, #93b1a6 100%)">
            <div className="flex flex-col items-center justify-center h-full gap-6">
                <h2 className="text-5xl font-black text-white">Démonstration</h2>
                <div className="grid grid-cols-3 gap-6 mt-4 text-center">
                    {[
                        ['🌐', 'Page publique', 'localhost:5173'],
                        ['🔐', 'Login client', 'three@mbjtest.com'],
                        ['🛠️', 'Builder', '/builder'],
                        ['👤', 'Portfolio', '/u/three'],
                        ['🏅', 'Certificats', '/u/three/certificates'],
                        ['📊', 'Admin', '/admin'],
                    ].map(([icon, label, sub]) => (
                        <div key={label} asChild animation="fade-up">
                            <div className="bg-white/5 border border-white/10 p-4">
                                <div className="text-3xl mb-2">{icon}</div>
                                <p className="text-white font-semibold text-sm">{label}</p>
                                <p className="text-black text-xs mt-1">{sub}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Slide>
    );
}
