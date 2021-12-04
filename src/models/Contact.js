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
      contact: {
        type: DataTypes.STRING(500),
      },
      name: {
        type: DataTypes.TEXT("long"),
      },
    },
    {
      tableName: "contacts",
      timestamps: true,
    }
  );

  return Contact;
};
