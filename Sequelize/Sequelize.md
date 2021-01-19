# Sequelize

## sequelize-cli 使用

作者：shadow123
链接：https://www.jianshu.com/p/14a34a310b84
来源：简书
 ![image-20210115163214752](E:\Program\Note\NOTE\Sequelize\Sequelize.assets\image-20210115163214752.png)

####  安装sequelize

```js
npm install --save sequelize
npm install --save mysql2
```

#### 安装sequelize-cli

```js
npm install -g sequelize-cli
```

####  建立初始的ORM引导框架

```js
npx sequelize init
```

这将创建以下文件夹:

- config, 包含配置文件，它告诉CLI如何连接数据库
- models,包含您的项目的所有模型
- migrations, 包含所有迁移文件
- seeders, 包含所有种子文件（测试数据）

#### 修改配置文件以连接到数据库管理系统，并创建数据库

在建立模型之前，应先修改config/config.json，以告诉 CLI 如何连接到数据库。config/config.json内容如下：

```json
{
    "development": {
        "username": "root",
        "password": "root",
        "database": "database_development",
        "host": "127.0.0.1",
        "dialect": "mysql",
        "operatorsAliases": false
    },
    "test": {
        "username": "root",
        "password": "root",
        "database": "database_test",
        "host": "127.0.0.1",
        "dialect": "mysql",
        "operatorsAliases": false
    },
    "production": {
        "username": "root",
        "password": "root",
        "database": "database_production",
        "host": "127.0.0.1",
        "dialect": "mysql",
        "operatorsAliases": false
    }
}
```

使用如下命令创建数据库：

```
npx sequelize db:create --charset 'utf8mb4'//这里会根据config.json自动创建数据库
```

使用如下命令删除数据库：

```
npx sequelize db:drop
```

#### 创建模型

我们将使用 model:generate 命令。 此命令需要两个选项：

- name, 模型的名称
- attributes, 模型的属性列表

创建一个名叫 User 的模型：

```
npx sequelize model:generate --name User --attributes firstName:string,lastName:string,email:string
```

这将创建一下文件:

- 在 models 文件夹中创建了一个 user 模型文件
- 在 migrations 文件夹中创建了一个名字像 XXXXXXXXXXXXXX-create-user.js 的迁移文件

注意: _Sequelize 将只使用模型文件，它是表描述。另一边，迁移文件是该模型的更改，或更具体的是说 CLI 所使用的表。 处理迁移，如提交或日志，以进行数据库的某些更改。



再创建一个名为Role的模型，它跟User是一对多的关系：

```
npx sequelize model:generate --name Role --attributes roleName:string
```

#### 定义关系

Role和User是一对多的关系，因此需要修改它们的模型定义。
修改models/role.js如下：

```js
'use strict';
module.exports = (sequelize, DataTypes) => {
  var Role = sequelize.define('Role', {
    roleName: DataTypes.STRING
  }, {});
  Role.associate = function(models) {
    // associations can be defined here
    Role.hasMany(models.User)
  };
  return Role;
};
```

修改models/user.js如下：

```js
'use strict';
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        email: DataTypes.STRING
    }, {});
    User.associate = function(models) {
        // associations can be defined here
        User.belongsTo(models.Role, {
            onDelete: "NULL",
            foreignKey: {
                allowNull: false
            }
        })
    };
    return User;
};
```

#### 修改和运行迁移

Role和User是一对多的关系，因此需要修改User迁移文件的定义。
修改migrates/XXXXXXXXXXXXXX-create-user.js如下：

```js
'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Users', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            roleId: { // name of the key we're adding 
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'Roles', // name of Target model
                    key: 'id', // key in Target model that we're referencing
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
            },
            firstName: {
                type: Sequelize.STRING
            },
            lastName: {
                type: Sequelize.STRING
            },
            email: {
                type: Sequelize.STRING
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Users');
    }
};
```

