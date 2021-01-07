# MySQL学习

##  一、终端操作数据库

1. 在CMD 命令里面打开 mysql:mysql -hlocalhost -uroot -p 

2. exit; 退出mysql

3. 查看所有数据库 show databases; **注意分号**

   

![image-20210107170945493](E:\Program\Note\NOTE\SQL\MySQL学习.assets\image-20210107170945493-1610012389300.png)

4. 选中数据库 : user "数据库名"；

5. 查询选中数据库中某个表的所有信息 ：select * from '表名'；![image-20210107172212126](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20210107172212126.png)

6. 增加查询条件： select * from users where name='lin';![image-20210107173629475](E:\Program\Note\NOTE\SQL\MySQL学习.assets\image-20210107173629475.png)

7. 创建数据库: create database test;

8. 查看数据库中的表: ,先用 use + '数据库名' ,选中数据库，然后查看数据库中的表:show tables;

9. 创建数据库中的数据表

   ```sql
   CREATE TABLE pet( 
   name VARCHAR(20),
   owner VARCHAR(20),
   sex CHAR (1),
   birth DATE,
   death DATE    
   );
   ```

   10. 查看表的结构: describe +"表名";

![image-20210107175056393](E:\Program\Note\NOTE\SQL\MySQL学习.assets\image-20210107175056393.png)

11.  添加数据记录 :

    ```sql
     INSERT  INTO pet  
     VALUES  ('Puffball', 'hamster' ,'f',  '1999-03-30',null);
    ```

    

