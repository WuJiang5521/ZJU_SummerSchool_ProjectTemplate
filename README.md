本项目仅限用于2020年浙江大学暑期学校课程项目模板。

## 如何启动本项目

1. 使用git命令，将本项目同步到本地：

   `git clone https://github.com/WuJiang5521/ZJU_SummerSchool_ProjectTemplate.git`
   
2. 在项目文件夹内，使用git命令，修改remote到你们小组的仓库：

   将原来的远程仓库重命名：`git remote rename origin template-origin`
   
   添加你的远程仓库地址：`git remote add origin your_remote_url`
   
   添加文件修改：`git add .`
   
   提交文件修改：`git commit -m "Initial Commit"`
   
   上传：`git push -u origin master`
   
3. 在项目文件夹内，使用npm运行项目：

   安装所有依赖库：`npm install`
   
   运行项目：`npm start`
   
   如果能正常运行，你应该可以看到浏览器中出现四个区域，每个区域有一个数字0和一个按钮。
   点击任意按钮都可以使四个数字加一。
   
## 本项目目前已安装的库

1. Material UI

   组件库
   
1. clsx

   拼接类名

1. papaparse

   解析.csv文件
