import Image from 'next/image'

const About = () => {
  return (
    <div className='w-full min-h-[calc(100vh-64px)] flex flex-col items-center justify-center px-8 gap-4'>
      <h1 className='text-4xl text-primary font-bold mb-6'>O Nas</h1>
      <div className='grid grid-cols-2 max-lg:grid-cols-1 gap-4'>
        <div>
          <Image
            src='/images/team.jpg'
            alt='About Us'
            width={400}
            height={400}
            className='rounded-xl'
          />
        </div>
        <div>
          <div className='max-w-2xl flex flex-col justify-center items-start gap-4'>
            <p className=''>
              Witamy na naszej platformie! Jesteśmy zaangażowani w dostarczanie
              innowacyjnych rozwiązań i wyjątkowej obsługi dla naszych klientów.
            </p>
            <p className=''>
              Nasz zespół składa się z pełnych pasji profesjonalistów, którzy
              dążą do zapewnienia najlepszych możliwych doświadczeń dla naszych
              użytkowników.
            </p>
            <p>
              Dostarczamy najnowocześniejszą technologię i eksperckie wskazówki,
              aby pomóc Ci pokonać wyzwania i osiągnąć niezwykły sukces. Nasz
              zespół jest zaangażowany w dostarczanie wyjątkowych rezultatów i
              umożliwienie Ci osiągnięcia pełnego potencjału. Dołącz do nas w
              podróży rozwoju i transformacji.
            </p>
            <p>
              Zachęcamy do kontaktu, jeśli masz jakiekolwiek pytania lub uwagi.
              Zawsze jesteśmy tutaj, aby pomóc!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default About
