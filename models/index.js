const User = require('./User');
const Preferences = require('./Preferences');

Preferences.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

User.belongsTo(Preferences, {
    foreignKey: 'user_id'
});

module.exports = { User, Preferences }