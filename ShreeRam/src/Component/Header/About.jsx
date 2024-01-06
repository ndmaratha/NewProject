// About.js


const About = () => {
  return (
    <div className="container mx-auto mt-10 p-8 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg shadow-lg text-white">
      <h2 className="text-4xl font-extrabold mb-4">About Me</h2>
      <p className="text-lg mb-6">
        Hello! Im Nayan Pramod Desai, a final-year student pursuing BCA Science. Im passionate
        about coding and technology. Lets connect!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="mb-4">
          <p className="text-lg">
            <span className="font-semibold">Name:</span> Nayan Pramod Desai
          </p>
        </div>
        <div className="mb-4">
          <p className="text-lg">
            <span className="font-semibold">Academic Level:</span> BCA Science (Final Year)
          </p>
        </div>
        <div className="mb-4">
          <p className="text-lg">
            <span className="font-semibold">Email:</span> ndmaratha01@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
