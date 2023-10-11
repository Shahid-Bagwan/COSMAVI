import Mahesh from "../assets/Mahesh.jpg";
import vimal from "../assets/vimal.jpg";
const team = [
  {
    id: 1,
    name: "Mahesh Patale",
    role: "Founder",
    description:
      "The visionary who sparked the idea and ignited our journey toward redefining beauty.",
    img: Mahesh,
    linkedin: "https://www.linkedin.com/in/mahesh-patale-%F0%9F%87%AE%F0%9F%87%B3-947b571b3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    id: 2,
    name: "Vimal Pathoria",
    role: "Co-Founder",
    description:
      "The collaborator whose expertise and dedication fueled our mission.",
    img: vimal,
    facebook: "https://www.facebook.com/profile.php?id=61551823577602&mibextid=ZbWKwL",
  },
];
const team_component = () => {
  return (
    <>
      <section className="bg-gray-800 text-gray-100  body-font ">
        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-2xl font-medium title-font mb-4 text-gray-100 tracking-widest">
              OUR TEAM
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Meet Our Founders: The creative minds behind COSMAVI, driven by a
              shared passion for crafting exceptional beauty solutions.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {team.map((team) => (
              <div key={team.id} className="p-4 lg:w-1/2">
                <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                  <img
                    alt="team"
                    className="flex-shrink-0  w-48 h-48 object-cover object-center sm:mb-0 mb-4 rounded-2xl"
                    src={team.img}
                  />
                  <div className="flex-grow sm:pl-8">
                    <h2 className="title-font font-medium text-lg text-gray-100">
                      {team.name}
                    </h2>
                    <h3 className="text-gray-500 mb-3">{team.role}</h3>
                    <p className="mb-4">{team.description}</p>
                    <span className="inline-flex">
                      {team.linkedin !== null && (
                        <a className="text-gray-500" href={team.linkedin} target="_blank">
                          <i className="fa-brands fa-lg fa-linkedin"></i>
                        </a>
                      )}

                      {team.facebook !== null && (
                        <a className="ml-2 text-gray-500" href={team.facebook}target="_blank">
                          <i className="fa-brands fa-facebook fa-lg"></i>
                        </a>
                      )}

                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default team_component;
