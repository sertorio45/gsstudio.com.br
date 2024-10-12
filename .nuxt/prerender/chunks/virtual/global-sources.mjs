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
                "loc": "/contato"
            },
            {
                "loc": "/"
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
                "loc": "/solucoes/gscrm"
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
            {
                "loc": "/como-o-design-impacta-na-percepcao-da-sua-marca"
            },
            {
                "loc": "/por-que-seu-site-precisa-de-um-blog"
            },
            {
                "loc": "/aproveitando-o-potencial-das-redes-sociais-para-alavancar-o-seu-negocio"
            },
            {
                "loc": "/testse"
            },
            {
                "loc": "/tstes"
            },
            {
                "loc": "/como-um-site-influencia-a-sua-visibilidade-online"
            },
            {
                "loc": "/o-impacto-da-velocidade-de-carregamento-no-seo-do-seu-site"
            },
            {
                "loc": "/como-o-trafego-pago-impulsiona-sua-visibilidade-online"
            }
        ],
        "sourceType": "app"
    }
];

export { sources };
//# sourceMappingURL=global-sources.mjs.map
