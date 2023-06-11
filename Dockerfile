# Menggunakan node versi terbaru sebagai base image
FROM node:latest

# Menentukan direktori kerja dalam container
WORKDIR /app

# Menyalin package.json dan package-lock.json ke dalam container
COPY ./app/package*.json /app/

# Update paket dan instal dependensi sistem
RUN apt-get update && apt-get install -y \
    # list paket yang ingin diinstal di sini
    && rm -rf /var/lib/apt/lists/*

# Menjalankan perintah npm install untuk menginstal dependensi aplikasi
RUN npm install
# RUN RUN npm install -g nodemon

# Menyalin seluruh sumber kode aplikasi ke dalam container
COPY ./app/. /app/

# Menentukan port yang akan digunakan oleh aplikasi
# EXPOSE 3300

# Menjalankan perintah untuk menjalankan aplikasi
# CMD ["npm", "start"]
CMD ["npm", "run", "dev"]

# RUN chmod -R 777 .