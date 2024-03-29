import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Adriaan.
            <br className="hidden lg:inline-block" />Always keen to learn and create more client orienteted applications.
          </h1>
          <p className="mb-8 leading-relaxed">
            Front-End Web Development ||  I am technically skilled also.

JavaScript Training complete.
HTML 5, 
CSS 3, 
JavaScript ES6, 
DOM Manipulation, jQuery, 
Bash Command Line, Git, GitHub and Version Control.

Worked with Windows Server 2008, Windows Server 2003 and Win NT server. Also experience supporting SBS2003, SBS2008 and SBS2011.Working on installing Server 2012, Server 2012 R2, Server 2019. 
<br/>
<br/>
If you need my Complete Resume please let me know.

          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./coding.svg"
          />
        </div>
      </div>
    </section>
  );
}
