Selams ? 👋

Paylaştığım bu altyapı sunucuya özel olmaktadır, eğer ilgi görürse çok daha gelişmişini paylaşacağım. 
Kodların içinde teker teker yazdım açıklamalarını, eğer bir sorun olursa veya hata alırsanız => Discord: Vitraxdev ⌔#0666
Bana ulaşabilirsiniz!

1 • Eğer hatanız; Cannot find module 'blabla' şeklindeyse modül kurmanız gerekmektedir. Modül kurmak için konsolu açıp npm i blabla yazınız. Glitch kullanıyorsanız basit kurulum yolu; 1 • Package.json'a girin. 2 • Yukarıdan Add Package basın. 3 • İnmesi gereken paket ismini yazın ve çıkana basın. başarılı!

2 • Eğer hatanız; ayarlar is not defined: şeklindeyse hatayı aldığınız komutun en üstüne alttaki kodu girmeniz gerekli: const ayarlar = require('../ayarlar.json') yazın, sorun çözülecektir.

3 • Eğer hatanız; SyntaxError: Unexpected token }; Tarzında bir hata alıyorsanız, açıp kapatmadığınız veya kapatıp açmadığın bir paranteziniz vardır demek. Çözmek için hata oluşmadan önce en son eklediğiniz komuta bi' göz gezdirmek. Sorunu bulduğunuz zaman parantezleri düzelttiğinizde sorunda ortadan kalkar.

4 • Eğer hatanız; (node:6660) UnhandlePromiseRejectionWarning: Error: Incorrect login details were provided. Tarzında ki bir token hatasında yapmanız gereken tek şey, https://discord.com/developers/applications sayfasına girip botunuza giriş yapmak, tokeninizi oradan kopyalayıp projenizde ki token gerektiren yere doğru bir şekilde "" içinde yapıştırın.

5 • Eğer hatanız; fields.flat is not a function İse Node versiyonunuzu 12x yapın.

6 • Eğer Hatanız; (node:223) UnhandledPromiseRejectionWarning: TypeError: Cannot read property 'id' of null Şeklindeyse if (!message.guild) return; Komutun Başına Yazarak Çözebilirsiniz

7 • Eğer Hatanız; TypeError: Cannot read property 'send' of undefined Şeklindeyse Bot mesajı atacak bir kanalı bulamayınca yukarıda ki hatayı verir. Log kısmına bakıp hangi komutta hangi kanalın ayarlı olmadığını kontrol edin.

8 • Eğer Hatanız; maxListeners Hatanız da yukarıda ki gibi maxListeners geçiyor ise main dosyanızın bir bölümüne client.setMaxListeners(30) yazın. Sorun çözülecektir, çözülmez ise fazla client.on eventlerini silin.

9 • Eğer Hatanız; DeprecationWarning:TextChannel#sendEmbed: use TextChannel#send instead Bu uyarıyı verdiği zaman <channel>.sendEmbed eventini <channel>.send yapmanız gerekir

10 • Eğer Böyle Bir Yazı Alıyorsanız; DeprecationWarning: Collection#find: pass a function instead Bu bir hata değil uyarıdır yapmanız gereken; <collection>.find('name', 'isim') Kodlarını <collection>.find(x => x.name == 'name') Şeklinde kullanırsanız sorun düzelecektir (Örnektir.)

11 • Eğer Hatanız; UnhandledPromiseRejectionWarning: DiscordAPIError: Missing Permissions Bu şekilde bir hata alıyorsanız bota uygulatmaya çalıştırdığınız işleme botun yetkisi yetmiyordur vereceğim kodu main dosyanıza atarak sorunu çözebilirsiniz.

12 • Eğer Hatanız; Something took to long to do Bu hatanın nedeni: Bir gün içerisinde 1000 defa botunuz tokene bağlantı kurduğu halinde veya Glitch, Heroku vb. sitelerde kullanıyorsanız bazenleri bu sitelerde 'tokeni kötüye kullanan' IP Ban yiyor ve çoğu proje remixleseniz dahi token ban yiyor. Çözümü: 1-2 gün civarı bu böyle devam edebilir. İP Ban yemiş projeyi bulmanız gerek bu projeyi bulduğunuzda remixleyin hatanız düzelir.

İyi Kullanımlar!
