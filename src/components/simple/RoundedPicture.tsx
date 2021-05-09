import Image from "next/image";

export default function MePicture({ src }: { src: string }) {
  return (
    <div className="relative bg-green-900 w-1/2 aspect-w-8 aspect-h-4 md:aspect-w-16 md:aspect-h-4 md:w-1/4 mx-auto rounded-full overflow-hidden filter drop-shadow-xl">
      <Image src={src} layout="fill" objectFit="cover" />
    </div>
  );
}
