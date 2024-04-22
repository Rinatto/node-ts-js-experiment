FROM node:21.7.3

# Устанавливаем рабочую директорию в контейнере
WORKDIR /app

# Копируем файлы 'package.json' и 'package-lock.json'
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем остальные файлы проекта
COPY . .

# Собираем приложение
RUN npm run build

# Указываем команду для запуска приложения
CMD ["node", "dist/main.js"]