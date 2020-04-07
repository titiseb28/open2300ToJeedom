'use strict';

const ftp = require('./FTPClient');
const client = new ftp('hostFTP', 21, 'login', 'passe', false);

client.upload('./currentxml.xml', 'meteoseb/sh/live/current.xml', 644);

