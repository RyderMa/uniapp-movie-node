## 搭建工程
* 使用了 koa-generator 模板 npm i koa-generator -g
* koa2 -e projectName create template by ejs template
* 使用了 cross-env 配置环境变量 npm i cross-env -D
  >set package.json like:  
  >"scripts": {  
    "start": "node bin/www",  
    "dev": "cross-env NODE_ENV=dev ./node_modules/.bin/nodemon bin/www",  
    "prd": "corss-env NODE_ENV=production pm2 start bin/www",  
    "test": "echo \"Error: no test specified\" && exit 1"  
  },
* 使用了ORM模型 sequelize