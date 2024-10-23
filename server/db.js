import Sequelize from 'sequelize'

const sequelize = new Sequelize(
    'spotfake',
    'postgres',
    'postgres',
    {
        host: 'localhost',
        port: 5432,
        dialect: 'postgres'
    }
)

const User = sequelize.define('user', {
    username: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        unique: true
    },

    email: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        unique: true
    },

    birthday: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },

    password: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    },

    status: {
        type: Sequelize.DataTypes.ENUM('ativo', 'inativo'),
        allowNull: false,
        defaultValue: 'inativo'
    }
}, { freezeTableName: true })

const criarTabelas = () => {
    sequelize.authenticate().then(() => {
        console.log('Conectou!')
    }).catch((err) => {
        console.log(err)
    })

    sequelize.sync({ force: true }).then(() => {
        console.log('Tabela criada!')
    })
}

export { User, sequelize, criarTabelas };