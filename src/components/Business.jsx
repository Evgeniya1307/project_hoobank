import React from 'react'
import { features } from '../constants'
import styles, {layout} from '../style'
import Button from './Button'


//карточки функций
const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);




//you do the business
const Business = () => {
  return (
<section id='features' className={layout.section}> {/**в секции из layout */}

<div className={layout.sectionInfo}>
<h2 className={styles.heading2}>You do the business, <br className="sm:block hidden" /> we’ll handle
the money.</h2> {/*sm:block hidden -блок на малых устройствах */}
<p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        With the right credit card, you can improve your financial life by
        building credit, earning rewards and saving money. But with hundreds
        of credit cards on the market.
      </p>
      <Button styles={`mt-10`} />
</div>
<div className={`${layout.section} flex-col`}>
{features.map((feature, index) => ( //сопаставлю все фу-ииполучаю одну индивидуальную фу-ию и индекс каждой карты
  <FeatureCard key={feature.id} {...feature} index={index} />//мнногоразовый компонент функций карты  
))}
</div>
</section>
  )
}

export default Business
