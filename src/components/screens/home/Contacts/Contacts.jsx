import './Contacts.css'
import React, {useRef, useState} from "react";


const Contacts = () =>  {

      const [activeHandler, setActiveHandler] = useState(null);

  const handleClick = (handlerId) => {
    if (activeHandler === handlerId) {
      // If the same handler is clicked again, close it
      setActiveHandler(null);
    } else {
      // Close the previously active handler (if any)
      if (activeHandler !== null) {
        switch (activeHandler) {
          case 1:
            setIsShown(false);
            break;
          case 2:
            setIsShown_2(false);
            break;
          case 3:
            setIsShown_3(false);
            break;
          case 4:
            setIsShown_4(false);
            break;
          default:
            break;
        }
      }

      // Open the clicked handler
      setActiveHandler(handlerId);
    }
  };

  const [isShown, setIsShown] = useState(false);
  const [isShown_2, setIsShown_2] = useState(false);
  const [isShown_3, setIsShown_3] = useState(false);
  const [isShown_4, setIsShown_4] = useState(false);

  const handleCloseClick = () => {
    setActiveHandler(null); // Закрыть блок
  };



  function openMenu() {
  document.body.classList.add('menu-opened');
}

// При закрытии меню
    function closeMenu() {
    document.body.classList.remove('menu-opened');
}

    return(
        <html>
        <head>
         <title>Контакты</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        </head>
        <body className='body_contacts'>
            <div className='Contacts'>
                    <a className='contacts_ss' href="/">
                        <img className='logo-supply_new' src="/public/logo%20mini.png" alt='' />
                    </a>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <div className={`supply_header ${activeHandler === 4 ? 'bgc_opacity' : ''}`}>
            <a href="/">
            </a>
           <div className={`Header_menu_icon_c ${activeHandler === 4 ? 'menu_opacity' : ''}`} onClick={() => handleClick(4)}>
                    <div>
                        <p className='Header_menu_icon_1'></p>
                        <p className='Header_menu_icon_2'></p>
                        <p className='Header_menu_icon_3'></p>
                        <p className='Header_menu_icon_4'></p>
                        <p className='Header_menu_icon_5'></p>
                        <p className='Header_menu_icon_6'></p>
                    </div>
                </div>
                {activeHandler === 4 && (
                    <div className='Header_menu_activate'>
                            <div className="scaled-iframe-container">
                                <iframe src="http://pixelwebdesign.ru" frameBorder="0"></iframe>
                            </div>
                        <div className='Header_menu_activate_text_blok'>
                            <p className='Header_menu_activate_text_blok_nav'>Навигация по главной странице</p>
                            <a href='/#page' onClick={handleCloseClick}>Главная страница</a>
                            <a href='/#page1' onClick={handleCloseClick}>Мы работаем на пересечии</a>
                            <a href='/#page2' onClick={handleCloseClick}>В чем залог нашего успеха?</a>
                            <a href='/#page3' onClick={handleCloseClick}>Наши партнеры</a>
                                <p className='Header_menu_activate_text_blok_nav_2'>Другие страницы</p>
                            <a className='Header_menu_activate_text_blok_nav_usl' href='/project' onClick={handleCloseClick}>Услуги</a>
                            <a className='Header_menu_activate_text_blok_nav_con' href='/contacts' onClick={handleCloseClick}>Контакты</a>
                        </div>
                    </div>
                    )}
            <h1 className='Contacts_title'>Контакты</h1>
              <div className='Contacts_info_glav'>
              <p className='Contacts_info'>350012</p>
              <p className='Contacts_info'>Краснодарский край</p>
              <p className='Contacts_info'>г. Краснодар</p>
              <p className='Contacts_info'>ул. Заполярная 37 к4</p>
              <p className='Contacts_info'>+ 7 (918) 073<span className='dop_1_span'>-</span>94<span className='dop_1_span'>-</span>14</p>
                  <p className='Contacts_info'>+ 7 (918) 331<span className='dop_1_span'>-</span>25<span className='dop_1_span'>-</span>57</p>
              <p className='Contacts_info'>mail@partner-krd.ru</p>
              <p className='Contacts_info'>ИНН - 2308260213</p>
                  <iframe className='Contacts_card' src="https://yandex.ru/map-widget/v1/?um=constructor%3Ac3618170045ccfe1e04e54057366cabe927f9f429a5e0fa99d736f8bc57ca348&amp;source=constructor" frameBorder="0"></iframe>
              </div>
          </div>
    </div>
        </body>
        </html>
    );
}

export default Contacts