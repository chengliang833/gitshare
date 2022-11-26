- [notebook-linux](#notebook-linux)
  - [基本命令](#基本命令)
    - [更新jar包文件](#更新jar包文件)
    - [tar zip](#tar-zip)
    - [ftp sftp远程连接](#ftp-sftp远程连接)
    - [linux时区](#linux时区)
    - [ssh远程连接](#ssh远程连接)
    - [清理进程占用文件](#清理进程占用文件)
    - [journalctl限制日志时间](#journalctl限制日志时间)
    - [frp启动](#frp启动)
    - [linux查找筛选文件](#linux查找筛选文件)
    - [查看内存占用top10](#查看内存占用top10)
    - [查看磁盘空间](#查看磁盘空间)
    - [软链接到文件目录, 硬链接去掉-s](#软链接到文件目录-硬链接去掉-s)
    - [vi操作](#vi操作)
    - [清除文件内容](#清除文件内容)
    - [服务关闭开机自启](#服务关闭开机自启)
    - [https openssl生成证书](#https-openssl生成证书)
    - [linux定时任务](#linux定时任务)
    - [linux删除7分钟之前的日志](#linux删除7分钟之前的日志)
    - [linux测试网速](#linux测试网速)
    - [scp复制下载](#scp复制下载)
    - [分割合并文件](#分割合并文件)
    - [下载文件](#下载文件)
    - [项目后台启动](#项目后台启动)
    - [linux查看运行内存,清理内存](#linux查看运行内存清理内存)
    - [防火墙](#防火墙)
    - [curl post](#curl-post)
    - [g++ gcc](#g-gcc)
    - [linux用户配置](#linux用户配置)
    - [linux界面和命令行启动](#linux界面和命令行启动)
    - [rpm安装卸载](#rpm安装卸载)
    - [linux隐藏顶栏底栏](#linux隐藏顶栏底栏)
    - [linux改host](#linux改host)
    - [linux改换行符](#linux改换行符)
    - [linux关闭服务](#linux关闭服务)
      - [25端口postfix关闭](#25端口postfix关闭)
      - [cups关闭](#cups关闭)
  - [git](#git)
    - [gitlab安装](#gitlab安装)
    - [git更新覆盖本地](#git更新覆盖本地)
  - [tomcat](#tomcat)
    - [tomcat静态资源配置](#tomcat静态资源配置)
    - [tomcat启动隐藏](#tomcat启动隐藏)
    - [tomcat启停杀进程](#tomcat启停杀进程)
    - [jenkins配置直接杀tomcat进程](#jenkins配置直接杀tomcat进程)
  - [正则](#正则)
    - [正则匹配连续数字](#正则匹配连续数字)
    - [正则包含不包含关键字(且)](#正则包含不包含关键字且)
    - [正则千分位](#正则千分位)
    - [非贪婪匹配最小行](#非贪婪匹配最小行)
    - [正则日期](#正则日期)
    - [常用匹配](#常用匹配)
  - [mvn](#mvn)
    - [打包](#打包)
    - [sonar检查](#sonar检查)
    - [依赖检查](#依赖检查)
    - [加入本地maven仓库](#加入本地maven仓库)
    - [发布在线maven包](#发布在线maven包)
    - [项目单独配置仓库](#项目单独配置仓库)
  - [数据库](#数据库)
    - [oracle](#oracle)
      - [oracle->mysql文件结构转换](#oracle-mysql文件结构转换)
      - [客户端](#客户端)
    - [mysql group_concat 最大长度](#mysql-group_concat-最大长度)
    - [mysql查询数据库引擎](#mysql查询数据库引擎)
    - [mysql修改时区](#mysql修改时区)
    - [mysql连接数](#mysql连接数)
    - [事务](#事务)
    - [mysqldump表复制和备份](#mysqldump表复制和备份)
    - [mysql查询修改编码及排序规则](#mysql查询修改编码及排序规则)
    - [mysql初始化修改密码](#mysql初始化修改密码)
    - [mysql创建用户及对应数据库权限](#mysql创建用户及对应数据库权限)
    - [mysql远程登录](#mysql远程登录)
  - [python](#python)
    - [python3别名](#python3别名)
    - [切换默认版本](#切换默认版本)
  - [docker](#docker)
    - [docker启动](#docker启动)
    - [docker浏览 搜索 下载 删除镜像，容器](#docker浏览-搜索-下载-删除镜像容器)
    - [docker查看日志](#docker查看日志)
    - [docker进入容器目录](#docker进入容器目录)
    - [docker 复制文件](#docker-复制文件)
    - [docker导入导出重命名](#docker导入导出重命名)
    - [docker修改提交镜像并发布](#docker修改提交镜像并发布)
    - [docker修改容器参数](#docker修改容器参数)
    - [docker安装](#docker安装)
      - [docker安装rabbitmq](#docker安装rabbitmq)
      - [docker启动rocketmq](#docker启动rocketmq)
      - [docker安装redis](#docker安装redis)
      - [docker安装mongodb](#docker安装mongodb)
      - [docker启动oracle](#docker启动oracle)
      - [docker启动mysql 关联本地数据](#docker启动mysql-关联本地数据)
      - [docker启动jenkins](#docker启动jenkins)
      - [docker启动tomcat](#docker启动tomcat)
      - [docker启动zookeeper](#docker启动zookeeper)
      - [docker启动nginx](#docker启动nginx)
      - [docker启动nexus 关联本地数据](#docker启动nexus-关联本地数据)
      - [docker启动gitlab](#docker启动gitlab)
      - [docker安装iredmail](#docker安装iredmail)
      - [docker 安装v2ray](#docker-安装v2ray)
  - [代码开发相关](#代码开发相关)
    - [小于等于转义](#小于等于转义)
    - [微信公众号code跳转](#微信公众号code跳转)
    - [base64图片](#base64图片)
  - [eclipse](#eclipse)
    - [eclipse布局](#eclipse布局)
    - [svn](#svn)
      - [启动](#启动)
      - [下载](#下载)
  - [其他服务](#其他服务)
    - [httpd配置](#httpd配置)
    - [redis](#redis)
      - [redis集群启动](#redis集群启动)
      - [redis单机启停](#redis单机启停)
      - [redis查看](#redis查看)
    - [nginx](#nginx)
      - [nginx启停](#nginx启停)
      - [nginx重写地址](#nginx重写地址)

# notebook-linux
## 基本命令
### 更新jar包文件
```
//  -uvf0 不压缩lib下的jar包
jar -xvf novel-front-2.9.0.jar
jar -uvf novel-front-2.9.0.jar BOOT-INF/classes/
jar -cvfm0 novel-front-2.9.0.jar BOOT-INF/ META-INF/ org/
或
unzip novel-front-2.9.0.jar
// 后续为指定多文件夹一起压缩 更新-详情-递归
zip -rv novel-front-2.9.0.jar BOOT-INF/ META-INF/ org/
```

### tar zip
```
//压缩时，压缩路径参数从哪里开始，压缩包里面就是什么路径
tar -cvf testfile.tar ./testfile/
tar -xvf testfile.tar -C testfileto/
zip -rv testfile.zip ./testfile/
unzip -o testfile.zip -d fileto/

//tar gz分卷压缩
tar -zcvf - 20210423/ |split -b 45m - 20210423.tar.gz
cat 20210423.tar.gz* > 20210423.tar.gz
cat 20210423.tar.gz* | tar -zxv
```

### ftp sftp远程连接
```
sftp -oPort=22 admin@host
->password
cd ~~~
ls -lrt
get filename*
put filename*

ftp host 2121
->username
->password
get、put、delete

ftp -n << EOF
open 176.122.134.186 2121
user useranme password
#关闭mget交互
prompt
#安装包压缩包这些必须用二进制传输
binary
mget oracle-instantclient-sqlplus-21.1.0.0.0-1.x86_64.rpm
bye
EOF
```

### linux时区
timedatectl set-timezone 'Asia/Shanghai'

### ssh远程连接
ssh root@176.122.134.186 -p 27519

### 清理进程占用文件
lsof |grep delete

### journalctl限制日志时间
journalctl --vacuum-time=30d<br/>
journalctl --vacuum-size=1G

### frp启动
```
nohup frp_0.35.1_linux_amd64/frps -c frp_0.35.1_linux_amd64/frps.ini > frps.log 2>&1 &
nohup frp_0.35.1_linux_amd64/frpc -c frp_0.35.1_linux_amd64/frpc.ini > frpc.log 2>&1 &
```

### linux查找筛选文件
```
grep -r -l 'content...' ./transaction-all-2020-07-16*
find ./transaction-all-2020-07-16* -type f |xargs grep -l 'content'
查找以t开头的文件 find的结果会带有./开头, 按-name查找可忽略,但-regex无法忽略
find ./ -regex "\.\/t.*"
grep筛选文件内容a
grep -a "04-11" catalina.out > catalina.2018-04-11.out

//查询内容所在行数
grep -n "04-11" catalina.out
//100-200行
sed -n '100,200p' catalina.out > catalina.100p200p.out
```

### 查看内存占用top10
```
ps aux | head -1;ps aux |grep -v PID |sort -rn -k +4 | head -10
指定进程内存占用
pidstat -r -p 24427 1 5 
动态查看内存 
slabtop
```

### 查看磁盘空间
dh -h
df -h
du -sh *

### 软链接到文件目录, 硬链接去掉-s
```
ln -s [目标文件] [快捷方式]
ln -s /data/download/ ./download
jenkins maven环境
ln -s /install/maven/apache-maven-3.5.3/bin/mvn /usr/bin/mvn
```

### vi操作
```
全局 :%s/旧文本/新文本/g
V选中范围 :s/旧文本/新文本/g
/gc confirm
删除第9行到当前行内容：9, .d
撤销 u
前进 ctrl+r
```
### 清除文件内容
\> filename

### 服务关闭开机自启
```
chkconfig --list
chkconfig qemukvmga off
systemctl list-unit-files
systemctl list-dependencies [target]
```

### https openssl生成证书
```
openssl req -new -x509 -newkey rsa:2048 -keyout CA.key -out CA.pem
openssl rsa -in CA.key  -out CA_no_pwd.key
```

### linux定时任务
```
crontab -e
//每分钟执行一次
*/1 * * * * /root/tomcat/apache-tomcat-9.0.13/bin/cutlog.sh
//每天0点0分
0 0 * * * /home/ubui_dev/tomcat/cutlog.sh
```

### linux删除7分钟之前的日志
```
{}有的系统要加双引号有的不要加, {}与分号之间必须有空格<br/>
find /root/tomcat/apache-tomcat-9.0.13/logs -cmin +7 -type f -name "catalina.out.2*" -exec rm -rf {} \;
find /root/tomcat/apache-tomcat-9.0.13/logs -mtime +7 -type f -name "catalina.out.2*" -exec tar -zcPvf catalina.${cusdate}.tar.gz {} \;
```

### linux测试网速
```
curl -s https://raw.githubusercontent.com/sivel/speedtest-cli/master/speedtest.py | python -
或
yum -y install git
git clone https://github.com/sivel/speedtest-cli.git
speedtest-cli/speedtest.py
```

### scp复制下载
```
文件夹 -r
scp -P 27721 root@74.82.211.36:/root/redis/redis-5.0.0.tar.gz download/
源路径和目标路径反过来也可以，即在源服务器上操作
```

### 分割合并文件
```split -b 10m file.name [prefix]
-l line
-d 后缀数字
//合并
cat file_* > file.all
```

### 下载文件
wget<br/>
curl -LJO

### 项目后台启动
```
//标准输出和错误输出都进“黑洞”
java -jar novel-plus.jar >/dev/null 2>&1 &
//命令后台运行带日志
nohup [command] &
```

### linux查看运行内存,清理内存
```
cat /proc/meminfo |grep MemAvailable |awk '{print $2}'
echo 1 > /proc/sys/vm/drop_caches
```

### 防火墙
```
systemctl status firewalld
systemctl stop firewalld
systemctl disable firewalld
firewall-cmd --list-all
firewall-cmd --permanent --add-port=11180/tcp
firewall-cmd --permanent --remove-port=18080/tcp
firewall-cmd --reload
systemctl unmask firewalld
```

### curl post
```
curl -k http://a/b -X POST -H 'Content-Type:application/json' -d '{"a":"b"}'
//post大数据
curl -k http://a/b -X POST -H 'Content-Type:application/json' -d@a.txt

//sh形式
#!/bin/sh
echo $(date "+%s%3N")
echo $(date "+%Y%m%d%H%M%S")
curl -k -X POST -H 'Content-Type:application/json' \
  -d @- 'http://a/b' <<a.txt
{}
a.txt
echo $(date "+%Y%m%d%H%M%S")
```

### g++ gcc
yum install gcc-c++ libstdc++-devel

### linux用户配置
```
//查看
cat /etc/shadow
cat /etc/passwd
cat /etc/group
useradd username 默认username组 -g指定
groupadd usergroup
passwd username
userdel -r username

//用户添加查看组 a(append)
usermod -a -G groupA,groupB user
groups user

//查组内成员
cat /etc/group|grep groupname
gid=`grep 'groupname' /etc/group | cut -d ':' -f 3` && grep ".*:x:[0-9]*:$gid" /etc/passwd |cut -d ':' -f 1
```

### linux界面和命令行启动
```
cat /etc/inittab
systemctl set-default multi-user.target

init 3 切换到命令行
init 5 切换到桌面
```

### rpm安装卸载
```
rpm -ivh [].rpm
rpm -e [tab tab]
//检查是否安装
rpm -qa | grep [filename]
```

### linux隐藏顶栏底栏
```
//顶栏
sudo gedit /usr/share/gnome-shell/theme/gnome-classic.css
搜索 /* TOP BAR */ -> height改为0em -> alt+F2 | r 重启gnome
//底栏
删除目录/usr/share/gnome-shell/extensions/window-list@gnome-shell-extensions.gcampax.github.com
重启gnome
```

### linux改host
```
vi /etc/hosts
```

### linux改换行符
```
sed -i 's/\r$//' filename.sh
```

### linux关闭服务
#### 25端口postfix关闭
service postfix stop<br/>
chkconfig postfix off

#### cups关闭
```
service cups stop
chmod 000 /usr/sbin/cupsd
```



## git
### gitlab安装
```
rpm 7...
//改端口
vi /etc/gitlab/gitlab.rb
unicorn['listen'] = '0.0.0.0'
unicorn['port'] = 28080
nohup gitlab-ctl reconfigure &
gitlab-ctl stop
```

### git更新覆盖本地
```
git fetch --all
git reset --hard origin/master
```
## tomcat
### tomcat静态资源配置
```
<Context path="/" docBase="../firstPrj/prj" reloadable="true" crossContext="true"/>
<Context path="/uploads" docBase="/data/filetemp/forestblog/Documents/uploads" reloadable="true" crossContext="true"/>
```
### tomcat启动隐藏
文件setclasspath.bat
set _RUNJAVA="%JRE_HOME%\bin\javaw"

### tomcat启停杀进程
```
tomcat下bin/catalina.sh
#设置CATALINA_PID
#PRGDIR=`dirname "$PRG"` 后

if [ -z "$CATALINA_PID" ]; then
      CATALINA_PID=$PRGDIR/CATALINA_PID
      cat $CATALINA_PID
fi

vi进shutdown.sh文件,在最后一行   stop后 加 -force:
```

### jenkins配置直接杀tomcat进程
ps -ef|grep tomcat|grep java|grep prjname|awk '{print $2}'



## 正则
### 正则匹配连续数字
替换，数字减去当前位数，(\d)\1+判断是否全一样<br/>
或零宽断言((?:0(?=1)|1(?=2)|2(?=3)|3(?=4)|4(?=5)|5(?=6)|6(?=7)|7(?=8)|8(?=9)|9(?=0)){2}\d)

### 正则包含不包含关键字(且)
```
(?=.*n)(?=.*_)^.*$
((?!_)(?!n).)*
//不包含
(?!.*abc)(?!.*_)^.*$
(.*)((?!/).)+alert\((?!")+(?!')+
```

### 正则千分位
找到一个数子, 它的后面预匹配全是数子, 且以3个一组通过隐式占位符\b隔开, 在这个数子后面加逗号<br/>
"3243242354653.5356".replaceAll("(\\d)(?=(\\d{3})+\\b\\.\\d+)", "$1,")

### 非贪婪匹配最小行
`((.*\R{1})*?\R\R\R){1}?

### 正则日期
[1-9]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])\s+(20|21|22|23|[0-1]\d):[0-5]\d:[0-5][0-9]

### 常用匹配
```
//正则中文
[\u4e00-\u9fa5]+
".*[\u4e00-\u9fa5]+.*"
//正则双字节符
[^\x00-\xff]
```


## mvn
### 打包
mvn clean package -Dmaven.test.skip=true -Psit

### sonar检查
mvn sonar:sonar -Dsonar.host.url=http://localhost:9000 -Dsonar.login=5d76d9ff71bf6b7c3ab5e53b0c522336f681c76a

### 依赖检查
mvn org.owasp:dependency-check-maven:check

### 加入本地maven仓库
```
//oracle
mvn install:install-file -Dfile=G:\ojdbc14-1.0.jar -DgroupId=com.oracle -DartifactId=ojdbc14 -Dversion=1.0 -Dpackaging=jar -DgeneratePom=true -DcreateChecksum=true
```
### 发布在线maven包
```
mvn deploy:deploy-file -DgroupId=top.ulane -DartifactId=jdbc -Dversion=0.0.1-SNAPSHOT -Dpackaging=jar -Dfile=D:\Develop\Install\eclipse_pristine\workspace\jdbc\target\jdbc.jar -Durl=http://username:password@nexus.ulane.top/nexus/content/repositories/snapshots
```

### 项目单独配置仓库
```
pom.xml文件增加
<repositories>
    <repository>
        <id>public</id>
        <name>aliyun nexus</name>
        <url>http://maven.aliyun.com/nexus/content/groups/public/</url>
        <!-- <releases>
            <enabled>true</enabled>
        </releases>
        <snapshots>
            <enabled>true</enabled>
        </snapshots> -->
    </repository>
</repositories>

<pluginRepositories>
    <pluginRepository>
        <id>public</id>
        <name>aliyun nexus</name>
        <url>http://maven.aliyun.com/nexus/content/groups/public/</url>
        <!-- <releases>
            <enabled>true</enabled>
        </releases>
        <snapshots>
            <enabled>true</enabled>
        </snapshots> -->
    </pluginRepository>
</pluginRepositories>
```

## 数据库
### oracle
#### oracle->mysql文件结构转换
float\((\d*)\) -> float\($1\,0)

#### 客户端
```
//sqlplus
basic和sqlplus客户端下载安装
sqlplus ulane/password@host:1521/helowinXDB
//sqlldr客户端
sqlldr ulane/password@host:1521/helowinXDB control=test.ctl data=loader.txt
下载tools包直接安装
//21版本包打包有误,需要下载zip包重新解压关联
install -m 755 -o root -g root instantclient_21_1/libomsodm.so /usr/lib/oracle/21/client64/lib/libomsodm.so
//环境变量
export ORACLE_HOME=/usr/lib/oracle/21/client64
export PATH=$ORACLE_HOME/bin:$PATH
export LD_LIBRARY_PATH=$ORACLE_HOME/lib
```

### mysql group_concat 最大长度
SET SESSION group_concat_max_len=102400;

### mysql查询数据库引擎
select table_schema,table_name,engine from information_schema.tables  where table_schema not in('information_schema','performance_schema','mysql','test','_DBA');

### mysql修改时区
```
show variables like '%time_zone%';
set global time_zone = '+8:00';
set time_zone = '+8:00';
flush privileges;
show variables like '%time_zone%';
```

### mysql连接数
```
//mysql查看连接数
C:\A_install\mysql-5.6.19-winx64\bin>mysqladmin -uroot -p0123456 status
C:\A_install\mysql-5.6.19-winx64\bin>mysqladmin -uroot -p0123456 processlist
//最大可连接数
show variables like "max_connections";
show processlist;
show status like 'Threads%';

//mysql修改连接数
my.ini : max_connections=1000
set GLOBAL max_connections=100;

//mysql关闭连接
kill [processlist id]
```

### 事务
begin; commit;

### mysqldump表复制和备份
```
mysqldump --debug-info -uroot -proot@123#@! test tablename | mysql -h 211.159.185.18 -P3306 -C -uroot -p0123456 test
mysqldump -uroot -p'root@135%^&' novel_plus > /home/novel_plus_bk0905.sql
source novel_plus_bk0905
```

### mysql查询修改编码及排序规则
```
show variables like "%char%";
show variables like '%collation%';

set character_set_database = 'utf8mb4';
set collation_database = 'utf8mb4_general_ci';
或
alter database cloudhos character set utf8mb4 collate utf8mb4_general_ci;

show create table im_chat;
alter table im_chat character set utf8mb4;
alter table im_chat modify column msg  varchar(512) character set utf8mb4 collate utf8mb4_general_ci;
```

### mysql初始化修改密码
```
update user set password=password('pwsswd') where user='root' and host='%'; 
alter user 'root'@'localhost' identified by 'passwd';
alter user 'root'@'localhost' identified with mysql_native_password by 'passwd';
```

### mysql创建用户及对应数据库权限
```
CREATE USER `ulane`@`%` IDENTIFIED BY 'password';
//仅授权增删改查，下划线转义
GRANT Delete, Execute, Insert, Lock Tables, Select, Update ON `novel\_plus`.* TO `novel_plus`@`%`;
-- GRANT Alter, Alter Routine, Create, Create Routine, Create Temporary Tables, Create View, Delete, Drop, Event, Execute, Grant Option, Index, Insert, Lock Tables, References, Select, Show View, Trigger, Update ON `test`.* TO `ulane`@`%`;
GRANT Select ON `test`.* TO `ulane2`@`%`;
FLUSH PRIVILEGES;

//授权单数据库所有
grant all privileges on `test`.* to 'ulane'@'%' identified by 'password';
flush privileges;

//连接授权，一般创建用户直接授权
update user set host='%' where user='root' limit 1;
FLUSH PRIVILEGES;
GRANT ALL PRIVILEGES ON *.* TO 'ulane'@'%' IDENTIFIED BY 'password' WITH GRANT OPTION;
```

### mysql远程登录
mysql -h 211.159.185.18 -u root -p -P 3306









## python
### python3别名
alias ipython3='python3 -m IPython'

### 切换默认版本
```
安装python3
cd /usr/bin
ln -s python3 python
```



## docker
### docker启动
systemctl start docker<br/>
systemctl enable docker

### docker浏览 搜索 下载 删除镜像，容器
```
docker images
docker search
docker pull
docker rmi hub.c.163.com/library/tomcat:9.0
docker rm dtomcat
//添加dockerfile到本地镜像 最后的.表示当前路径
docker build -t ulane/notify:1.0 .
```

### docker查看日志
docker logs -f -t --tail 100 nginx

### docker进入容器目录
docker exec -it tomcat /bin/bash

### docker 复制文件
docker cp drmqnamesrv:/etc/hosts ./<br/>
docker cp ./broker.conf drmqnamesrv:/opt/rocketmq-4.3.2/conf/broker.conf

### docker导入导出重命名
```
docker save cd14cecfdb3a > ./docker_jenkins_2.60.3.tar
docker load < docker_jenkins_2.60.3.tar
docker tag cd14cecfdb3a jenkins:2.60.3
docker export tomcat > ./tomcat-jenkins-2.244.tar
docker import tomcat-jenkins-2.244.tar tomcat-jenkins:2.244
```

### docker修改提交镜像并发布
docker commit -m="tomcat with jenkins 2.258" -a="ulane" 8e1378963558 eshonulane/tomcat-jenkins:9.2.258<br/>
docker push eshonulane/tomcat-jenkins:9.2.258

### docker修改容器参数
docker update --restart=always dmysql  //no<br/>
docker update -m 350M --memory-swap 450M dnexus<br/>
docker rename unruffled_heisenberg drmqconsole

### docker安装
#### docker安装rabbitmq
```
docker run -d -p 5672:5672 -p 15672:15672 \
--hostname myRabbit \
-e RABBITMQ_DEFAULT_VHOST=my_vhost  \
-e RABBITMQ_DEFAULT_USER=admin \
-e RABBITMQ_DEFAULT_PASS=admin0123456 \
--privileged=true \
--name rabbitmq rabbitmq:3.8.9
//挂载
-v /root/docker_link/rabbitmq:/var/lib/rabbitmq \
docker exec -it rabbitmq rabbitmq-plugins enable rabbitmq_management
```
#### docker启动rocketmq
```
//rmqnamesrv 
docker run -d -p 9876:9876 \
-v /root/docker_link/rocketmq/namesrv/logs:/root/logs \
-v /root/docker_link/rocketmq/namesrv/store:/root/store \
-e "MAX_POSSIBLE_HEAP=100000000" \
--name rmqnamesrv rocketmqinc/rocketmq:4.3.2 sh mqnamesrv
//rmqbroker 
docker run -d -p 10911:10911 -p 10909:10909 \
-v /root/docker_link/rocketmq/broker/logs:/root/logs \
-v /root/docker_link/rocketmq/broker/store:/root/store \
-v /root/docker_link/rocketmq/conf/broker.conf:/opt/rocketmq-4.3.2/conf/broker.conf \
--link rmqnamesrv:namesrv -e "NAMESRV_ADDR=namesrv:9876" -e "MAX_POSSIBLE_HEAP=200000000" \
--name rmqbroker rocketmqinc/rocketmq:4.3.2 sh mqbroker -c ../conf/broker.conf
//rmqconsole 
docker run -p 8090:8080 \
-e "JAVA_OPTS=-Drocketmq.namesrv.addr=211.159.185.18:9876 -Dcom.rocketmq.sendMessageWithVIPChannel=false" \
-t --name rmqconsole styletang/rocketmq-mqbroker ng
```

#### docker安装redis
```
docker run -itd -p 6379:6379 \
--name redis redis:5.0.10 \
--requirepass "password"
```

#### docker安装mongodb
```
docker run -itd -p 27017:27017 \
--name mongo mongo:4.0.20-xenial --auth
docker exec -it mongo mongo admin
db.createUser({ user:'admin',pwd:'a0123456',roles:[ { role:'userAdminAnyDatabase', db: 'admin'},"readWriteAnyDatabase"]});
db.auth("admin","a0123456");
db.createUser({ user:'novel',pwd:'a123456',roles:[ { role:'dbOwner', db: 'novel'},"readWriteAnyDatabase"]});
db.auth("novel","a123456");
```

#### docker启动oracle
```
docker run -d -p 1521:1521 --name oracle11g registry.cn-hangzhou.aliyuncs.com/helowin/oracle_11g

docker cp oracle11g:/etc/profile ./
改profile
/etc/profile最后添加
export ORACLE_HOME=/home/oracle/app/oracle/product/11.2.0/dbhome_2
export ORACLE_SID=helowin
export PATH=$ORACLE_HOME/bin:$PATH
export NLS_LANG=AMERICAN_AMERICA.AL32UTF8
//export PATH=$ORACLE_HOME/bin:$install -m 755 -o root -g root instantclient_21_1/libomsodm.so /usr/lib/oracle/21/client64/lib/libomsodm.so
//NLS_LANG客户端必须设置，否则执行sql输入输出中文乱码
//unset 临时删除
docker cp ./profile oracle11g:/etc/

docker exec -it oracle11g /bin/bash
su root
//password ***
source /etc/profile
su - oracle
mkdir tablespace
sqlplus / as sysdba

create tablespace ULANE datafile '/home/oracle/tablespace/ULANE.DBF' size 100M AUTOEXTEND ON NEXT 100M;
create tablespace ULANE_IDX datafile '/home/oracle/tablespace/ULANE_IDX.DBF' size 100M AUTOEXTEND ON NEXT 100M;
create user ulane identified by password DEFAULT TABLESPACE ULANE;
//alter user ulane default tablespace ULANE;
grant connect,resource,dba to ulane;
//创建错误重来
DROP TABLESPACE ULANE INCLUDING CONTENTS AND DATAFILES ;

//改密码
alter user ulane identified by abc;

```

#### docker启动mysql 关联本地数据
```
docker run -itd -p 3306:3306 -e TZ=Asia/Shanghai -e MYSQL_ROOT_PASSWORD='password' \
--privileged=true \
-v /root/docker_link/mysql/conf/mysql.cnf:/etc/mysql/conf.d/mysql.cnf \
-v /root/docker_link/mysql/logs:/var/log \
-v /root/docker_link/mysql/data:/var/lib/mysql \
--restart always --name mysql mysql:5.6

docker run -itd -p 3308:3306 -e TZ=Asia/Shanghai -e MYSQL_ROOT_PASSWORD='password' \
-v /root/docker_link/mysqlslave/conf/mysql.cnf:/etc/mysql/conf.d/mysql.cnf \
-v /root/docker_link/mysqlslave/logs:/var/log \
-v /root/docker_link/mysqlslave/data:/var/lib/mysql \
--name mysqlslave mysql:5.6

//读写分离
docker inspect --format='{{.NetworkSettings.IPAddress}}' mysql
change master to master_host='172.17.0.5',master_user='ulane',master_password='123456',master_log_file='mysql-bin.000001',master_log_pos=120,master_port=3306;
start slave;
//日志
show variables like '%general_log%';
set global general_log=on;
```

#### docker启动jenkins
```
//版本太旧
docker run -itd -p 8888:8080 -e TZ=Asia/Shanghai \
-u root \
-v /root/docker_link/jenkins/jenkins_home:/var/jenkins_home \
--name jenkins jenkins:2.60.3
//改tomcat
docker run -itd -p 8888:8080 -e TZ=Asia/Shanghai \
-u root \
-v /root/docker_link/tomcat/conf/server.xml:/usr/local/tomcat/conf/server.xml \
-v /root/docker_link/tomcat/firstPrj/prj:/usr/local/tomcat/firstPrj/prj \
-v /root/docker_link/tomcat/logs:/usr/local/tomcat/logs \
--name jenkins2 tomcat-jenkins:2.244 /bin/bash \
-c 'export JAVA_HOME=/usr/local/openjdk-8 && cd /usr/local/tomcat/ && bin/startup.sh && tail -f /dev/null'
//自定义镜像
docker run -itd -p 8888:8080 -e TZ=Asia/Shanghai \
-u root \
-v /root/docker_link/tomcat/logs:/usr/local/tomcat/logs \
--privileged=true \
--name jenkins ulane/tomcat-jenkins:9.2.258
```
jenkins插件地址<br/>
https://mirrors.tuna.tsinghua.edu.cn/jenkins/updates/update-center.json<br/>
https://mirrors.tuna.tsinghua.edu.cn/jenkins/plugins/

#### docker启动tomcat
```
docker run -itd -p 8888:8080 -e TZ=Asia/Shanghai \
-u root \
-v /root/docker_link/tomcat/conf/server.xml:/usr/local/tomcat/conf/server.xml \
-v /root/docker_link/tomcat/firstPrj/prj:/usr/local/tomcat/firstPrj/prj \
-v /root/docker_link/tomcat/logs:/usr/local/tomcat/logs \
--name tomcat tomcat:9.0.35-jdk8
```

#### docker启动zookeeper
```
docker run -itd -p 2181:2181 --restart=always --name zookeeper zookeeper:3.5.5
docker run -itd -p 2181:2181 -v /root/docker_link/zookeeper/data:/data \
--name zookeeper zookeeper:3.5.5
```

#### docker启动nginx
```
docker run -itd -p 80:80 -p 443:443 -e TZ="Asia/Shanghai" \
-v /root/docker_link/nginx/nginx.conf:/etc/nginx/nginx.conf \
-v /root/docker_link/nginx/conf.d:/etc/nginx/conf.d \
-v /root/docker_link/nginx/streamconf.d:/etc/nginx/streamconf.d \
-v /root/docker_link/nginx/CA.pem:/home/nginx/CA.pem \
-v /root/docker_link/nginx/CA_no_pwd.key:/home/nginx/CA_no_pwd.key \
-v /root/docker_link/nginx/www:/home/nginx/www \
-v /data/download:/home/nginx/download \
--privileged --net=host \
--name nginx nginx:1.21.5

docker run -itd -p 80:80 -p 443:443 -e TZ="Asia/Shanghai" \
-v /data/nginx/nginx.conf:/etc/nginx/nginx.conf \
-v /data/nginx/conf.d:/etc/nginx/conf.d \
-v /data/nginx/ssl:/etc/nginx/ssl \
-v /data/nginx/www:/home/nginx/www \
-v /data/download:/home/nginx/download \
--restart always \
--name my_nginx nginx:latest
```

#### docker启动nexus 关联本地数据
```
docker run -itd -p 8081:8081 -e TZ=Asia/Shanghai \
-v /root/docker_link/nexus/data:/nexus-data \
-v /root/docker_link/nexus/storage:/sonatype-work/storage \
--name nexus sonatype/nexus:2.14.16

//运行内存占用小
docker run -itd -p 8081:8081 -e TZ=Asia/Shanghai \
-v /root/docker_link/nexus/data:/nexus-data \
-v /root/docker_link/nexus/storage:/sonatype-work/storage \
--name nexus2_11 sonatype/nexus:2.11.0
```

#### docker启动gitlab
```
docker run -itd -p 20443:443 -p 20080:20080 -e TZ=Asia/Shanghai \
-v /root/docker_link/gitlab/etc/gitlab:/etc/gitlab \
-v /root/docker_link/gitlab/var/log/gitlab:/var/log/gitlab \
-v /root/docker_link/gitlab/var/opt/gitlab:/var/opt/gitlab \
--privileged \
--name gitlab gitlab/gitlab-ce:8.0.0-ce.0

//初始化配置
external_url 'http://192.168.204.128:20080'

gitlab_rails['smtp_enable'] = true
gitlab_rails['smtp_address'] = "smtp.mxhichina.com"
gitlab_rails['smtp_port'] = 465
gitlab_rails['smtp_user_name'] = "system@ulane.top"
# from必填，不填报错
gitlab_rails['gitlab_email_from'] = 'system@ulane.top'
gitlab_rails['smtp_password'] = "***"
gitlab_rails['smtp_domain'] = "ulane.top"
gitlab_rails['smtp_authentication'] = "login"
gitlab_rails['smtp_enable_starttls_auto'] = true
gitlab_rails['smtp_tls'] = true

docker exec -it gitlab /bin/bash
gitlab-ctl reconfigure
gitlab-rails console
Notify.test_email('cl@ulane.top', 'Message Subject', 'Message Body').deliver

//重置密码
gitlab-rails console -e production
user = User.where(id: 1).first 或 user = User.find_by(email: 'admin@example.com')
user.password = 'secret_pass'
user.password_confirmation = 'secret_pass'
user.save!

```
#### docker安装iredmail
```
touch iredmail-docker.conf

echo HOSTNAME=mail.ulane.cn >> iredmail-docker.conf
echo FIRST_MAIL_DOMAIN=ulane.cn >> iredmail-docker.conf
echo FIRST_MAIL_DOMAIN_ADMIN_PASSWORD=邮箱管理员密码 >> iredmail-docker.conf
echo MYSQL_ROOT_PASSWORD=数据库密码 >> iredmail-docker.conf
echo MLMMJADMIN_API_TOKEN=$(openssl rand -base64 32) >> iredmail-docker.conf
echo ROUNDCUBE_DES_KEY=$(openssl rand -base64 24) >> iredmail-docker.conf

mkdir -p data/{backup,clamav,custom,imapsieve_copy,mailboxes,mlmmj,mlmmj-archive,mysql,sa_rules,ssl,postfix_queue}

docker pull iredmail/mariadb:stable

docker run \
    --privileged \
    --rm \
    --name iredmail \
    --env-file iredmail-docker.conf \
    --hostname mail.ulane.cn \
    -p 80:80 \
    -p 443:443 \
    -p 110:110 \
    -p 995:995 \
    -p 143:143 \
    -p 993:993 \
    -p 25:25 \
    -p 465:465 \
    -p 587:587 \
    -v /root/docker_link/iredmail/data/backup:/var/vmail/backup \
    -v /root/docker_link/iredmail/data/mailboxes:/var/vmail/vmail1 \
    -v /root/docker_link/iredmail/data/mlmmj:/var/vmail/mlmmj \
    -v /root/docker_link/iredmail/data/mlmmj-archive:/var/vmail/mlmmj-archive \
    -v /root/docker_link/iredmail/data/imapsieve_copy:/var/vmail/imapsieve_copy \
    -v /root/docker_link/iredmail/data/custom:/opt/root/docker_link/iredmail/custom \
    -v /root/docker_link/iredmail/data/ssl:/opt/root/docker_link/iredmail/ssl \
    -v /root/docker_link/iredmail/data/mysql:/var/lib/mysql \
    -v /root/docker_link/iredmail/data/clamav:/var/lib/clamav \
    -v /root/docker_link/iredmail/data/sa_rules:/var/lib/spamassassin \
    -v /root/docker_link/iredmail/data/postfix_queue:/var/spool/postfix \
    iredmail/mariadb:stable
```

#### docker 安装v2ray
```
//可能关联无法成功，外部目录也需要改: -v /etc/v2ray:/etc/v2ray
docker run -d -p 8888:80 \
-v /root/docker_link/v2ray/v2ray:/etc/v2ray \
--name v2ray v2ray/official v2ray -config=/root/docker_link/v2ray/v2ray/config.json
```

## 代码开发相关
### 小于等于转义
<![CDATA[ <= ]]><br/>
&lt;

### 微信公众号code跳转
https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx663fee511c625a07&response_type=code&scope=snsapi_base&redirect_uri=http%3A%2F%2Fwx.ulane.top%2Fwxtest&state=123#wechat_redirect

### base64图片
```
<img src="data:image/jpg;base64," />
```

## eclipse
### eclipse布局
```
touch /home/ulane/桌面/eclipse.desktop
---
[Desktop Entry]
Encoding=UTF-8
Type=Application
Terminal=false
Exec=/home/ulane/install/eclipse/eclipse --launcher.GTK_version 2
Categories=Application;Development;
Name=eclipse
Comment="Java Development IDE"
Icon=/home/ulane/install/eclipse/icon.xpm
---
touch /home/ulane/.gtkrc-2.0
---
style "compact"
{
  font_name="Sans 9"
  GtkButton::default_border={0,0,0,0}
  GtkButton::default_outside_border={0,0,0,0}
  GtkButtonBox::child_min_width=0
  GtkButtonBox::child_min_heigth=0
  GtkButtonBox::child_internal_pad_x=0
  GtkButtonBox::child_internal_pad_y=0
  GtkMenu::vertical-padding=1
  GtkMenuBar::internal_padding=0
  GtkMenuItem::horizontal_padding=4
  GtkToolbar::internal-padding=0
  GtkToolbar::space-size=0
  GtkOptionMenu::indicator_size=0
  GtkOptionMenu::indicator_spacing=0
  GtkPaned::handle_size=4
  GtkRange::trough_border=0
  GtkRange::stepper_spacing=0
  GtkScale::value_spacing=0
  GtkScrolledWindow::scrollbar_spacing=0
  GtkExpander::expander_size=10
  GtkExpander::expander_spacing=0
  GtkTreeView::vertical-separator=0
  GtkTreeView::horizontal-separator=0
  GtkTreeView::expander-size=8
  GtkTreeView::fixed-height-mode=TRUE
  GtkWidget::focus_padding=0
}
class "GtkWidget" style "compact"
style "compact2"
{
  xthickness=1
  ythickness=1
}
class "GtkButton" style "compact2"
class "GtkToolbar" style "compact2"
class "GtkPaned" style "compact2"
---
```


### svn
#### 启动
```
svnserve -d -r /install/svn/project
```

#### 下载
```
//注意子路径下带.的需要转移\.
svn checkout https://a.com...
//更新
svn update [path]
```

## 其他服务
### httpd配置
中文乱码 IndexOptions Charset=UTF-8<br/>
配置访问(还有权限访问) Alias "/docs" "/data/document/download"<br/>
显示文件全名称
```
<Directory "/data/document/download">
    Options Indexes FollowSymlinks
    AllowOverride none
    Require all granted
    IndexOptions FancyIndexing NameWidth=*
</Directory>
```
新增端口
```
Listen 8581
NameVirtualHost *:8581
<VirtualHost *:8581>
    ServerName 127.0.0.1
    DocumentRoot "/data/document/web"
    <Directory "/data/document/web">
      Options Indexes FollowSymLinks
      AllowOverride None
      Require all granted
    </Directory>
</VirtualHost>
```

### redis
#### redis集群启动
```
redis-5.0.0/utils/create-cluster
./create-cluster stop
./create-cluster start
/usr/local/bin/redis-cli  --cluster  create   176.122.134.186:30001 176.122.134.186:30002 176.122.134.186:30003
/usr/local/bin/redis-cli  --cluster  create   176.122.134.186:30001 176.122.134.186:30002 176.122.134.186:30003 74.82.211.36:30001 74.82.211.36:30002 74.82.211.36:30003 --cluster-replicas 1
```

#### redis单机启停
nohup src/redis-server ./redis.conf &
src/redis-cli -p 6379 shutdown

#### redis查看
```
docker exec -it redis redis-cli -a passwd
src/redis-cli -p 6379 -a passwd
keys *
get [key]
del [key]
清理 flushall / flushdb
```


### nginx
#### nginx启停
```
sbin/nginx -c conf/nginx.conf
sbin/nginx -s quit
sbin/nginx -s reload
```

#### nginx重写地址
rewrite ^/path(.*)$ $1 break;














