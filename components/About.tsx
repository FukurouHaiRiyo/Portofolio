import React from 'react'
import Image from 'next/image'

const skills = [
      {skill: "HTML"},
      {skill: "CSS"},
      {skill: "TypeScript"},
      {skill: "Python"},
      {skill: "Java"},
      {skill: "C/C++"},
      {skill: "GitHub"},
      {skill: "GitHub"},
]

const About = () => {
      return (
            <section id="about">
                  <div className="my-12 pb-12 md:pt-16 md:pb-48">
                        <h1 className="text-center font-bold text-4xl">
                              About me
                              <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
                        </h1>

                        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
                              <div className="md:w-1/2">
                                    <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
                                          Get to know me!
                                    </h1>

                                    <p>
                                          Hey, my name is Andrei and I am a{" "}
                                          <span className="font-bold">{"highly ambitious"}</span>
                                          <span className="font-bold">{" self-motivated"}</span>
                                          <span className="font-bold">{" driven"}</span> student
                                          based in Ploiesti. 
                                    </p>

                                    <br/>

                                    <p>
                                          I&#39;m currently a data entry analyst working remotely for IntelligentBee Web. 
                                          I worked during summer as 
                                          a web developer, I mainly used Angular and React, I pretty much like to 
                                          work with React. 
                                    </p>

                                    <br/>

                                    <p>
                                          I have a wide range of hobbies and passions that keep me busy.
                                          From reading, playing sports, playing video games, to making YouTube videos,
                                          I am always seeking new experiences and love to keep myself
                                          engaged and learning new things.
                                    </p>

                                    <br/>

                                    <p>
                                          I believe that you should{" "}
                                          <span className="font-bold text-teal-500">
                                                never stop growing
                                          </span>{" "}
                                          and that&#39;s what I strive to do, I have a passion for
                                          technology and a desire to always push the limits of what is
                                          possible. I am excited to see where my future career takes me and am
                                          always open to new opportunities. 🙂
                                    </p>
                              </div>

                              <div className="text-center md:w-1/2 md:text-left">
                                    <h1 className="text-2xl font-bold mb-6">My skills</h1>
                                    <div className="flex flex-wrap flex-row justify-center z-10 md:justify-content">
                                          {skills.map((item, index) => {
                                                return (
                                                      <p
                                                            key={index} className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                                                      >
                                                            {item.skill}
                                                      </p>
                                                )
                                          })}
                                    </div>

                                    <br/>

                                    <Image
                                          src="/vercel.svg"
                                          alt=""
                                          width={325}
                                          height={325}
                                          className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"
                                    />
                               </div>
                        </div>
                  </div>
            </section>
      )
}

export default About;
