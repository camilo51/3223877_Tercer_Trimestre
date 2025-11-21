type ImageWrapperProps = {
    src: string;
    alt: string;
}

export default function ImageWrapper({src, alt}: ImageWrapperProps) {
  return (
    <div className="w-46 aspect-square rounded-full overflow-hidden group-hover:scale-110 transition-all duration-300">
        <img src={src} alt={alt} className="w-full h-full object-cover group-hover:scale-120 group-hover:rotate-4 transition-all duration-300" />
    </div>
  )
}