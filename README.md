## Setup

2) npm init
3) npm i -D ts-node
4) npx tsc --init
5) .gitignore https://www.gitignore.io/
6) .editorconfig
```
<# Editor configuration, see https://editorconfig.org
root = true

[*]
charset = utf-8
indent_style = space
indent_size = 2
insert_final_newline = true
trim_trailing_whitespace = true

[*.ts]
quote_type = single

[*.md]
max_line_length = off
trim_trailing_whitespace = false> 
```
7) add ./dist to tsconfig.json "outDir"
