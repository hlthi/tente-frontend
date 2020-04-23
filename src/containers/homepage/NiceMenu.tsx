import React from 'react';
import './NiceMenu.scss';
import { Link } from 'react-router-dom';
import { useRouter } from '../../hooks/router-hook';

interface IProps {}

const NiceMenu: React.FC<IProps> = props => {
  const x = useRouter();
  return (
    <div className="nice-menu u-flex u-flexCol u-flexJustifyCenter u-flexAlignItemsCenter">
      <button className="button  is-white font-36" onClick={() => x.history.goBack()}>
        X
      </button>
      <Link to="/" className="menu-item">
        Ana Sayfa
      </Link>
      <Link to="/blog" className="menu-item">
        Blog
      </Link>
      <Link to="/kumas/docril" className="menu-item">
         Katalog/Kumaşlar
      </Link>
      <Link to="/temizleme" className="menu-item">
        Nasıl Temizlenmeli
      </Link>
      <Link to="/iletisim" className="menu-item">
        İletişim
      </Link>
      <Link to="/referans" className="menu-item">
        Referans
      </Link>
    </div>
  );
};

export default NiceMenu;
