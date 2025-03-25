import { Button } from "@/components/ui/button";

const HeroSection=()=> {
  return (
    <div className="flex flex-col items-center justify-center text-center  px-4  ">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Odblokuj Swój Potencjał z Naszymi Innowacyjnymi Rozwiązaniami
      </h1>
      <p className="text-lg text-gray-600 mb-8 mx-0 md:mx-44">
        Dostarczamy najnowocześniejszą technologię i eksperckie wskazówki, aby pomóc Ci
        pokonać wyzwania i osiągnąć niezwykły sukces. Nasz zespół jest
        zaangażowany w dostarczanie wyjątkowych rezultatów i umożliwienie Ci osiągnięcia
        pełnego potencjału. Dołącz do nas w podróży rozwoju i transformacji.
      </p>
      <Button className="h-12">Odkryj Nasze Usługi</Button>
    </div>
  );
}
export default HeroSection