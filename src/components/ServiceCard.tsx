interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  altImage: string;
  classNameDivWrapper: string;
  className?: string;
  classNameH1?: string;
  classNameDescription?: string;
}

const ServiceCard = ({
  title,
  description,
  image,
  altImage,
  className,
  classNameDescription,
  classNameH1,
  classNameDivWrapper,
}: ServiceCardProps) => {
  return (
    <>
      <div className={`${classNameDivWrapper}`}>
        <img
          className="h-full w-full object-cover object-center"
          src={image}
          alt={altImage}
        />
        <div className=" absolute bottom-2 left-2 right-0 h-10 w-32  overflow-hidden bg-white/50 transition-all duration-500 group-hover:bottom-0 group-hover:left-0 group-hover:h-1/2 group-hover:w-full">
          <div
            className={`flex flex-col items-center justify-center text-center text-xl text-black ${className}`}
          >
            <h1
              className={`absolute left-1/2 top-1/2 mb-10 -translate-x-1/2 -translate-y-1/2  group-hover:top-5 ${classNameH1}`}
            >
              {title}
            </h1>
            <div className={`${classNameDescription}`}>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
