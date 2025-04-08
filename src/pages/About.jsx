import React from 'react'

const About = () => {
  return (
    <div className='container'>
      <h3 className='text-[24px] md:text-[50px] mt-6 font-bold mb-7'>О Компании</h3>
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-x-8 mb-20">
      
            <div  className='order-2 lg:order-1 flex-1'>
                
                <p className='text-md md:text-[18px] mb-7'>Asilbek Sultanbek Logistics Group одна из молодых логистических компаний в Казахстане. Мы предлагаем логистические услуги в сфере автоперевозок. По таким направлениям как Китай, Европа, страны СНГ, локальные перевозки. Мы – надежный партнер в мире логистики, специалтзирующийся на предоставлении комплексных решений для вашего бизнеса. Мы понимаем, что бизнес наших клиентов требует надежности, скорости и безопасности. Именно поэтому наши решения основаны на оптимизации логистических процессов, прозрачности и индивидуальном подходе к каждой задаче.</p>
                <p className='text-md md:text-[18px] mb-7'>Основатель компании Асылбек Султанбек, энергичный, молодой предприниматель. Несмотря на молодой возраст (29 лет) пережил много трудностей, связанных со здоровьем. В 2006 году, в возрасте 11 лет, он заболел ревматоидным артритом, что привело к полной дисфункции его тела. Он не мог самостоятельно ходить и как либо функционировать. Пройдя сложный путь лечения, благодаря вере, он смог вернуть себе здоровый образ жизни. К 21 году он поступил в университет NARXOZ, где ведет активную студенческую жизнь. Занимет 1 места по соревнованиям в шахматы и дважды выигрывает IT Hakaton. Именно его упорство и новаторское мышление привели его к реализации многих проектов.</p>
                <h3 className='my-7 text-[24px] md:text-[50px] font-bold'>Как работаем</h3>
                <p className='text-md md:text-[18px]'>Вы оставляете заявку на сайте, e-mail, whatsapp, телефон.
                  С вами связываются наши связываются наши специалисты
                  Мы предоставляем вам каждодневный отчет по грузам
                  Проводим закрытие счета после выгрузки</p>
            </div>
            <img className='w-[100%] order-1 lg:order-2 mb-6 h-[50vh] lg:h-[70vh] rounded-xl' src="https://www.aslg.kz/assets/company-logo-B9zCESHG.jpg" alt="" />
      </div>
    </div>
  )
}

export default About
