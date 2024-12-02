// "use client";

// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";

// export default function Testimonial() {
//     return (
//         <>
//             <section className="bg-white">
//                 <motion.div
//                     className="mx-auto max-w-screen-2xl px-4 py-12 sm:px-6 lg:px-28 lg:py-16"
//                     initial={{ opacity: 0, y: 50 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.5 }}
//                 >
//                     <div className="md:flex md:items-end md:justify-between">
//                         <div className="max-w-xl">
//                             <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
//                                 Read trusted reviews from our customers
//                             </h2>

//                             <p className="mt-6 max-w-lg leading-relaxed text-gray-700">
//                                 Lorem ipsum dolor sit amet consectetur
//                                 adipisicing elit. Aspernatur praesentium natus
//                                 sapiente commodi.
//                             </p>
//                         </div>

//                         <a
//                             href="#"
//                             className="mt-6 inline-flex shrink-0 items-center gap-2 rounded-full border border-black px-5 py-3 text-black transition hover:bg-black hover:text-white md:mt-0"
//                         >
//                             <span className="font-medium">
//                                 {" "}
//                                 Read all reviews{" "}
//                             </span>

//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 className="size-4 rtl:rotate-180"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 stroke="currentColor"
//                             >
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth="2"
//                                     d="M14 5l7 7m0 0l-7 7m7-7H3"
//                                 />
//                             </svg>
//                         </a>
//                     </div>

//                     <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
//                         {[
//                             "Stayin' Alive",
//                             "Another Review",
//                             "Third Review",
//                         ].map((title, index) => (
//                             <motion.blockquote
//                                 key={index}
//                                 className="flex h-full flex-col justify-between bg-white p-6 shadow-xl sm:p-8"
//                                 initial={{ opacity: 0, scale: 0.9 }}
//                                 animate={{ opacity: 1, scale: 1 }}
//                                 transition={{
//                                     duration: 0.5,
//                                     delay: index * 0.2,
//                                 }}
//                             >
//                                 <div>
//                                     <div className="flex gap-0.5 text-green-500">
//                                         {[...Array(5)].map((_, i) => (
//                                             <svg
//                                                 key={i}
//                                                 className="h-5 w-5"
//                                                 fill="currentColor"
//                                                 viewBox="0 0 20 20"
//                                                 xmlns="http://www.w3.org/2000/svg"
//                                             >
//                                                 <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                                             </svg>
//                                         ))}
//                                     </div>

//                                     <div className="mt-4">
//                                         <p className="text-2xl font-bold text-rose-600 sm:text-3xl">
//                                             {title}
//                                         </p>

//                                         <p className="mt-4 leading-relaxed text-gray-700">
//                                             No, Rose, they are not breathing.
//                                             And they have no arms or legs …
//                                             Where are they? You know what? If we
//                                             come across somebody with no arms or
//                                             legs, do we bother resuscitating
//                                             them? I mean, what quality of life
//                                             do we have there?
//                                         </p>
//                                     </div>
//                                 </div>

//                                 <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
//                                     &mdash; Michael Scott
//                                 </footer>
//                             </motion.blockquote>
//                         ))}
//                     </div>
//                 </motion.div>
//             </section>
//         </>
//     );
// }

"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Testimonial() {
    const sectionRef = useRef(null);
    const testimonialRefs = useRef<HTMLQuoteElement[]>([]);

    useEffect(() => {
        gsap.fromTo(
            sectionRef.current,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 0.5,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    end: "top 20%",
                    toggleActions: "play none none none",
                },
            }
        );

        testimonialRefs.current.forEach((el, index) => {
            gsap.fromTo(
                el,
                { opacity: 0, scale: 0.9 },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 0.5,
                    delay: index * 0.2,
                    scrollTrigger: {
                        trigger: el,
                        start: "top 90%",
                        end: "top 60%",
                        toggleActions: "play none none none",
                    },
                }
            );
        });
    }, []);

    return (
        <>
            <section className="bg-white" ref={sectionRef}>
                <div className="mx-auto max-w-screen-2xl px-4 py-12 sm:px-6 lg:px-28 lg:py-16">
                    <div className="md:flex md:items-end md:justify-between">
                        <div className="max-w-xl">
                            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                                Read trusted reviews from our customers
                            </h2>

                            <p className="mt-6 max-w-lg leading-relaxed text-gray-700">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Aspernatur praesentium natus
                                sapiente commodi.
                            </p>
                        </div>

                        <a
                            href="#"
                            className="mt-6 inline-flex shrink-0 items-center gap-2 rounded-full border border-black px-5 py-3 text-black transition hover:bg-black hover:text-white md:mt-0"
                        >
                            <span className="font-medium">
                                {" "}
                                Read all reviews{" "}
                            </span>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-4 rtl:rotate-180"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                />
                            </svg>
                        </a>
                    </div>

                    <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
                        {[
                            "Stayin' Alive",
                            "Another Review",
                            "Third Review",
                        ].map((title, index) => (
                            <blockquote
                                key={index}
                                className="flex h-full flex-col justify-between bg-white p-6 shadow-xl sm:p-8"
                                ref={(el) => {
                                    testimonialRefs.current[index] = el!;
                                }}
                            >
                                <div>
                                    <div className="flex gap-0.5 text-green-500">
                                        {[...Array(5)].map((_, i) => (
                                            <svg
                                                key={i}
                                                className="h-5 w-5"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>

                                    <div className="mt-4">
                                        <p className="text-2xl font-bold text-rose-600 sm:text-3xl">
                                            {title}
                                        </p>

                                        <p className="mt-4 leading-relaxed text-gray-700">
                                            No, Rose, they are not breathing.
                                            And they have no arms or legs …
                                            Where are they? You know what? If we
                                            come across somebody with no arms or
                                            legs, do we bother resuscitating
                                            them? I mean, what quality of life
                                            do we have there?
                                        </p>
                                    </div>
                                </div>

                                <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                                    &mdash; Michael Scott
                                </footer>
                            </blockquote>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
