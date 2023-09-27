import Mahesh from "../assets/Mahesh.jpg";
const team = [
  {
    id: 1,
    name: "Mahesh Patale",
    role: "Founder",
    description:
      "The visionary who sparked the idea and ignited our journey toward redefining beauty.",
    img: Mahesh,
    facebook: "https://www.facebook.com/",
  },
  {
    id: 2,
    name: "Alper Kamu",
    role: "Co-Founder",
    description:
      "The collaborator whose expertise and dedication fueled our mission.",
    img: "https://dummyimage.com/201x201 ",
    facebook: "https://www.facebook.com/",
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
                      <a className="text-gray-500" href={team.facebook}>
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>
                      </a>
                      <a className="ml-2 text-gray-500" href={team.facebook}>
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                        </svg>
                      </a>
                      <a className="ml-2 text-gray-500" href={team.facebook}>
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>
                      </a>
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
