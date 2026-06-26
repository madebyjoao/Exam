import { Slide, Fragment, Code } from '@revealjs/react';

export default function CP7Slide() {
    return (
        <Slide background="linear-gradient(135deg, #183d3d 0%, #93b1a6 100%)">
            <div className="flex items-center gap-3 mb-4">
                <span className="bg-purple-500/20 text-purple-400 border border-purple-400/30 px-3 py-1 rounded-full text-sm font-bold">CP7</span>
                <h2 className="text-3xl font-bold text-white">Composants métier côté serveur</h2>
            </div>
            <div className="grid grid-cols-3 gap-4 text-sm text-left">
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <p className="text-orange-400 font-semibold mb-2">🔐 Auth JWT</p>
                    <Code language="js">
{`const decoded = jwt.verify(
  token,
  process.env.JWT_SECRET
);
// Vérification rôle
if (!roles.includes(user.role))
  return res.status(401).json(
    { error: "Permission denied" }
  );`}
                    </Code>
                </div>
                <Fragment asChild>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                        <p className="text-blue-400 font-semibold mb-2">🖼️ Upload & Sharp</p>
                        <Code language="js">
{`await sharp(file.buffer)
  .resize(800, 600, {
    fit: "inside",
    withoutEnlargement: true
  })
  .jpeg({ quality: 80 })
  .toFile(uploadPath);`}
                        </Code>
                    </div>
                </Fragment>
                <Fragment asChild>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                        <p className="text-green-400 font-semibold mb-2">🛣️ Routes Express</p>
                        <ul className="text-slate-300 text-xs space-y-1 list-none">
                            <li><code>POST /auth/login</code></li>
                            <li><code>GET /portfolio/:slug</code></li>
                            <li><code>POST /builder/upload</code></li>
                            <li><code>GET /admin/users</code></li>
                            <li><code>POST /auth/checkToken</code></li>
                        </ul>
                        <p className="text-slate-500 text-xs mt-2">Multer (5 MB max) + middleware auth sur chaque route protégée</p>
                    </div>
                </Fragment>
            </div>
            <aside className="notes">
                <pre><code>{`CP7 - Composants métier côté serveur:
- AuthMiddleware: vérifie le JWT à chaque requête protégée, extrait le rôle et bloque si insuffisant (401).
  Le secret JWT est dans .env — jamais exposé côté client.
- Upload pipeline: Multer reçoit le fichier en mémoire (buffer), valide le type MIME et la taille (5MB max).
  Sharp recompresse et redimensionne avant écriture sur disque — économise l'espace et normalise les images.
- Controllers séparés: AuthController, BuilderController, PortfolioController, AdminPortfolioController,
  OverviewController, UserController, UploadController, HomeController.
- Défense en profondeur: validation Sequelize (modèle) + contrôle middleware (auth) + sanitisation Multer (upload).`}</code></pre>
            </aside>
        </Slide>
    );
}
