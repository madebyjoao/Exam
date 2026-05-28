import { Slide, Fragment, Code } from '@revealjs/react';
import { DatabaseZap, FolderOpen } from 'lucide-react';

export default function CP5_1Slide() {
    const tables = ['users', 'portfolios', 'projects', 'project_images', 'certificates'];
    const sqlNote = `CREATE TABLE \`users\` (
    \`id\` INT AUTO_INCREMENT PRIMARY KEY,
    \`email\` VARCHAR(255) UNIQUE NOT NULL,
    \`role\` ENUM('ADMIN', 'CLIENT') DEFAULT 'CLIENT',
    \`password\` VARCHAR(255)
    );`;
    
    return (
        <Slide background="linear-gradient(135deg, #183d3d 0%, #93b1a6 100%)">
            <div className="flex items-center gap-3 mb-5">
                <span className="bg-purple-500/20 text-purple-400 border border-purple-400/30 px-3 py-1 rounded-full text-sm font-bold">CP5.1</span>
                <h2 className="text-3xl font-bold text-white">Base de données relationnelle</h2>
            </div>
            <div className="grid grid-cols-2 gap-5 text-left text-sm">
				<div>
					<p className="flex gap-2 items-center text-purple-400 font-semibold mb-3"><DatabaseZap />Schéma — 5 tables</p>
					<style>{`.cp5-list li { list-style: none !important; }`}</style>
					<ul className="cp5-list text-slate-300 space-y-1">
						{tables.map((table, index) => {        
                            // console.log('Rendering item:', table, 'at index:', index);              
							return (
                            <Fragment key={table} as="li" animation="fade-right" index={index}>
								<div className='flex gap-2 items-center'><FolderOpen /> <code className="text-blue-300">{table}</code></div>
							</Fragment>
                            );
                        })}
					</ul>
				</div>
                <Fragment index={5}>
                    <p className="text-orange-400 font-semibold mb-3">Migration — table users</p>
                    <div index={7} className='text-2xl w-auto'>
                        <Code language="js" lineNumbers="1-10" className="text-3xl">
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
                    </div>
                </Fragment>
            </div>
            <aside className="notes text-lg">
                8 fichiers de migration pour l'évolution du schéma. Mentionner les foreign keys et les ENUM pour les rôles.
                <br/>
                <br/>
                <pre><code>{sqlNote}</code></pre>
            </aside>
        </Slide>
    );
}