import Image from 'next/image'
import GroupIcon from '../../assets/img/group_email.svg'

export const NewsLetter = () => {
  return (
    <div
      className={
        'bg-primaryColor py-[100px]  border-left  w-full flex flex-col items-center'
      }
    >
      <div className={'flex items-center justify-center gap-[80px]'}>
        <div className={'flex flex-col items-center'}>
          <div className={'text-[40px] text-white'}>Bleib up to date!</div>
          <div className={'text-[20px] w-[390px] text-white mt-7'}>
            Wir informieren Dich über die wichtigsten Neuerungen, Vorteile und
            alle Dinge, bei denen Du auf jeden Fall dabei sein musst.
          </div>
        </div>
        <div>
          <input
            type="text"
            className={
              'w-[395px] px-6 py-7 font-[2.5rem] text-[1.5rem] outline-none text-white bg-primaryColor border border-[#FFFFFF] rounded-bl-3xl rounded-tr-3xl rounded-br-3xl'
            }
            placeholder={'Email-Adresse'}
          />
          <div className="mt-9 w-full">
            <button className=" p-5 bg-secondaryColor text-[2rem] rounded-bl-3xl rounded-tr-3xl rounded-br-3xl w-full text-primaryColor">
              Weiter
            </button>
          </div>
        </div>
      </div>
      <Image
        src={GroupIcon}
        width={'1600'}
        height={'1600'}
        alt={'group Icon'}
      />
    </div>
  )
}
