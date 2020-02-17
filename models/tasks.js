module.exports = (sequelize, DataType) => {
    const Tasks = sequelize.define("Tasks", {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        done: {
            type: DataType.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    }, {
        classMethods: {
            associate: (models) => {
                Tasks.belongTo(models.Users);
            }
        }
    });
    return Tasks;
}

// module.exports = app => {
//     return {
//         findAll: (params, callback) => {
//             return callback ([
//                 {title: "Fazer compras"},
//                 {title: "Consertar pc"},
//             ]);
//         }
//     };
// }