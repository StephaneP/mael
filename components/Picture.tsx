interface Props {
  src: any;
  webp: any;
  alt: string;
  mime: "image/webp" | "image/jpeg" | "image/png";
  className: string;
}

export default function Picture({ src, webp, alt, mime, className }: Props) {
  return (
    <picture>
      <source srcSet={webp} type="image/webp" className={className} />
      <source srcSet={src} type={mime} className={className} />
      <img src={src} alt={alt} className={className} />
    </picture>
  );
}
