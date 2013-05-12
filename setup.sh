#!/bin/sh

echo "PATH=$PATH:/usr/local/mysql/bin" >> ~/.profile

cp my.cnf /etc

# If using a distribution that has a MariaDB package,
# replace this with the package installation line.
# Building on a Raspberry Pi takes a _long_ time.
apt-get install cmake libncurses5-dev bison
wget https://downloads.mariadb.org/f/mariadb-5.5.30/kvm-tarbake-jaunty-x86/mariadb-5.5.30.tar.gz/from/http:/mariadb.cu.be/ -o mariadb-5.5.30.tar.gz
tar -zxvf mariadb-5.5.30.tar.gz
cd mariadb-5.5.30/BUILD
./autorun.sh
cd ..
./configure
make
make install
adduser mysql
chown -R mysql /usr/local/mysql
cd /usr/local/mysql
scripts/mysql_install_db --user=mysql
cp support-files/mysql.server /etc/init.d/mysqld
/etc/init.d/mysqld start

ln -s /usr/local/mysql/lib/libmysqlclient.so.18 /usr/lib/

apt-get install nginx uwsgi uwsgi-plugin-python python-dev python-setuptools python-software-properties

curl -O https://raw.github.com/pypa/pip/master/contrib/get-pip.py
python get-pip.py

pip install -U setuptools
pip install -U tiddlywebwiki
pip install -U tiddlywebplugins.mysql3

ln -s nginx /etc/nginx/sites-available/benpaddock.net
ln -s /etc/nginx/sites-available/benpaddock.net /etc/nginx/sites-enabled/benpaddock.net

ln -s tiddlyweb.ini /etc/uwsgi/apps-available/tiddlyweb.ini
ln -s /etc/uwsgi/apps-available/tiddlyweb.ini /etc/uwsgi/apps-enabled/tiddlyweb.ini 

/etc/init.d/nginx start
/etc/init.d/uwsgi start
