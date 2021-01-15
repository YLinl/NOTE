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
```

项目配置文件：项目/.gitconfig

```
 git config  --local user.name 'Your Name'
 git config  --local user.email 'Your Email'
```

 ```
git remote add origin 地址;  默认添加在本地配置文件中(--local)
 ```



全局配置文件:~/.gitconfig 

```
   git config  --global user.name 'Your Name'
   git config  --global user.email 'Your Email'
   
```

系统配置文件：/etc/.gitconfig,需要root 权限

```

   git config  --system user.name 'Your Name'
   git config  --system user.email 'Your Email'
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

### 五、tag

```
git tag :通常在发布软件的时候打一个tag，tag会记录版本的commit号，方便后期回溯。
```

使用`git tag`命令跟上tag名字，直接创建一个tag。

```
git tag v1.0
```

还可以加上`-a`参数来创建一个带备注的tag，备注信息由`-m`指定。如果你未传入`-m`则创建过程系统会自动为你打开编辑器让你填写备注信息。

```
git tag -a tagName -m "my tag"
```

`git show`命令可以查看tag的详细信息，包括commit号等。

```
git show tagName
```

打tag不必要在head之上，也可在之前的版本上打，这需要你知道某个提交对象的校验和（通过git log获取，取校验和的前几位数字即可）。

```
git tag -a v1.2 9fceb02 -m "my tag"
```

同提交代码后，使用`git push`来推送到远程服务器一样，`tag`也需要进行推送才能到远端服务器。
使用`git push origin [tagName]`推送单个分支。

```
git push origin v1.0  ;推送本地所有tag，使用git push origin --tags。
```

#### 切换到某个tag

跟分支一样，可以直接切换到某个tag去。这个时候不位于任何分支，处于游离状态，可以考虑基于这个tag创建一个分支。

```
git checkout v0.9
```

#### 删除某个tag

```
git tag -d v0.1.3
```

#### 远端删除

```
git push origin :refs/tags/v0.1.2
```

### 六、fork

将别人的源代码拷贝到自己的远程仓库

### 七、免密码登录

* URL中体现

  ```
  git remote add origin https://用户名：密码  远程地址
  ```

* SSH实现

  ```
  1.生成公钥和私钥 (默认放在 ~/.ssh目录下，id_rsa.pub公钥，id_rsa私钥)
    ssh-keygen
  2.拷贝公钥的内容设置到 github中  
  3.在项目中配置ssh 地址
  git remote add origin ssh地址
  ```

* git 自动凭证

  ```
  
  ```

### 八、gitignore

