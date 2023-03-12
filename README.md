#Requirements

#Installation of dependencies
npm install wdio . --y

#Run tests
npx wdio wdio.conf.js  - run all tests
npx wdio wdio.conf.js --spec ./project/webTests/login.js - run a specific test

allure generate allure-report -generate the report
alure serve allure-report -open the server with report

