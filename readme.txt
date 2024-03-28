1. Создаем любую папку и открываем в понравившемся редакторе кода
2. Открываем терминал и заходим в созданную директорию и инициализируем
проект. Пишем в терминале npm init(самостоятельно описываем проект) или
npm init -y (с установками по умолчанию). Получаем файл package.json.
3. Устанавливаем: 
    npx i -D webpack webpack-cli @webpack-cli/generators
Соответственно: сам webpack, его консольную утилиту и генератор файлов
4. Инициализируем webpack командой в терминале npx webpack init и 
указываем, что собираемся использовать. Ждем завершения установки
5. Запускаем dev сервер npm run serve и наблюдаем заготовленный
Hello world!
6. npm i prettier -D устанавливаем prettier с dev зависимостью для 
авто форматирования кода.
Пример .prettier.js:
    module.exports = {
        trailingComma: 'all',
        tabWidth: 2,
        semi: true,
        singleQuote: true,
        printWidth: 120,
        arrowParens: 'always',
        endOfLine: 'auto',
        bracketSpacing: false,
        embeddedLanguageFormatting: 'auto',
        htmlWhitespaceSensitivity: 'css',
        insertPragma: false,
        quoteProps: 'as-needed',
        requirePragma: false,
        useTabs: false,
    };
7. npm i -D babel @babel/core @babel/preset-env babel-loader устанавливаем Babel
8. Собираем проект npm run build:dev. Получаем собранный bundle в dist
9. Добавляем скрипт в package.json для работы eslint'a:
    "scripts": {
        "lint-fix": "npx eslint --ext js,jsx,ts,tsx ./src --fix"
    }
10. Создаем 2 entry points: 
    webpack.config.js:
        const filenames = ['index', 'play'] // создаем массив с названиями файлов.
Предварительно нужно создать темплейты html и в src .js файлы с этими именами
11. const config = {
        entry: filenames.reduce((acc, item) => {
            acc[item] = `./src/${item}.js`
            return acc
        }, {}),
    } // создаем объект внутри entry с именами файлов выше
12. Добавляем чанки для создания разных html файлов:
    const config = {
        plugins: [].concat(filenames.map(file => 
        new HtmlWebpackPlugin({
            inject: 'head',
            template: `${file}.html`,
            filename: `${file}.html`,
            chunks: [file]
        })
    )).filter(Boolean),
    }
13. Делаем сборку и получаем 2 html и 2 js файла в dist
