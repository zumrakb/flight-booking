# Flight-Reservation-App

## 🚀 Kullanılan Teknolojiler

Bu projede MERN (MongoDB, Express.js, React.js, Node.js) teknolojileri kullanılarak Schipol Havalimanına ait API kullanılarak uçuşlar listelenmektedir.
Estetik ve kullanıcı dostu bir arayüz oluşturmak için Tailwind CSS, Ant Design, Material UI, Day.js, FontAwesome ve SweetAlert kullanılmıştır.
IATA ve Airlines kodlarına yönelik format işlemleri için çeşitli JSON türü dış kaynaklardan yararlanılmıştır. API'nin düzgün çalıştığını test etmek için Postman kullanılmıştır.


## 🚀 Proje Açıklaması

Uygulama içerisinde uçuşlar API'nin sunduğu IATA Kodlarıyla server tarafından yapılan istek sonucunda tarih ve hareket yönüne göre filtrelenebilmektedir. Filtrelenen bu uçuşlar aynı zamanda uçuşların destinations kodlarına göre listelenmektedir. Listelenen uçuşların havaalanlarına yönelik IATA kodları dönüştürülerek havaalanlarının ismiyle uçuş kartı bileşenine eklenmiştir. Uçuş kartında, ilgili uçuşa yönelik kalkış, iniş, uçuş süresi, hava yolu şirketi, havaalanının IATA kodu, yer almaktadır. İlgili uçuşa yönelik detaylar da görüntülenmektedir. Uçuşlara yönelik ek filtreleme seçeneklerinde, hava yolu şirketlerine göre filtreleme işlevi bulunmaktadır. Sayfa içerisinde hareketli iconlar ve loading animasyonları'da bulunmaktadır. İlgili uçuşun Book Flight buttonu uçuşlarım sayfasına yönlendirir ve uçuş veri tabanına yüklenir. Yönlendirilen uçuşlarım sayfasında veri tabanından alınan, kullanıcıya ait tüm uçuşlar listelenir. Kullanıcıya ait listelenen uçuş kartında uçuşa ait bilgiler ve detayları yer almaktadır. Uçuşlar kullanıcının tercihiyle, yapılacak delete işlemi sonucunda veri tabanından silinebilir.

## 🚀 Uygulamayı Deneme

Uygulama içerisinde estetik görünümü sağlamak adına ana sayfaya overflow-hidden özelliği eklenmiştir. Bu alanı small ekran görünümü için kaldırmanız gerekir. Kaldırmak isterseniz pages/HomePage.jsx içerisinde yorum satırıyla çevrelenmiş kod alanını kaldırabilirsiniz. 

Örnek olarak uçuşları listeleyebilmek için tarihlere göre bazı IATA kodları;

#### 08/17/2024
PMI - AMS / ZTH - AMS / LCA - AMS / GRO - AMS / VLC - AMS / LCA - AMS / HER - AMS

#### 08/18/2024
AMS - VCP / LHR - AMS / HER - AMS / LPA - AMS / OLB - AMS / PDL - AMS / VCP - AMS

#### 08/25/2024
PFO - AMS / LHR - AMS / GRO - AMS / HER - AMS / LPA - AMS / OLB - AMS / PDL - AMS


## Resim Galerisi

Aşağıda projede kullanılan 16 resmi görebilirsiniz:

| ![1](images/1.png) | ![2](images/2.png) | ![3](images/3.png) | ![4](images/4.png) |
| ------------------ | ------------------ | ------------------ | ------------------ |
| ![5](images/5.png) | ![6](images/6.png) | ![7](images/7.png) | ![8](images/8.png) |
| ![9](images/9.png) | ![10](images/10.png) | ![11](images/11.png) | ![12](images/12.png) |
| ![13](images/13.png) | ![14](images/14.png) | ![15](images/15.png) | ![16](images/16.png) |

## 🚀 Proje Kurulumu ve Çalıştırma

1. **Projeyi İndirme:**
   - Repositoriyi bilgisayarınıza klonlayın:
     ```bash
     git clone https://github.com/kullanici-adiniz/Flight-Reservation-App.git
     ```
   - Proje dizinine girin:
     ```bash
     cd Flight-Reservation-App
     ```

2. **Client ve Server Kurulumu:**
   - `client` dizinine gidin:
     ```bash
     cd client
     ```
   - Gerekli bağımlılıkları yükleyin:
     ```bash
     npm install
     ```
   - `server` dizinine gidin:
     ```bash
     cd ../server
     ```
   - Gerekli bağımlılıkları yükleyin:
     ```bash
     npm install
     ```

3. **Uygulamayı Başlatma:**
   - **Client** uygulamasını başlatın:
     ```bash
     cd client
     npm start
     ```
     Bu komut, React uygulamanızı geliştirme modunda başlatır ve [http://localhost:3000](http://localhost:3000) adresinde çalışır.

   - **Server** uygulamasını başlatın:
     ```bash
     cd ../server
     node --watch server.js
     ```
     Bu komut, Node.js uygulamanızı başlatır, değişiklikler yapıldığında otomatik olarak yeniden başlatır ve [http://localhost:5001](http://localhost:5001) adresinde çalışır.

---

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
