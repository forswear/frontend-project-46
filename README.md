### Hexlet tests and linter status:
[![Actions Status](https://github.com/forswear/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/forswear/frontend-project-46/actions)

# Краткое описание проекта:
Вычислитель отличий – программа, определяющая разницу между двумя структурами данных.

Возможности утилиты:

Поддержка разных входных форматов: yaml, json
Генерация отчета в виде plain text, stylish и json


---

# Системные требования

node v22.8.0

npm  v10.8.2

---

# Инструкция по установке

### Клонирование репозитория:  
_git clone https://github.com/forswear/frontend-project-46_
### Перейдите в директорию проекта: 
_cd frontend-project-46_
### Установите зависимости для работы проекта: 
_npm install_

---

# Вызов справки
 
### `gendiff -h`: <a href="https://asciinema.org/a/QXZUyMpRdrZEcaEM1X1sgotV6" target="_blank"><img src="https://asciinema.org/a/QXZUyMpRdrZEcaEM1X1sgotV6.svg" width="1000" height="400" /></a>

# Сравнение плоских файлов json
 
### `gendiff file1.json  file2.json`: <a href="https://asciinema.org/a/0LLGJsKS1UcrUHuJLZbL2fzaK" target="_blank"><img src="https://asciinema.org/a/0LLGJsKS1UcrUHuJLZbL2fzaK.svg" width="1000" height="400" /></a>

# Сравнение плоских файлов yaml
 
### `gendiff file1.yml  file2.yml`: <a href="https://asciinema.org/a/Lvd7bj1zo2OpiBCEwl5bxiO8T" target="_blank"><img src="https://asciinema.org/a/Lvd7bj1zo2OpiBCEwl5bxiO8T.svg" width="1000" height="400" /></a>

# Рекурсивное сравнение
 
### `gendiff file1.json  file2.json`: <a href="https://asciinema.org/a/VxpZI20EaKguGEsCzXVk5hX9q" target="_blank"><img src="https://asciinema.org/a/VxpZI20EaKguGEsCzXVk5hX9q.svg" width="1000" height="400" /></a>

# Плоский формат сравнение

### `gendiff --format plain file1.json  file2.json`: <a href="https://asciinema.org/a/vrgzclnJD2memU27mpxcZ61CN " target="_blank"><img src="https://asciinema.org/a/vrgzclnJD2memU27mpxcZ61CN.svg" width="1000" height="400" /></a>

# Вывод в json

### `gendiff --format json file1.json  file2.json`: <a href="https://asciinema.org/a/Ff5jsDeTsZulPfxuc8WIgRQzK" target="_blank"><img src="https://asciinema.org/a/Ff5jsDeTsZulPfxuc8WIgRQzK.svg" width="1000" height="400" /></a>





  

