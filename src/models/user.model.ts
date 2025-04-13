import { DataTypes, Model } from 'sequelize'
import { sequelize } from '../config/database'

export interface UserAttributes {
  id?: number
  email: string
  password: string
}

export class User extends Model<UserAttributes> implements UserAttributes {
  public id?: number
  public email!: string
  public password!: string
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    tableName: 'users',
    sequelize,
  }
)
