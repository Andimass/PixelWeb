import './Project.css'
import React, {useEffect, useRef, useState} from "react";


const Project = () =>  {

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
        <body className='project_b'>
        <div className='Project'>
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
                                <iframe src="http://localhost/project" frameBorder="0"></iframe>
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
            <div className='project_spec'>
                <p className='project_spec_title'>Мы специализируемся<span>На следующих услугах</span></p>
                <div className='project_spec_1'>
                    <img className='project_spec_1_img_1' src='/public/raz1.png'/>
                    <img className='project_spec_1_img_2' src='/public/raz2.png'/>
                    <p className='project_spec_1_1'>Разработка сайтов под ключ</p>
                   {buttonText === '1/2' && (
                    <p className='project_spec_1_2' onClick={buttomClick}>Мы предлагаем полный спектр услуг по созданию сайтов, начиная от первоначального концепта и заканчивая запуском работающего продукта. Наша команда профессионалов глубоко погружается в каждый проект, чтобы понять уникальные потребности и цели вашего бизнеса.</p>
                  )}
                  {buttonText === '2/2' && (
                    <p className='project_spec_1_3' onClick={buttomClick}>Наша цель - не просто разработать сайт, а создать мощный онлайн-инструмент, который будет усиливать ваш бренд, привлекать целевую аудиторию и способствовать росту вашего бизнеса.</p>
                  )}
                    <button className='project_spec_1_buttom' onClick={buttomClick}>{buttonText}</button>
                    <div className='project_spec_1_bgc'></div>
                </div>
                <div className='project_spec_2'>
                    <p className='project_spec_2_2'>Администрирование и сопровождение</p>
                    <p className='project_spec_2_3'>Мы предлагаем круглосуточную поддержку, мониторинг серверов и безопасности, что позволяет вам сосредоточиться на развитии бизнеса. Наша услуга включает в себя регулярные бэкапы, обновления ПО и оптимизацию работы сайта, чтобы ваш онлайн-ресурс всегда был доступен и работал эффективно.</p>
                    <div className='project_spec_2_bgc'></div>
                    <img className='project_spec_2_img_2' src='/public/admin.png'/>
                    <img className='project_spec_2_img_1' src='/public/admin2.png'/>
                </div>
                <div className='project_spec_3'>
                    <p className='project_spec_3_3'>Обновление ваших действующих сайтов</p>
                    <p className='project_spec_3_4'>Мы регулярно анализируем и внедряем новейшие технологии и тренды дизайна, чтобы ваш сайт оставался актуальным, привлекательным и функциональным. Наша услуга также включает обновление контента и SEO-оптимизацию, что способствует повышению видимости сайта в поисковых системах и привлечению новых посетителей.</p>
                    <div className='project_spec_3_bgc'></div>
                    <img className='project_spec_3_img_1' src='/public/obn1.png'/>
                    <img className='project_spec_3_img_2' src='/public/obn2.png'/>
                </div>
                <div className='project_spec_4'>
                    <p className='project_spec_4_4'>SEO - продвижение</p>
                    <p className='project_spec_4_5'>SEO-продвижение - это комплексная услуга, направленная на улучшение видимости вашего сайта в поисковых системах. Мы применяем передовые методики оптимизации, включая анализ ключевых слов и повышение качества контента, чтобы ваш сайт отвечал самым актуальным требованиям поисковых систем. </p>
                    <div className='project_spec_4_bgc'></div>
                    <img className='project_spec_4_img_1' src='/public/seo1.png'/>
                    <img className='project_spec_4_img_2' src='/public/seo2.png'/>
                </div>
            </div>
        </div>
        </body>
        </html>
    );
}

export default Project