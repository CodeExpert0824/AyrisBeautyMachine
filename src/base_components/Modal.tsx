const Modal = ({isOpen, onClose}: {
  isOpen: boolean,
  onClose: () => void
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="bg-white w-full max-w-2xl mx-4 px-8 py-12 rounded shadow-lg overflow-y-auto">
        <div className="max-h-96">
          <p className="text-gray-900 text-base text-left">
            The Underground and Metal ideology, Black Metal in particular, Dungeon Synth, Martial Industrial combined with Cosplay, Gothics and Halloween culture, Christian Angels of the worlds bible belts, Emo's, Elves, Punks, Hippies, New Age and Vampire species as people who play classically styled games or watch fantasy or read classical books or mythology, as well as newer underground of high esthetics prevelant everywhere are forming a new renaissence, they have a culture of hundreds of millions simply stuck on popular channels with the meager power given to them to like posts and clips and play games, their resentment of the mainstream and anticipation of a new movement prevelant not in the least in all kinds of movie soundtracks where you feel the pulse of the Dawn and announcing a Satya Yuga is loozing momentum boosting a grand opening of mankind, rebellion, renaissence, we can not simply pose a problem or postpone the reality of esthetics and ecology anymore. This anounciation is a thread which also grew in Fiction, among which more pronounced in Dark City, Wings of Fame, In The Mouth Of Madness, The Matrix etc. We can no longer anounce a great revolt we have to BE the revolt and feel alive again. Generally 200 years of philosophy, Enlightenment, Descartes was a tabula raza, Kantian Idealism created the aformal, Schopenhauerian atheism stagnated, Symbolism and Existentialism stumbled on paradoxes finally, Distopianism actually started writing reality, Marxism, Anti esthetics and Avant Garde is caught in anonymity; All derived from the same withering notion; It Is all simply coming to an end. There is a society built of cages and cubes. One can not maintain this. The structure is expanding, and we already moved too far, now we have to redraw, regroup, gather vision and intelligence everywhere underneath and come up with severe solutions for a severe problem. And see to the militant as our armies. The mainstream offers nothing but debilitating futile rhetorics without any valid rooting in Esthetics nor Ecology, that is why we bring you the
            <br />
            <br />
            Dream Machine.
            <br />
            <br />
            Ayris Beauty Machine.
            <br />
            <br />
            Matrix Destroyer.
            <br />
            <br />
            Rapture Machine,
            <br />
            <br />
            The Lost Souls Catcher.
            <br />
            <br />
            or the
            <br />
            <br />
            Perception War Machine.
            <br />
            <br />
            We may summerize so much of the more militant and proud souls of this time with the words of Satyricon. "Inevitably he can see it, the lights are going out and he knows, if he could just make us understand." That is Truth! It is not whimsical or hypothetical or subjective to establish this. There is something going on, while the masses, -an ever growing spoilt class which is ever acquiringing more (modern, expendable) wealth- bicker and babble, the world is tanking under their rule of little sacrifice and abundant leisure. We have a manifest here to begin cleaning up the planet, addressing all esthetics and ideologies of all cultures of the past, Deconstructing subjectivism, and taking most industry and technology to space, to Mars and Moon, instead of polluting the planet. Whereas Black Metal thrives on dark spiritual assumptions, painting angels, as much as Dante Gabriel Rossetti was simply painting more angels the more science grew a positivism and nihilism, now we think in our manifest we have redressed spirituality and reconstructed it as we managed to deconstruct modernism, and by doing so solved the crisis of spirituality and esthetics, which was merely a rhetorical trick to have lost it at this point, to see we may sink back to all of the past, and so we can earn our proper deus. Thus to have a disregard for current futility and self-deprecating cultures. As we can also break down modernism to implant forests and artisan farms again. And raise the suburbs in art deco towers to see nature is at balance again. See supermarkets with gardens on top and below, and incorporate small windmills everywhere, all these things artisan made, local, esthetic and easy to repair. For that we need to grow resilience in our senses, and avert the power of structured thought and structured economics today; the reasoning that all needs to provide garbage and leisure and entertainment and gossip and ironic memes, of, and to, the biggest common denominator. We need to form a resistance against the irony, futility, relativity and subjectivism to paralyze the senses, to be allowed again to beauty, the artisan, the quality, and the artistic of life opposed to the factory of sterile goods. With AI making all modernism itself redundant we can address artisan and ecologic issues finally once more. After having almost lost all the planet with perpetually sustaining the taxing spoils of the rich producing gifts to a growing despaired as hysterical masses. Alas, the game is over. For that, there needs to be a new site, for a new, esthetic and ecological reality, and to empower a struggling intellectual, poetic and artistic underground not part of the establishment circus today. This reality the civil wants us to stick to will inevitably end. Any which way to come will be hard, falling out of this time, working to get out of the hole, whereas today they are all working themselves deeper into the hole, as Huysmans said the postponed suffering will need to be repaid, let's begin our suffering now as what we need to repay is growing bigger every minute. Let us then replace all these galleries full of nihilism about the structure full of the wonder of the senses of individuals and not support this structure with more defeatism anymore. We can have art nouveau banks and goods in galleries now!!
          </p>
          <div className="w-full border my-3" />
          <div className="flex justify-end pb-4 gap-[10px]">
            <button onClick={onClose} className="bg-blue-500 text-white px-4 py-2 rounded">Confirm</button>
            <button onClick={onClose} className="bg-gray-200 text-gray-800 px-4 py-2 rounded mr-2">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal;