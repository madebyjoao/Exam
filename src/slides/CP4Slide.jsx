import { Slide, Fragment, Code } from '@revealjs/react';

export default function CP4Slide() {
    return (
        <Slide
            background="linear-gradient(135deg, #183d3d 0%, #93b1a6 100%)">
            <div                
                className="flex items-center gap-3 mb-5">
                <span className="bg-green-500/20 text-green-400 border border-green-400/30 px-3 py-1 rounded-full text-sm font-bold">CP4</span>
                <h2 className="text-3xl font-bold text-white">Interfaces dynamiques</h2>
            </div>
            <div className="grid grid-cols-2 grid-rows-[auto_auto] gap-3 text-left text-sm ">
                {/* Row 1, Col 1 — TanStack Query (first half) */}
                <Fragment asChild>
                    <div className="bg-white/5 border border-white/10  p-4 col-span-2 h-fit">
                        <p className="text-purple-400 font-semibold mb-2">TanStack Query</p>
                        <div className='grid grid-cols-2 grid-rows-1 h-fit'>
                            <div className="">                            
                                <ul className="text-slate-300 space-y-1 list-none">
                                    <li>Cache des requêtes: (staleTime: Infinity)</li>
                                    <li>Invalidation ciblée après mutation</li>
                                </ul>
                            </div>
                            <div className="col-start-2">
                                <ul className="text-slate-300 list-none">
                                    <li>States loading / error / success</li>
                                    <li>RoleGuard — vérification token côté client</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Fragment>


                {/* Row 2, Col 1 — React Router */}
                <Fragment asChild>
                    <div className="bg-white/5 border border-white/10  p-2 row-start-2 col-start-1 h-fit">
                        <p className="text-blue-400 font-semibold mb-2">Routage — React Router</p>
                        <Code language="jsx">
{`<BrowserRouter>
    <QueryClientProvider client={queryClient}>
        <Routes>
            {/* Routes publiques */}
            <Route path="/" element={<PublicLayout />}>
                <Route index element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/auth/login" element={<Login />} />
                <Route path="/auth/register" element={<Register />} />
            </Route>

            {/* CV standalone page */}
            <Route path="/cv" element={<CV />} />

            {/* Routes portfolio */}
            <Route path="/u" element={<PortfolioLayout />}>
                <Route path=":slug" element={<Portfolio />} />
                <Route path=":slug/certificates" element={<Certificates />} />
            </Route>

            {/* Routes privées */}
            <Route
                path="/builder"
                element={<RoleGuard allowedRoles={["ADMIN", "CLIENT"]}>
                            <BuilderLayout />
                        </RoleGuard>} >
                <Route index element={<Builder />} />
                <Route path="projects" element={<BuilderProjects />} />
                <Route
                    path="certificates"
                    element={<BuilderCertificates />}
                />
                <Route path="preview" element={<BuilderPreview />} />
            </Route>
        </Routes>
    </QueryClientProvider>
</BrowserRouter>`}
                        </Code>
                    </div>
                </Fragment>

                {/* Row 2, Col 2 — Axios */}
                <Fragment asChild>
                    <div className="bg-white/5 border border-white/10  p-3 row-start-2 col-start-2 h-fit">
                        <p className="text-green-400 font-semibold mb-2">Axios — intercepteur JWT</p>
                        <Code language="js">
{`import axios from "axios";

export const BASE_URL = "http://localhost:3000";

const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
});

instance.interceptors.request.use(
    async (config) => {
        const token = localStorage.getItem("token");

        if (token !== null) {
            config.headers.Authorization = \`Bearer \${token}\`;
        }

        return config;
    },
    (error) => {
        console.log("une erreur est survenue:", error);
        return Promise.reject(new Error(error));
    },
);

export default instance;`}
                        </Code>
                    </div>
                </Fragment>
            </div>
            <aside className="notes">
                <pre><code>{`CP4 - Interfaces dynamiques:
- TanStack Query: gère le cache côté client avec staleTime: Infinity pour éviter des requêtes inutiles.
  Après chaque mutation (create/update/delete), on invalide le cache ciblé via queryClient.invalidateQueries.
  Gestion des états loading/error/success pour afficher des feedbacks à l'utilisateur.
- React Router: structure de routes imbriquées avec layouts (PublicLayout, BuilderLayout, AdminLayout, PortfolioLayout).
  Routes privées protégées par RoleGuard qui vérifie le token JWT stocké en localStorage.
- Axios intercepteur: injecte automatiquement le token Bearer sur chaque requête sortante.
  Sépare la logique d'authentification du reste des composants.`}</code></pre>
            </aside>
        </Slide>
    );
}
