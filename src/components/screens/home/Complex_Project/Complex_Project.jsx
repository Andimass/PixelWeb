import './Complex_Project.css'
import React, {useEffect, useState, useRef} from "react";

const Complex = () =>  {
    const [activeHandler, setActiveHandler] = useState(0);

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
                    case 6:
                        setIsShown_6(false);
                        break;
                    case 11:
                        setIsShown_11(false);
                        break;
                    default:
                        break;
                }
            }
            const UslugiBlock = () => {
                const [isHovered, setIsHovered] = useState(false);
                const [description, setDescription] = useState('');

                const handleMouseEnter = (desc) => {
                    setDescription(desc);
                    setIsHovered(true);
                };

                const handleMouseLeave = () => {
                    setDescription('');
                    setIsHovered(false);
                };
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
    const [isShown_6, setIsShown_6] = useState(false);
    const [isShown_11, setIsShown_11] = useState(false);

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









  function openMenu() {
  document.body.classList.add('menu-opened');
}

// При закрытии меню
    function closeMenu() {
    document.body.classList.remove('menu-opened');
}

window.addEventListener('scroll', function() {

    let scrollPosition = window.pageYOffset;

    let rotationDegree = scrollPosition / 10;


    document.querySelector('.transportir_1').style.transform = `rotate(${rotationDegree}deg)`;
    document.querySelector('.transportir_2').style.transform = `rotate(${rotationDegree}deg)`;
    // scrollTimeout = setTimeout(function() {
    //
    //     document.querySelector('.transportir_1').style.transition = 'none';
    //     document.querySelector('.transportir_2').style.transition = 'none';
    // }, 150);
});


     window.addEventListener('scroll', function() {
    let scrollPosition = window.scrollY;

    if (scrollPosition >= 0) {
              document.querySelector('.header_black_square').style.backgroundColor = "white";
             document.querySelector('.header_black_square2').style.backgroundColor = "white";
    }

    if (scrollPosition >= 600) {
              document.querySelector('.header_black_square').style.backgroundColor = "#8DB2FB";
             document.querySelector('.header_black_square2').style.backgroundColor = "#8DB2FB";
    }

    if (scrollPosition >= 950) {
              document.querySelector('.header_black_square').style.backgroundColor = "rgba(246, 245, 245)";
             document.querySelector('.header_black_square2').style.backgroundColor = "rgba(246, 245, 245)";
    }

        if (scrollPosition >= 1650) {
              document.querySelector('.header_black_square').style.backgroundColor = "white";
             document.querySelector('.header_black_square2').style.backgroundColor = "white";
    }

            if (scrollPosition >= 2750) {
              document.querySelector('.header_black_square').style.backgroundColor = "rgba(246, 245, 245)";
             document.querySelector('.header_black_square2').style.backgroundColor = "rgba(246, 245, 245)";
    }

                    if (scrollPosition >= 3050) {
              document.querySelector('.header_black_square').style.backgroundColor = "white";
             document.querySelector('.header_black_square2').style.backgroundColor = "white";
    }


             });
return (
      <html>
    <head>
         <title>Газификация</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
    </head>
        <body className='custom-zoom-page_cp'>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <div className='complex'>
            <svg width="0" height="0">
    <filter
        id="ambilight"
        width="300%"
        height="300%"
        x="-0.75"
        y="-0.75"
        colorInterpolationFilters="sRGB"
    >
        <feOffset in="SourceGraphic" result="source-copy"/>
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
        <feOffset in="SourceGraphic" result="source"/>
        <feComposite in="source" in2="ambilight-light" operator="over"/>
    </filter>
</svg>
            <div className='header_header'>
                <a href="/">
                <img className='header_logo' src='/public/logo_new.png'/>
                </a>
                <div className='header_animation_square '>
                    <div className='header_black_square'></div>
                    <div className='header_black_square2'></div>
                        <input className={`header_menu_supply ${activeHandler === 11 ? 'menu_opacity' : ''}`} type="image" src='/public/Menu-img1.png' onClick={() => handleClick(11)} alt=''/>
                         <input className={`header_menu_supply2 ${activeHandler === 11 ? 'menu_opacity' : ''}`} type="image" src='/public/Menu-img2.png' onClick={() => handleClick(11)} alt=''/>
                        <input className={`header_menu_supply3 ${activeHandler === 11 ? 'menu_opacity' : ''}`} type="image" src='/public/Menu-img3.png' onClick={() => handleClick(11)} alt=''/>

                        <input className={`header_menu_supply4 ${activeHandler === 11 ? 'menu_opacity' : ''}`} type="image" src='/public/Menu-img1.png' onClick={() => handleClick(11)} alt=''/>
                        <input className={`header_menu_supply5 ${activeHandler === 11 ? 'menu_opacity' : ''}`} type="image" src='/public/Menu-img2.png' onClick={() => handleClick(11)} alt=''/>
                        <input className={`header_menu_supply6 ${activeHandler === 11 ? 'menu_opacity' : ''}`} type="image" src='/public/Menu-img3.png' onClick={() => handleClick(11)} alt=''/>
                    </div>
                    {activeHandler === 11 && (
                        <div className='header_menu_supply_activate'>
                            <input className='header_menu_supply_activate_close' type="image" src='/public/close_2428586.png' onClick={handleCloseClick}></input>
                            <div className='header_menu_opacity_bgc'></div>
                            <div className="scaled-iframe-container">
                                <iframe src="http://www.partner-tech.ru/complex" frameBorder="0"></iframe>
                            </div>
                            <div className='header_menu_menu'>
                                <a className='header_menu_menu_1' href='/'>Главная</a>
                                <a className='header_menu_menu_2' href='/'>Цены</a>
                                <a className='header_menu_menu_3' href='/'>Услуги</a>
                                <a className='header_menu_menu_4' href='/about'>О нас</a>
                                <a className='header_menu_menu_4' href='/'>Контакты</a>
                                <a className='header_menu_menu_5' href='/'>+ 7 (918) 331-25-57</a>
                                <a className='header_menu_menu_6' href='/'>info@partner-tech.ru</a>
                            </div>
                        </div>
                    )}
                </div>
                <div className='complex_for'>
                    <div className='complex_for_block'>
                        <p className='complex_for_img1'/>
                        <p className='complex_for_img2'/>
                        <p className='complex_for_img22'/>
                        <p className='complex_for_img3'/>
                        <p className='complex_for_img4'/>
                        <p className='complex_for_img5'/>
                        <p className='complex_for_img6'/>
                        <div className='complex_for_block_org'>
                            <h2 className='complex_for_block_org_title'>Инженерно-геодезические изыскания</h2>
                            <div className='complex_for_block_org_block'>
                                <p className='complex_for_block_org_text_1'>Геодезическая съемка помогает определить точное местоположение будущего объекта на местности с учетом особенностей рельефа. Результаты полевых замеров обрабатываются камеральным отделом для составления технического отчета и техплана</p>
                            </div>
                        </div>

                        <div className='complex_for_block_ur'>
                            <h2 className='complex_for_block_ur_title'>Инженерно-геологические изыскания</h2>
                            <div className='complex_for_block_ur_block'>
                                <p className='complex_for_block_ur_text_1'>Включают в себя бурение геологических скважин, отбор и анализ (сначала полевой, затем лабораторный) грунтовых проб. Полученные результаты анализируются, на их основе составляется техническое обоснование проекта. Данные изыскания позволяют избежать инженерных ошибок на этапах проектирования и строительства.</p>
                            </div>
                        </div>
                        <div className='complex_for_block_ur_2'>
                            <h2 className='complex_for_block_ur_title_2'>Инженерно-экологические исследования</h2>
                            <div className='complex_for_block_ur_block_2'>
                                <p className='complex_for_block_ur_text_1_2'>Выполнение инженерно-экологических изысканий требуется, чтобы обосновать строительство объекта с экологической стороны, уменьшить возможные неблагоприятные последствия для окружающей среды. Это один из самых обширных видов изыскательной деятельности, позволяющий получить информацию о почве, грунте, воздухе, водных источниках, донных отложениях.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='complex_1'>
                    <h2 className='complex_1_title'>Инженерно-геодезические изыскания</h2>
                    <p className='complex_1_text'>Геодезическая съемка помогает определить точное местоположение будущего объекта на местности с учетом особенностей рельефа. Результаты полевых замеров обрабатываются камеральным отделом для составления технического отчета и техплана</p>
                    <img className='complex_1_img' src='/public/Group 113.png'/>
                    <img className='complex_fon_img' src='/public/fon_tochki.png' />
                </div>

            <div className='complex_2'>
                <h2 className='complex_2_title_1'>Поэтапный подход к решению поставленной задачи</h2>
                <p className='complex_2_title_text'>Инженерно- геодезические, геологические, экологические работы выполняются специалистами имеющей разрешительные документы и допуски на данный вид деятельности</p>
              <div className='complex_2_block'>
                  <p className='complex_2_block_img_1'/>
                  <p className='complex_2_block_img_2' />
                    <p className='complex_2_block_img_3' />
                  <p className='complex_2_block_img_4' />
                  <p className='complex_2_block_img_5' />
                <p className='complex_2_block_img_6' />
                  <p className='complex_2_block_img_7' />
                    <p className='complex_2_block_img_8' />
                    <p className='complex_2_block_img_9' />
                    <p className='complex_2_block_img_10' />
                      <p className='complex_2_block_img_11' />
                      <p className='complex_2_block_img_12' />
                      <p className='complex_2_block_img_13' />
                      <p className='complex_2_block_img_14' />
                      <p className='complex_2_block_img_15' />
                  <img className='transportir_1' src='src/assets/img/Protacor/transportir30.svg'/>
                  <img className='transportir_2' src='src/assets/img/Protacor/transportirceluyctnter.svg'/>
                  <div className='complex_2_block_1'>
                      <img className='complex_2_block_1_img_1' src='/public/ish.png'/>
                      <p className='complex_2_block_1_text_1'> Исходные данные</p>
                      <p className='complex_2_block_1_text_2'>перед началом работ получаем всю необходимую исходную документацию на объект</p>
                      <p className='complex_2_block_1_text_3'>01</p>
                  </div>
                  <div className='complex_2_block_2'>
                       <img className='complex_2_block_1_img_2' src='/public/russia.png'/>
                      <p className='complex_2_block_1_text_1'>Полевые работы</p>
                      <p className='complex_2_block_1_text_2'>комплекс геодезических и топографических исследований, проводимых непосредственно на открытой местности</p>
                      <p className='complex_2_block_2_text_3'>02</p>
                  </div>
                  <div className='complex_2_block_3'>
                    <img className='complex_2_block_1_img_3' src='/public/exper.png'/>
                      <p className='complex_2_block_1_text_1'>Лабораторные работы</p>
                      <p className='complex_2_block_1_text_2'>совокупность работ, проводимых с целью получения данных, носящих инженерно-геологический характер</p>
                      <p className='complex_2_block_3_text_3'>03</p>
                  </div>
                  <div className='complex_2_block_4'>
                    <img className='complex_2_block_1_img_4' src='/public/sogl.png'/>
                      <p className='complex_2_block_1_text_1'>Камеральные работы</p>
                      <p className='complex_2_block_1_text_2'>обработка полевых изыскательских материалов, для получения картографического материала</p>
                      <p className='complex_2_block_4_text_3'>04</p>
                  </div>
                  <div className='complex_2_block_5'>
                    <img className='complex_2_block_1_img_5' src='/public/proekt.png'/>
                      <p className='complex_2_block_1_text_1'>Технический отчет</p>
                      <p className='complex_2_block_1_text_2'>технический отчет о выполненных работах в соответствии с требованиями СП 47.13330.2012 и СП 11-105-97 </p>
                      <p className='complex_2_block_5_text_3'>05</p>
                  </div>
                  <div className='complex_2_block_6'>
                    <img className='complex_2_block_1_img_6' src='/public/shopping-list_1288607.png'/>
                      <p className='complex_2_block_1_text_1'>Сдача работ</p>
                      <p className='complex_2_block_1_text_2'>в соответствии с графиком и с гарантией качества предоставляем результаты исследований Заказчику</p>
                      <p className='complex_2_block_6_text_3'>06</p>
                  </div>
              </div>





            </div>









            <div className='geo_uslugi'>
                <p className='geo_uslugi_title'>Наши услуги</p>
                <div className={`geo_body_uslugi_box1 ${activeHandler === 1 ? 'blue-background' : ''}`}>
                    <h2 className='geo_body_uslugi_box_title_1'>Ситуационный план</h2>
                    <img className='geo_body_box1_image' src='/public/box1.jpg'/>
                    <p className='geo_body_price'>от 6.000 руб.</p>
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
                    <p className='geo_body_price2'>от 8.000 руб.</p>
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
                   <p className='geo_body_price5'>от 8.000 руб.</p>
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
                   <p className='geo_body_price6'>от 12.000 руб.</p>
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
                   <p className='geo_body_price8'>от 7.000 руб.</p>
                    <p className='geo_body_text8'>Определение объема земельных масс при проведении строительных и инженерных работ</p>
                    <input className={`geo_body_uslugi_box_strela3 ${activeHandler === 7 ? 'strela-digris' : ''}`} type="image" onClick={() => handleClick(7)} alt=''/>
                    {activeHandler === 7 && (
                    <div className='dop_6'>


                    </div>
                  )}
                </div>
                <div className='complex_pdf'>
                    <h2 className='complex_pdf_title'>Полезно знать</h2>
                    <div className='complex_pdf_box'>
                        <div className='complex_pdf_box_1'>
                            <img className='complex_pdf_box_img' src='/public/pdf1.png'/>
                            <img className='complex_pdf_box_img2' src='/public/pdf2.png'/>
                            <img className='complex_pdf_box_img3' src='/public/pdf3.png'/>
                            <img className='complex_pdf_box_img4' src='/public/pdf4.png'/>
                            <img className='complex_pdf_box_img5' src='/public/pdf5.png'/>
                            <img className='complex_pdf_box_img6' src='/public/pdf6.png'/>
                            <a className='complex_pdf_box_title_1' href="public/geokniga_bozhok_ap_drich_ki_evtifeev_sa_topografiya_s_osnovami_geodezii.pdf" download="geokniga_bozhok_ap_drich_ki_evtifeev_sa_topografiya_s_osnovami_geodezii.pdf">Топография с основами геодезии Харченко А.С, Божок А.П</a>
                            <a className='complex_pdf_box_title_2' href="public/geokniga_kuroshev_gd_smirnov_le_osnovy_geodezii_i_topografii_1994.pdf" download="geokniga_kuroshev_gd_smirnov_le_osnovy_geodezii_i_topografii_1994.pdf">Основы геодезии и топографии Курошев Г.Д, Смирнов Л.Е</a>
                            <a className='complex_pdf_box_title_3' href="public/geokniga_laykin_vi_uporov_ga_geoinformatika_komsomolsk_na_amure.pdf" download="geokniga_laykin_vi_uporov_ga_geoinformatika_komsomolsk_na_amure.pdf">Геоинформатика Лайкин В.И, Упоров Г.А. Учебное пособие</a>
                            <a className='complex_pdf_box_title_4' href="public/Paromov_Kartografia_s_osnovami_topografii.pdf" download="Paromov_Kartografia_s_osnovami_topografii.pdf">Картография с основами топографии часть 2. картография учебно-методическое пособие</a>
                            <a className='complex_pdf_box_title_5' href="public/uslovnye-znaki-dlya-topograficheskih-planov.pdf" download="uslovnye-znaki-dlya-topograficheskih-planov.pdf">Роскартография условные знаки топографических планов</a>
                            <a className='complex_pdf_box_title_6' href="public/Sokolova.Osnoi.iziskanii.pdf" download="Sokolova.Osnoi.iziskanii.pdf">Основные инженерно-геодезические изыскания при строительстве сооружений. Учебное пособие</a>
                        </div>

                    </div>
                </div>
          </div>
            <div className='complex_faq'>
                <h2 className='complex_faq_title'>Часто задаваемые вопросы</h2>
                <div className='complex_faq_block'>
                    <div className={`complex_faq_block_1 ${activeHandler === 1 ? 'faq_1_1' : ''}`} onClick={() => handleClick(1)}>
                        <p className='complex_faq_block_1_title'>Зачем нужны геодезические изыскания ?</p>
                        <input className={`complex_faq_block_1_title_strela1 ${activeHandler === 1 ? 'strela-digris': ''}`} type="image" src='/public/close_7903969.png' onClick={() => handleClick(1)} alt=''/>
                        {activeHandler === 1 && (
                        <div className='faq_1_1'>
                            <p className='complex_faq_block_1_text'>Строительная область является одной из наиболее востребованных сфер применения геодезических изысканий. На основании данных, полученных в ходе исследований, определяются различные технические и экономические показатели целесообразности строительства определенного объекта на конкретном участке, а также готовятся рабочие и проектные документы, схемы дорог, сетей и коммуникаций. На этапе строительства не обойтись без разбивочных работ, ведь они позволяют привязать спроектированный объект строительства к местности, а также произвести вынос в натуру строительных осей, границ земельного участка, коммуникаций, дорог или различных элементов благоустройства. Кроме того, геодезические исследования осуществляются в процессе эксплуатации зданий для объективной оценки степени их изношенности, деформации и необходимости сноса.</p>
                            </div>
                          )}
                    </div>
                    <div className={`complex_faq_block_2 ${activeHandler === 2 ? 'faq_1_2' : ''} ${activeHandler === 1 ? 'faq_1_2_2' : ''}`} onClick={() => handleClick(2)}>
                        <p className='complex_faq_block_2_title'>Какие данные предоставляют геодезические изыскания  ?</p>
                        <input className={`complex_faq_block_2_title_strela1 ${activeHandler === 2 ? 'strela-digris_2': ''}`} type="image" src='/public/close_7903969.png' onClick={() => handleClick(2)} alt=''/>
                        {activeHandler === 2 && (
                        <div className='faq_1_2'>
                            <p className='complex_faq_block_2_text'>Геодезические изыскания обеспечивают получение строителями получение топографо-геодезических изысканий и данных о рельефе местности. Они помогают получить детальное, подтвержденное цифрами представление о природных и техногенных условиях на данном участке, оценить его пригодность для строительства.</p>
                            </div>
                          )}
                    </div>
                    <div className={`complex_faq_block_3 ${activeHandler === 3 ? 'faq_1_3' : ''} ${activeHandler === 2 ? 'faq_1_3_3' : ''}`} onClick={() => handleClick(3)}>
                        <p className='complex_faq_block_2_title'>Кто может проводить изыскания   ?</p>
                        <input className={`complex_faq_block_3_title_strela1 ${activeHandler === 3 ? 'strela-digris_3': ''}`} type="image" src='/public/close_7903969.png' onClick={() => handleClick(3)} alt=''/>
                        {activeHandler === 3 && (
                        <div className='faq_1_3'>
                            <p className='complex_faq_block_3_text'>Данный вид работ выполняют геодезисты, имеющие соответствующие образование, являющийся работником компании – члена СРО геодезистов (поскольку, в соответствии со статьей 47 ГрК РФ, вступление в СРО обязательно для всех компаний, оказывающих услуги в сфере геодезии). </p>
                            </div>
                          )}
                    </div>
                    <div className={`complex_faq_block_4 ${activeHandler === 4 ? 'faq_1_4' : ''} ${activeHandler === 3 ? 'faq_1_4_4' : ''}`} onClick={() => handleClick(4)}>
                        <p className='complex_faq_block_2_title'>Топографическая съемка</p>
                        <input className={`complex_faq_block_4_title_strela1 ${activeHandler === 4 ? 'strela-digris_4': ''}`} type="image" src='/public/close_7903969.png' onClick={() => handleClick(4)} alt=''/>
                        {activeHandler === 4 && (
                        <div className='faq_1_4'>
                            <p className='complex_faq_block_4_text'>Топографические планы создаются для планировки территории перед застройкой, а также для подготовки проектной документации. Это основа для расположения на участке не только дома, но и бани, любых дополнительных пристроек. Съемка заключается в фиксации всех характерных элементов ландшафта, такие как углы зданий, точки деревьев, столбов, инженерных сетей, а также всех характерных точек рельефа местности, которые могут так или иначе повлиять на строительство. На основании выполненной съемки в компьютерной программе соединяются все точки, формируются контуры, которые потом обрабатываются во время камеральной обработки</p>
                            </div>
                          )}
                    </div>
                    <div className={`complex_faq_block_5 ${activeHandler === 5 ? 'faq_1_5' : ''} ${activeHandler === 4 ? 'faq_1_5_5' : ''}`} onClick={() => handleClick(5)}>
                        <p className='complex_faq_block_2_title'>Камеральная обработка топографической съемки</p>
                        <input className={`complex_faq_block_5_title_strela1 ${activeHandler === 5 ? 'strela-digris_5': ''}`} type="image" src='/public/close_7903969.png' onClick={() => handleClick(5)} alt=''/>
                        {activeHandler === 5 && (
                        <div className='faq_1_5'>
                            <p className='complex_faq_block_5_text'>После первичной отрисовки всех элементов топосъемки она передается в камеральный отдел для более детальной, чистовой отрисовки плана. Для этого используются и сопоставляются архивные данные о местности, применяются классификаторы, принятые в местности, где проводятся геодезические изыскания. Именно по последней причине стоит отдавать предпочтение тем компаниям, которые работают именно в вашем регионе, и имеют опыт работы именно с вашими классификаторами.</p>
                            </div>
                          )}
                    </div>
                    <div className={`complex_faq_block_6 ${activeHandler === 6 ? 'faq_1_6' : ''} ${activeHandler === 5 ? 'faq_1_6_6' : ''}`} onClick={() => handleClick(6)}>
                        <p className='complex_faq_block_2_title'>Что включает технический отчет ?</p>
                        <input className={`complex_faq_block_6_title_strela1 ${activeHandler === 6 ? 'strela-digris_6': ''}`} type="image" src='/public/close_7903969.png' onClick={() => handleClick(6)} alt=''/>
                        {activeHandler === 6 && (
                        <div className='faq_1_6'>
                            <p className='complex_faq_block_6_text'>Если топографическая съемка представляет визуальный результат исследования, то технический отчет состоит из математических показателей. Этот документ включает физико-географическую характеристику местности, топографическую изученность района, методика выполнения инженерно-геодезических изысканий, перечень мероприятий по контролю работ, техническое задание, программа работ, выписка о наличии членства компании, проводившей изыскания, в СРО, уведомление о начале выполнения работ, свидетельства о проверке геодезического оборудования, схема планового высотного обоснования, ведомости геодезических измерений, картограмма работ, экспликация колодцев, документы о согласовании инженерных коммуникаций. Зарегистрированный отчет надзорных органов можно считать окончательным этапом.</p>
                            </div>
                          )}
                    </div>
                    <div className={`complex_faq_block_7 ${activeHandler === 7 ? 'faq_1_7' : ''} ${activeHandler === 6 ? 'faq_1_7_7' : ''}`} onClick={() => handleClick(7)}>
                        <p className='complex_faq_block_2_title'>Сколько времени займет проведение инженерно-геодезических изысканий ?</p>
                        <input className={`complex_faq_block_7_title_strela1 ${activeHandler === 7 ? 'strela-digris_7': ''}`} type="image" src='/public/close_7903969.png' onClick={() => handleClick(7)} alt=''/>
                        {activeHandler === 7 && (
                        <div className='faq_1_7'>
                            <p className='complex_faq_block_6_text'>Сроки при проектировании и строительстве объекта на местности обычно не превышают двух недель, но в индивидуальных случаях при увеличенных объемах работ и сложностях на участке, дополнительных пожеланиях заказчика или удаленности объекта могут продлеваться</p>
                            </div>
                          )}
                    </div>
                    <div className={`complex_faq_block_8 ${activeHandler === 8 ? 'faq_1_8' : ''} ${activeHandler === 7 ? 'faq_1_8_8' : ''}`} onClick={() => handleClick(8)}>
                        <p className='complex_faq_block_2_title'>От чего зависит цена инженерно-геодезических изысканий   ?</p>
                        <input className={`complex_faq_block_8_title_strela1 ${activeHandler === 8 ? 'strela-digris_8': ''}`} type="image" src='/public/close_7903969.png' onClick={() => handleClick(8)} alt=''/>
                        {activeHandler === 8 && (
                        <div className='faq_1_8'>
                            <p className='complex_faq_block_8_text'>Точную стоимость работ реально назвать только после подготовки и утверждения технического задания. Выехав на местность, геодезист сможет провести более подробный расчет, ведь цена услуги во многом зависит от особенностей участка. Прямое влияние на стоимость работ оказывает объем запланированных мероприятий, сложность рельефа, габариты будущего объекта или протяженность трассы (если речь о линейном сооружении). В результате специалист просчитывает или полную стоимость работ, или тариф за 1 га.</p>
                            </div>
                          )}
                    </div>

                   <div className={`complex_faq_block_9 ${activeHandler === 9 ? 'faq_1_9' : ''} ${activeHandler === 8 ? 'faq_1_9_9' : ''}`} onClick={() => handleClick(9)}>
                        <p className='complex_faq_block_9_title'>Существует ли срок давности у результатов геодезических изысканий   ?</p>
                        <input className={`complex_faq_block_9_title_strela1 ${activeHandler === 9 ? 'strela-digris_9': ''}`} type="image" src='/public/close_7903969.png' onClick={() => handleClick(9)} alt=''/>
                        {activeHandler === 9 && (
                        <div className='faq_1_9'>
                            <p className='complex_faq_block_9_text'>Для регионов без специфических климатических особенностей он не превышает двух лет. Если подготовка проектной документации затягивается на больший срок, геодезию участка придется заказывать заново. В противном случае проект не пройдет экспертизу в контролирующих органах.</p>
                            </div>
                          )}
                    </div>


                </div>


            </div>
            <div className={`complex_footer ${activeHandler === 1 ? 'footer-shot_1' : '' || activeHandler === 2 ? 'footer-shot_2' : '' || activeHandler === 3 ? 'footer-shot_3' : '' || activeHandler === 4 ? 'footer-shot_4' : '' || activeHandler === 5 ? 'footer-shot_5' : '' || activeHandler === 6 ? 'footer-shot_6' : '' || activeHandler === 7 ? 'footer-shot_7' : '' || activeHandler === 8 ? 'footer-shot_8' : '' || activeHandler === 9 ? 'footer-shot_9' : ''  }`}>
                <div className='complex_footer_1'>
                    <img className='complex_footer_1_img' src='/public/logo_new.png'/>
                    <img className='complex_footer_2_img' src='/public/tochki.png'/>
                </div>
                <div className='complex_footer_2'>
                    <p className='complex_footer_2_text_1'>АДРЕС ОФИСА</p>
                    <p className='complex_footer_2_text_2'>г.Крснодар ул.Заполярная 37 к4</p>
                    <p className='complex_footer_2_text_3'>г.Крснодар ул.Красных Партизан 1/4 к9</p>
                </div>
                <div className='complex_footer_4'>
                    <p className='complex_footer_2_text_1'>ГРАФИК РАБОТЫ</p>
                    <p className='complex_footer_2_text_2'>пн-пт с 9:00 до 18:00,</p>
                    <p className='complex_footer_2_text_3'>сб-вс - выходной</p>
                </div>
                <div className='complex_footer_5'>
                    <p className='complex_footer_2_text_1'>ТЕЛЕФОН</p>
                    <p className='complex_footer_2_text_2'>+7 (918) 331-25-57</p>
                    <p className='complex_footer_2_text_3'>+7 (993) 310-00-01</p>
                </div>
                <div className='complex_footer_6'>
                    <p className='complex_footer_2_text_1'>E-MAIL</p>
                    <p className='complex_footer_2_text_2'>info@partner-tech.ru</p>
                    <p className='complex_footer_2_text_3'>mail@partner-krd.ru</p>
                </div>
                <div className='complex_footer_7'>
                    <p className='complex_footer_2_text_1'>ИФОРМАЦИЯ</p>
                    <p className='complex_footer_2_text_11'>Контакты</p>
                    <p className='complex_footer_2_text_21'>О компании</p>
                </div>

                </div>





        </div>
        </body>
      </html>
  );
}


export default Complex