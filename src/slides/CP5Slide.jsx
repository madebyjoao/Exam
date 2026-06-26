import { Slide, Fragment, Code } from '@revealjs/react';
import { DatabaseZap, FolderOpen } from 'lucide-react';

export default function CP5Slide() {

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
                <span className="bg-purple-500/20 text-purple-400 border border-purple-400/30 px-3 py-1 rounded-full text-sm font-bold">CP5</span>
                <h2 className="text-3xl font-bold text-white">Base de données relationnelle</h2>
            </div>
            <div className="grid grid-cols-2 gap-5 text-left text-sm">
                
                <div>
                    <div>
                        <p className="text-orange-400 font-semibold mb-3">Migration — table users (Sequelize)</p>
                        <Code language="js" lineNumbers="1-38">
{`await queryInterface.createTable("users", {
  id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },

      first_name: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },

      last_name: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },

      email: {
        type: Sequelize.STRING(255),
        allowNull: false,
        unique: true,
      },

      password: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },

      role: {
        type: Sequelize.ENUM("ADMIN", "CLIENT"),
        allowNull: false,
        defaultValue: "CLIENT",
      },

      ...
    });
  },`}
                        </Code>
                    </div>                    
                </div>
                <div>
                    <div>
                        <p className="text-orange-400 font-semibold mb-3">Associations — table users - portfolio - project(Sequelize)</p>
                        <Code language="js" lineNumbers="1-38">
{`User.hasOne(Portfolio, {
    foreignKey: "user_id",
    as: "portfolio",
});

Portfolio.belongsTo(User, {
    foreignKey: "user_id",
    as: "user",
});

Portfolio.hasMany(Project, {
    foreignKey: "portfolio_id",
    as: "projects",
});

Project.belongsTo(Portfolio, {
    foreignKey: "portfolio_id",
    as: "portfolio",
});`}
                        </Code>
                    </div>
                    
                </div>
            </div>
            <aside className="notes">
                <pre><code>{`CP5 - Base de données relationnelle:
- 5 tables: users, portfolios, projects, project_images, certificates.
- 8 fichiers de migration Sequelize pour l'évolution incrémentale du schéma.
- Relations: users → portfolios (1:1), portfolios → projects (1:N), projects → project_images (1:N).
- ENUM pour les rôles (ADMIN/CLIENT) et les types de certificats — valeurs contraintes côté base.
- Champ slug dans portfolios pour les URLs propres (/u/:slug).
- technologies stockées en JSON dans projects — choix délibéré pour éviter une table de jointure.
- is_published et is_public (0/1) — contrôle de visibilité à deux niveaux.
${sqlNote}`}</code></pre>
            </aside>
        </Slide>
    );
}
