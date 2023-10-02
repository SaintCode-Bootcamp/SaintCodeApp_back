## 
Тестовый сервер - http://94.198.216.76:3000

API на тестовом сервере - http://94.198.216.76:3000/api

Quick Start по PrismaORM - https://www.prisma.io/docs/getting-started/setup-prisma/add-to-existing-project/mongodb-typescript-mongodb

Схема БД - https://miro.com/app/board/uXjVMvX7JDU=/?share_link_id=301551145164

## Ветки 

- **dev**  - для разработки 
- **dev-deploy** - задеплоено на тестовом сервере
- **main** - код после проверок и ревью реквестов  
- **deploy** - код для деплоя на production 
## Описание таблиц

* **course** - глобальная тема ( к примеру, создание TODO листа)
* **chapter** - разделы глобальной темы (верстка, JavaScript ...). Содержит несколько уровней.
* **chapter_level** - "уровни" разделов. Содержат в себе разный набор упорядоченного контент - лекции, задания.
* **level_content** - "абстрактная сущность" контента. Так как контент в уровне может быть разного типа, а его надо как-то упорядочить
  * **lecture** - тексты теории 
  * **task_abstract** - "абстрактная сущность" заданий, так как задания могут быть разными.
    * **task_input** - задание с полем для ввода
    * **task_choice** - задание на выбор одного или нескольких из списка
    * **task_sorting** - задание на расположение в правильном порядке
    * **task_matching** - задание на поиск соответствия
    * **task_fill_blanks** - задание на заполнение пропусков
* **user** - пользователи
* **user_level_stat** - статистика выполнения заданий 

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```


## Порядок действий для создание endpoint's

1.  Если возможно, использовать ` prisma db pull  ` см. https://www.prisma.io/docs/getting-started/setup-prisma/add-to-existing-project/mongodb/introspection-typescript-mongodb
Или обновлять таблицы вручную в файле `schema.prisma`
3. `npx prisma generate ` - запустит процесс создания базовых файлов
4. создание сервиса и контроллеров - https://www.prisma.io/blog/nestjs-prisma-rest-api-7D056s1BmOL0#create-a-prisma-service
5. создаем ресурсы
```bash

npx nest generate resource

```
 