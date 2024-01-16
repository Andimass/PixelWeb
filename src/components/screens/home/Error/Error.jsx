import './Error.css'
import React, {useEffect, useState, useRef} from "react";

const Error = () => {
    const [activeHandler, setActiveHandler] = useState(1);
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

    useEffect(() => {
    if (activeHandler === null) {
        // Откройте первый обработчик по умолчанию
        setIsShown(true);
        setActiveHandler(1);
    }
}, [activeHandler]);

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

    // Функция для отправки запроса на сервер для обновления значения
        return (
        <html>
        <head>
         <title>Партнер</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>

            <meta name="yandex-verification" content="ee98594a3963c95e" />
            </head>
            <body className="custom-zoom-page">
            <div className='Error'>
            <div className='error_error'>
                 <a href="/">
                <img className='error_logo' src='/public/logo_new.png'/>
                 </a>
                <div className='error_animation_square '>
                    <div className='error_black_square'></div>
                    <div className='error_black_square2'></div>
                        <input className={`error_menu_supply ${activeHandler === 11 ? 'menu_opacity' : ''}`} type="image" src='/public/Menu-img1.png' onClick={() => handleClick(11)} alt=''/>
                         <input className={`error_menu_supply2 ${activeHandler === 11 ? 'menu_opacity' : ''}`} type="image" src='/public/Menu-img2.png' onClick={() => handleClick(11)} alt=''/>
                        <input className={`error_menu_supply3 ${activeHandler === 11 ? 'menu_opacity' : ''}`} type="image" src='/public/Menu-img3.png' onClick={() => handleClick(11)} alt=''/>

                        <input className={`error_menu_supply4 ${activeHandler === 11 ? 'menu_opacity' : ''}`} type="image" src='/public/Menu-img1.png' onClick={() => handleClick(11)} alt=''/>
                        <input className={`error_menu_supply5 ${activeHandler === 11 ? 'menu_opacity' : ''}`} type="image" src='/public/Menu-img2.png' onClick={() => handleClick(11)} alt=''/>
                        <input className={`error_menu_supply6 ${activeHandler === 11 ? 'menu_opacity' : ''}`} type="image" src='/public/Menu-img3.png' onClick={() => handleClick(11)} alt=''/>
                    </div>
                    {activeHandler === 11 && (
                        <div className='error_menu_supply_activate'>
                            <input className='error_menu_supply_activate_close' type="image" src='/public/close_2428586.png' onClick={handleCloseClick}></input>
                            <div className='error_menu_opacity_bgc'></div>
                            <div className="scaled-iframe-container">
                                <iframe src="http://localhost/error" frameBorder="0"></iframe>
                            </div>
                            <div className='error_menu_menu'>
                                <a className='error_menu_menu_1' href='/'>Главная</a>
                                <a className='error_menu_menu_2' href='/'>Цены</a>
                                <a className='error_menu_menu_3' href='/'>Услуги</a>
                                <a className='error_menu_menu_4' href='/about'>О нас</a>
                                <a className='error_menu_menu_4' href='/'>Контакты</a>
                                <a className='error_menu_menu_5' href='/'>+7 (918) 331-25-57</a>
                                <a className='error_menu_menu_6' href='/'>info@partner-tech.ru</a>
                            </div>
                        </div>
                    )}
                    <div className='error_menu'>
                        <a href='/price'><p>Цены</p></a>
                        <a href='/uslugi'><p>Услуги</p></a>
                       <a href='/about'><p>О нас</p></a>
                        <p>info@partner-tech.ru</p>
                        <p>+ 7 (918) 331-25-57</p>
                    </div>
                    <div className='error_container_1'>
                        <p className='error_container_1_title'>Дизайн и сборка сайта выполняются штатными сотрудниками в свободное время.<br/>А у нас его практически нет, ведь мы максимально ориентированы на быстрое и качественное выполнение вашего заказа. <br/> Приносим свои извинения <span>С Уважением, "ПАРТНЕР"</span> </p>
                        <div className='error_container_1_line_erore'>
                            <p className='error_container_1_line_erore_number'>54%</p>
                            <div className='error_container_1_line_erore_line'>
                                <img className='error_container_1_line_erore_line_1'/>
                                <img className='error_container_1_line_erore_line_2'/>
                                <img className='error_container_1_line_erore_line_3'/>
                                <img className='error_container_1_line_erore_line_4'/>
                                <img className='error_container_1_line_erore_line_5'/>
                                <div className='error_container_1_line_erore_line_6'/>
                            </div>
                        </div>


                    </div>



            </div>
            </div>
            </body>
        </html>
        );
}
export default Error
