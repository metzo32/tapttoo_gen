import { useState } from 'react'
import s from '../stores/styling'
import CareerCards from '../components/CareerCards'
import CareerAccordionTitle from '../components/CareerAccordionTitle'
import { CareerAccordionData } from '../stores/CareerAccordionData'

const Accordion = () => {
  const [openStates, setOpenStates] = useState(
    CareerAccordionData.map(() => false)  //초기값은 모두 닫혀있다.
  );

  const handleToggle = (index:number) => {  //클릭된 항목의 인덱스
    setOpenStates((prevStates) => // setOpenStates로 openStates 배열 업데이트
      prevStates.map((state, i) => (i === index ? !state : state))  //map으로 배열을 순회하며 클릭된 항목 상태 바꿈
    );
  };


  return (
       <>
      {CareerAccordionData.map((data, index) => ( // 매개변수 data와 index를 받아 순회
        <s.Accordion key={data.id} className={openStates[index] ? 'acc-open' : 'acc'}>
          {/* openStates[index]가 true면 acc-open, false면 acc 적용 */}
          <CareerAccordionTitle
            number={`0${data.id}.`}
            header={data.title}
            onClick={() => handleToggle(index)}
          />
          <s.CareerDetail className={openStates[index] ? 'cardbox-open' : 'cardbox'}>
            {data.details.map((detail, i) => (
              <CareerCards
                key={i}
                title={detail.title}
                semititle={detail.semititle}
                text={detail.text}
                hoverTitle={detail.hoverTitle}
                hoverSemititle={detail.hoverSemititle}
                hoverText={detail.hoverText}
                imgsource={detail.imgsource}
              />
            ))}
          </s.CareerDetail>
        </s.Accordion>
      ))}
    </>
  );
};

export default Accordion;