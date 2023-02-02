import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SlideUp from './SlideUp';
import {BsGithub, BsArrowUpRightSquare} from 'react-icons/bs';

const projects = [
      {
            name: "Cats and Dogs classifier",
            description: "Cats and Dogs classifier is a machine learning app that can tell wether the animal in a photo is a dog or a cat",
            image: "/CatsDogs.png",
            github: "https://github.com/FukurouHaiRiyo/CatsAndDogsClassification",
            link: ""
      },

      {
            name: "Face Detection using OpenCV",
            description: "This project uses OpenCV and haarcascade top detect faces in a photo using different parameters, these parameters where used to test the performance of the haarcascade xml file",
            image: "/FaceDetection.png",
            github: "https://github.com/FukurouHaiRiyo/OpenCV-Image-Processing-And-Face-Detection/tree/main/ImageProcessingAndFaceDetection",
            link: ""
      },

      {
        name: "Image processing using OpenCV",
        description: "In this project, some operations were made on some images(like cropping, drawing rectangles around the zone that has been cropped previously, saving an image with another extension, writing sentences on an image using different fonts)",
        image: "/ImgProcessing.png",
        github: "https://github.com/FukurouHaiRiyo/OpenCV-Image-Processing-And-Face-Detection/tree/main/ImageProcessingAndFaceDetection",
        link: ""
      },

      {
            name: "FukurouHaiRyio - website about my sona",
            description: "This website is about my sona I got a while ago, it tells a bit of his story, how he looks and much more",
            image: "/fuku.png",
            github: "https://replit.com/@FukurouHaiRiyo/Fuku",
            link: "https://Fuku.fukurouhairiyo.repl.co"
      }
]

const Projects = () => {
      return (
        <section id="projects">
          <h1 className="my-10 text-center font-bold text-4xl">
            Projects
            <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
          </h1>
    
          <div className="flex flex-col space-y-28">
            {projects.map((project, index) => {
              return (
                <div key={index}>
                  <SlideUp offset="-300px 0px -300px 0px">
                    <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                      <div className=" md:w-1/2">
                        <Link href={project.link}>
                          <Image
                            src={project.image}
                            alt=""
                            width={1000}
                            height={1000}
                            className="rounded-xl shadow-xl hover:opacity-70"
                          />
                        </Link>
                      </div>
                      <div className="mt-8 md:w-1/2">
                        <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                        <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                          {project.description}
                        </p>
                        <div className="flex flex-row align-bottom space-x-4">
                          <Link href={project.github} target="_blank">
                            <BsGithub
                              size={30}
                              className="hover:-translate-y-1 transition-transform cursor-pointer"
                            />
                          </Link>
                          <Link href={project.link} target="_blank">
                            <BsArrowUpRightSquare
                              size={30}
                              className="hover:-translate-y-1 transition-transform cursor-pointer"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </SlideUp>
                </div>
              )
            })}
            
          </div>
        </section>
      )
    }
    
export default Projects