注意：这里主要给User添加了外键字段，外键字段命名有规则：通常为小写的模型名加Id，即驼峰风格。例如这里加了roleId的外键字段。

在数据库中实际创建该表，需要运行 db:migrate 命令。

```
npx sequelize db:migrate
```

此命令将执行这些步骤：

- 将在数据库中创建一个名为 SequelizeMeta 的表。 此表用于记录在当前数据库上运行的迁移
- 开始寻找尚未运行的任何迁移文件。 这可以通过检查 SequelizeMeta 表。 在这个例子中，它将运行创建的 XXXXXXXXXXXXXX-create-role.js和XXXXXXXXXXXXXX-create-user.js 迁移。
- 创建一个名为 Roles 的表，其中包含其迁移文件中指定的所有列。
- 创建一个名为 Users 的表，其中包含其迁移文件中指定的所有列。

#### 撤销迁移

撤销上一次的迁移操作

```
npx sequelize db:migrate:undo   
```

撤销所有的迁移操作

```
npx sequelize db:migrate:undo:all
```

具体迁移脚本

```
npx sequelize db:migrate:undo --name xxx
```

#### 创建种子，生成测试数据

创建几个用户和角色：

```
npx sequelize seed:generate --name demo-role
npx sequelize seed:generate --name demo-user
```

这个命令将会在 seeders 文件夹中创建两个种子文件。文件名看起来像是 XXXXXXXXXXXXXX-demo-role.js和XXXXXXXXXXXXXX-demo-user.js，它遵循相同的 up/down 语义，如迁移文件。

现在我们应该编辑这两个文件，将演示角色插入Role表,将演示用户插入User表。修改XXXXXXXXXXXXXX-demo-role.js如下：

```js
'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Roles', [{
        roleName: '管理员',
        createdAt:new Date(),
        updatedAt:new Date()
      },{
        roleName: '普通用户',
        createdAt:new Date(),
        updatedAt:new Date()
      }], {});

  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Roles', null, {});

  }
};
```

修改XXXXXXXXXXXXXX-demo-user.js如下：

```js
'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Users', [{
        roleId:1,
        firstName: 'John',
        lastName: 'Doe',
        email: 'demo@demo.com',
        createdAt:new Date(),
        updatedAt:new Date()
      },{
        roleId:1,
        firstName: 'Jack',
        lastName: 'Smith',
        email: 'jack@demo.com',
        createdAt:new Date(),
        updatedAt:new Date()
      }], {});

  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Users', null, {});
  }
};
```



种子文件修改后，即可使用如下命令将演示数据插入数据库中：

```js
npx sequelize db:seed:all
```

####   撤销种子文件

撤销指定种子文件

```
npx sequelize db:seed:undo --seed 指定种子文件
```

撤销所有种子文件

```
db:seed:undo:all
```

![image-20210115164026824](E:\Program\Note\NOTE\Sequelize\Sequelize.assets\image-20210115164026824.png)

## sequelize

### findAll()查询语句

```
1. `// 查询所有用户` const users = await User.findAll();//findAll 方法从数据库中读取整个表 ;SELECT * FROM ...
```

```
2.选择某些特定属性,可以使用 attributes 参数：Model.findAll({attributes: ['name', 'id']}) //只会查询出name和id 字段
```

```
3.排除某些属性 Model.findAll({attributes: { exclude: ['baz'] }});
```

```
4.where 参数用于过滤查询.where 子句有很多运算符,可以从 Op 中以 Symbols 的形式使用.
Post.findAll({
  where: {
    authorId: 2
  }
});
 let data = await models.Categroy.findAll(
        { attributes: ['name', 'id'], where: {
    id: 2
  } })
```

### UPDATE() 查询

```
await User.update({ lastName: "Doe" }, {
  where: {
    lastName: null
  }
});
```

### DELETE 查询

```
await User.destroy({
  where: {
    firstName: "Jane"
  }
});
要销毁所有内容,可以使用 TRUNCATE;
await User.destroy({
  truncate: true
});
```

