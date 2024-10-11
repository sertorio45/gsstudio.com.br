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
                "loc": "/o-impacto-da-velocidade-de-carregamento-no-seo-do-seu-site"
            },
            {
                "loc": "/como-um-site-influencia-a-sua-visibilidade-online"
            },
            {
                "loc": "/por-que-seu-site-precisa-de-um-blog"
            },
            {
                "loc": "/aproveitando-o-potencial-das-redes-sociais-para-alavancar-o-seu-negocio"
            },
            {
                "loc": "/como-o-trafego-pago-impulsiona-sua-visibilidade-online"
            },
            {
                "loc": "/como-o-design-impacta-na-percepcao-da-sua-marca"
            },
            {
                "loc": "/sobre",
                "images": [
                    {
                        "loc": "https://gsstudio.com.br/img/ceo.webp"
                    }
                ]
            },
            {
                "loc": "/politica-de-privacidade"
            },
            {
                "loc": "/servicos",
                "images": [
                    {
                        "loc": "https://gsstudio.com.br/_ipx/w_100&amp;q_80/icons/servicos/sites.svg"
                    },
                    {
                        "loc": "https://gsstudio.com.br/_ipx/w_100&amp;q_80/icons/servicos/lojas_virtuais.svg"
                    },
                    {
                        "loc": "https://gsstudio.com.br/_ipx/w_100&amp;q_80/icons/servicos/branding.svg"
                    },
                    {
                        "loc": "https://gsstudio.com.br/_ipx/w_100&amp;q_80/icons/servicos/gestao_de_conteudo.svg"
                    },
                    {
                        "loc": "https://gsstudio.com.br/_ipx/w_100&amp;q_80/icons/servicos/trafego_pago.svg"
                    },
                    {
                        "loc": "https://gsstudio.com.br/_ipx/w_100&amp;q_80/icons/servicos/otimizacao_seo.svg"
                    },
                    {
                        "loc": "https://gsstudio.com.br/_ipx/w_100&amp;q_80/icons/servicos/comunicacao_visual.svg"
                    },
                    {
                        "loc": "https://gsstudio.com.br/_ipx/w_100&amp;q_80/icons/servicos/producao_de_video.svg"
                    }
                ]
            },
            {
                "loc": "/blog"
            },
            {
                "loc": "/solucoes/gscrm"
            },
            {
                "loc": "/contato"
            },
            {
                "loc": "/planos"
            },
            {
                "loc": "/",
                "images": [
                    {
                        "loc": "https://gsstudio.com.br/_ipx/q_80/icons/icon-design.svg"
                    },
                    {
                        "loc": "https://gsstudio.com.br/_ipx/q_80/icons/icon-marketing.svg"
                    },
                    {
                        "loc": "https://gsstudio.com.br/_ipx/q_80/icons/icon-tecnologia.svg"
                    },
                    {
                        "loc": "https://gsstudio.com.br/_ipx/q_80/img/parceiros/cliente-1.webp"
                    },
                    {
                        "loc": "https://gsstudio.com.br/_ipx/q_80/img/parceiros/cliente-2.webp"
                    },
                    {
                        "loc": "https://gsstudio.com.br/_ipx/q_80/img/parceiros/cliente-3.webp"
                    },
                    {
                        "loc": "https://gsstudio.com.br/_ipx/q_80/img/parceiros/cliente-4.webp"
                    },
                    {
                        "loc": "https://gsstudio.com.br/_ipx/q_80/img/parceiros/cliente-5.webp"
                    },
                    {
                        "loc": "https://gsstudio.com.br/_ipx/q_80/img/parceiros/cliente-6.webp"
                    },
                    {
                        "loc": "https://gsstudio.com.br/_ipx/q_80/img/parceiros/cliente-7.webp"
                    },
                    {
                        "loc": "https://gsstudio.com.br/_ipx/q_80/img/parceiros/cliente-8.webp"
                    },
                    {
                        "loc": "https://gsstudio.com.br/_ipx/q_80/img/parceiros/cliente-9.webp"
                    },
                    {
                        "loc": "https://gsstudio.com.br/_ipx/q_80/img/parceiros/cliente-10.webp"
                    },
                    {
                        "loc": "https://gsstudio.com.br/_ipx/q_80/img/parceiros/cliente-11.webp"
                    },
                    {
                        "loc": "https://gsstudio.com.br/_ipx/q_80/img/parceiros/cliente-12.webp"
                    },
                    {
                        "loc": "https://gsstudio.com.br/_ipx/q_80/img/parceiros/cliente-13.webp"
                    },
                    {
                        "loc": "https://gsstudio.com.br/_ipx/q_80/img/parceiros/cliente-14.webp"
                    },
                    {
                        "loc": "https://gsstudio.com.br/_ipx/q_80/img/parceiros/cliente-15.webp"
                    },
                    {
                        "loc": "https://gsstudio.com.br/_ipx/q_80/img/parceiros/cliente-16.webp"
                    },
                    {
                        "loc": "https://gsstudio.com.br/_ipx/q_80/img/parceiros/cliente-17.webp"
                    },
                    {
                        "loc": "https://gsstudio.com.br/_ipx/q_80/img/parceiros/cliente-18.webp"
                    },
                    {
                        "loc": "https://gsstudio.com.br/_ipx/q_80/img/parceiros/cliente-19.webp"
                    },
                    {
                        "loc": "https://gsstudio.com.br/_ipx/q_80/img/parceiros/cliente-20.webp"
                    },
                    {
                        "loc": "https://gsstudio.com.br/_ipx/q_80/img/parceiros/cliente-21.webp"
                    },
                    {
                        "loc": "https://gsstudio.com.br/_ipx/q_80/img/parceiros/cliente-22.webp"
                    },
                    {
                        "loc": "https://gsstudio.com.br/_ipx/q_80/img/parceiros/cliente-23.webp"
                    },
                    {
                        "loc": "https://gsstudio.com.br/_ipx/q_80/img/parceiros/cliente-24.webp"
                    },
                    {
                        "loc": "https://gsstudio.com.br/_ipx/q_80/img/parceiros/cliente-25.webp"
                    },
                    {
                        "loc": "https://gsstudio.com.br/_ipx/q_80/img/parceiros/cliente-26.webp"
                    },
                    {
                        "loc": "https://gsstudio.com.br/_ipx/q_80/img/parceiros/cliente-27.webp"
                    },
                    {
                        "loc": "https://gsstudio.com.br/_ipx/q_80/img/parceiros/cliente-28.webp"
                    },
                    {
                        "loc": "https://gsstudio.com.br/_ipx/q_80/img/parceiros/cliente-29.webp"
                    },
                    {
                        "loc": "https://gsstudio.com.br/_ipx/q_80/img/parceiros/cliente-30.webp"
                    },
                    {
                        "loc": "https://gsstudio.com.br/_ipx/q_80/img/parceiros/cliente-31.webp"
                    },
                    {
                        "loc": "https://gsstudio.com.br/_ipx/q_80/img/parceiros/cliente-32.webp"
                    },
                    {
                        "loc": "https://gsstudio.com.br/_ipx/q_80/img/parceiros/cliente-33.webp"
                    },
                    {
                        "loc": "https://gsstudio.com.br/_ipx/q_80/img/parceiros/cliente-34.webp"
                    },
                    {
                        "loc": "https://gsstudio.com.br/_ipx/q_80/img/parceiros/cliente-35.webp"
                    },
                    {
                        "loc": "https://gsstudio.com.br/_ipx/q_80/img/parceiros/cliente-36.webp"
                    },
                    {
                        "loc": "https://gsstudio.com.br/_ipx/q_80/img/parceiros/cliente-37.webp"
                    },
                    {
                        "loc": "https://gsstudio.com.br/_ipx/q_80/img/parceiros/cliente-38.webp"
                    },
                    {
                        "loc": "https://gsstudio.com.br/_ipx/q_80/img/parceiros/cliente-39.webp"
                    },
                    {
                        "loc": "https://gsstudio.com.br/_ipx/q_80/img/parceiros/cliente-40.webp"
                    },
                    {
                        "loc": "https://gsstudio.com.br/_ipx/q_80/img/parceiros/cliente-41.webp"
                    },
                    {
                        "loc": "https://gsstudio.com.br/_ipx/q_80/img/parceiros/cliente-42.webp"
                    },
                    {
                        "loc": "https://gsstudio.com.br/_ipx/q_80/img/parceiros/cliente-43.webp"
                    },
                    {
                        "loc": "https://gsstudio.com.br/_ipx/q_80/img/parceiros/cliente-44.webp"
                    },
                    {
                        "loc": "https://gsstudio.com.br/_ipx/q_80/img/parceiros/cliente-45.webp"
                    },
                    {
                        "loc": "https://gsstudio.com.br/_ipx/q_80/img/parceiros/cliente-46.webp"
                    },
                    {
                        "loc": "https://gsstudio.com.br/_ipx/q_80/img/parceiros/cliente-47.webp"
                    },
                    {
                        "loc": "https://gsstudio.com.br/_ipx/q_80/img/parceiros/cliente-48.webp"
                    },
                    {
                        "loc": "https://gsstudio.com.br/_ipx/q_80/img/parceiros/cliente-49.webp"
                    },
                    {
                        "loc": "https://gsstudio.com.br/_ipx/q_80/img/parceiros/cliente-50.webp"
                    },
                    {
                        "loc": "https://gsstudio.com.br/_ipx/q_80/icons/servicos/sites.svg"
                    },
                    {
                        "loc": "https://gsstudio.com.br/_ipx/q_80/icons/servicos/gestao_de_conteudo.svg"
                    },
                    {
                        "loc": "https://gsstudio.com.br/_ipx/q_80/icons/servicos/lojas_virtuais.svg"
                    },
                    {
                        "loc": "https://gsstudio.com.br/_ipx/q_80/icons/servicos/branding.svg"
                    }
                ]
            }
        ],
        "sourceType": "app"
    }
];

export { sources };
//# sourceMappingURL=global-sources.mjs.map
