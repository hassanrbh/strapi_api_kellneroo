import FooterName from '../../assets/img/footer_name.svg'
import PhoneIcon from '../../assets/img/phone.svg'
import Image from 'next/image'

export const SecondaryFooter = () => {
  return (
    <div
      className={'bg-secondaryColor h-[84px] flex  items-center justify-center'}
    >
      <div className={'flex gap-2'}>
        <Image src={PhoneIcon} alt={'phone Icon'} />
        <Image src={FooterName} alt={'Footer Icon'} />
      </div>
    </div>
  )
}

export const PrimaryFooter = () => {
  return (
    <div
      className={'bg-primaryColor h-[123px] flex justify-around items-center'}
    >
      <div className={'text-white text-[18px]'}>KELLNEROO® © 2022</div>
      <div className={'text-white text-[18px] flex gap-5'}>
        <div>Impressum</div>
        <div>Datenschutz</div>
        <div>AGB</div>
        <div>Presse</div>
      </div>
    </div>
  )
}
