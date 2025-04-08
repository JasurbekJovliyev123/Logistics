import React, { useState } from 'react'
import { CiLocationOn } from "react-icons/ci";
import { FaTruckArrowRight } from "react-icons/fa6";
import { IoMdTimer } from "react-icons/io";
import { FaMoneyCheckAlt } from "react-icons/fa";

const Tarif = () => {
  const moneyCards = [
    {
      img: <CiLocationOn />,
      title: 'Адресная доставка',
      subtitle: 'Доставка до адресата с указанием удобного времени'
    },
    {
      img: <FaTruckArrowRight />,
      title: 'Собственный автопарк',
      subtitle: 'Предоставляем широкий спектр услуг в перевозке грузов различных габаритов.'
    },
    {
      img: <FaMoneyCheckAlt />,
      title: 'Оплата в один конец',
      subtitle: 'Вы оплачиваете стоимость перевозки в один конец, не платите за обратную дорогу.'
    },
    {
      img: <IoMdTimer />,
      title: 'Доставка груза точно в срок',
      subtitle: 'Мы гарантируем качественную доставку груза точно в указанный срок.'
    }
  ];
  
    const [data, setData] = useState({
        Откуда: '',
        Куда: '',
        Описание: '',
        имя: '',
        телефон: '',
        Email:'',
        Страна:''
      });
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
          телефон: '',
          Email:'',
          Страна:''
        });
        console.log(data);
        
      };
  return (
    <div>
          <div className='container'>
              <img className='lg:h-[80vh] h-[50vh] w-full my-10 rounded-2xl' src="https://www.aslg.kz/assets/tariff-banner-C7O3eqM4.png" alt="" />
              <div>
              <p className='text-[#0563AB] text-[18px] md:text-[22px] mb-3 lg:mb-5 font-bold'>Тариф</p>
                <div className='lg:flex block w-full items-center justify-between mb-16'>
                    <h2 className='lg:leading-[80px] leading-[30px] text-[20px] md:text-[40px] lg:text-[65px] max-w-[550px] font-bold'>Гибкие варианты ценообразования</h2>
                    <p className='max-w-[407px] leading-7 text-md lg:text-[18px]'>Мы упрощаем логистическую доставку, делая ее более простой и понятной. Сочетая выдающийся сервис с передовыми технологиями, мы обеспечиваем эффективность на каждом этапе</p>
                </div>
              </div>

              <div className='lg:flex block justify-between items-center mb-10'> 
                 <div className='mb-8'>
                    <p className='text-[25px] mb-4'>Рассчитайте стоимость доставки</p>
                     <form onSubmit={onSubmit} className='mt-3 flex flex-col gap-y-5'>
                        <div className='grid md:grid-cols-2 grid-cols-1 w-full gap-y-4 items-center gap-x-5'>
                            <input value={data.Откуда} onChange={onData} name='Откуда' className='border-2 border-gray-300 p-2 rounded-2xl focus:outline-none focus:border-[#3498db] w-full' type="text" placeholder='Откуда' />
                             <input value={data.Куда} onChange={onData} name='Куда' className='border-2 w-full border-gray-300 p-2 rounded-2xl focus:outline-none focus:border-[#3498db]' type="text" placeholder='Куда' />
                        </div>
                            <textarea value={data.Описание} onChange={onData} name='Описание' className='border-2 border-gray-300 p-2 rounded-2xl focus:outline-none h-[120px] focus:border-[#3498db] w-full' type="text" placeholder='Описание груза (вес, объем)' />
                        <div className='grid md:grid-cols-2 grid-cols-1 gap-y-4 w-full items-center gap-x-5'>
                            <input value={data.имя} onChange={onData} name='имя' className='border-2 w-full border-gray-300 p-2 rounded-2xl focus:outline-none focus:border-[#3498db]' type="text" placeholder='Ваше имя' />
                            <input value={data.телефон} onChange={onData} name='телефон' className='border-2 w-full border-gray-300 p-2 rounded-2xl focus:outline-none focus:border-[#3498db]' type="text" placeholder='Ваш телефон' />
                        </div>
                        <div className='grid md:grid-cols-2 grid-cols-1  gap-y-4 w-full items-center gap-x-5'>
                            <input value={data.Email} onChange={onData} name='Email' className='border-2 w-full border-gray-300 p-2 rounded-2xl focus:outline-none focus:border-[#3498db]' type="text" placeholder='E-mail' />
                            <input value={data.Страна} onChange={onData} name='Страна' className='border-2 w-full border-gray-300 p-2 rounded-2xl focus:outline-none focus:border-[#3498db]' type="text" placeholder='Страна' />
                        </div>
                        <button type='submit' className='bg-[#0563ab] rounded-xl hover:shadow-xl hover:bg-blue-600 transition-all text-white font-medium w-full p-2'>Рассчитать</button>
                     </form>
              </div>
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                     {
                      moneyCards.map((item)=>{
                        return <div className='w-full max-w-[320px] mx-auto h-auto rounded-2xl bg-[#F6F6F6] p-5'>
                          <div className='flex items-center gap-x-3'>
                              <p className='text-white bg-[#0563AB] inline-block p-5 text-3xl rounded-full'>{item.img}</p> 
                              <p className='text-[20px] font-medium'>{item.title}</p>
                          </div>
                          <p className='text-[16px] mt-6'>{item.subtitle}</p>
                        </div>
                      })
                     }
              </div>
              </div>
          </div>
    </div>
  )
}

export default Tarif