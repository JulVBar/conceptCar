'use strict';

let path = require('path'); // для корректной работы с путями
// подключение плагина
const HTMLWebpackPlugin = require('html-webpack-plugin'); 
const {CleanWebpackPlugin} = require('clean-webpack-plugin'); 
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CssMqpackerPlugin = require('css-mqpacker-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

//возвращает оптимизированный объект
const optimization = () => {
    const config = {
        splitChunks: {
            chunks: 'all'
        }
    };

    if (isProd) {
        config.minimizer = [
            new TerserPlugin(),
            new CssMqpackerPlugin() //объединяет медиа-запросы
        ];
    }

    return config;
};

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: ['@babel/polyfill', './index.js'],
    output: {
        filename: '[name].js', //[name] автоматически копируемое имя
        path: path.resolve(__dirname, 'docs') //docs для github'а deployment
    },
    plugins: [
        new HTMLWebpackPlugin({    //подключаем плагин всегда через new
                filename: 'index.html',    
                template: './index.html', //используем шаблон
                minify: {
                    collapseWhitespace: isProd, //минифицирует html в production, по умолчанию true
                    removeComments: isProd //удаляет комменты
                }
        }),
        new HTMLWebpackPlugin({    // Подключаем каждую страницу отдельно, обязательно указываем filename
            filename: 'blog.html',
            template: './blog.html', 
            minify: {
                collapseWhitespace: isProd, 
                removeComments: isProd 
            }
        }),
        new HTMLWebpackPlugin({    // Подключаем каждую страницу отдельно, обязательно указываем filename
            filename: 'blog-post.html',
            template: './blog-post.html', 
            minify: {
                collapseWhitespace: isProd, 
                removeComments: isProd 
            }
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                { //для папки с созданием такой же папки (иначе скопирует только содержимое)
                    from: path.resolve(__dirname, 'src/images/icon'),
                    to: path.resolve(__dirname, 'docs/images/icon')
                }
            ]
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    ],
    module: {
        rules: [
            // {
            //     test: /\.css$/i,
            //     use: [MiniCssExtractPlugin.loader, "css-loader"],
            // },
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            url: false //иначе не работают background url
                        },
                    },
                    "sass-loader"],
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                    presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]',
                        },
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 70
                            },
                            optipng: {
                                
                            },
                            pngquant: {
                                quality: [0.65, 0.90],
                                speed: 4
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                            webp: {
                                quality: 70
                            }
                            }
                        },
                    },
                    ]
            }
        ]
    },
    optimization: optimization(),
    devServer: {
        port: 4200,
        hot: isDev
    }
};