import React, { useState } from 'react'
import { accordion, cards, containers, Services } from '../../constans';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import AutoSlider from '../components/Slider';
import { FiArrowUpRight } from "react-icons/fi";
const Home = () => {
  const [data, setData] = useState({
    Откуда: '',
    Куда: '',
    Описание: '',
    имя: '',
    телефон: ''
  });

  const [accordionData, setAccordionData] = useState(
    accordion.map((item) => ({ ...item, isSelected: false })) 
  );

  const onData = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    setData({
      Откуда: '',
      Куда: '',
      Описание: '',
      имя: '',
      телефон: ''
    });
  };

  const onActive = (id) => {
    setAccordionData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, isSelected: !item.isSelected } : item
      )
    );
  };

  return (
    <div>
      <div className='container'>
        <div className='lg:flex block items-center w-full mt-3 gap-x-24'>
          <img className='h-[70%] md:h-[75vh] w-full lg:w-[50%] rounded-xl' src="https://www.aslg.kz/assets/banner-D0rjUrGa.png" alt="Home img" />
          <div className='lg:w-[50%] w-full'>
            <p className='lg:text-[50px] text-[20px] md:text-[40px] mt-6 font-semibold md:leading-[50px] lg:leading-[60px]'>Надежная <br className='lg:block hidden' /> логистика для <br lassName='lg:block hidden' /> вашего бизнеса</p>
            <p className='mt-6 lg:text-[30px] text-md md:text-[20px]'>Рассчитайте стоимость доставки</p>
            <form onSubmit={onSubmit} className='mt-3 flex flex-col gap-y-5'>
              <div className='grid lg:grid-cols-2 grid-cols-1 gap-y-5 w-full items-center gap-x-5'>
                <input value={data.Откуда} onChange={onData} name='Откуда' className='border-2 border-gray-300 p-2 rounded-2xl focus:outline-none focus:border-[#3498db] w-full' type="text" placeholder='Откуда' />
                <input value={data.Куда} onChange={onData} name='Куда' className='border-2 w-full border-gray-300 p-2 rounded-2xl focus:outline-none focus:border-[#3498db]' type="text" placeholder='Куда' />
              </div>
              <input value={data.Описание} onChange={onData} name='Описание' className='border-2 border-gray-300 p-2 rounded-2xl focus:outline-none focus:border-[#3498db] w-full' type="text" placeholder='Описание груза (вес, объем)' />
              <div className='grid lg:grid-cols-2 grid-cols-1 gap-y-5 w-full items-center gap-x-5'>
                <input value={data.имя} onChange={onData} name='имя' className='border-2 w-full border-gray-300 p-2 rounded-2xl focus:outline-none focus:border-[#3498db]' type="text" placeholder='Ваше имя' />
                <input value={data.телефон} onChange={onData} name='телефон' className='border-2 w-full border-gray-300 p-2 rounded-2xl focus:outline-none focus:border-[#3498db]' type="text" placeholder='Ваш телефон' />
              </div>
              <button type='submit' className='bg-blue-800 rounded-xl hover:shadow-xl hover:bg-blue-600 transition-all text-white font-medium w-full p-2'>Рассчитать</button>
            </form>
          </div>
        </div>
      </div>

      <section className="bg-[url('./bgMap.svg')] w-full h-auto md:h-[650px] bg-cover bg-center mt-20 pt-5">
        <div className='container'>
          <p className='text-[#0563AB] text-[18px] md:text-[22px] mb-3 lg:mb-5 font-bold'>О компании</p>
          <div className='lg:flex block w-full items-center justify-between mb-16'>
            <h2 className='lg:leading-[80px] leading-[30px] text-[20px] md:text-[40px] lg:text-[50px] max-w-[550px] font-bold'>Решение для потребностей вашего бизнеса</h2>
            <p className='max-w-[407px] leading-7 text-md lg:text-[18px]'>Мы делаем логистическую доставку намного проще и понятнее. Сочетание хорошего сервиса и технологий делает все эффективным</p>
          </div>
          <div className='w-full grid grid-cols-1 mx-auto md:grid-cols-2 lg:grid-cols-3 items-center gap-y-4 gap-x-5'>
            {cards.map((card) => {
              return <div className='flex-1 min-h-[170px] lg:min-h-[220px] bg-white shadow-lg p-5'>
                <div className='flex w-full  gap-x-5 items-center'>
                  <img className='p-2 h-[50px] md:h-[80px] rounded-md bg-[#96D1FF]' src={card.imgUrl} alt="" />
                  <p className='md:text-[20px] text-md leading-7 font-bold'>{card.title}</p>
                </div>
                <p className='md:mt-6 mt-3 text-[#9C9C9C] text-sm md:text-[16px]'>{card.subtitle}</p>
              </div>
            })}
          </div>
        </div>
      </section>

      <div className='w-full p-10 mt-6 bg-[#EFF8FF]'>
        <div className='container pb-10 gap-y-4 border-b-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between'>
          <div className='flex-1 text-center'>
            <h3 className='md:text-[60px] text-[40px]'>2+</h3>
            <p className='md:text-[22px] text-[20px]'>года на рынке</p>
          </div>
          <div className='flex-1 text-center'>
            <h3 className='md:text-[60px] text-[40px]'>1000+</h3>
            <p className='md:text-[22px] text-[20px]'>тонн ежемесячно</p>
          </div>
          <div className='flex-1 text-center'>
            <h3 className='md:text-[60px] text-[40px]'>100</h3>
            <p className='md:text-[22px] text-[20px]'>основных маршрутов</p>
          </div>
        </div>
      </div>

      <div className='container mt-20'>
        <p className='text-[#0563AB] text-[18px] md:text-[22px] mb-6 lg:mb-10 font-bold'>Преимущества</p>
        <div className='md:flex block w-full items-center justify-between mb-10'>
          <p className='lg:text-[60px] md:text-[40px] text-[24px] font-bold max-w-[400px] leading-9 md:leading-[75px]'>Наши преимущества</p>
          <p className='md:text-[18px] text-[16px] mt-3 max-w-[400px]'>Сотрудничество с нами — это гарантия того, что ваш груз окажется в нужном месте в нужное время, а вы получите высокий уровень сервиса и уверенность в результате.</p>
        </div>
        <div className='grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-5'>
          {containers.map((card) => {
            return <div className='rounded-lg cursor-pointer hover:bg-[#0563AB] transition-all hover:text-white mx-auto bg-[#EFF8FF] w-full md:w-[424px] md:h-[400px] p-5 mb-2 lg:mb-10'>
              <div className='flex justify-between items-center lg:mb-10 '>
                <p className='lg:text-[60px] md:text-[40px] text-[28px]'>{card.number}</p>
               <FiArrowUpRight className='text-3xl md:text-6xl'/>
              </div>
              <p className='md:text-[26px] text-[18px]'>{card.title}</p>
              <p className='md:text-[18px] overflow-visible text-sm mt-5'>{card.subtitle}</p>
            </div>
          })}
        </div>
      </div>

       <section>
       <div className="container mt-20">
        <p className='text-[#0563AB] text-[18px] md:text-[22px] mb-5 lg:mb-10 font-bold'>Услуги</p>
        <div className='lg:flex block w-full gap-x-4 items-center justify-between mb-10'>
          <p className='lg:text-[50px] md:text-[40px] text-[20px] font-bold w-full lg:w-[70%] leading-7 md:leading-[70px]'>Откройте для себя полный спектр услуг, которые мы предлагаем для доставки</p>
          <p className='md:text-[18px] text-md mt-4 max-w-[400px]'>Мы делаем логистическую доставку намного проще и понятнее. Сочетание хорошего обслуживания и технологий делает все эффективным</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-4 mt-16'>
          {Services.map((servis) => {
            return <div style={{ backgroundImage: `url(${servis.imgurl})` }} className={`p-3 relative rounded-xl w-full md:w-[314px] h-[360px] md:h-[450px] bg-cover bg-center`}>
              <p className='absolute bottom-6 text-white text-center text-lg md:text-[25px]'>{servis.title}</p>
            </div>
          })}
        </div>
      </div>
       </section>

      <div className="container mt-10 lg:mt-32 mb-10">
        <p className='text-[#0563AB] text-[18px] md:text-[22px]  lg:mb-10 font-bold'>ЧЗВ</p>
        <div className='block lg:flex w-full gap-x-4 gap-y-3 items-center justify-between mb-10'>
          <p className='lg:text-[60px] md:text-[40px] text-[20px] font-bold max-w-[400px] leading-[75px]'>Часто задаваемые вопросы</p>
          <p className='text-[18px] max-w-[400px]'>Изучите наш подробный раздел часто задаваемых вопросов, который ответит на все ваши вопросы и поможет вам спланировать приятное и незабываемое путешествие.</p>
        </div>

        <div className='flex flex-col gap-y-4'>
          {
            accordionData.map((item) => {
              return (
                <div key={item.id} className='md:w-[70%] w-full cursor-pointer transition-all rounded-2xl p-5 border hover:bg-slate-200'>
                  <p className='w-full flex items-center text-sm md:text-[24px] font-medium justify-between'>
                    {item.title}
                    {!item.isSelected && <MdKeyboardArrowDown onClick={() => onActive(item.id)} className='text-xl transition-all cursor-pointer' />}
                    {item.isSelected && <MdKeyboardArrowUp onClick={() => onActive(item.id)} className='text-xl transition-all cursor-pointer' />}
                  </p>
                  {item.isSelected && <p className='md:w-[60%] w-full mt-6 text-[#676767] text-[12px] md:text-[20px] leading-6 overflow-visible h-auto'>{item.subtitle}</p>}
                </div>
              )
            })
          }
        </div>
      </div>

      <div className='w-full pt-10 md:pt-20  relative h-[420px] bg-[#EFF8FF] mt-20'>
              <div className="container">
                  <p className='text-center font-bold md:text-[40px] text-[24px] lg:text-[50px]'>Наши партнеры</p>
                 <div className="overflow-x-hidden  absolute flex items-center justify-center" >
                   <AutoSlider/>
                   </div>
              </div>
      </div>

      
    </div>
  );
}

export default Home;
