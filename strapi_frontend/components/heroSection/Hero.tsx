import React from 'react'
import SearchInput from '../searchInput/SearchInput'
import SwitchComponent from '../switch/SwitchComponent'

function HeroSection() {
  return (
    <div className="bg-primaryColor">
      <div className="container flex p-9">
        <div className="flex flex-col align-middle">
          <h1 className="text-white text-4xl mb-6">
            Die schnellste Gastro-Job-Matching-App der Welt.
          </h1>
          <div className="w-[20rem] bg-cardsGray rounded-2xl p-4 flex-col">
            <h3 className="text-primaryColor text-2xl pr-10">
              Hey Gastro-Freund, was suchst Du?
            </h3>
            <SwitchComponent />
            <h3 className="text-primaryColor text-2xl mt-4 mb-4">
              Wo suchts Du?
            </h3>
            <div className="flex items-center gap-3">
              <svg
                width="20"
                height="25"
                viewBox="0 0 20 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 0C7.34784 0 4.8043 1.05357 2.92893 2.92892C1.05357 4.80428 0 7.34781 0 9.99997C0 16.7499 8.8125 24.3749 9.1875 24.6999C9.41392 24.8936 9.70206 25 10 25C10.2979 25 10.5861 24.8936 10.8125 24.6999C11.25 24.3749 20 16.7499 20 9.99997C20 7.34781 18.9464 4.80428 17.0711 2.92892C15.1957 1.05357 12.6522 0 10 0ZM10 22.0624C7.3375 19.5624 2.5 14.175 2.5 9.99997C2.5 8.01085 3.29018 6.1032 4.6967 4.69668C6.10322 3.29017 8.01088 2.49999 10 2.49999C11.9891 2.49999 13.8968 3.29017 15.3033 4.69668C16.7098 6.1032 17.5 8.01085 17.5 9.99997C17.5 14.175 12.6625 19.5749 10 22.0624ZM10 4.99998C9.01109 4.99998 8.0444 5.29323 7.22215 5.84263C6.3999 6.39204 5.75904 7.17293 5.3806 8.08656C5.00216 9.00018 4.90315 10.0055 5.09607 10.9754C5.289 11.9453 5.7652 12.8362 6.46447 13.5355C7.16373 14.2348 8.05464 14.711 9.02455 14.9039C9.99445 15.0968 10.9998 14.9978 11.9134 14.6194C12.827 14.2409 13.6079 13.6001 14.1573 12.7778C14.7068 11.9556 15 10.9889 15 9.99997C15 8.67389 14.4732 7.40212 13.5355 6.46445C12.5979 5.52677 11.3261 4.99998 10 4.99998ZM10 12.5C9.50555 12.5 9.0222 12.3533 8.61107 12.0786C8.19995 11.8039 7.87952 11.4135 7.6903 10.9567C7.50108 10.4999 7.45157 9.99719 7.54804 9.51224C7.6445 9.02729 7.8826 8.58184 8.23223 8.23221C8.58186 7.88258 9.02732 7.64447 9.51227 7.54801C9.99723 7.45155 10.4999 7.50106 10.9567 7.69028C11.4135 7.87949 11.804 8.19993 12.0787 8.61105C12.3534 9.02217 12.5 9.50552 12.5 9.99997C12.5 10.663 12.2366 11.2989 11.7678 11.7677C11.2989 12.2366 10.663 12.5 10 12.5Z"
                  fill="#4A7081"
                />
              </svg>

              <div className="flex flex-col justify-center">
                <p className="text-primaryColor">Location</p>
                <h3 className="text-primaryColor text-2xl">M??nchen, Germany</h3>
              </div>
            </div>
            <SearchInput />
            <div className="mt-5 min-w-full">
              <button className="bg-primaryColor p-3 text[20px] rounded-bl-3xl rounded-tr-3xl rounded-br-3xl w-full text-white">
                Suchen
              </button>
            </div>
          </div>
        </div>

        <div className="show-results-here w-3/4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
          delectus. Eum, ipsum itaque adipisci laudantium culpa sunt
          perspiciatis, dicta maiores tempora reprehenderit veniam repellat
          perferendis illum cum aspernatur commodi libero. Commodi maiores culpa
          maxime dignissimos excepturi atque eum. Dolore ratione iure cum neque
          eveniet. Ratione, porro. Voluptatem iusto, vero culpa dolore ut totam
          fugit libero aut, ad beatae, voluptates dolorum? Alias error quasi
          odio facere, quidem eveniet voluptatibus quas soluta laboriosam est a.
        </div>
      </div>
    </div>
  )
}

export default HeroSection
