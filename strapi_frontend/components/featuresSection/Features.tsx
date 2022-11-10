import CheckMark from '../../modules/main/CheckMark'
import Men from '../../modules/main/Men'
import Women from '../../modules/main/women'

const FeaturesPage = () => {
  const array_of_Gastronomen_benefits = [
    'Finde die besten Gastro-Jobs Deiner Stadt',
    'Erhalte die meisten Benefits',
    'Fairer Lohn ab 16 EUR / h',
    'Auch für Quereinsteiger',
    'Kostenlos - für immer!',
  ]

  const array_of_kellner_benefits = [
    'Finde Kellner in 60 Sekunden',
    'Direkt in Deinem Umkreis',
    'Kostenlose Anmeldung',
    'Keine Vermittlungskosten',
    'Von der Gastro für die Gastro',
  ]

  return (
    <div className={'flex justify-center items-center flex-col mt-[91px]'}>
      <div
        className={
          'bg-[#CCFA69] text-black h-6 w-fit p-4 rounded-full flex items-center justify-center cursor-pointer'
        }
      >
        <p className={`font-[500] text-sm`}>Tag goes Here</p>
      </div>
      <div className={'text-3xl font-archia mt-2 font-bold text-[#4A6E85]'}>
        Deine Vorteile
      </div>
      <div className={'flex gap-12 mt-[54px]'}>
        <div
          className={
            'w-[472px] h-[672px] bg-[#423A3F] rounded-[100px] relative flex justify-start flex-col items-center overflow-y-hidden'
          }
        >
          <div className={'text-3xl font-bold text-white mt-[58px]'}>
            Gastronomen
          </div>
          <ul className={'mt-[20px]'}>
            {array_of_kellner_benefits.map((benefit) => (
              <li
                key={benefit}
                className={
                  'bg-[#5A5056] rounded-[30px] p-1 text-white px-[65px]  flex gap-3 mb-5'
                }
              >
                <CheckMark />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
          <div className={'relative top-[53px]'}>
            <Men />
          </div>
        </div>
        <div
          className={
            'w-[472px] h-[672px] bg-[#4A6E85] rounded-[100px] relative flex justify-start flex-col items-center overflow-y-hidden'
          }
        >
          <div className={'text-3xl font-bold text-white mt-[58px]'}>
            Kellner
          </div>
          <ul className={'mt-[20px]'}>
            {array_of_Gastronomen_benefits.map((benefit) => (
              <li
                key={benefit}
                className={
                  'bg-[#839DA8] rounded-[30px] p-1 text-white px-[30px]  flex gap-3 mb-5'
                }
              >
                <CheckMark />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
          <div className={'relative top-[53px]'}>
            <Women />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturesPage
