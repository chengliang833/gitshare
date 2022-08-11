sc stop wuauserv
sc config wuauserv start=disabled
echo %date% %time%