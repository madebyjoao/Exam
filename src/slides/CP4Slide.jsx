import { Slide, Code } from '@revealjs/react';

export default function CP4Slide() {
    const notes = `CP4 - Interfaces dynamiques — rendu dynamique du template (Mission n°3) :
- useParams (React Router) extrait le slug de l'URL /u/:slug.
- useQuery (TanStack Query) interroge l'API publique et met la réponse en cache (queryKey ["portfolio", slug]).
  Gestion des états isPending / isError / success → feedback immédiat à l'utilisateur.
- Le switch sur data.portfolio.template rend dynamiquement le bon composant (TemplateOne/Two/Three)
  sans dupliquer la logique de récupération des données.
- Seuls les portfolios publiés (is_published) sont renvoyés par l'API → 403 sinon.

À mentionner à l'oral (déplacé de l'ancienne slide) :
- React Router : routes imbriquées avec layouts (PublicLayout, PortfolioLayout, BuilderLayout),
  routes privées protégées par RoleGuard (rôles ADMIN/CLIENT).
- TanStack Query : staleTime Infinity + invalidation ciblée du cache après chaque mutation
  (queryClient.invalidateQueries).
- Axios : intercepteur qui injecte automatiquement le token JWT (Bearer) sur chaque requête sortante.`;

    return (
        <Slide background="linear-gradient(135deg, #183d3d 0%, #93b1a6 100%)">
            <div className="flex items-center gap-3 mb-5">
                <span className="bg-green-500/20 text-green-400 border border-green-400/30 px-3 py-1 rounded-full text-sm font-bold">CP4</span>
                <h5 className="text-3xl font-bold text-white">Interfaces dynamiques — rendu du template <span className='text-sm'>dossier projet — p. 31-33</span></h5>
            </div>
            <div className="grid grid-cols-2 gap-5 text-left text-sm">
                <div className="bg-white/5 border border-white/10 p-3">
                    <p className="text-purple-400 font-semibold mb-2">Sélection dynamique du template — <code>/u/:slug</code></p>
                    <Code language="jsx" lineNumbers="1-24">
{`const { slug } = useParams();

const { isPending, isError, data, error } = useQuery({
    queryKey: ["portfolio", slug],
    queryFn: () => getPortfolioBySlug(slug),
    enabled: !!slug,
});

if (isPending) return <div>Chargement en cours...</div>;
if (isError)   return <div>Erreur : {error.message}</div>;

const template = data.portfolio.template;

switch (template) {
    case 1:
        return <TemplateOne />;
    case 2:
        return <TemplateTwo />;
    case 3:
        return <TemplateThree />;
    default:
        return <h1>no template</h1>;
}`}
                    </Code>
                </div>

                <div className="bg-white/5 border border-white/10 p-3">
                    <p className="text-purple-400 font-semibold mb-2">API publique — <code>getPortfolioThree</code></p>
                    <Code language="jsx" lineNumbers="1-8|9-14|15-34">
{`async function getPortfolioThree(req, res) {
    const { slug } = req.params;

    try {
        const portfolio = await Portfolio.findOne({
            where: { slug },
            attributes: ["id", "template", "title", ..., "picture_path"],
        });
        if (!portfolio) {
            return res.status(404).json({ error: "Portfolio not found" });
        }
        if (!portfolio.is_published) {
            return res.status(403).json({ error: "Portfolio not published" });
        }
        const certificates = await Certificate.findAll({
            where: {
                portfolio_id: portfolio.id,
                is_public: 1,
            },
        });
        const projects = await Project.findAll({
            where: { portfolio_id: portfolio.id },
            include: [{ model: ProjectImage, as: "images" }],
        });
        res.status(200).json({
            portfolio: portfolio,
            certificates: certificates,
            projects: projects,
        });
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch template" });
    }
}`}
                    </Code>
                </div>

                <div className="col-span-2 grid grid-cols-4 gap-2">
                    {[
                        ['1', 'useParams', 'React Router extrait le slug de l’URL /u/:slug'],
                        ['2', 'useQuery', 'TanStack Query interroge l’API et met la réponse en cache'],
                        ['3', 'États', 'isPending / isError / success → feedback utilisateur immédiat'],
                        ['4', 'switch', 'Rendu conditionnel du template choisi par le client (1, 2 ou 3)'],
                    ].map(([n, title, desc]) => (
                        <div key={n} className="bg-white/5 border border-white/10 p-1 flex items-start gap-2">
                            <span className="w-6 h-6 bg-green-500/30 text-green-300 rounded-full flex items-center justify-center text-xs font-bold shrink-0">{n}</span>
                            <div>
                                <p className="text-black text-lg font-semibold">{title}</p>
                                <p className="text-white text-md">{desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <aside className="notes">
                <pre><code>{notes}</code></pre>
            </aside>
        </Slide>
    );
}
