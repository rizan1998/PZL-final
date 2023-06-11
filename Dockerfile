# Menggunakan node versi terbaru sebagai base image
FROM node:latest

# Menentukan direktori kerja dalam container
WORKDIR /app

# Menyalin package.json dan package-lock.json ke dalam container
COPY package*.json ./

# Menjalankan perintah npm install untuk menginstal dependensi aplikasi
RUN npm install

# Menyalin seluruh sumber kode aplikasi ke dalam container
COPY . .

# Menentukan port yang akan digunakan oleh aplikasi
EXPOSE 3000

# Menjalankan perintah untuk menjalankan aplikasi
CMD ["npm", "start"]