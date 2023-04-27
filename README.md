# student-manegment-system
一个简单的学生管理系统, 基于Java spring+ react + mysql, 实现了简单的增删改查
## 项目启动步骤
### 环境
- java and javascript
- mysql  Ver 8.0.28
- apache web server 
- java JDK 17 and node.js v18.12.0
- 后端idea: intellij idea
- 前端idea: vscode 
- XAMPP v8.1.12
### 数据库部分
- 在XAMPP中启动mysql, apache
  <img width="670" alt="image" src="https://user-images.githubusercontent.com/103091066/234797362-6806ee96-ae99-45da-a807-17d8f3a81937.png">
- 进入数据库管理页面, 创建数据库fullstack
[数据库管理页面](http://localhost/phpmyadmin/)
### 后端部分
- 在intellij idea 中打开项目文件fullstack-backend
- 等待idea下载依赖
- 在fullstack-backend/src/main/resources目录下填写数据库信息
```
spring.jpa.hibernate.ddl-auto=update
spring.datasource.url=jdbc:mysql://localhost:3306/fullstack
spring.datasource.username=root
spring.datasource.password=
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

```
- 启动项目即可
### 前端部分
- 在vscode中打开项目文件fullstack-frontend, 
- 在终端中输入`npm install --legacy-peer-deps`安装需要的依赖
- 在终端输入`npm start`启动项目
- 默认启动端口为3000, 在com/codewitharjun/fullstackbackend/controller/StudentController.java修改一下代码为你启动的端口
```
@CrossOrigin("http://localhost:3000")
```

