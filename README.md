# show-date-time

`show-date-time` 是一个显示当前时间的命令行工具


```shell
jay@mac:/tmp > show-date-time --help
show-date-time/1.2.0

Usage:
  $ show-date-time

Commands:
    show current time in different timezone

For more info, run any command with the `--help` flag:
  $ show-date-time --help

Options:
  -t, --time <time>  Time you want to show, which will be parsed by new Date(time) e.g show-date-time --time "Mon Sep 20 2021 20:56:49 GMT+0800"
  -h, --help         Display this message
  -v, --version      Display version number
```

e.g. 显示当前时间

```shell
jay@mac:/tmp > show-date-time
Time: 9/20/2021, 10:31:46 PM
========================================
Asia/Shanghai: 9/20/2021, 10:31:46 PM
Europe/London: 9/20/2021, 3:31:46 PM
America/Toronto: 9/20/2021, 10:31:46 AM
========================================
```

e.g. 显示特定的时间

```shell
jay@mac:/tmp > show-date-time --time "Mon Sep 20 2021 20:56:49 GMT+0800"
Time: 9/20/2021, 8:56:49 PM
========================================
Asia/Shanghai: 9/20/2021, 8:56:49 PM
Europe/London: 9/20/2021, 1:56:49 PM
America/Toronto: 9/20/2021, 8:56:49 AM
========================================
```

