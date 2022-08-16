sc config BITS start=disabled
sc stop BITS
sc config wuauserv start=disabled
sc stop wuauserv
echo %date% %time%