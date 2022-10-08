import { QueryInterface, DataTypes, QueryTypes } from 'sequelize';

import Authors from '../models/author';

export default {
    up: (queryInterface: QueryInterface): Promise<void> => queryInterface.sequelize.transaction(
        async (transaction) => {
          return await queryInterface.createTable(
            Authors.tableName,
            {
              id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER,
              },
              fistName: {
                  allowNull: false,
                  type: DataTypes.STRING,
              },
              lastName: {
                allowNull: false,
                type: DataTypes.STRING,
              },
              email: {
                allowNull: false,
                type: DataTypes.STRING,
              }
            }
          )
        }
    ),

    down: (queryInterface: QueryInterface): Promise<void> => queryInterface.sequelize.transaction(
        async (transaction) => {
          return await queryInterface.dropTable(Authors.tableName, {
            transaction,
          });
        }
    )
};