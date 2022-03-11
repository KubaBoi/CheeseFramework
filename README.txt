pip install psycopg2
pip install pyodbc

INSTALLATION CentOS

#PYTHON
sudo dnf install gcc openssl-devel bzip2-devel libffi-devel zlib-devel wget make -y
wget https://www.python.org/ftp/python/3.10.0/Python-3.10.0.tar.xz
tar -xf Python-3.10.0.tar.xz
cd Python-3.10.0 && ./configure --enable-optimizations
nproc 
make -j {nproc result}
sudo make altinstall

#PSYCOPG2 LIB
python3.10 -m pip install psycopg2-binary
python3.10 -m pip install psycopg2

#SQL SERVER 17 DRIVER + PYODBC LIB

sudo su
curl https://packages.microsoft.com/config/rhel/7/prod.repo > /etc/yum.repos.d/mssql-release.repo
exit

sudo yum remove unixODBC-utf16 unixODBC-utf16-devel #to avoid conflicts
sudo ACCEPT_EULA=Y yum install -y msodbcsql17
sudo ACCEPT_EULA=Y yum install -y mssql-tools18
echo 'export PATH="$PATH:/opt/mssql-tools18/bin"' >> ~/.bashrc
source ~/.bashrc

sudo yum install -y unixODBC-devel
sudo yum install gcc-c++
python3.10 -m pip install pyodbc