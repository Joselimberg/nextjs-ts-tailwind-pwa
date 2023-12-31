import { DataTypes } from "sequelize";
import db from "../db/connection";

const User = db.define('User', {
    name: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    status: {
        type: DataTypes.BOOLEAN
    }
}, { timestamps: false, tableName: 'users' });

export default User;