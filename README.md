# API Waktu Sholat Indonesia (2025 - 2026)

API ini menyediakan informasi waktu sholat dan imsak untuk berbagai kota di Indonesia. API ini menggunakan data dari Kementerian Agama Republik Indonesia.
API ini juga menyediakan informasi tentang provinsi dan kota di Indonesia.

## Endpoints

### `/province`

Mengembalikan daftar provinsi dan kota.

Contoh: [`/province`](https://waktu-sholat-huso.vercel.app//province)

### `/province/{province.id}`

Mengembalikan provinsi dan daftar kota.

Contoh: [`/province/623170da0c9712e86967f918`](https://waktu-sholat-huso.vercel.app//province/623170da0c9712e86967f918)

### `/province/{province.id}/city`

Mengembalikan daftar kota untuk provinsi tertentu.

Contoh: [`/province/623170da0c9712e86967f918/city`](https://waktu-sholat-huso.vercel.app//province/623170da0c9712e86967f918/city)

### `/province/{province.id}/city/{city.id}`

Mengembalikan kota spesifik.

Contoh: [`/province/623170da0c9712e86967f918/city/623174648c0926930463d0a6`](https://waktu-sholat-huso.vercel.app//province/623170da0c9712e86967f918/city/623174648c0926930463d0a6)

### `/location?latitude={latitude}&longitude={longitude}`

Mengembalikan kota spesifik.

Contoh: [`/location?latitude=-6.310433333333333&longitude=107.2922944444444`](https://waktu-sholat-huso.vercel.app//location?latitude=-6.310433333333333&longitude=107.2922944444444)

### `/prayer?latitude={latitude}&longitude={longitude}`

Mengembalikan waktu sholat & imsak sesuai dengan kota terdekat berdasarkan koordinat, default Kota Jakarta. |

Contoh: [`/prayer?latitude=-6.310433333333333&longitude=107.2922944444444`](https://waktu-sholat-huso.vercel.app//prayer?latitude=-6.310433333333333&longitude=107.2922944444444)

## Sumber Data

Kemenag

## Catatan

Proyek ini awalnya merupakan hasil pengembangan dari Waktu Sholat yang dibuat oleh R.M. Reza. Saya mengembangkan ulang proyek ini untuk kebutuhan pribadi/proyek internal/eksperimen belajar, dan akan menambahkan berbagai fitur serta perbaikan ke depannya.

Hak cipta dan lisensi tetap milik pemilik aslinya. Jika Anda adalah pemilik asli dan ingin saya mencantumkan sesuatu secara spesifik, silakan hubungi saya.

Proyek asli: [`Waktu Sholat`](https://github.com/renomureza/waktu-sholat.git)

## Lisensi

MIT License

Copyright (c) 2025 Maftuh Ichsan

Permission is hereby granted, free of charge, to any person obtaining a copy  
of this software and associated documentation files (the "Software"), to deal  
in the Software without restriction, including without limitation the rights  
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell  
copies of the Software, and to permit persons to whom the Software is  
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all  
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR  
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,  
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE  
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER  
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,  
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE  
SOFTWARE.