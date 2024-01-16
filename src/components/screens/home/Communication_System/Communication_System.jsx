import './Communication_System.css'
import React, {useEffect, useState, useRef} from "react";

const Communication = () =>  {
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
              document.querySelector('.header_black_square').style.backgroundColor = "rgba(246, 245, 245, 0.97)";
             document.querySelector('.header_black_square2').style.backgroundColor = "rgba(246, 245, 245, 0.97)";
    }

        if (scrollPosition >= 1650) {
              document.querySelector('.header_black_square').style.backgroundColor = "white";
             document.querySelector('.header_black_square2').style.backgroundColor = "white";
    }

            if (scrollPosition >= 2750) {
              document.querySelector('.header_black_square').style.backgroundColor = "rgba(246, 245, 245, 0.97)";
             document.querySelector('.header_black_square2').style.backgroundColor = "rgba(246, 245, 245, 0.97)";
    }

                    if (scrollPosition >= 3150) {
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
        <body className='custom-zoom-page_cs'>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <div className='Communication'>
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
                                <iframe src="http://www.partner-tech.ru/communication" frameBorder="0"></iframe>
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
                <div className='communication_for'>
                    <div className='communication_for_block'>
                        <p className='communication_for_img1'/>
                        <p className='communication_for_img2'/>
                        <p className='communication_for_img3'/>
                        <p className='communication_for_img4'/>
                        <p className='communication_for_img5'/>
                        <p className='communication_for_img6'/>
                        <div className='communication_for_block_org'>
                            <h2 className='communication_for_block_org_title'>Услуги для организации</h2>
                            <div className='communication_for_block_org_block'>
                                <p className='communication_for_block_org_text_1'>Проектирование воздушных линий электропередач - 10 кВ</p>
                                <p className='communication_for_block_org_text_2'>Проектирование воздушных линий электропередач - 0.4 кВ</p>
                                <p className='communication_for_block_org_text_3'>Проектирование кабельных линий электропередач - 10 кВ</p>
                                <p className='communication_for_block_org_text_4'>Проектирование кабельных линий электропередач - 0.4 кВ</p>
                                <p className='communication_for_block_org_text_5'>Проектирование трансформаторных подстанций - 10 кВ</p>
                                <p className='communication_for_block_org_text_6'>Проектирование трансформаторных подстанций - 0.4 кВ</p>
                                <p className='communication_for_block_org_text_7'>Расчет релейной защиты и автоматики</p>
                                <p className='communication_for_block_org_text_8'>Инженерные изыскания</p>
                            </div>
                        </div>

                        <div className='communication_for_block_ur'>
                            <h2 className='communication_for_block_ur_title'>Услуги для частных лиц</h2>
                            <div className='communication_for_block_ur_block'>
                                <p className='communication_for_block_ur_text_1'>Проектирование распредилительной трансформаторной подстанции (РТП)</p>
                                <p className='communication_for_block_ur_text_2'>Проектирование комплктного распределительного устройства наружнего (КРУН)</p>
                                <p className='communication_for_block_ur_text_3'>Проектирование блочной комплектной РТП</p>
                                <p className='communication_for_block_ur_text_4'>Электрификация частного дома</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='communication_1'>
                    <h2 className='communication_1_title'>Проектирование энергообъектов электроэнергетики</h2>
                    <p className='communication_1_text'>Наши специалисты в области проектирования энергообъектов электроэнергетики обеспечивают высокоточное планирование и разработку проектов с применением передовых технологий и наработанным многолетним опытом. Мы осуществляем комплексный подход к созданию технических проектов и рабочих чертежей объектов энергетики любой степени сложности.</p>
                    <img className='communication_1_img' src='/public/Group 113.png'/>
                    <img className='communication_fon_img' src='/public/fon_tochki.png' />
                    <img className='mini_fon' src='/public/mini_fon.png'/>
                </div>

            <div className='communication_2'>
                <h2 className='communication_2_title_1'>Поэтапный подход к решению поставленной задачи</h2>
                <p className='communication_2_title_text'>Проектирование и согласование проектов энергообъектов электроэнергетики выполняются специалистами имеющей разрешительные документы и допуски на данный вид деятельности</p>
              <div className='communication_2_block'>
                  <p className='communication_2_block_img_1'/>
                  <p className='communication_2_block_img_2' />
                    <p className='communication_2_block_img_3' />
                  <p className='communication_2_block_img_4' />
                  <p className='communication_2_block_img_5' />
                <p className='communication_2_block_img_6' />
                  <p className='communication_2_block_img_7' />
                    <p className='communication_2_block_img_8' />
                    <p className='communication_2_block_img_9' />
                    <p className='communication_2_block_img_10' />
                      <p className='communication_2_block_img_11' />
                      <p className='communication_2_block_img_12' />
                      <p className='communication_2_block_img_13' />
                      <p className='communication_2_block_img_14' />
                      <p className='communication_2_block_img_15' />
                  <img className='transportir_1' src='src/assets/img/Protacor/transportir30.svg'/>
                  <img className='transportir_2' src='src/assets/img/Protacor/transportirceluyctnter.svg'/>
                  <div className='communication_2_block_1'>
                      <img className='communication_2_block_1_img_1' src='/public/ish.png'/>
                      <p className='communication_2_block_1_text_1'> Исходные данные</p>
                      <p className='communication_2_block_1_text_2'>получаем всю необходимую исходно- разрешительную документацию </p>
                      <p className='communication_2_block_1_text_3'>01</p>
                  </div>
                  <div className='communication_2_block_2'>
                       <img className='communication_2_block_1_img_2' src='/public/russia.png'/>
                      <p className='communication_2_block_1_text_1'>Изыскания</p>
                      <p className='communication_2_block_1_text_2'> получение топографо-геодезических изысканий и данных о рельефе местности.</p>
                      <p className='communication_2_block_2_text_3'>02</p>
                  </div>
                  <div className='communication_2_block_3'>
                    <img className='communication_2_block_1_img_3' src='/public/proekt.png'/>
                      <p className='communication_2_block_1_text_1'>Разработка проекта</p>
                      <p className='communication_2_block_1_text_2'>с техническими решениями обеспечивающими безопасную<span>для жизни и здоровья </span> среду</p>
                      <p className='communication_2_block_3_text_3'>03</p>
                  </div>
                  <div className='communication_2_block_4'>
                    <img className='communication_2_block_1_img_4' src='/public/sogl.png'/>
                      <p className='communication_2_block_1_text_1'>Согласование</p>
                      <p className='communication_2_block_1_text_2'>Согласование проекта со всеми организациями, инстанциями и структурами. </p>
                      <p className='communication_2_block_4_text_3'>04</p>
                  </div>
                  <div className='communication_2_block_5'>
                    <img className='communication_2_block_1_img_5' src='/public/exper.png'/>
                      <p className='communication_2_block_1_text_1'>Экспертиза</p>
                      <p className='communication_2_block_1_text_2'>Прохождение экспертизы промышленной безопасности проектной документации </p>
                      <p className='communication_2_block_5_text_3'>05</p>
                  </div>
                  <div className='communication_2_block_6'>
                    <img className='communication_2_block_1_img_6' src='/public/lupa.png'/>
                      <p className='communication_2_block_1_text_1'>Авторский надзор</p>
                      <p className='communication_2_block_1_text_2'>контроль соблюдения в процессе строительства требований проектной документации </p>
                      <p className='communication_2_block_6_text_3'>06</p>
                  </div>
              </div>





            </div>









            <div className='geo_uslugi'>
                <p className='geo_uslugi_title'>Наши услуги</p>
                <div className={`geo_body_uslugi_box1 ${activeHandler === 1 ? 'blue-background' : ''}`}>
                    <h2 className='geo_body_uslugi_box_title_1'>Проектирование воздушных линий электропередач - 10 кВ</h2>
                    <img className='geo_body_box1_image' src='/public/elec1.jpg'/>
                    <p className='geo_body_price'>от 25.000 руб.</p>
                    <p className='geo_body_text'>Разработка и создание проектов воздушных линий электропередач напряжением 10 кВ с учетом технических норм и безопасности</p>
                    <input className={`geo_body_uslugi_box_strela1 ${activeHandler === 1 ? 'strela-digris': ''}`} type="image" onClick={() => handleClick(1)} alt=''/>
                    {activeHandler === 1 && (
                    <div className='dop_1'>


                    </div>
                  )}
                </div>


               <div className={`geo_body_uslugi_box2 ${activeHandler === 2 ? 'blue-background' : '' }`}>
                    <h2 className='geo_body_uslugi_box_title_2'>Проектирование воздушных линий электропередач - 0.4 кВ</h2>
                    <img className='geo_body_box2_image' src='/public/elec2.jpg'/>
                    <p className='geo_body_price2'>от 50.000 руб.</p>
                    <p className='geo_body_text2'>Разработка и создание проектов воздушных линий электропередач напряжением 0.4 кВ с учетом технических норм и безопасности</p>
                    <input className={`geo_body_uslugi_box_strela2 ${activeHandler === 2 ? 'strela-digris' : ''}`} type="image" onClick={() => handleClick(2)} alt=''/>
                    {activeHandler === 2 && (
                    <div className='dop_2'>


                    </div>
                  )}
                </div>


               <div className={`geo_body_uslugi_box3 ${activeHandler === 3 ? 'blue-background' : ''}`}>
                   <h2 className='geo_body_uslugi_box_title_3'>Проектирование кабельных линий электропередач - 10 кВ</h2>
                   <img className='geo_body_box3_image' src='/public/elec3.jpg'/>
                   <p className='geo_body_price3'>от 75.000 руб.</p>
                    <p className='geo_body_text3'>Разработка проектов кабельных линий электропередач 10 кВ, обеспечивающих надежность и соответствие техническим требованиям.</p>
                    <input className={`geo_body_uslugi_box_strela3 ${activeHandler === 3 ? 'strela-digris' : ''}`} type="image" onClick={() => handleClick(3)} alt=''/>
                    {activeHandler === 3 && (
                    <div className='dop_3'>


                    </div>
                  )}
                </div>

               <div className={`geo_body_uslugi_box4 ${activeHandler === 5 ? 'blue-background' : ''}`}>
                   <h2 className='geo_body_uslugi_box_title_4'>Проектирование кабельных линий электропередач - 0.4 кВ</h2>
                   <img className='geo_body_box4_image' src='/public/elec4.jpg'/>
                   <p className='geo_body_price4'>от 70.000 руб.</p>
                    <p className='geo_body_text4'>Разработка проектов кабельных линий электропередач 0.4 кВ, обеспечивающих надежность и соответствие техническим требованиям.</p>
                    <input className={`geo_body_uslugi_box_strela3 ${activeHandler === 5 ? 'strela-digris' : ''}`} type="image" onClick={() => handleClick(5)} alt=''/>
                    {activeHandler === 5 && (
                    <div className='dop_4'>


                    </div>
                  )}
                </div>

               <div className={`geo_body_uslugi_box5 ${activeHandler === 6 ? 'blue-background' : ''}`}>
                   <h2 className='geo_body_uslugi_box_title_5'>Проектирование ТП - 10/0.4 кВ</h2>
                   <img className='geo_body_box5_image' src='/public/elec5.jpg'/>
                   <p className='geo_body_price5'>от 150.000 руб.</p>
                    <p className='geo_body_text5'>Проектирование трансформаторных подстанций 10/0.4 кВ, включая расчеты, планирование и соответствие нормативам безопасности.</p>
                    <input className={`geo_body_uslugi_box_strela3 ${activeHandler === 6 ? 'strela-digris' : ''}`} type="image" onClick={() => handleClick(6)} alt=''/>
                    {activeHandler === 6 && (
                    <div className='dop_5'>


                    </div>
                  )}
                </div>

               <div className={`geo_body_uslugi_box6 ${activeHandler === 7 ? 'blue-background' : ''}`}>
                       <h2 className='geo_body_uslugi_box_title_6'>Проектирование РТП, КРУН, БКРТП - 10/0.4 кВ</h2>
                   <img className='geo_body_box6_image' src='/public/elec7.jpg'/>
                   <p className='geo_body_price6'>от 100.000 руб.</p>
                    <p className='geo_body_text6'>Создание проектов распределительных трансформаторных подстанций, комплектных распределительных устройств и блочных КРТП 10/0.4 кВ с соблюдением всех стандартов.</p>
                    <input className={`geo_body_uslugi_box_strela3 ${activeHandler === 7 ? 'strela-digris' : ''}`} type="image" onClick={() => handleClick(7)} alt=''/>
                    {activeHandler === 7 && (
                    <div className='dop_6'>


                    </div>
                  )}
                </div>

                              <div className={`geo_body_uslugi_box7 ${activeHandler === 7 ? 'blue-background' : ''}`}>
                   <h2 className='geo_body_uslugi_box_title_7'>Электрификация частного дома</h2>
                   <img className='geo_body_box7_image' src='/public/elec6.jpg'/>
                   <p className='geo_body_price7'>от 12.000 руб.</p>
                    <p className='geo_body_text7'>Комплексное проектирование систем электрификации для частного дома, включая подбор оборудования и разработку технической документации.</p>
                    <input className={`geo_body_uslugi_box_strela3 ${activeHandler === 7 ? 'strela-digris' : ''}`} type="image" onClick={() => handleClick(7)} alt=''/>
                    {activeHandler === 7 && (
                    <div className='dop_6'>


                    </div>
                  )}
                </div>

                              <div className={`geo_body_uslugi_box8 ${activeHandler === 7 ? 'blue-background' : ''}`}>
                   <h2 className='geo_body_uslugi_box_title_8'>Расчет релейной защиты и автоматики</h2>
                   <img className='geo_body_box8_image' src='/public/elec8.jpeg'/>
                   <p className='geo_body_price8'>от 100.000 руб.</p>
                    <p className='geo_body_text8'>Предоставление услуг по расчету систем релейной защиты и автоматики, обеспечивая эффективность и надежность электрооборудования.</p>
                    <input className={`geo_body_uslugi_box_strela3 ${activeHandler === 7 ? 'strela-digris' : ''}`} type="image" onClick={() => handleClick(7)} alt=''/>
                    {activeHandler === 7 && (
                    <div className='dop_6'>


                    </div>
                  )}
                </div>
                <div className='communication_pdf'>
                    <h2 className='communication_pdf_title'>Полезно знать</h2>
                    <div className='communication_pdf_box'>
                        <div className='communication_pdf_box_1'>
                            <img className='communication_pdf_box_img' src='/public/pdf1.png'/>
                            <img className='communication_pdf_box_img2' src='/public/pdf2.png'/>
                            <img className='communication_pdf_box_img3' src='/public/pdf3.png'/>
                            <img className='communication_pdf_box_img4' src='/public/pdf4.png'/>
                            <img className='communication_pdf_box_img5' src='/public/pdf5.png'/>
                            <img className='communication_pdf_box_img6' src='/public/pdf6.png'/>
                            <a className='communication_pdf_box_title_1' href="public/sto-gazprom-18000.3-006-2017.pdf" download="sto-gazprom-18000.3-006-2017.pdf">18000.3-006-2017 Газораспределительная система. Организация проведения контроля за соблюдением требований промышленной безопасности при эксплуатации, строительстве и реконструкции. Основные положения</a>
                            <a className='communication_pdf_box_title_2' href="public/sto-gazprom-18000.3-006-2017.pdf" download="sto-gazprom-18000.3-006-2017.pdf">18000.3-006-2017 Газораспределительная система. Организация проведения контроля за соблюдением требований промышленной безопасности при эксплуатации, строительстве и реконструкции. Основные положения</a>
                            <a className='communication_pdf_box_title_3' href="public/sto-gazprom-18000.3-006-2017.pdf" download="sto-gazprom-18000.3-006-2017.pdf">18000.3-006-2017 Газораспределительная система. Организация проведения контроля за соблюдением требований промышленной безопасности при эксплуатации, строительстве и реконструкции. Основные положения</a>
                            <a className='communication_pdf_box_title_4' href="public/sto-gazprom-18000.3-006-2017.pdf" download="sto-gazprom-18000.3-006-2017.pdf">18000.3-006-2017 Газораспределительная система. Организация проведения контроля за соблюдением требований промышленной безопасности при эксплуатации, строительстве и реконструкции. Основные положения</a>
                            <a className='communication_pdf_box_title_5' href="public/sto-gazprom-18000.3-006-2017.pdf" download="sto-gazprom-18000.3-006-2017.pdf">18000.3-006-2017 Газораспределительная система. Организация проведения контроля за соблюдением требований промышленной безопасности при эксплуатации, строительстве и реконструкции. Основные положения</a>
                            <a className='communication_pdf_box_title_6' href="public/sto-gazprom-18000.3-006-2017.pdf" download="sto-gazprom-18000.3-006-2017.pdf">18000.3-006-2017 Газораспределительная система. Организация проведения контроля за соблюдением требований промышленной безопасности при эксплуатации, строительстве и реконструкции. Основные положения</a>
                        </div>

                    </div>
                </div>
          </div>
            <div className='communication_faq'>
                <h2 className='communication_faq_title'>Часто задаваемые вопросы</h2>
                <div className='communication_faq_block'>
                    <div className={`communication_faq_block_1 ${activeHandler === 1 ? 'faq_1' : ''}`} onClick={() => handleClick(1)}>
                        <p className='communication_faq_block_1_title'>Для каких целей нужен проект электрификации ?</p>
                        <input className={`communication_faq_block_1_title_strela1 ${activeHandler === 1 ? 'strela-digris': ''}`} type="image" src='/public/close_7903969.png' onClick={() => handleClick(1)} alt=''/>
                        {activeHandler === 1 && (
                        <div className='faq_1'>
                            <p className='communication_faq_block_1_text'>Проектирование электрификации является ключевым условием для подключения новых потребителей, а также для ремонта и модернизации существующих электросетей. Это включает в себя проектирование электрических сетей, техническое оборудование и электрические устройства.</p>
                            </div>
                          )}
                    </div>
                    <div className={`communication_faq_block_2 ${activeHandler === 2 ? 'faq_2' : ''} ${activeHandler === 1 ? 'faq_2_2' : ''}`} onClick={() => handleClick(2)}>
                        <p className='communication_faq_block_2_title'>Газопроводы какого давления Вы проектируете  ?</p>
                        <input className={`communication_faq_block_2_title_strela1 ${activeHandler === 2 ? 'strela-digris_2': ''}`} type="image" src='/public/close_7903969.png' onClick={() => handleClick(2)} alt=''/>
                        {activeHandler === 2 && (
                        <div className='faq_2'>
                            <p className='communication_faq_block_2_text'>Газопроводы низкого давления (служат для подачи газа к жилым домам, общественным зданиям и коммунально-бытовым предприятиям).
<br/>Газопроводы среднего давления (через газорегуляторные пункты снабжают газом газопроводы низкого давления, а также промышленные и коммунально-бытовые предприятия).
<br/>Газопроводы высокого давления (через газораспределительные установки на промышленные предприятия и газопроводы среднего давления). " </p>
                            </div>
                          )}
                    </div>
                    <div className={`communication_faq_block_3 ${activeHandler === 3 ? 'faq_3' : ''} ${activeHandler === 2 ? 'faq_3_3' : ''}`} onClick={() => handleClick(3)}>
                        <p className='communication_faq_block_2_title'>В какой срок выполняется работа   ?</p>
                        <input className={`communication_faq_block_3_title_strela1 ${activeHandler === 3 ? 'strela-digris_3': ''}`} type="image" src='/public/close_7903969.png' onClick={() => handleClick(3)} alt=''/>
                        {activeHandler === 3 && (
                        <div className='faq_3'>
                            <p className='communication_faq_block_3_text'>Сроки реализации зависят от сложности проекта, специфики местности, колличества согласующих инстанций и могут составлять от 5 дней до нескольких месяцев. </p>
                            </div>
                          )}
                    </div>
                    <div className={`communication_faq_block_4 ${activeHandler === 4 ? 'faq_4' : ''} ${activeHandler === 3 ? 'faq_4_4' : ''}`} onClick={() => handleClick(4)}>
                        <p className='communication_faq_block_2_title'>Сколько времени может занять согласование документации   ?</p>
                        <input className={`communication_faq_block_4_title_strela1 ${activeHandler === 4 ? 'strela-digris_4': ''}`} type="image" src='/public/close_7903969.png' onClick={() => handleClick(4)} alt=''/>
                        {activeHandler === 4 && (
                        <div className='faq_4'>
                            <p className='communication_faq_block_4_text'>За счет десятилетнего опыта и развитой сети партнеров на всей территории России сроки оптимизированы. Большая практика согласования проектов в различных инстанциях.</p>
                            </div>
                          )}
                    </div>
                    <div className={`communication_faq_block_5 ${activeHandler === 5 ? 'faq_5' : ''} ${activeHandler === 4 ? 'faq_5_5' : ''}`} onClick={() => handleClick(5)}>
                        <p className='communication_faq_block_2_title'>Вы принимаете участие в тендерах   ?</p>
                        <input className={`communication_faq_block_5_title_strela1 ${activeHandler === 5 ? 'strela-digris_5': ''}`} type="image" src='/public/close_7903969.png' onClick={() => handleClick(5)} alt=''/>
                        {activeHandler === 5 && (
                        <div className='faq_5'>
                            <p className='communication_faq_block_5_text'>ООО "Партнер" имеет в структуре организации тендерный отдел. Победы в тендерах, госзакупках и электронных торгах фоормируют ключевой объем заказов компании. Основными Заказчикамия являются АО "Газпром газораспределие" и ПАО "Россети"</p>
                            </div>
                          )}
                    </div>
                    <div className={`communication_faq_block_6 ${activeHandler === 6 ? 'faq_6' : ''} ${activeHandler === 5 ? 'faq_6_6' : ''}`} onClick={() => handleClick(6)}>
                        <p className='communication_faq_block_2_title'>До какой суммы можете заключить договор   ?</p>
                        <input className={`communication_faq_block_6_title_strela1 ${activeHandler === 6 ? 'strela-digris_6': ''}`} type="image" src='/public/close_7903969.png' onClick={() => handleClick(6)} alt=''/>
                        {activeHandler === 6 && (
                        <div className='faq_6'>
                            <p className='communication_faq_block_6_text'>Допуск СРО на разработку проектной документации и проведение инженерных изысканий позволяет заключать договора объемеом до 50 млн рублей</p>
                            </div>
                          )}
                    </div>
                    <div className={`communication_faq_block_7 ${activeHandler === 7 ? 'faq_7' : ''} ${activeHandler === 6 ? 'faq_7_7' : ''}`} onClick={() => handleClick(7)}>
                        <p className='communication_faq_block_2_title'>От чего зависит цена проектирования электрификации   ?</p>
                        <input className={`communication_faq_block_7_title_strela1 ${activeHandler === 7 ? 'strela-digris_7': ''}`} type="image" src='/public/close_7903969.png' onClick={() => handleClick(7)} alt=''/>
                        {activeHandler === 7 && (
                        <div className='faq_7'>
                            <p className='communication_faq_block_6_text'>Основные характеристики, влияющие на стоимость: расстояние от распределительного газопровода до объекта, дополнительные разрешения, которые необходимо получить, статус объекта, статус заказчика (физическое или юридическое лицо).</p>
                            </div>
                          )}
                    </div>
                    <div className={`communication_faq_block_8 ${activeHandler === 8 ? 'faq_8' : ''} ${activeHandler === 7 ? 'faq_8_8' : ''}`} onClick={() => handleClick(8)}>
                        <p className='communication_faq_block_2_title'>Каков порядок оплаты по Договору электрификации объектов   ?</p>
                        <input className={`communication_faq_block_8_title_strela1 ${activeHandler === 8 ? 'strela-digris_8': ''}`} type="image" src='/public/close_7903969.png' onClick={() => handleClick(8)} alt=''/>
                        {activeHandler === 8 && (
                        <div className='faq_8'>
                            <p className='communication_faq_block_8_text'>Потребность проекта в финансировании обсуждается на этапе формирования КП и не изменяется до момента завершения работ по Договору. Как приавило, мы разделяем оплаты на этапы, чтобы снизить финансовую нагрузку наших партнеров.</p>
                            </div>
                          )}
                    </div>

                   <div className={`communication_faq_block_9 ${activeHandler === 9 ? 'faq_9' : ''} ${activeHandler === 8 ? 'faq_9_9' : ''}`} onClick={() => handleClick(9)}>
                        <p className='communication_faq_block_9_title'>Вы ведете контроль монтажных работ   ?</p>
                        <input className={`communication_faq_block_9_title_strela1 ${activeHandler === 9 ? 'strela-digris_9': ''}`} type="image" src='/public/close_7903969.png' onClick={() => handleClick(9)} alt=''/>
                        {activeHandler === 9 && (
                        <div className='faq_9'>
                            <p className='communication_faq_block_9_text'>Да, мы оказываем авторский надзор за всеми работами по нашему проекту электрификации</p>
                            </div>
                          )}
                    </div>


                </div>


            </div>
            <div className={`communication_footer ${activeHandler === 0 ? 'communication_footer' : '' || activeHandler === 1 ? 'footer-shot_1_1' : '' || activeHandler === 2 ? 'footer-shot_2_1' : '' || activeHandler === 3 ? 'footer-shot_3_1' : '' || activeHandler === 4 ? 'footer-shot_4_1' : '' || activeHandler === 5 ? 'footer-shot_5_1' : '' || activeHandler === 6 ? 'footer-shot_6_1' : '' || activeHandler === 7 ? 'footer-shot_7_1' : '' || activeHandler === 8 ? 'footer-shot_8_1' : '' || activeHandler === 9 ? 'footer-shot_9_1' : ''  }`}>
               <div className='gaz_fot'>
                <div className='communication_footer_1'>
                    <img className='communication_footer_1_img' src='/public/logo_new.png'/>
                    <img className='communication_footer_2_img' src='/public/tochki.png'/>
                </div>
                <div className='communication_footer_2'>
                    <p className='communication_footer_2_text_1'>АДРЕС ОФИСА</p>
                    <p className='communication_footer_2_text_2'>г.Крснодар ул.Заполярная 37 к4</p>
                    <p className='communication_footer_2_text_3'>г.Крснодар ул.Красных Партизан 1/4 к9</p>
                </div>
                <div className='communication_footer_4'>
                    <p className='communication_footer_2_text_1'>ГРАФИК РАБОТЫ</p>
                    <p className='communication_footer_2_text_2'>пн-пт с 9:00 до 18:00,</p>
                    <p className='communication_footer_2_text_3'>сб-вс - выходной</p>
                </div>
                <div className='communication_footer_5'>
                    <p className='communication_footer_2_text_1'>ТЕЛЕФОН</p>
                    <p className='communication_footer_2_text_2'>+7 (918) 331-25-57</p>
                    <p className='communication_footer_2_text_3'>+7 (993) 310-00-01</p>
                </div>
                <div className='communication_footer_6'>
                    <p className='communication_footer_2_text_1'>E-MAIL</p>
                    <p className='communication_footer_2_text_2'>info@partner-tech.ru</p>
                    <p className='communication_footer_2_text_3'>mail@partner-krd.ru</p>
                </div>
                <div className='communication_footer_7'>
                    <p className='communication_footer_2_text_1'>ИФОРМАЦИЯ</p>
                    <p className='communication_footer_2_text_11'>Контакты</p>
                    <p className='communication_footer_2_text_21'>О компании</p>
                </div>
               </div>
                </div>





        </div>
        </body>
      </html>
  );
}


export default Communication