<h1 align="center">WeRead Export</h1>
<div align="center">
一键导出 Markdown 格式微信读书笔记

极简风格

![](https://raw.githubusercontent.com/scarqin/wxread-export/main/wiki/app.png)

</div>

# 功能

- [x] 显示带笔记的书籍列表
- [x] 一键导出 markdown 格式划线/评论
- [x] 导出阅读时间
- [ ] 导出笔记图片
- [ ] 图书检索
- [ ] 支持 Firefox、Chrome 商店下载
- [ ] 自定义导出内容（书籍信息、书籍评分等）
- [ ] 自定义导出格式

## 一键导出 markdown 格式划线/评论

![](https://raw.githubusercontent.com/scarqin/wxread-export/main/wiki/note-demo.png)

# 安装

## 1. Chrome 商店安装

[链接](https://chrome.google.com/webstore/detail/weread-export/pfdngabomfljjilophohpifglnodhhnh?hl=zh-CN&authuser=0)

需要翻墙，可以自动更新

## 2. 手动安装

1. clone 仓库

```
git clone https://github.com/scarqin/wxread-export.git
```

2. Chrome 浏览器访问 [chrome://extensions/](chrome://extensions/)，打开右上角开发者模式，拖入仓库文件到此界面。

> 使用 git pull 更新

# 源码开发

## API 文档

[在线 API 文档](https://scarfree.w.eolink.com/share/project/api/?groupID=-1&shareCode=65wWvE&shareToken=$2y$10$ZVixV4UGvQ221pgkWRQKOO4Ew~2FYGsXSwPbg.NRZO8i7r6hChj5q7e&shareID=355331)
![](https://raw.githubusercontent.com/scarqin/wxread-export/main/wiki/eolink.png)

## 安装依赖

```
pnpm install
```

## 运行

```
pnpm dev
```

## 打包

```
pnpm build
```
