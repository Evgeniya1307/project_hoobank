import React from 'react'
import {stats} from '../constants';
import styles from '../style';


//3800+ user active статистика
const Stats = () => {
  return (
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
  {/*сопоставлю статистику */}
  {stats.map((stat)=> (//получаю индивидуальную статистику и возвращаю для каждой статистики
    <div key={stat.id} className={`flex-1 flex justify-start items-center flex-row m-3`} >
        <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white">
          {stat.value} {/*значение цифры */}
        </h4>
        <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">
          {stat.title} {/* статистика заголовок идут из массива*/}
        </p>
      </div>
    ))}
  )
  </section>
  )
}

export default Stats
