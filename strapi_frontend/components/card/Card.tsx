import React from 'react'
import Image from 'next/image'

import Profile from '../../assets/img/profile.svg'
import Coffie from '../../assets/icon/coffie.svg'
import Sun from '../../assets/icon/sun.svg'
import Moon from '../../assets/icon/moon.svg'
import Message from '../../assets/icon/message.svg'
import Dots from '../../assets/icon/3dots.svg'
import Clock from '../../assets/icon/clock.svg'
import Comment from '../../assets/icon/comment.svg'
import Like from '../../assets/icon/like.svg'
import Bookmark from '../../assets/icon/bookmark.svg'

import styles from '../heroSearchSection/Search.module.css'

type TCard = {
  index: number
}

function Card({ index }: TCard) {
  const jobTags = [
    'Job in Vollzeit',
    'Mini Job',
    'Job in Teilzeit',
    'Job in Berlin',
  ]

  return (
    <div
      className={`mb-[1rem] rounded-[1rem] flex bg-white mr-2 drop-shadow-lg	${styles.card}`}
    >
      {/* Left Side of Card */}
      <div className="relative h-90">
        {/* <Image src={Profile} alt="Picture of the author" className=""></Image> */}
        <div
          className="author-image"
          style={{
            backgroundImage: `url(${Profile.src})`,
            // width: '130px',
            // height: '100%',
            // borderRadius: '0.6rem',
          }}
        ></div>
        <p className="absolute text-[0.9rem] bg-lightGreen rounded-[1rem] pr-[0.7rem] pl-[0.7rem] top-1 left-1">
          NEU
        </p>
        <span className="absolute left-[50%] translate-x-[-50%] flex gap-x-2 bottom-2 ">
          <Image
            src={Coffie}
            alt="Picture of the author"
            width="17.5"
            height="15.3"
          />
          <Image
            src={Sun}
            alt="Picture of the author"
            width="17.5"
            height="15.3"
          />
          <Image
            src={Moon}
            alt="Picture of the author"
            width="17.5"
            height="15.3"
          />
        </span>
      </div>

      {/* Right side of Card */}

      <div className="font-body">
        <div className="bg-[#F1F1F1] p-[1rem] rounded-tr-[1rem] flex-col">
          <div className="flex justify-between font-body">
            <h3 className="text-[2rem]">Viktor</h3>
            <div className="flex items-center">
              <div
                style={{ background: index % 2 ? '#FDCB4A' : '#8AD300' }}
                className="w-2 mr-1 h-2 rounded-[50%]"
              ></div>
              <span className="text-[1rem] mt-[0.2rem] mr-2">
                {index % 2 ? 'Gestern ' : 'Online'}
              </span>
            </div>
          </div>
          <div className="font-body flex item-center ">
            <p className="text-[1.2rem] bg-lightGreen rounded-[1rem] pl-2 pr-2">
              Verfügbar
            </p>
            <div className="bg-[#433A3F] flex items-center rounded-[1rem] ml-[1rem] pl-2 pr-2 text-[10px] text-white">
              <Image
                src={Message}
                alt="Picture of the author"
                width="11"
                height="10"
              />
              <p className="pl-1">24 km</p>
            </div>
          </div>
          <div className="flex flex-wrap mt-2 gap-y-2">
            {jobTags.map((job, idx) => {
              return (
                <p
                  key={idx}
                  style={{ marginLeft: idx > 2 ? '0px' : '' }}
                  className={`border-[0.1rem] border-black pl-3 pr-3 text-[1.3rem] rounded-[1rem] flex ml-2 items-center ${styles.job__tag}`}
                >
                  <Image
                    src={Clock}
                    className="mr-2"
                    alt="Picture of the author"
                    width="11"
                    height="11"
                  />
                  {job}
                </p>
              )
            })}
          </div>
        </div>
        <div className="bg-white flex item-center justify-between m-[1rem] mb-0 rounded-b-[1rem]">
          <Image
            className="cursor-pointer"
            src={Dots}
            width="6"
            height="20"
            alt="3 dots"
          />
          <div className="flex item-center gap-x-3 mr-3">
            <div className="cursor-pointer like">
              <svg
                className="like"
                width="23"
                height="23"
                viewBox="0 0 23 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.7144 9.59003C21.3983 9.21051 21.0027 8.905 20.5555 8.69506C20.1084 8.48512 19.6206 8.37588 19.1267 8.37503H13.9962L14.6263 6.76629C14.8883 6.06191 14.9756 5.30447 14.8806 4.55895C14.7856 3.81343 14.5112 3.10209 14.0808 2.48593C13.6505 1.86977 13.077 1.36719 12.4098 1.02131C11.7425 0.675426 11.0012 0.496558 10.2496 0.50005C10.0332 0.500502 9.82152 0.56336 9.63992 0.681088C9.45832 0.798816 9.31454 0.966418 9.2258 1.1638L6.01927 8.37503H3.37529C2.48011 8.37503 1.62159 8.73061 0.988601 9.36354C0.35561 9.99648 0 10.8549 0 11.75V19.625C0 20.5201 0.35561 21.3786 0.988601 22.0115C1.62159 22.6444 2.48011 23 3.37529 23H17.6978C18.4874 22.9997 19.2519 22.7227 19.8583 22.217C20.4648 21.7114 20.8747 21.0091 21.0168 20.2325L22.4457 12.3575C22.5341 11.8708 22.5144 11.3707 22.388 10.8924C22.2616 10.4142 22.0317 9.96955 21.7144 9.59003ZM5.62549 20.75H3.37529C3.0769 20.75 2.79073 20.6315 2.57973 20.4205C2.36873 20.2095 2.2502 19.9234 2.2502 19.625V11.75C2.2502 11.4517 2.36873 11.1655 2.57973 10.9545C2.79073 10.7436 3.0769 10.625 3.37529 10.625H5.62549V20.75ZM20.2518 11.9525L18.8229 19.8275C18.775 20.0896 18.6356 20.3261 18.4295 20.4951C18.2235 20.664 17.9642 20.7543 17.6978 20.75H7.87569V9.73628L10.936 2.85129C11.251 2.94312 11.5435 3.09925 11.7951 3.30983C12.0468 3.5204 12.252 3.78084 12.3979 4.07472C12.5438 4.3686 12.6272 4.68953 12.6428 5.01725C12.6584 5.34498 12.6059 5.67238 12.4886 5.97879L11.8923 7.58753C11.7652 7.92757 11.7223 8.2933 11.7673 8.6535C11.8122 9.01371 11.9436 9.3577 12.1503 9.65611C12.357 9.95452 12.6328 10.1985 12.9543 10.3672C13.2757 10.5359 13.6332 10.6244 13.9962 10.625H19.1267C19.292 10.6248 19.4553 10.6609 19.605 10.7309C19.7547 10.8009 19.8872 10.903 19.993 11.03C20.1014 11.1553 20.1808 11.3029 20.2255 11.4624C20.2702 11.6218 20.2792 11.7892 20.2518 11.9525Z"
                  fill="#433A3F"
                />
              </svg>
            </div>
            <div className="cursor-pointer bookmark">
              <svg
                className="bookmark"
                width="24"
                height="23"
                viewBox="0 0 24 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.2123 9.01111C23.1413 8.79591 23.0123 8.60689 22.8408 8.46697C22.6693 8.32705 22.4627 8.24225 22.2461 8.22284L15.8535 7.24632L12.9887 1.16369C12.8967 0.964773 12.753 0.797016 12.5742 0.679636C12.3954 0.562256 12.1886 0.5 11.9776 0.5C11.7665 0.5 11.5597 0.562256 11.3809 0.679636C11.2021 0.797016 11.0584 0.964773 10.9664 1.16369L8.10158 7.23456L1.70903 8.22284C1.5011 8.25379 1.30562 8.34515 1.14477 8.48657C0.983914 8.62798 0.864133 8.81378 0.799017 9.02288C0.739411 9.22721 0.734062 9.44468 0.783544 9.65196C0.833026 9.85923 0.935471 10.0485 1.07988 10.1994L5.71982 14.9055L4.59635 21.5882C4.55624 21.8087 4.57724 22.0367 4.65687 22.2452C4.7365 22.4537 4.87143 22.6339 5.04574 22.7647C5.21563 22.8919 5.416 22.967 5.62438 22.9815C5.83275 22.9961 6.04087 22.9495 6.22538 22.847L11.9776 19.7057L17.7073 22.8588C17.8649 22.952 18.043 23.0006 18.224 23C18.462 23.0009 18.6941 22.9226 18.8869 22.7765C19.0612 22.6457 19.1961 22.4654 19.2758 22.257C19.3554 22.0485 19.3764 21.8205 19.3363 21.5999L18.2128 14.9173L22.8528 10.2112C23.015 10.0673 23.1348 9.8781 23.1985 9.66567C23.2621 9.45324 23.2669 9.22627 23.2123 9.01111ZM16.3029 13.7172C16.1712 13.8507 16.0726 14.0159 16.0158 14.1984C15.959 14.3809 15.9457 14.5752 15.9771 14.7643L16.786 19.694L12.5618 17.3409C12.3992 17.2503 12.2179 17.2029 12.0337 17.2029C11.8496 17.2029 11.6682 17.2503 11.5057 17.3409L7.28144 19.694L8.09034 14.7643C8.12173 14.5752 8.10845 14.3809 8.05166 14.1984C7.99487 14.0159 7.89629 13.8507 7.76454 13.7172L4.39412 10.1876L9.12394 9.46996C9.30594 9.44345 9.47895 9.37059 9.62781 9.25777C9.77667 9.14496 9.89684 8.99563 9.97777 8.82287L11.9776 4.34031L14.0897 8.83463C14.1706 9.00739 14.2908 9.15672 14.4396 9.26954C14.5885 9.38235 14.7615 9.45521 14.9435 9.48172L19.6733 10.1994L16.3029 13.7172Z"
                  fill="#433A3F"
                />
              </svg>
            </div>
            <div className="cursor-pointer comment">
              <svg
                className="comment"
                width="23"
                height="23"
                viewBox="0 0 23 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.7658 0.5C10.2905 0.5 8.82969 0.790977 7.4667 1.35632C6.10371 1.92166 4.86527 2.75029 3.82208 3.7949C1.71526 5.90459 0.531665 8.76595 0.531665 11.7495C0.521844 14.3472 1.42005 16.8664 3.07059 18.8704L0.823753 21.1203C0.667871 21.2785 0.562274 21.4794 0.520287 21.6976C0.4783 21.9159 0.501805 22.1417 0.587836 22.3465C0.681144 22.5489 0.832408 22.719 1.02243 22.8352C1.21244 22.9514 1.43265 23.0084 1.65508 22.999H11.7658C14.7453 22.999 17.6028 21.8138 19.7096 19.7041C21.8164 17.5944 23 14.7331 23 11.7495C23 8.76595 21.8164 5.90459 19.7096 3.7949C17.6028 1.68521 14.7453 0.5 11.7658 0.5ZM11.7658 20.7491H4.36252L5.40729 19.7029C5.61653 19.4921 5.73397 19.207 5.73397 18.9098C5.73397 18.6126 5.61653 18.3275 5.40729 18.1167C3.93628 16.6453 3.02023 14.7087 2.81522 12.6369C2.61022 10.565 3.12894 8.48603 4.28301 6.75419C5.43708 5.02234 7.1551 3.74476 9.14436 3.1391C11.1336 2.53345 13.2711 2.63719 15.1925 3.43265C17.1139 4.22811 18.7005 5.66608 19.6819 7.50157C20.6633 9.33705 20.9788 11.4565 20.5747 13.4988C20.1705 15.5411 19.0718 17.3799 17.4655 18.702C15.8593 20.024 13.845 20.7475 11.7658 20.7491Z"
                  fill="#433A3F"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
