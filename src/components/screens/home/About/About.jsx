import './About.css'
import React, {useEffect, useRef, useState} from "react";


const About = () =>  {

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

  const [buttonText, setButtonText] = useState('1/2');

  const buttomClick = () => {
    setButtonText(prevText => prevText === '1/2' ? '2/2' : '1/2');
  };


    return(
        <html>
        <head>
         <title>Услуги</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        </head>
        <body className='About_b'>
        <div className='About'>
            <a className='contacts_ss' href="/">
                        <img className='logo-supply_new' src="/public/logo%20mini.png" alt='' />
                    </a>
             <div className={`Header_menu_icon_p ${activeHandler === 4 ? 'menu_opacity' : ''}`} onClick={() => handleClick(4)}>
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
                                <iframe src="http://www.pixelwebdesign.ru/project" frameBorder="0"></iframe>
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
            <div className='about_spec'>
                <p className='about_spec_title'>Выполненные работы</p>
                <div className='about_rab'>
                    <p className='about_rab_title'>Сайт Организации "ПАРТНЕР"</p>
                    <div className="about_scaled-iframe-container">
                        <iframe src="http://www.partner-tech.ru" frameBorder="0"></iframe>
                    </div>
                    <p className='about_rab_text'>Данный сайт до сих пор находится в процессе разработки, вот реальный отзыв генерального директора компании "ПАРТНЕР" - </p>
                    <img className='about_rab_otz_img' src='/public/5star.png'/>
                    <p className='about_rab_otz'>Клоконосс Александр</p>
                    <p className='about_rab_otziv'>"Я просто поражен тем, как вы работаете над созданием нашего сайта! Несмотря на то, что проект все еще в процессе разработки, уже сейчас виден ваш высокий профессионализм и внимание к деталям. Ваша команда не только воплощает наши идеи в жизнь, но и предлагает креативные решения, которые делают сайт еще лучше. Мы особенно впечатлены тем, как вы умело сочетаете дизайн и функциональность, делая интерфейс интуитивно понятным и привлекательным. Это важно для нас, так как мы стремимся предоставить нашим клиентам наилучший пользовательский опыт. Огромное спасибо за вашу тяжелую работу и творческий подход. Мы с нетерпением ждем запуска сайта и уверены, что он превзойдет все наши ожидания!"</p>
                </div>
            </div>
        </div>
        </body>
        </html>
    );
}

export default About