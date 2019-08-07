import React, { useState } from 'react';
import './Form.scss';
import { toast } from 'react-toastify';
import axios from 'axios';

interface IProps {}

const Form: React.FC<IProps> = props => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [message, setMessage] = useState('');
  const [isSended, setIsSended] = useState(false);

  const sendMessage = () => {
    if (!(email.length > 5 || telephone.length > 5)) {
      toast('Mail ya da telefon girmemişseniz size ulaşamayız ki :(');
      return;
    }

    setIsSended(true);

    axios
      .post('api/send_mail', {
        name,
        email,
        telephone,
        message,
      },{
        headers : {
          Authorization : 'Basic xk5PJxQRpAM75qpEtuNT'
        }
      })
      .then(res => {})
      .catch(e => {
        setIsSended(false);
        toast('Mail yollanamadı tekrar deneyin :(');
      });
  };

  return (
    <div id="form-container">
      <div className="font-40 primary-color u-paddingBs u-paddingLx u-paddingTx">İletişim</div>
      <div className="form-inside">
        <div className="lefter" />
        <div className="righter" />

      </div>

      {isSended && (
        <div className="font-24 contact-success bold-font">Mesajınız alınmıştır. En kısa sürede dönüş yapacağız.</div>
      )}

      {!isSended && (
        <div className="contact-input">
          <div className="item-name">
            <label className="field a-field a-field_a1 page__field">
              <input
                value={name}
                onChange={evt => setName(evt.target.value)}
                className="field__input a-field__input"
                placeholder="e.g. Hasan Düzbasan"
                required
              />
              <span className="a-field__label-wrap">
                <span className="a-field__label">Ad Soyad</span>
              </span>
            </label>
          </div>
          <div className="item-email">
            <label className="field a-field a-field_a2 page__field">
              <input
                value={telephone}
                onChange={evt => setTelephone(evt.target.value)}
                className="field__input a-field__input"
                type="email"
                placeholder="mail_adresin@gmail.com"
                required
              />
              <span className="a-field__label-wrap">
                <span className="a-field__label">Email</span>
              </span>
            </label>
          </div>

          <div className="item-email">
            <label className="field a-field a-field_a2 page__field">
              <input
                value={email}
                onChange={evt => setEmail(evt.target.value)}
                className="field__input a-field__input"
                type="text"
                placeholder="e.g. 543 111 00 12"
                required
              />
              <span className="a-field__label-wrap">
                <span className="a-field__label">Telefon Numaranız</span>
              </span>
            </label>
          </div>

          <div className="item-message">
            <label className="field a-field a-field_a2 page__field">
              <textarea
                onChange={evt => setMessage(evt.target.value)}
                value={message}
                className="field__input a-field__input"
                rows={8}
                placeholder="Talebinizi bildirebilirsiniz, telefon numarası yazmanız şiddetle önerilir."
                required
              />
              <span className="a-field__label-wrap">
                <span className="a-field__label">Mesajınız</span>
              </span>
            </label>
          </div>

          <button
            onClick={() => sendMessage()}
            className="button is-medium primary-color button-text semibold-font"
          >
            &nbsp;&nbsp;&nbsp;Gönder&nbsp;&nbsp;&nbsp;
          </button>
        </div>
      )}
    </div>
  );
};

export default Form;
