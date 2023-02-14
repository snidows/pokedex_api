"use strict"

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("pokedex_team", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      time_name: {
        type: Sequelize.STRING,
        allowNull: false,
        field: "time_name",
      },
      player_name: {
        type: Sequelize.STRING,
        allowNull: false,
        field: "player_name",
      },
      team_members: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: false,
        field: "team_members",
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      deleted_at: {
        type: Sequelize.DATE,
        allowNull: true,
      },
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("pokedex_team")
  },
}
