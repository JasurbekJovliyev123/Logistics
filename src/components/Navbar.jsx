import React, { useState } from 'react'
import { languages } from '../../constans'
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { MdOutlineClose } from "react-icons/md";
const Navbar = () => {
  const [language, setLanguage] = useState('https://www.aslg.kz/assets/russian-B_DAX6qp.png')
  const [lang, setLang] = useState(false)
  const [modal, setModal] = useState(false)

  const onSelect = (select) => {
    setLang(!lang)
    setLanguage(select)
  }

  React.useEffect(() => {
    if (modal) {
      document.body.style.overflow = 'hidden';  
    } else {
      document.body.style.overflow = 'auto';  
    }

    return () => {
      document.body.style.overflow = 'auto';
    }
  }, [modal]);

  return (
    <div>
      <header className='max-w-[1340px] px-5 py-5 flex items-center justify-between mx-auto'>
        <a href="#">
          <img className='md:max-w-[220px] max-w-[180px] cursor-pointer' src="https://www.aslg.kz/assets/navbar-logo-CnUEI9Jo.png" alt="" />
        </a>
        <div className='flex lg:hidden items-center gap-x-5'>
          <div>
            <img onClick={() => setLang(!lang)} className='w-8 h-8 rounded-full transition-all cursor-pointer' src={language} alt="" />
            {
              lang && <div className='absolute  rounded-md z-50 bg-white top-20 flex flex-col gap-y-2 border  transition-all shadow-lg p-2'>
                {languages.map((lang) => {
                  return <img key={lang.id} onClick={() => onSelect(lang.imgurl)} className='w-8 h-8 rounded-full transition-all hover:scale-110 cursor-pointer hover:bg-slate-300' src={lang.imgurl} />
                })}
              </div>
            }
          </div>
          <AiOutlineMenu onClick={() => setModal(!modal)} className='text-2xl transition-all duration-500 cursor-pointer' />
        </div>
        <ul className='lg:flex hidden items-center gap-x-6'>
          <li><Link to={'/'} className='text-[18px] font-medium'>Главная</Link></li>
          <li><Link to={'/about'} className='text-[18px] font-medium'>О компании</Link></li>
          <li><a className='text-[18px] font-medium' href="Услуги">Услуги</a></li>
          <li><a className='text-[18px] font-medium' href="#">Партнеры</a></li>
          <li><Link to={'/tarif'} className='text-[18px] font-medium'>Тариф</Link></li>
          <li><Link to={'/vakansiya'} className='text-[18px] font-medium' href="#">Вакансии</Link></li>
          <li><Link to={'/contact'} className='text-[18px] font-medium' href="#">Контакты</Link></li>
          <li>
            <img onClick={() => setLang(!lang)} className='w-8 h-8 rounded-full transition-all cursor-pointer' src={language} alt="" />
            {
              lang && <div className='absolute  rounded-md top-20 flex flex-col gap-y-2 border  transition-all shadow-lg p-2'>
                {languages.map((lang) => {
                  return <img key={lang.id} onClick={() => onSelect(lang.imgurl)} className='w-8 h-8 rounded-full transition-all hover:scale-110 cursor-pointer hover:bg-slate-300' src={lang.imgurl} />
                })}
              </div>
            }
          </li>
        </ul>
      </header>

      <div className={`w-full mx-auto h-[60vh] transition-all duration-700 ${modal ? 'transform translate-x-0 opacity-100' : 'transform translate-x-[100%] opacity-0'} border rounded-2xl p-5 absolute top-2 bg-white text-black z-50`}>
                     <MdOutlineClose className='text-2xl ml-auto cursor-pointer' onClick={() => setModal(!modal)}/>
                             <ul className='flex flex-col  items-center gap-y-4'>
                                <li><Link to={'/'}  onClick={() => setModal(!modal)} className='text-[18px] font-medium'>Главная</Link></li>
                                 <li><Link to={'/about'}  onClick={() => setModal(!modal)} className='text-[18px] font-medium'>О компании</Link></li>
                                <li><a onClick={() => setModal(!modal)} className='text-[18px] font-medium'  href="#">Услуги</a></li>
                               <li><a onClick={() => setModal(!modal)} className='text-[18px] font-medium' href="#">Партнеры</a></li>
                               <li><Link to={'/tarif'}  onClick={() => setModal(!modal)} className='text-[18px] font-medium'>Тариф</Link></li>
                               <li><Link to={'/vakansiya'}  onClick={() => setModal(!modal)} className='text-[18px] font-medium' href="#">Вакансии</Link></li>
                               <li><Link to={'/contact'}  onClick={() => setModal(!modal)} className='text-[18px] font-medium' href="#">Контакты</Link></li>
                               <li className='hidden lg:block'>
                                 <img onClick={() => setLang(!lang)} className='w-8 h-8 rounded-full transition-all cursor-pointer' src={language} alt="" />
                                 {
                                   lang && <div className='absolute  rounded-md top-20 flex flex-col gap-y-2 border  transition-all shadow-lg p-2'>
                                     {languages.map((lang) => {
                                       return <img key={lang.id} onClick={() => onSelect(lang.imgurl)} className='w-8 h-8 rounded-full transition-all hover:scale-110 cursor-pointer hover:bg-slate-300' src={lang.imgurl} />
                                     })}
                                   </div>
                                 }
                               </li>
                             </ul>
      </div>

      <div className={`w-full h-full fixed top-0 left-0 bg-black bg-opacity-50 ${modal ? 'backdrop-blur-sm' : 'hidden'} z-40`}></div>
    </div>
  )
}

export default Navbar
