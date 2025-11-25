type StudentInfoType = {
  name: string;
  curriculum: {
    rol: string;
    email: string;
    location: string;
  };
  image: string;
  description: string;
};

type StudentCardType = {
  studentInfo: StudentInfoType;
};

export default function StudentCard({ studentInfo }: StudentCardType) {
  const { name, curriculum, image, description } = studentInfo;

  return (
    <>
      <div className="bg-linear-to-b from-indigo-100 to-white p-3 rounded-sm shadow-lg w-2/3 md:w-2/4 lg:w-2/5">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover rounded-sm mx-auto"
        />
        <div className="text-center">
          <h1 className="font-semibold text-lg lg:text-2xl my-2 ">{name}</h1>
          <div className=" border-y border-gray-200 py-2">
            <p className="text-sm italic text-gray-400">
              <span className="not-italic">💻</span> {curriculum.rol}
            </p>
            <p className="text-sm italic text-gray-400">
              <span className="not-italic">📧</span> {curriculum.email}
            </p>
            <p className="text-sm italic text-gray-400">
              <span className="not-italic">📍</span> {curriculum.location}
            </p>
          </div>
          <p className="mt-2 text-sm lg:w-3/4 xl:2/3 lg:mx-auto">
            {description}
          </p>
        </div>
      </div>
    </>
  );
}
