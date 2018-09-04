module.export = {
    output: {
        path: "/Users/denis.silva/Documents/Projetos-PESSOAIS/my-vuejs-calendar/dist",
        publicPath: "/dist/",
        filename: "web.bundle.js",
        libraryTarget: "var"
    },
    module: {
        rules: [
            {
                test: "/\.js$/",
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: [
                                [
                                    "env"
                                ]
                            ],
                            plugins: [
                                "transform-es2015-destructuring",
                                "transform-runtime",
                                "es6-promise"
                            ]
                        }
                    }
                ],
                exclude: "/node_modules/"
            },
            {
                test: "/\.scss$/",
                loader: [
                    {
                        loader: "/Users/denis.silva/Documents/Projetos-PESSOAIS/my-vuejs-calendar/node_modules/extract-text-webpack-plugin/loader.js",
                        options: {
                            omit: 1,
                            remove: true
                        }
                    },
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "sass-loader"
                    }
                ]
            },
            {
                test: "/\.(png|jpg|gif|svg|ttf)$/",
                loader: "file-loader",
                options: {
                    name: "[name].[ext]?[hash]",
                    publicPath: false
                }
            },
            {
                test: "/\.vue$/",
                loader: "vue-loader",
                options: {
                    loaders: {
                        scss: "vue-style-loader!css-loader!sass-loader",
                        js: "babel-loader?presets[]=env"
                    }
                }
            }
        ]
    },
    resolve: {
        alias: {
            vue$: "vue/dist/vue.common.js"
        }
    },
    devServer: {
        historyApiFallback: true,
        noInfo: true
    },
    performance: {
        hints: false
    },
    target: "web",
    entry: {
        app: [
            "./src/web.entry.js"
        ]
    },
    plugins: [
        {
            definitions: {
                process.env: {
                    NODE_ENV: "\"production\""
                }
            }
        },
        {
            options: {
                sourceMap: true,
                compress: {
                    warnings: false
                }
            }
        },
        {
            options: {
                minimize: true,
                test: {
                    test: "[object Function]"
                }
            }
        },
        {
            filename: "style.css",
            id: 1,
            options: {

            }
        }
    ],
    devtool: "#source-map"
}
;