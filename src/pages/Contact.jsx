import React, { useState } from 'react'

const Contact = () => {
  const [clientData,setClientData]=useState({
    имя:'',
    Страна:'',
    Город:'',
    Email:'',
    телефон:'',
    идее:''
  })
  const onClientdata=(e)=>{
    setClientData((prev)=>{
      return {...prev,[e.target.name]:e.target.value}
    })
  }
  const onSubmits=(e)=>{
    e.preventDefault()
    console.log(clientData);
    
  }
  return (
    <div>
      <div className='container'>
        <img className='w-full h-[50vh] md:h-[80vh] mt-5 mb-10 rounded-2xl' src="https://www.aslg.kz/assets/contact-banner-BSN6W-fk.jpg" alt="" />

        <p className='text-[#0563AB] text-[18px] md:text-[22px] mb-3 lg:mb-5 font-bold'>Контакты</p>
          <div className='lg:flex block w-full items-center justify-between mb-16'>
            <h2 className='lg:leading-[50px] leading-[30px] text-[20px] md:text-[40px] lg:text-[40px] max-w-[550px] font-bold'>Свяжитесь с нами в любое время</h2>
            <p className='max-w-[407px] leading-7 text-md lg:text-[18px]'>Мы здесь, чтобы помочь. Независимо от того, есть ли у вас вопросы или вам нужна помощь, наша команда готова оказать поддержку и обеспечить гладкое взаимодействие.</p>
          </div>

      <div className='w-full bg-[#F6F6F6] block lg:flex rounded-2xl mb-10 p-10'>
            <div className="flex-1">
               <p className='md:text-[36px] text-[22px] font-bold mb-5'>Связаться</p>
               <form onSubmit={onSubmits} >
                 <input onChange={onClientdata} value={clientData.имя} type="text" name='имя' className='w-full bg-transparent px-3 mb-3 py-2 pb-3 focus:outline-none border-b border-b-neutral-400' placeholder='Ваше имя' />
                 <input onChange={onClientdata} value={clientData.Страна} name='Страна' className='w-full bg-transparent px-3 py-2 pb-3 mb-3 focus:outline-none border-b border-b-neutral-400' type="text" placeholder='Страна' />
                 <input onChange={onClientdata} value={clientData.Город} name='Город' className='w-full bg-transparent px-3 pb-3 mb-3 py-2 focus:outline-none border-b  border-b-neutral-400' type="text" placeholder='Город' />
                 <input onChange={onClientdata} value={clientData.Email} name='Email' className='w-full bg-transparent px-3 pb-3 mb-3 py-2 focus:outline-none border-b  border-b-neutral-400'  type="text" placeholder='E-mail' />
                 <input onChange={onClientdata} value={clientData.телефон} name='телефон' className='w-full bg-transparent px-3 pb-3 mb-3 py-2 focus:outline-none border-b  border-b-neutral-400' type="text" placeholder='Ваш телефон' />
                 <textarea onChange={onClientdata} value={clientData.идее} className='w-full h-[120px] bg-transparent px-3 pb-3 mb-3 py-2 focus:outline-none border-b  border-b-neutral-400' type="text" name='идее' placeholder='Давайте поговорим о вашей идее' />
                 <button type='submit' className='bg-blue-800 rounded-xl hover:shadow-xl hover:bg-blue-600 transition-all text-white font-medium w-full p-2'>Рассчитать</button>
               </form>
            </div>
            <div className="flex-1"></div>
      </div>
      </div>
    </div>
  )
}

export default Contact