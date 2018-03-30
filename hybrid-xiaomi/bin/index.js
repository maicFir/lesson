/*
 * Copyright (C) 2017, hapjs.org. All rights reserved.
 */


var fs = require('fs')

var xtoolkit = require('xtoolkit');
var xtoolkitUtil = require('xtoolkit/src/util')

var info = require('../templates/project/modules/mix-tools/lib/info')

// 将项目信息写到全局
process.info = info

xtoolkit.command('init','local:../lib/command/init.js');
xtoolkit.command('update','local:../lib/command/update.js');
xtoolkit.command('migrate','local:../lib/command/migrate.js');
xtoolkit.command('help','local:../lib/command/help.js');
xtoolkit.command('','local:../lib/command/help.js');
xtoolkit.version(require('../package.json').version);


// 强制创建目录，不存在的话会抛错
var xtoolkitHome = xtoolkitUtil.homePath();
!fs.existsSync(xtoolkitHome) && fs.mkdirSync(xtoolkitHome)

