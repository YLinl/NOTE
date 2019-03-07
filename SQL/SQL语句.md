#

SQL语句： C U R D

 C:create(增);  U:update(改);  R:read(查);  D:delete(删)

查询：(在SQL语句中 表名和字段上加上  `` 运行速度会更快，也可以不加 )

    select 字段，字段 from 表名  
    select `name`,`title` from `person_info`  （查询表 person_info 中的 name 和 title 字段中的数据）
    select * from `person_info` where `id`=2   (查询表 person_info 中所有 id=2 的字段中的数据)
    select * from `person_info` where `id`<>2 (`id`!=2)   (查询表 person_info 中所有 id 不等于 2 的字段中的数据)
    select * from `person_info` where `id` in(1,4) (查询表 person_info 中 id 等于 1 和 4 的字段的数据)
    select * from `person_info` where `id` not in(1,4) (查询表 person_info 中 id 不等于 1 和 4 的字段的数据)
    select * from `person_info` where `id` between  2 and 4 (查询表 person_info 中 id 值在 2 和 4 之间的字段的数据，包括2和4)
    select * from `person_info` where `id`=2 and(or) `name`='lin'查询表 person_info 中 id=2 并且（或） name=lin 的字段的数据)

    order by排序
    select * from `person_info` order by `time` asc (查询表 person_info 中所有数据并且按 time 字段升序排列，desc是降序)
    select * from `person_info` where `id` in(1,3，4) order by `id` desc (排序时 where 条件语句放在 oder by 前面)

    分页：限制每次查询的条数 limit， 限制放在最后面
    select * from `person_info` limit 0,3 (查询表 person_info 中前 3 条数据，0表示起始位置，3表示查询3条数据)
    select * from `person_info` where `id` in(1,3，4) order by `id` desc limit 0,2(排序时 where 条件语句放在 oder by 前面,order by 放在 limit 的前面)

    统计一个表中一共有多少条数据，用 count,最后返回的是一个数字
    select count(*) from `person_info`
    select count(*) as all_num from `person_info`   as可以取别名
    select count(age),age from `person_info` where `age`=23  (统计person_info中年龄为23个人的个数)

    select max(id) from `person_info` 查询表中最大的id的值，这里也可以用as取别名，min(id)最小的值，avg(id)平均值，sum(id)求和  

    模糊查询 like 关键字 %（%是一个通配符，匹配name中有lin的字段）
    select * from `person_info` where `name` like 'lin%'
    select * from `person_info` where `name` like 'lin___' （这里的_为占位符，这里占3个位置，匹配lin后面有3个字符的字段）

添加：

    insert into 表名 (字段1，字段2,...字段n) value(值1，值2，...,值n)

修改：

    update 表名 set 字段1=值1，字段2=值2,...,字段n=值n where 条件
    update person_info  set `name`='user'，`tel`='电话' where `id`=2
删除：

    delete from 表名 where 条件
    delete from person_info `name`='lin'
