'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PlaylistSong extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PlaylistSong.init({
    playlistId: {
      type: DataTypes.INTEGER,
      // allowNull: false
    },
    songId: {
      type: DataTypes.INTEGER,
      // allowNull: false
    }
  }, {
    sequelize,
    modelName: 'PlaylistSong',
    defaultScope: {
      attributes: {
        include: ['id'],
        exclude: ['createdAt', 'updatedAt']
      }
    }
  });
  return PlaylistSong;
};
