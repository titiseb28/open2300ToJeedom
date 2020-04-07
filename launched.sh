#!/bin/bash
date
/home/jeedom/open2300-1.10/xml2300 /tmp/currentxml.xml &&
date &&
/usr/bin/node /home/jeedom/open2300ToJeedom/upFTP.js &&
date &&
/usr/bin/node /home/jeedom/open2300ToJeedom/meteo.js &&
date 
