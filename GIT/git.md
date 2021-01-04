#

>Workspace : 工作区
>index/Stage: 暂存区
>Repository(仓库): 仓库区
>Remote(远程): 远程仓库

### 一、新建代码库

``` txt
# 在当前目录下新建一个git代码库
git init
# 新建一个目录，将其初始化为git代码库
git init [project-name]
#下载一个项目和他的整个代码历史
git clone[url]
```

### 二、配置

git的设置文件为.gitconfig,它可以在多用户主目录下(全局配置)，也可以在项目目录下(项目配置)。

```txt
1.显示当前配置

   git config --list

2.添加用户和邮箱

   git config  --global user.name 'Your Name'
   git config  --global uwer.email 'Your Email'

```

### 三、git操作

``` txt
1.查看文件状态

   git status

2.添加文件到暂存区  

   git add 文件名  //添加指定文件
   git add .      //添加所有文件

3.生成版本

   git commit -m '描述提交信息'

4.查看版本
  
   git log  //在英文状态下按 q 可以退出

5.回滚
 
  git reset --hard  '再加上需要回滚的版本号'

6.git reflog

  显示整个本地仓储的commit, 包括所有branch的commit, 甚至包括已经撤销的commit, 只要HEAD发生了变化, 就会在reflog里面看得到. git log只包括当前分支的commit.
  当发现其实不需要reset(回滚)的时候，可以用 git reflog 查看回滚的版本号，然后 用 git reset --hard  '再加上需要撤销回滚的版本号'

 7.git checkout [-q] [<commit id>] [--] <paths>
 该命令主要用于检出某一个指定文件。
 如果不填写commit id，则默认会从暂存区检出该文件，如果暂存区为空，则该文件会回滚到最近一次的提交状态。当暂存区为空，如果我们想要放弃对某一个文件的修改，可以用这个命令进行撤销：
 git checkout [-q] [--] <paths>

 git checkout --'文件名'  //可以将工作区变动的文件恢复到没有变动前的样子

8.分支
git branch  //查看分支

git branch '分支名' //创建分支

git checkout  '分支名' //切换分支

git merge  '分支名' //合并分支

git branch -d '分支名' // 删除分支
```

 ```txt
1.给远程仓库起别名
   git remote add origin git@github.com:YLinl/NOTE.git
origin 相当于远程地址的别名，origin 可以是其他的名字
2. 向远程推送
   git push -u origin 分支, -u表示下次推送的时候默认这个分支，可以不要-u手动推送git push origin dev

 ```

 ```txt
1.克隆远程仓库代码
  git clone git@github.com:YLinl/NOTE.git(内部已经实现  git remote add origin 远程仓库地址)
2. 切换分支
git checkout 分支名称
 ```

```txt
git pull origin dev //从远程dev拉最新代码下来,这一句是 git fetch origin dev 和 git merge origin 的简写
```

### 四、rebase（变基）

```
git rebase -i HEAD~3;合并最新三条提交记录，合并记录是不要合并已经提交到远程仓库的 记录
```





