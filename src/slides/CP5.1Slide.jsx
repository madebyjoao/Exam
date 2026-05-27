import { Slide, Fragment, Code } from '@revealjs/react';

export default function CP5Slide() {
    return (
        <Slide background="linear-gradient(135deg, #183d3d 0%, #93b1a6 100%)">
            <div className="flex items-center gap-3 mb-5">
                <span className="bg-purple-500/20 text-purple-400 border border-purple-400/30 px-3 py-1 rounded-full text-sm font-bold">CP5</span>
                <h2 className="text-3xl font-bold text-white">Base de données relationnelle</h2>
            </div>
            <div className="grid grid-cols-2 gap-5 text-left text-sm">
                <div>
                    <p className="text-purple-400 font-semibold mb-3">Schéma — 6 tables</p>
                    <ul className="text-slate-300 space-y-1 list-none">
                        {['users', 'portfolios', 'projects', 'project_images', 'certificates', 'technologies'].map(t => (
                            <Fragment key={t} as="li" animation="fade-right">
                                🗂️ <code className="text-blue-300">{t}</code>
                            </Fragment>
                        ))}
                    </ul>
                </div>
                <Fragment>
                    <p className="text-orange-400 font-semibold mb-3">Migration — table users</p>
                    <Fragment className='text-2xl w-auto'>
                        <Code language="js" lineNumbers="5-10" className="text-3xl">
                          {`await queryInterface.createTable("users", {
    id: { type: INTEGER, primaryKey: true,
            autoIncrement: true },
    email: { type: STRING(255),
            unique: true, allowNull: false },
    role: { type: ENUM("ADMIN","CLIENT"),
            defaultValue: "CLIENT" },
    password: { type: STRING(255) },
    // ...
});`}
                      </Code>
                    </Fragment>
                </Fragment>
            </div>
            <aside className="notes">8 fichiers de migration pour l'évolution du schéma. Mentionner les foreign keys et les ENUM pour les rôles.</aside>
        </Slide>
    );
}
