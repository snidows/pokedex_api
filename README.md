API GESTÃO DE GASES NATURAIS - GGN
Projeto de uma api restfull para controle de processos.


how to use this api:
Firt run yarn comand to depences install.

Second instance a postgres local with user and password with user.

Third - run comand: 
yarn sequelize-cli db:create - this create a database specifiqued on sequelise config for tenant develop ( default )
and now run :
yarn sequelize-cli db:migrate - for create the db and relations, use migrations for new changes on db.


Four - run comand:
yarn squelize-cli db:seed:all to run seeds for testing propose



And use any software of you preference like insominia to test this api.



