#Requirements

#Installation of dependencies
npm install wdio . --y

#Run tests
npx wdio wdio.conf.js  - run all tests
npx wdio wdio.conf.js --spec ./test/specs/login.spec.js - run a specific test
npx wdio wdio.conf.js --spec ./test/specs/login.spec.js --reporters html - run test with html report
