import React, {  } from 'react';
import './Cleaning.scss';

interface IProps {}

const Cleaning: React.FC<IProps> = props => {
  return (
    <div className="cleaning">
      <h1 className="font-40 primary-color u-paddingBs u-paddingTx">Temizlik</h1>
      <p>
        Tüm kumaşların ilk günki gibi gözükmesini sağlamanın kanıtlanmış en güzel yolu her ay temiz bir su ile hortumlu
        yıkama yapmaktır. Bu sayede kir kumaşın derinliklerine işlemez. Bu sayede ağır kimyasallar kullanmadan önleyici bir
        temizlik yapmış olursunuz. Özellikle egzos dumanının yoğun olarak bulunduğu yerler ile termik santral yakınları gibi
        aşırı kirli ve yağlı bölgelerde yılda en az 3 defa derinlemesine temizlik yapılması önerilir.
      </p>

      <p>
        Hortumla yıkamanın sorunları çözmediği anlarda tentenizi çıkarmanız gerekebilir. Böylece tıpkı halı yıkar gibi fırça
        ile işe girişebilirsiniz. Eğer bu mümkün değilse bir merdiven,uzunca bir sopa ve fırçanızı hazırlayın.
      </p>
      <div className="columns is-desktop">
        <div className="column is-three-fifths">
          <h2 className="font-40 primary-color u-paddingBs u-paddingTx">Hafif Temizlik</h2>
          <ul>
            <li>
              Gevşek tozları sıkıştıkları yerden çıkarmak adına fırçayla iyice temizleyin. Bunu tenteniz kuruyken yapmanız
              önerilir.
            </li>
            <li>Hortumla her noktayı ıslatın.</li>
            <li>
              Profosyonel ürünlere ihtiyacınız yok,çok fazla köpürmeyecek şekilde arap sabunu ve ya bulaşık deterjanı ile
              suyu bir kovada karıştırarak temizlik solüsyonunu hazırlayın.
            </li>
            <li>
              Temizlik solüsyonunu iyice kumaşa yedirin. Bu adımda araba fırçası ile toz ve kiri saklandığı yerden çıkarın.
            </li>
            <li>Bol su ile hiç deterjan/sabun kalmayacak şekilde tente/şemsiye kumaşını temizleyin.</li>
            <li>Hava alacak şekilde bekletip iyice kurutun.</li>
          </ul>

          <p className="u-paddingVx">
            Bazı inatçı lekeler kalıyorsa, iyice seyreltimiş güçlü ağartıcı/sabun formülü denemeniz gerekebilir. Özellikle
            yağmur suyu akış bölgeleri, pas lekeleri gibi noktalar için yağ çözücü kullanmanız işinize yarayabilir.
            Ağartıcıyı yanlış oranda karıştırırsanız bölgesel renk atmaları olabilir, yaptığınız şeyden emin değilseniz bir
            profosyonelden yardım almanız önerilir.
          </p>

          <div className="columns">
            <div className="column is-one-fifth">
              <hr className="line" />
            </div>
            <div className="column">
              <span className="font-15 thin-font font-primary-color">Zorlu Lekeler, Zorlu Süreç</span>
            </div>
          </div>

          <h2 className="font-40 primary-color u-paddingBs u-paddingTx">İnatçı Lekeler İçin Ağır Temizlik</h2>

          <p className="u-paddingVx">
            Kaliteli ve ithal kumaşlarımızı tercih ettiğiniz sürece küf problemi yaşamassınız ancak bazı nemli bölgelerde
            yine de bu tür durumlar gözükebilir. Küf ve diğer inatçı lekeler için aşağıdakileri adımları takip etmeniz
            önerilir.
          </p>

          <ul>
            <li>8 litre temiz su hazırlayın. İçine 2 kap ağartıcı, çeyrek kapak arap sabunu ile bir karışım hazırlayın.</li>
            <li>
              Karışımı kumaşa eşit olarak dağıtın, 15 dakika kadar bekleyin. Belirli bölgede çok fazla fırçalama yapmak renk
              atmasına sebep olabilir. Dikkatli olun.
            </li>
            <li>Yumuşak kıl içeren bir fırça yardımıyla iyice fırçalayın.</li>
            <li>Bol su ile iyice durulayın.</li>
            <li>Leke çıkmamışsa aynı işlemleri tekrarlayın.</li>
          </ul>

          <p className="u-paddingVx">
            Ağartıcı kullanmışsanız , kumaş koruma sıvısı ile yeniden bakım işlemi yapmanız gerekebilir. Bu sayede
            kumaşınızın su ve leke önleme katmanını kaybetmemiş olursunuz. Ağartıcıyı yanlış oranda karıştırırsanız bölgesel
            renk atmaları olabilir, yaptığınız şeyden emin değilseniz bir profosyonelden yardım almanız önerilir.
          </p>

          <h2 className="font-40 primary-color u-paddingBs u-paddingTx">Yeniden Bakım İşlemi</h2>

          <ol>
            <li>Hafif temizlik ve ya Ağır temizlik yöntemlerinden birini kullanarak temizlik işlemini bitirin.</li>
            <li>Havalandırarak kumaşınızı iyice kurutun.</li>
            <li>TEX'AKTIV GUARD ürünü ile birlikte yeniden kumaş koruma işlemini gerçekleştirin.</li>
          </ol>

          <h2 className="font-40 primary-color u-paddingBs u-paddingTx">Profosyonel Tente Temizleyiciler</h2>
          <p className="u-paddingVx">
            Pek çok büyük şehirde bu işi profosyonel olarak yapanlar var. İnternette bir arama yapmanız yakınlarda bu işi
            yapan birileri olup olmadığı konusunda belki size yardımcı olur.
          </p>
        </div>
        <div>
          <div className="column">
            <div className="second-info">
              <h1 className="font-20 u-paddingBs u-paddingTx">Öneriler</h1>
              <p className="u-paddingTm">
                Ağartıcı kullanmak tüm lekeler için harika bir çözüm olsa da çok dikkatli kullanılmalıdır.
              </p>

              <p className="u-paddingTm">Bol su ile durulama yaparak kumaşta ağartıcı bırakmayın.</p>

              <p className="u-paddingTm">Yalnızca havalandırma metodu ile kurutma yapmalısınız.</p>

              <p className="u-paddingTm">
                Yıllarca kullanılmış bir kumaşsa fırça darbelerinizin dikiş iplerine  ve bağlantı
                noktalarını zedelememesine dikkat etmelisiniz.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cleaning;
