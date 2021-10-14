const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin') // подключаем к файлу плагин
const MiniCssExtractPlugin = require('mini-css-extract-plugin') // подключаем к файлу плагин
const {CleanWebpackPlugin} = require('clean-webpack-plugin') // подключаем к файлу плагин

module.exports = {
    context: path.resolve(__dirname,'src'), //строчка, которая говорит, где лежат все исходники нашего приложения
    mode: 'development', //режим разработки
    entry: {
        main: './index.js' //первая точка входа
//        analytics: './analytics.js' //вторая точка входа
    },  //указать начальный (стартовый файл) или если их несколько
//   resolve: {
//       extensions: ['.js', '.json', '.png'],    //можно установить для того, чтобы не писать эти расширения
//       alias: {
//           '@models': path.resolve(__dirname, 'src/models'),
//           '@': path.resolve(__dirname, 'src'),   //указание абсолютных путей вместо относительных
//       }
//   },
    output: {
        filename: '[name].[contenthash].js', //имя выходного файла или выходных по двум точкам входа
        path: path.resolve(__dirname, 'dist') //путь выходного файла
//        publicPath: "./dist/[name].[contenthash].js"
    },
//    optimization: {                       //оптимизирует код для двух точек входа
//      splitChunks: {
//          chunks: 'all'
//      }
//    },
    devServer: {                            //создает на этом порту сервер
//        host: 'localhost',
//        contentBase: "path.resolve(__dirname, 'dist')",
//        inline: true,
        port: 4200
//        hot: true,
//        stats: "errors-only",
//        open: true
    },
    plugins: [
        new HTMLWebpackPlugin({     //подключение плагина в наш config
//          title: 'Name of HTML page', //название созданного плагином html//данный title не работает из-за template
            template: './index.pug'   //основывается на другом html файле
        }),
        new CleanWebpackPlugin(),    //подключение плагина в наш config // чистит папку dist от не актуальных файлов
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        })
    ],
    module: {                    // подключение loaders для работы с другими файлами
        rules: [
            {
                test: /\.css$/,             //если файлы своим расширением соответсвуют этому патерну в качестве import
//              use: ['style-loader', 'css-loader']     //использьзуется, если хотим стили в html
                use: [MiniCssExtractPlugin.loader, 'css-loader']     //использьзуется, если хотим отдельный css фаил
//необходимо подключить их в консоле: npm i -D style-loader css-loader//для .CSS
//новый loader подключить в консоле: npm i -D file-loader//для .png
            },
            {
                test: /\.(png|jpg|svg|gif)$/,   //если файлы своим расширением соответсвуют этому патерну в качестве import
                use: ['file-loader']     //использовать следующие loaders (идут справа налево)
//новый loader подключить в консоле: npm i -D file-loader//для .png .jpg .svg .gif
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,   //если файлы своим расширением соответсвуют этому патерну в качестве import
                use: ['file-loader']     //использовать следующие loaders (идут справа налево)
//новый loader подключить в консоле: npm i -D file-loader//для шрифтов
            },
            {
                test: /\.xml$/,   //если файлы своим расширением соответсвуют этому патерну в качестве import
                use: ['xml-loader']     //использовать следующие loaders (идут справа налево)
//новый loader подключить в консоле: npm i -D xml-loader//для .xml
            },
            {
                test: /\.csv$/,   //если файлы своим расширением соответсвуют этому патерну в качестве import
                use: ['csv-loader']     //использовать следующие loaders (идут справа налево)
//новый loader подключить в консоле: npm i -D csv-loader//для .csv
//новый loader подключить в консоле: npm i -D papaparse//для .csv
            },
            {
                test: /\.pug$/,   //если файлы своим расширением соответсвуют этому патерну в качестве import
                use: ['pug-loader']     //использовать следующие loaders (идут справа налево)
//новый loader подключить в консоле: npm i -D csv-loader//для .csv
//новый loader подключить в консоле: npm i -D papaparse//для .csv
            }
            ]
    }
}

//команду в консоле: webpack

//подключение шрифтов
//создаем фаил отдельный с шрифтами roboto.css и там:
//@font-face { font-family: 'Roboto'; src: url("../assets/fonts/Roboto-Regular.ttf") format ('truetype'); }
//в основном файле css: @import "roboto.css";

//подключение css-библиотек
//npm install normalize.css //без -D так как это идет в продакшин
//в основном файле css: @import "~normalize.css";

//подключение JS-библиотек
//npm i -S jquery                  //подключение jquery-библиотеки

//подключение сервера wedpack
//npm install -D webpack-dev-server