const sources = [
    {
        "context": {
            "name": "sitemap:urls",
            "description": "Set with the `sitemap.urls` config."
        },
        "urls": [],
        "sourceType": "user"
    },
    {
        "context": {
            "name": "nuxt:pages",
            "description": "Generated from your static page files.",
            "tips": [
                "Can be disabled with `{ excludeAppSources: ['nuxt:pages'] }`."
            ]
        },
        "urls": [
            {
                "loc": "/blog"
            },
            {
                "loc": "/cases/mdmoveis"
            },
            {
                "loc": "/contato"
            },
            {
                "loc": "/"
            },
            {
                "loc": "/politica-de-privacidade"
            },
            {
                "loc": "/servicos/criacao-de-sites"
            },
            {
                "loc": "/servicos"
            },
            {
                "loc": "/sobre"
            }
        ],
        "sourceType": "app"
    },
    {
        "context": {
            "name": "nuxt:prerender",
            "description": "Generated at build time when prerendering.",
            "tips": [
                "Can be disabled with `{ excludeAppSources: ['nuxt:prerender'] }`."
            ]
        },
        "urls": [
            "/:slug",
            {
                "loc": "/:slug"
            },
            {
                "loc": "/cases/mdmoveis"
            },
            {
                "loc": "/politica-de-privacidade"
            },
            {
                "loc": "/servicos"
            },
            {
                "loc": "/sobre"
            },
            {
                "loc": "/contato"
            },
            {
                "loc": "/servicos/criacao-de-sites"
            },
            {
                "loc": "/blog"
            },
            {
                "loc": "/"
            },
            {
                "loc": "/por-que-seu-site-precisa-de-seo-descubra-como-aparecer-no-google"
            },
            {
                "loc": "/traaaafego-pago-o-segredo-para-crescer-rapido-no-digital"
            },
            {
                "loc": "/branding-nao-e-so-logo"
            }
        ],
        "sourceType": "app"
    }
];

export { sources };
//# sourceMappingURL=global-sources.mjs.map
