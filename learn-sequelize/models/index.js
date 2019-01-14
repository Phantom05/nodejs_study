const path = require('path');
const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require(path.join(__dirname, '..', 'config', 'config.json'))[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;
db.Sequelize = Sequelize;


db.User = require('./user')(sequelize, Sequelize);
db.Comment = require('./comment')(sequelize, Sequelize);

db.User.hasMany(db.Comment, { foreignKey: 'commenter', sourceKey: 'id' });
//1:1관계에서는 hasOne 을 사용함.
db.Comment.belongsTo(db.User, { foreignKey: 'commenter', targetKey: 'id' });
//N:M 관계를 표현하기위해 belongsToMany 메서드가 있습니다.

module.exports = db;
