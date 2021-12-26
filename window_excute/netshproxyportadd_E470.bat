::在这添加吧
netsh interface portproxy add v4tov4 listenport=1080 listenaddress=192.168.126.1 connectaddress=127.0.0.1 connectport=1080
netsh interface portproxy add v4tov4 listenport=10808 listenaddress=192.168.126.1 connectaddress=127.0.0.1 connectport=10808
netsh interface portproxy add v4tov4 listenport=10809 listenaddress=192.168.126.1 connectaddress=127.0.0.1 connectport=10809
netsh interface portproxy add v4tov4 listenport=10810 listenaddress=192.168.126.1 connectaddress=127.0.0.1 connectport=10810
netsh interface portproxy add v4tov4 listenport=53389 listenaddress=192.168.137.1 connectaddress=192.168.204.132 connectport=3389
netsh interface portproxy add v4tov4 listenport=2181 listenaddress=127.0.0.1 connectaddress=192.168.204.128 connectport=2181
pause