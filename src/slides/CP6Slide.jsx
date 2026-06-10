import { Slide, Fragment, Code } from '@revealjs/react';

export default function CP6Slide() {
    return (
        <Slide background="linear-gradient(135deg, #183d3d 0%, #93b1a6 100%)">
            <div className="flex items-center gap-3 mb-5">
                <span className="bg-purple-500/20 text-purple-400 border border-purple-400/30 px-3 py-1 rounded-full text-sm font-bold">CP6</span>
                <h2 className="text-3xl font-bold text-white">Accès aux données — Sequelize ORM</h2>
            </div>
            <div className="grid grid-cols-2 gap-5 text-sm">
                <div>
                    <p className="text-blue-400 font-semibold mb-3 text-left">Modèle User</p>
                    <Code language="js" lineNumbers="1-12">
                        {`const User = sequelize.define("User", {
                        email: {
                            type: DataTypes.STRING(255),
                            allowNull: false,
                            validate: { isEmail: true },
                        },
                        role: {
                            type: DataTypes.ENUM("ADMIN","CLIENT"),
                            defaultValue: "CLIENT",
                        },
                        }, { tableName: "users",
                            timestamps: true });`}
                    </Code>
                </div>
                <Fragment asChild>
                    <div>
                        <p className="text-green-400 font-semibold mb-3 text-left">Connexion & requêtes</p>
                        <Code language="js">
                    {`// Connexion sécurisée via .env
                    const sequelize = new Sequelize(
                    process.env.DB_NAME,
                    process.env.DB_USER,
                    process.env.DB_PASSWORD,
                    { dialect: "mysql" }
                    );

                    // Exemple de requête ORM
                    const user = await User.findOne({
                    where: { email: decoded.email }
                    });`}
                        </Code>
                    </div>
                </Fragment>
            </div>
        </Slide>
    );
}
