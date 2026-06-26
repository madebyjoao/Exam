import { Slide, Fragment, Code } from '@revealjs/react';

export default function CP6Slide() {
    const notes = `CP6 - Accès aux données avec Sequelize ORM:
- Modèle avec validation intégrée (isEmail, ENUM pour les rôles)
- Connexion sécurisée via variables d'environnement (.env) - jamais de credentials en dur
- CRUD complet: findOne, findAll, create, update, destroy
- Attributs exclus: le champ password n'est jamais retourné en consultation (attributes: { exclude })
- Confidentialité: bcrypt hash avant stockage, jamais de mot de passe en clair
- Intégrité: validation Sequelize avant toute écriture en base`;

    return (
        <Slide background="linear-gradient(135deg, #183d3d 0%, #93b1a6 100%)">
            <div className="flex items-center gap-3 mb-5">
                <span className="bg-purple-500/20 text-purple-400 border border-purple-400/30 px-3 py-1 rounded-full text-sm font-bold">CP6</span>
                <h2 className="text-3xl font-bold text-white">Accès aux données — Sequelize ORM</h2>
            </div>
            <div className="grid grid-cols-2 gap-5 text-sm">
                <div>
                    <p className="text-blue-400 font-semibold mb-3 text-left">Modèle avec validation</p>
                    <Code language="js" lineNumbers="1-10">
{`const User = sequelize.define("User", {
  email: {
    type: DataTypes.STRING(255),
    allowNull: false,
    validate: { isEmail: true },
  },
  role: {
    type: DataTypes.ENUM("ADMIN", "CLIENT"),
    defaultValue: "CLIENT",
  },
}, { tableName: "users", timestamps: true });`}
                    </Code>
                </div>
                <Fragment asChild>
                    <div>
                        <p className="text-green-400 font-semibold mb-3 text-left">CRUD — opérations sécurisées</p>
                        <Code language="js">
{`// Lecture (R) — password exclu
const user = await User.findOne({
  where: { email },
  attributes: { exclude: ["password"] },
});

// Création (C) — mot de passe hashé
const hash = await bcrypt.hash(password, 10);
await User.create({ email, password: hash });

// Mise à jour (U)
await Portfolio.update(fields, { where: { userId } });

// Suppression (D)
await Certificate.destroy({ where: { id } });`}
                        </Code>
                    </div>
                </Fragment>
            </div>
            <aside className="notes">
                <pre><code>{notes}</code></pre>
            </aside>
        </Slide>
    );
}
