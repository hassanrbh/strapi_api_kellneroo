import React from 'react'
import SwitchComponent from '../switch/SwitchComponent'

type HeroTypes = {}

function HeroSection({}: HeroTypes) {
  return (
    <div className="bg-primaryColor">
      <div className="container font-archia flex p-9">
        <div className="flex flex-col align-middle">
          <h1 className="text-white font-bold text-4xl mb-6">
            Die schnellste Gastro-Job-Matching-App der Welt.
          </h1>
          <div className="w-[20rem] bg-cardsGray rounded-2xl p-4 pr-16 cursor-pointer flex-col">
            <h3 className="text-primaryColor text-2xl">
              Hey Gastro-Freund, was suchst Du?
            </h3>
            <SwitchComponent />
          </div>
          <h3 className="text-primaryColor text-2xl">Wo suchts Du?</h3>
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
