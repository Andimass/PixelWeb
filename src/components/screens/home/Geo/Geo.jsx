import './Geo.css'
import React, {useRef, useState} from "react";

const Geo = () =>  {

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
          case 5:
            setIsShown_5(false);
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
  const [isShown_5, setIsShown_5] = useState(false);
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


  return (
      <html>
      <head>
         <title>Геодезические изыскания</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
      </head>
      <body>
    <div className={'Power_Supply'}>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <a className='geo_bgc'/>
      <div className={`supply_header ${activeHandler === 4 ? 'bgc_opacity' : ''}`}>
        <a href="/">
            <img className='logo-supply' src="/public/logo.png" alt='' />
        </a>
        <input className={`menu_supply ${activeHandler === 4 ? 'menu_opacity' : ''}`} type="image" src='/public/Menu-img-white.png' onClick={() => handleClick(4)} alt=''/>
        {activeHandler === 4 && (
            <div className='menu_supply_activate'>
                <p className='menu_supply_activate_close' onClick={handleCloseClick}>Закрыть</p>
                <div className='menu_opacity_bgc'></div>
                <div className='menu_supply_activate_LI'>
                    <li className='menu_supply_activate_li'><a href="/">Главная</a></li>
                    <li className='menu_supply_activate_li'><a href="/project">Проекты</a></li>
                    <li className='menu_supply_activate_li'><a href="/about">О кампании</a></li>
                    <li className='menu_supply_activate_li'><a href="/contacts">Контакты</a></li>
                    <li className='menu_supply_activate_li_callback'><a href='/callback'>Связаться с нами</a></li>
                </div>
                <p className='menu_supply_activate_city'>г.Краснодар</p>
                <p className='menu_supply_activate_number'>+7 (918) 495-34-20</p>
            </div>
        )}
      </div>
       <div className='supply_body'>
           <h2 className="supply_title">Геодезические изыскания</h2>
               
           
           
           
           
               <svg width="0" height="0">
            <filter
            id="ambilight"
            width="300%"
            height="300%"
            x="-0.75"
            y="-0.75"
            colorInterpolationFilters="sRGB"
            >
            <feOffset in="SourceGraphic" result="source-copy" />
            <feColorMatrix
                in="source-copy"
                type="saturate"
                values="1"
                result="saturated-copy"
            />
            <feColorMatrix
                in="saturated-copy"
                type="matrix"
                values="1 0 0 0 0
                        0 1 0 0 0
                        0 0 1 0 0
                        33 33 33 101 -100"
                result="bright-colors"
            />
            <feMorphology
                in="bright-colors"
                operator="dilate"
                radius="1"
                result="spread"
            />
            <feGaussianBlur
                in="spread"
                stdDeviation="15"
                result="ambilight-light"
            />
            <feOffset in="SourceGraphic" result="source" />
            <feComposite in="source" in2="ambilight-light" operator="over" />
            </filter>
            </svg>
           
           
           
           
           <div className='geo_uslugi'>
                <div className={`geo_body_uslugi_box1 ${activeHandler === 1 ? 'blue-background' : ''}`}>
                    <h2 className='geo_body_uslugi_box_title_1'>Ситуационный план</h2>
                    <img className='geo_body_box1_image' src='/public/box1.jpg'/>
                    <p className='geo_body_price'>от 10.000 руб.</p>
                    <p className='geo_body_text'>Разработка ситуационного плана для подачи заявок на газификацию и энергоснабжение</p>
                    <input className={`geo_body_uslugi_box_strela1 ${activeHandler === 1 ? 'strela-digris': ''}`} type="image" onClick={() => handleClick(1)} alt=''/>
                    {activeHandler === 1 && (
                    <div className='dop_1'>


                    </div>
                  )}
                </div>


               <div className={`geo_body_uslugi_box2 ${activeHandler === 2 ? 'blue-background' : '' }`}>
                    <h2 className='geo_body_uslugi_box_title_2'>Вынос границ земельного участка в натуру</h2>
                    <img className='geo_body_box2_image' src='/public/box2.jpg'/>
                    <p className='geo_body_price2'>от 10.000 руб.</p>
                    <p className='geo_body_text2'>Маркировка и определение физических границ участка на местности для его использования и оформления собственности</p>
                    <input className={`geo_body_uslugi_box_strela2 ${activeHandler === 2 ? 'strela-digris' : ''}`} type="image" onClick={() => handleClick(2)} alt=''/>
                    {activeHandler === 2 && (
                    <div className='dop_2'>


                    </div>
                  )}
                </div>


               <div className={`geo_body_uslugi_box3 ${activeHandler === 3 ? 'blue-background' : ''}`}>
                   <h2 className='geo_body_uslugi_box_title_3'>Топографическая съемка и топоплан</h2>
                   <img className='geo_body_box3_image' src='/public/box3.png'/>
                   <p className='geo_body_price3'>от 10.000 руб.</p>
                    <p className='geo_body_text3'>Создание подробной картографической информации о местности для инженерных и строительных проектов</p>
                    <input className={`geo_body_uslugi_box_strela3 ${activeHandler === 3 ? 'strela-digris' : ''}`} type="image" onClick={() => handleClick(3)} alt=''/>
                    {activeHandler === 3 && (
                    <div className='dop_3'>


                    </div>
                  )}
                </div>

               <div className={`geo_body_uslugi_box4 ${activeHandler === 5 ? 'blue-background' : ''}`}>
                   <h2 className='geo_body_uslugi_box_title_4'>Геодезические изыскания</h2>
                   <img className='geo_body_box4_image' src='/public/box4.jpg'/>
                   <p className='geo_body_price4'>от 10.000 руб.</p>
                    <p className='geo_body_text4'>Сбор точных геодезических данных и измерений для подготовки к инженерным и строительным проектам</p>
                    <input className={`geo_body_uslugi_box_strela3 ${activeHandler === 5 ? 'strela-digris' : ''}`} type="image" onClick={() => handleClick(5)} alt=''/>
                    {activeHandler === 5 && (
                    <div className='dop_4'>


                    </div>
                  )}
                </div>

               <div className={`geo_body_uslugi_box5 ${activeHandler === 6 ? 'blue-background' : ''}`}>
                   <h2 className='geo_body_uslugi_box_title_5'>Камерально геодезические работы</h2>
                   <img className='geo_body_box5_image' src='/public/geo_camer.jpg'/>
                   <p className='geo_body_price5'>от 10.000 руб.</p>
                    <p className='geo_body_text5'>Анализ и обработка данных с целью создания точных карт и планов для строительства и проектирования.</p>
                    <input className={`geo_body_uslugi_box_strela3 ${activeHandler === 6 ? 'strela-digris' : ''}`} type="image" onClick={() => handleClick(6)} alt=''/>
                    {activeHandler === 6 && (
                    <div className='dop_5'>


                    </div>
                  )}
                </div>

               <div className={`geo_body_uslugi_box6 ${activeHandler === 7 ? 'blue-background' : ''}`}>
                   <h2 className='geo_body_uslugi_box_title_6'>Координирование реперов</h2>
                   <img className='geo_body_box6_image' src='/public/geo_rap.jpg'/>
                   <p className='geo_body_price6'>от 10.000 руб.</p>
                    <p className='geo_body_text6'>Определение точных географических координат и высотных отметок опорных точек, необходимых для геодезических и строительных работ</p>
                    <input className={`geo_body_uslugi_box_strela3 ${activeHandler === 7 ? 'strela-digris' : ''}`} type="image" onClick={() => handleClick(7)} alt=''/>
                    {activeHandler === 7 && (
                    <div className='dop_6'>


                    </div>
                  )}
                </div>

                              <div className={`geo_body_uslugi_box7 ${activeHandler === 7 ? 'blue-background' : ''}`}>
                   <h2 className='geo_body_uslugi_box_title_7'>Сопровождение линейных объектов</h2>
                   <img className='geo_body_box7_image' src='/public/geo_sopr.jpg'/>
                   <p className='geo_body_price7'>от 10.000 руб.</p>
                    <p className='geo_body_text7'>Измерение и контрольные работы для обеспечения точности и надежности линейных инженерных систем и коммуникаций</p>
                    <input className={`geo_body_uslugi_box_strela3 ${activeHandler === 7 ? 'strela-digris' : ''}`} type="image" onClick={() => handleClick(7)} alt=''/>
                    {activeHandler === 7 && (
                    <div className='dop_6'>


                    </div>
                  )}
                </div>

                              <div className={`geo_body_uslugi_box8 ${activeHandler === 7 ? 'blue-background' : ''}`}>
                   <h2 className='geo_body_uslugi_box_title_8'>Расчет объема грунта</h2>
                   <img className='geo_body_box8_image' src='/public/v_grunt.jpg'/>
                   <p className='geo_body_price8'>от 10.000 руб.</p>
                    <p className='geo_body_text8'>Определение объема земельных масс при проведении строительных и инженерных работ</p>
                    <input className={`geo_body_uslugi_box_strela3 ${activeHandler === 7 ? 'strela-digris' : ''}`} type="image" onClick={() => handleClick(7)} alt=''/>
                    {activeHandler === 7 && (
                    <div className='dop_6'>


                    </div>
                  )}
                </div>
               <div className={`supply_footer ${activeHandler === 1 ? 'footer-shot_1' : '' || activeHandler === 2 ? 'footer-shot_2' : '' || activeHandler === 3 ? 'footer-shot_3' : '' }`}>
                   <img className='supply_footer_logo' src='/public/logo2.png' alt=''/>
                   <img className='supply_footer_logo2' src='/public/Group 4.png' alt=''/>
                   <div className='supply_footer_s'>
                   <li className='supply_footer_source'><a>Главная</a></li>
                   <li className='supply_footer_source'><a>Проекты</a></li>
                   <li className='supply_footer_source'><a>О кампании</a></li>
                   <li className='supply_footer_source'><a>Контакты</a></li>
                   <li className='supply_footer_callback'><a>Связаться с нами</a></li>
                   <div className='supply_black_line'></div>
               </div>
           </div>
          </div>
       </div>
    </div>
      </body>
      </html>
  );
}

export default Geo