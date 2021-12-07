module.exports = (connection, DataTypes) => {
  const Contact = connection.define(
    "Contact",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(200),
      },
      email: {
        type: DataTypes.STRING(500),
      },
      message: {
        type: DataTypes.TEXT("long"),
      },
    },
    {
      tableName: "contact",
      timestamps: true,
    }
  );

  return Contact;
};
