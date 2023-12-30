/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "comment",
    {
      id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      comment: {
        type: DataTypes.STRING(450),
        allowNull: false,
        validate: {
          isEmail: {
            msg: "Заавал имэйл оруулна уу",
          },
          notContains: {
            args: ["миа"],
            msg: "Энэ мэссэжд хориглогдсон үг байна.",
          },
        },
      },
    },
    {
      tableName: "comment",
      timestamps: true,
    }
  );
};
