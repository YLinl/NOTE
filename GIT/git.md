#

>Workspace : 工作区
>index/Stage: 暂存区
>Repository: 仓库去
>Remote: 远程仓库

## 一、新建代码库

``` txt
# 在当前目录下新建一个git代码库
git init
# 新建一个目录，将其初始化为git代码库
git init [project-name]
#下载一个项目和他的整个代码历史
git clone[url]
```

## 二、配置

git的设置文件为.gitconfig,它可以在多用户主目录下(全局配置)，也可以在项目目录下(项目配置)。

```txt
#显示当前配置
git config --list
 
 
