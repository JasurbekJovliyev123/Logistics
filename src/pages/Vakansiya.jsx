import React from 'react'
import { texts } from '../../constans'

const Vakansiya = () => {
  return (
    <div className='container'>
      <img className='w-full mb-10 h-[220px] md:h-[360px] mt-5 rounded-2xl' src="https://www.aslg.kz/assets/vacancy-QEr26Jtf.jpg" alt="" />
      <p className='md:text-[20px] text-md text-[600] mb-8'>Asilbek Sultanbek Logistics Group — молодая и динамично развивающаяся логистическая компания в Казахстане. Мы специализируемся на автоперевозках и предлагаем услуги по доставке грузов из Китая, Европы, стран СНГ, а также по локальным направлениям внутри страны.</p>
      <div className='flex flex-col gap-y-3 mb-6'>
        {texts.map((text)=>{
          return <p className='text-[#0563AB] text-lg md:text-[24px] font-medium'>{text}</p>
        })}
      </div>

      <p className='text-[20px]'>По вакансиям обращаться:</p>
      <p className='text-[16px] mb-8'>+7 775 337 85 95  <br />
      sultanbek.asilbek@gmail.com
      </p>
    </div>
  )
}

export default Vakansiya