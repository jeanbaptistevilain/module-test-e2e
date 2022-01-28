Tests avec puppeteer
====================

Based on original work https://github.com/le-campus-numerique/module-test-puppeteer by Philippe Le Van

[![Statut build](https://github.com/jeanbaptistevilain/module-test-e2e/actions/workflows/node.js.yml/badge.svg)](https://github.com/jeanbaptistevilain/module-test-e2e/actions/workflows/node.js.yml)

Démarrage
-----------

*Rappel : pensez à effectuer un fork de ce dépôt dans votre espace Github avant de commencer.* 


```bash
# installer les dépendances NPM à partir du fichier package.json
npm install

# lancer les tests (de façon séquentielle)
npm test -- --runInBand
```

Déroulé
----------------------

1. Commencez par vous familiariser avec les outils mis en oeuvre dans ce projet :
- Jest : https://jestjs.io/fr/
- Puppeteer : https://jestjs.io/fr/docs/puppeteer | https://pptr.dev/ 

2. Choisissez ensuite un site sur lequel vous allez effectuer votre campagne de tests. Il peut s'agir de votre site "projet fil rouge", ou d'un site prévu pour les tests comme https://www.saucedemo.com. 


3. Pour le site retenu, identifiez les scénarios de tests que vous allez exécuter. Chaque scénario doit avoir un parcours clairement défini ainsi qu'un ou plusieurs attendus vérifiables. Déroulez les scénarios choisis manuellement pour vous en assurer.


4. A partir des exemples fournis dans le dossier _tests_, créez des scripts Jest / Puppeteer qui vont permettre d'exécuter chaque scénario de manière automatisée. 


5. En utilisant la marketplace Github, mettez en place un environnement d'intégration continue dans votre dépôt Github (via Travis CI par exemple : https://github.com/marketplace/travis-ci). 

6. Qualification et saisie d'anomalies sur le dépôt Github : connectez-vous au site https://www.saucedemo.com avec l'identifiant *problem_user*. Constatez les problèmes rencontrés et renseignez-les sous la forme d'issues dans le dépôt Github. Veillez à indiquer toutes les informations utiles pour faciliter le travail d'investigation et de correction des bugs par la suite.


Principe
--------

Ces tests utilisent 2 outils :

* Jest : c'est un des principaux outils de tests en JS (développé et open-sourcé par Facebook / Meta)
* Puppeteer : un outil qui permet de créer puis de contrôler le navigateur chrome de façon programmatique (on parle de Chrome "headless")
