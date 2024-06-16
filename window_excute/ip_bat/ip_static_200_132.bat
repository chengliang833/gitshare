netsh interface ip set address "Ethernet0" static 192.168.200.132 255.255.255.0 192.168.200.2
::netsh interface ip set dns name="Ethernet0" source=static addr=192.168.200.2 register=primary
netsh interface ip set dns "Ethernet0" static 192.168.200.2 primary
netsh interface ip add dns name="Ethernet0" addr=114.114.114.114
pause