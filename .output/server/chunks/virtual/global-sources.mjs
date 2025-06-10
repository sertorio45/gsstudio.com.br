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
            "name": "nuxt:route-rules",
            "description": "Generated from your route rules config.",
            "tips": [
                "Can be disabled with `{ excludeAppSources: ['nuxt:route-rules'] }`."
            ]
        },
        "urls": [
            "/"
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
            "/[:slug]",
            {
                "loc": "/[:slug]"
            },
            {
                "loc": "/"
            },
            {
                "loc": "/cases/mdmoveis"
            },
            {
                "loc": "/blog"
            },
            {
                "loc": "/politica-de-privacidade"
            },
            {
                "loc": "/sobre"
            },
            {
                "loc": "/servicos"
            },
            {
                "loc": "/contato"
            },
            {
                "loc": "/servicos/criacao-de-sites"
            },
            {
                "loc": "/branding-nao-e-so-logo"
            },
            {
                "loc": "/trafego-pago-o-segredo-para-crescer-rapido-no-digital"
            },
            {
                "loc": "/por-que-seu-site-precisa-de-seo-descubra-como-aparecer-no-google"
            }
        ],
        "sourceType": "app"
    }
];

export { sources };
//# sourceMappingURL=global-sources.mjs.map
