import './Header.scss'
import React, {useEffect, useState, useRef} from "react";
import { FullPage, Slide } from 'react-full-page';
import p5 from "p5";
function Header() {

    const containerRef = useRef();

  useEffect(() => {
    const sketch = (p) => {
      let balls = [];
      let img;
      let imageSizes = [
          {width: 100, height: 25},
          {width: 100, height: 55},
          {width: 75, height: 75},
          {width: 200, height: 91},
          {width: 190, height: 150},
          {width: 100, height: 20},
          {width: 117, height: 82},
          {width: 132, height: 92},
          {width: 82, height: 93},
          {width: 93, height: 83},
        {width: 135, height: 30},
        {width: 93, height: 83},
        ];

      p.preload = () => {
        img = [];
          for (let i = 0; i < 12; i++) {
            img[i] = p.loadImage('./public/part' + (i + 1) + '.png');  // предполагая, что у вас есть изображения part1.png, part2.png и т.д.
          }
      };

p.setup = () => {
  if (document.querySelector('.Header').style.Width === 390) {
    p.createCanvas(1, 1); // Создание холста размером 1x1 пиксель для маленьких экранов
  }
  else {
    p.createCanvas(2495, 1146); // Стандартный размер для больших экранов
  }

  // После создания холста, инициализируйте остальные элементы
  for (let i = 0; i < 12; i++) {
    balls.push(new Ball(p.random(p.width), p.random(p.height), p.random(125, 320), p, i));
  }
};

        p.draw = () => {
            p.background(0);

            for (let i = 0; i < balls.length; i++) {
                balls[i].update();
                balls[i].display();
                balls[i].checkEdges();
                balls[i].checkCollision(balls);
                balls[i].handleMouseInteraction();  // Добавьте эту строку
            }
        };

      class Ball {
          constructor(x, y, diameter, p, imgIndex) {  // imgIndex - индекс изображения
              this.x = x;
              this.y = y;
              this.diameter = diameter;
              this.img = img[imgIndex];
              this.imgWidth = imageSizes[imgIndex].width;
              this.imgHeight = imageSizes[imgIndex].height;
              this.speedX = p.random(-2, 2);
              this.speedY = p.random(-2, 2);
              this.p = p;
              this.initialSpeedX = this.speedX;
              this.initialSpeedY = this.speedY;
          }

          getBorderRadius() {
              let offset = 39;
              return Math.max(this.imgWidth, this.imgHeight) / 2 + offset;
          }

          update() {
              this.x += this.speedX;
              this.y += this.speedY;
          }

          display() {
              this.p.imageMode(this.p.CENTER);
              this.p.image(this.img, this.x, this.y, this.imgWidth, this.imgHeight);

              // Обводка
              let offset = 73;
              let maxDimension = Math.max(this.imgWidth, this.imgHeight) + offset;
              this.p.stroke(255); // Цвет обводки (в этом случае черный)
              this.p.strokeWeight(1); // Толщина обводки
              this.p.noFill(); // Убедитесь, что круг пустой внутри
              this.p.ellipse(this.x, this.y, maxDimension);
          }

          checkEdges() {
              let radius = this.getBorderRadius();

              if (this.x > this.p.width - radius) {
                  this.x = this.p.width - radius;
                  this.speedX *= -1;
              } else if (this.x < radius) {
                  this.x = radius;
                  this.speedX *= -1;
              }

              if (this.y > this.p.height - radius) {
                  this.y = this.p.height - radius;
                  this.speedY *= -1;
              } else if (this.y < radius) {
                  this.y = radius;
                  this.speedY *= -1;
              }
          }

          handleMouseInteraction() {
              let d = this.p.dist(this.x, this.y, this.p.mouseX, this.p.mouseY);
              let minDist = this.getBorderRadius() + 15;  // 50 - это радиус "отталкивания" от курсора
              if (d < minDist) {
                  let angle = this.p.atan2(this.y - this.p.mouseY, this.x - this.p.mouseX);
                  let overlap = minDist - d;
                  let ax = this.p.cos(angle) * overlap;
                  let ay = this.p.sin(angle) * overlap;
                  this.x += ax;
                  this.y += ay;
                  this.speedX = this.p.cos(angle) * this.p.mag(this.speedX, this.speedY) * 1.01;
                  this.speedY = this.p.sin(angle) * this.p.mag(this.speedX, this.speedY) * 1.01;

                  setTimeout(() => {
                      this.speedX = this.initialSpeedX;
                      this.speedY = this.initialSpeedY;
                  }, 3000)
              }
          }

          checkCollision(balls) {
              for (let i = 0; i < balls.length; i++) {
                  let other = balls[i];
                  if (this !== other) {
                      let d = this.p.dist(this.x, this.y, other.x, other.y);
                      let minDist = this.getBorderRadius() + other.getBorderRadius(); // учитываем обводку

                      if (d < minDist) {
                          let angle = Math.atan2(other.y - this.y, other.x - this.x);
                          let overlap = minDist - d;
                          let ax = Math.cos(angle) * overlap * 0.5;
                          let ay = Math.sin(angle) * overlap * 0.5;

                          this.x -= ax;
                          this.y -= ay;
                          other.x += ax;
                          other.y += ay;

                          this.speedX = -this.speedX;
                          this.speedY = -this.speedY;
                          other.speedX = -other.speedX;
                          other.speedY = -other.speedY;
                      }
                  }
              }
          }
      }
    };

    const myP5 = new p5(sketch, containerRef.current);

    return () => {
      myP5.remove();
    };
  }, []);

    const [activeSlide, setActiveSlide] = useState(0);

      const content = [
        'Это наш план достижения успеха для клиентов. Это инфраструктура, которая позволяет нашей команде создавать замечательные вещи, обеспечивающие результаты для наших клиентов.',
        'Это сердце нашей организации и ключ к нашему успеху. Мы объединены общей целью и страстью к инновациям, создавая команду профессионалов, готовых воплощать идеи в жизнь.',
        'Основа нашего мастерства и залог успеха наших проектов. Мы постоянно развиваем и совершенствуем наш профессиональный арсенал, чтобы оставаться на переднем крае технологических инноваций. '
        // Добавьте сюда другие слайды
      ];

        const title = [
        'Наш подход',
        'Наш коллетив',
        'Наши навыки'
        // Добавьте сюда другие слайды
      ];

       const img = [
        'public/podhod.png',
        '/public/collectiv.png',
        '/public/podhod.png'
        // Добавьте сюда другие слайды
      ];

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





        return (
        <html>
        <head>
         <title>Pixel Web Design</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>

            <meta name="yandex-verification" content="ee98594a3963c95e" />
            </head>
            <body className="custom-zoom-page">
            <FullPage scrollMode="full-page">
            <Slide>
            <div className='Header'>
                <div className='Header_menu' id='page'>
                    <div className='Header_menu_img'>
                        <img className='' src='/public/logo mini.png'/>
                    </div>
                    <div className='Header_menu_text'>
                        <p className='Header_menu_text_phone'>+ 7 (918) 331<span className='dop_1_span'>-</span>25<span className='dop_1_span'>-</span>57</p>
                        <p className='Header_menu_text_adres'>Юр.Адрес -  <span> 350012, г. Краснодар ул. Заполярная, дом 37 корпус 4 помещение 25</span></p>
                        <p className='Header_menu_text_email'>mail@partner-krd.ru</p>
                        <a className='Header_menu_text_4' href='/contacts'>Контакты</a>
                    </div>
                </div>
                <div className={`Header_menu_icon ${activeHandler === 4 ? 'menu_opacity' : ''}`} onClick={() => handleClick(4)}>
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
                                <iframe src="http://www.pixelwebdesign.ru" frameBorder="0"></iframe>
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
                <div className='Header_animation'>
                    <img className='Header_img' src='public/logo (2).png'/>
                </div>
                <div className='Header_menu_center'>
                    <p className='Header_menu_center_text'>Мы траснформируем ваш сайт</p>
                    <div className='Header_menu_center_cvadro'></div>
                </div>
                <div className='Header_menu_down'>
                    <p className='Header_menu_down_text'>ООО "ЮТС" занимается созданием и поддержкой сайтов, на основании ОКВЭД'а 62.01, творческий псевдоним нашей компании - PixelWebDesign. PWD - это отмеченная наградами консалтинговая компания в области создания, продвижения и администрирования сайтов, которая преобразует бизнес, генерируя идеи и ускоряя рост.</p>
                </div>
                </div>
                </Slide>
                <Slide>
                    <div className='Header_container_1' id='page1'>
                        <img className='Header_container_1_img' src='/public/logo mini.png'/>
                        <p className='Header_container_1_title'>Мы работаем на пересечении</p>
                        <div className='Header_container_1_1'>
                            <p className='Header_container_1_1_text'>Идеи</p>
                            <p className='Header_container_1_1_text_1'>Каждая наша разработка начинается с создании идеи, которую мы вкладываем в ваш продукт, чтобы он был уникальным и выделялся на рынке</p>
                            <img className='Header_container_1_1_img_1' src='/public/idea (1).png'/>
                            <img className='Header_container_1_1_img_2' src='/public/idea (2).png'/>
                        </div>
                        <div className='Header_container_1_2'>
                            <p className='Header_container_1_2_text'>Креатива</p>
                            <p className='Header_container_1_2_text_1'>Мы не просто создаем что-то новое, мы вдыхаем жизнь в каждую деталь, чтобы ваш продукт не просто существовал, но и рассказывал свою историю, притягивал внимание и вызывал эмоции</p>
                            <img className='Header_container_1_2_img_1' src='/public/creative 1.png'/>
                            <img className='Header_container_1_2_img_2' src='/public/creative 2.png'/>
                        </div>
                        <div className='Header_container_1_3'>
                            <p className='Header_container_1_3_text'>Контента</p>
                            <p className='Header_container_1_3_text_1'>Синтез творчества и стратегии позволяющий создавать материалы, которые резонируют с вашей аудиторией на глубоком уровне. Мы стремимся к тому, чтобы каждый кусочек контента был не просто воспринят, но и оставил след в сознании вашей аудитории</p>
                            <img className='Header_container_1_3_img_1' src='/public/content (1).png'/>
                            <img className='Header_container_1_3_img_2' src='/public/content (2).png'/>
                        </div>
                        <div className='Header_container_1_4'>
                            <p className='Header_container_1_4_text'>Опыта</p>
                            <p className='Header_container_1_4_text_1'>Мы знаем, как важно не только следовать проверенным путям, но и смело исследовать новые горизонты. Наш опыт позволяет нам видеть не только то, что перед нами, но и то, что за горизонтом</p>
                            <img className='Header_container_1_4_img_1' src='/public/exp (1).png'/>
                            <img className='Header_container_1_4_img_2' src='/public/exp (2).png'/>
                        </div>

                    </div>
                </Slide>
                <Slide>
                    <div className='Header_container_2' id='page2'>
                        <img className='Header_container_2_img' src='/public/logo mini.png'/>
                        <div className='Header_container_2_blok'>
                            <p className='Header_container_2_blok_title'>В чем залог нашего успеха?</p>
                        </div>
                        <div className='Header_container_2_glav'>
                            <div className='Header_container_2_cvadro'></div>
                            <div className="dop_content">
                                <p className="dop_content_1">Наш стек</p>
                                <p className="dop_content_2"><span>HTML/CSS</span> : Основные языки разметки и стилей для создания веб-страниц с красивым дизайном.</p>
                                <p className="dop_content_3"><span>JavaScript (включая React.js)</span> : Мы активно используем JavaScript и его современные фреймворки, такие как React.js, для разработки интерактивных и динамичных веб-приложений.</p>
                            </div>
                            <div className="title-content">
                                    {title[activeSlide]}
                                  </div>
                            <div className="slider-content">
                                    {content[activeSlide]}
                                  </div>
                                    <img className={`slider_img ${activeSlide === 1 ? 'sm' : ''} ${activeSlide === 2  || activeSlide === 3 ? 'img1' : ''}`} src='/public/podhod.png'/>
                                    <img className={`slider_img ${activeSlide === 2 ? 'sm' : ''} ${activeSlide === 1  || activeSlide === 3 ? 'img2' : ''}`} src='/public/collectiv.png'/>
                                    <img className={`slider_img ${activeSlide === 2 ? 'sm' : ''} ${activeSlide === 1  || activeSlide === 2 ? 'img3' : ''}`} src='/public/navyk.png'/>
                                  <div className="slider-dots">
                                    {content.map((_, index) => (
                                      <span
                                        key={index}
                                        className={`dot ${index === activeSlide ? 'active' : ''}`}
                                        onClick={() => setActiveSlide(index)}
                                      />
                                    ))}
                                  </div>
                        </div>
                    </div>
                </Slide>
                <Slide>
                    <div className='Header_container_3' ref={containerRef} id='page3'>
                        <div className='Header_container_3_blok'>
                        <img className='Header_container_3_img' src='/public/logo mini.png'/>
                        <h2 className='Header_our_partner'>Наши партнеры</h2>

                        </div>
                    </div>
                </Slide>
                <Slide>
            <div className='project_spec'>
                <p className='project_spec_title'>Мы специализируемся<span>На следующих услугах</span></p>
                <div className='project_spec_1'>
                    <img className='project_spec_1_img_1' src='/public/raz1.png'/>
                    <img className='project_spec_1_img_2' src='/public/raz2.png'/>
                    <p className='project_spec_1_1'>Разработка сайтов под ключ</p>
                    <p className='project_spec_1_2'>Мы предлагаем полный спектр услуг по созданию сайтов, начиная от первоначального концепта и заканчивая запуском работающего продукта. Наша команда профессионалов глубоко погружается в каждый проект, чтобы понять уникальные потребности и цели вашего бизнеса.</p>
                  {/*{buttonText === '2/2' && (*/}
                  {/*  <p className='project_spec_1_3' onClick={buttomClick}>Наша цель - не просто разработать сайт, а создать мощный онлайн-инструмент, который будет усиливать ваш бренд, привлекать целевую аудиторию и способствовать росту вашего бизнеса.</p>*/}
                  {/*)}*/}
                  {/*  <button className='project_spec_1_buttom' onClick={buttomClick}>{buttonText}</button>*/}
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
                </Slide>
                <Slide>
                <div className='about_spec'>
                <p className='about_spec_title'>Выполненные работы</p>
                <div className='about_rab'>
                    <p className='about_rab_title'>Сайт Организации "ПАРТНЕР"</p>
                    <div className="about_scaled-iframe-container">
                        <iframe src="http://www.partner-tech.ru" frameBorder="0"></iframe>
                    </div>
                    <p className='about_rab_text'>Данный сайт до сих пор находится в процессе разработки, вот реальный отзыв генерального директора компании "ПАРТНЕР" - </p>
                    <img className='about_rab_otz_img' src='/public/5star.png'/>
                    <p className='about_rab_otz'>Клоконос Александр</p>
                    <p className='about_rab_otziv'>"Я просто поражен тем, как вы работаете над созданием нашего сайта! Несмотря на то, что проект все еще в процессе разработки, уже сейчас виден ваш высокий профессионализм и внимание к деталям. Ваша команда не только воплощает наши идеи в жизнь, но и предлагает креативные решения, которые делают сайт еще лучше. Мы особенно впечатлены тем, как вы умело сочетаете дизайн и функциональность, делая интерфейс интуитивно понятным и привлекательным. Это важно для нас, так как мы стремимся предоставить нашим клиентам наилучший пользовательский опыт. Огромное спасибо за вашу тяжелую работу и творческий подход. Мы с нетерпением ждем запуска сайта и уверены, что он превзойдет все наши ожидания!"</p>
                </div>
            </div>
                </Slide>
            </FullPage>
            </body>
        </html>
        );
}
export default Header
