import React from 'react'
import { RiTelegram2Fill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className='w-full py-10 px-5 lg:px-20  bg-[#0563AB]'>
        <div className="container">
            <a href="#"> <img className='md:max-w-[350px] max-w-[150px] h-20 z-50' src="https://www.aslg.kz/assets/footer-logo-cNa-jtVT.png" alt="" /></a>
        </div>
        <div className="container bg-white w-full h-[2px] my-10"></div>
        <div className='container1 grid gap-y-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full'>
          <div>
            <h3 className='font-medium text-white mb-3 md:mb-5 text-[16px]'>ИНФОРМАЦИЯ</h3>
            <ul className='flex flex-col text-white gap-y-2 lg:gap-y-3'>
              <li><Link to={'/about'} className='text-[16px] cursor-pointer font-medium'>О компании</Link></li>
              <li><Link to={'/tarif'} className='text-[16px] cursor-pointer font-medium' >Тариф</Link></li>
              <li><Link to={'/contact'} className='text-[16px] cursor-pointer font-medium'  href="#">Контакты</Link></li>
              <li><Link to={'/vakansiya'} className='text-[16px] cursor-pointer font-medium'  href="#">Вакансии</Link></li>
            </ul>
          </div>
          <div>
            <h3 className='font-medium text-white  mb-3 md:mb-5 text-[16px]'>УСЛУГИ</h3>
            <ul className='flex flex-col text-white gap-y-2 lg:gap-y-3'>
              <li className='text-[16px] cursor-pointer font-medium'>Международные грузоперевозки</li>
              <li className='text-[16px] cursor-pointer font-medium'>Складирование и обработка грузов</li>
              <li className='text-[16px] cursor-pointer font-medium'>Таможенное оформление</li>
              <li className='text-[16px] cursor-pointer font-medium'>Логистический консалтинг</li>
            </ul>
          </div>
          <div>
            <h3 className='font-medium text-white  mb-3 md:mb-5 text-[16px]'>Контакты</h3>
            <ul className='flex flex-col text-white gap-y-2 lg:gap-y-3'>
               <li className='text-[16px] cursor-pointer font-medium'>+7 775 337 85 95</li>
              <li className='text-[16px] cursor-pointer font-medium'>sultanbek.asilbek@gmail.com</li>
              <li className='text-[16px] cursor-pointer font-medium'>Республика Казахстан, г.Алматы, Тулебаева 38, Бизнес центр Жетысу, офис 512</li>
            </ul>
          </div>
          <div>
            <h3 className='font-medium text-white  mb-3 md:mb-5 text-[16px]'>СЛЕДИТЕ ЗА НАМИ В СОЦИАЛЬНЫХ СЕТЯХ</h3>
            <ul className='flex flex-col text-white gap-y-2 lg:gap-y-3'>
              <li className='text-[16px] cursor-pointer font-medium'>Присоединяйтесь к нам</li>
              <ul className='flex items-center gap-x-4 mt-2'>
                <li><a className='text-3xl cursor-pointer' href=""><FaInstagram/></a></li>
                 <li><a className='text-3xl cursor-pointer'  href=""><RiTelegram2Fill/></a></li>
                 <li><a className='text-3xl cursor-pointer' href=""><FaWhatsapp/></a></li>
              </ul>
              
            </ul>
          </div>
        </div>
        <div className="container bg-white w-full h-[2px] my-10"></div>
        <p className='text-white text-[18px] text-center'>© 2024 Все права защищены</p>
    </div>
  )
}

export default Footer
