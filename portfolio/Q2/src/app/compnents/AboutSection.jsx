"use client";
import React, { useTransition, useState } from 'react';
import Image from 'next/image';
import TabButton from "./TabButton";

const TAB_DATA = [
{title:"Skills",
    id: "skills",
    content : (
        <ul className="list-disc pl-2">
            <li>Human Resource Managemnet</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Typescript</li>
            <li>Next.js</li>
            
        </ul>
    )
},
{
    title:"Education",
    id : 'education',
    content: (
        <ul className= "list-disc pl-2">
            <li>Bachelor of Business Administration</li>
        </ul>
    )
},
{
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>SAP Global Certification SAP Certified Application Associate
            - SAP S/4HANA Sales 1809 Upskilling.</li>
            <li>English for Career Development An online non-credit course 
                authorized by the University of Pennsylvania and offered 
                through Coursera.</li>
            <li>Talent Acquisition An online non-credit course authorized by 
                HRCI and offered through Coursera Recruiting. 
                </li>
            <li>Hiring, and Onboarding Employees an online non-credit 
                course authorized by University of Minnesota and offered through Coursera. 
                </li>
            <li>Preparing To Manage Human Resource An online non-credit 
                course authorized by University of Minnesota and offered 
                through Coursera.
                </li>
      </ul>
    ),
  },
];


const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();


const handleTabChange =  (id) => {
    startTransition(() =>{
        setTab(id);
    });
};

  return (
    <section className='text-white' id="about">
    <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <Image src="/images/about-image.jpeg" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
            <h2 className='text-4x font-bold text-white md-4'>About Me</h2>

            <p className='text-baase lg:text-lg'>
Hello! I am a Business graduate specializing in Human Resource Management,
and a passionate web developer.
 My unique blend of skills allows me to approach challenges from both a strategic business perspective
 and a technical standpoint. With a deep understanding of HR principles,
 I focus on creating user-centered solutions that enhance organizational efficiency and employee engagement.
I am excited about the intersection of technology and human resources,
and I am always looking for opportunities to leverage my expertise to help organizations thrive.
Let connect and explore how we can work together!
</p>
<div className='flex flex-row justify-start mt-8'>
    <TabButton 
    selectTab={() => handleTabChange("skills")} 
    active={tab === "skills"}
    >
        {""}
        Skills{""}
        </TabButton>

        <TabButton 
    selectTab={() => handleTabChange("education")} 
    active={tab === "education"}
    >
        {""}
        Education{""}
        </TabButton>

        <TabButton 
    selectTab={() => handleTabChange("certifications")} 
    active={tab === "certifications"}
    >
        {""}
        Certifications{""}
        </TabButton>
        </div>

        <div className='m-8'>
            {TAB_DATA.find((t) => t.id === tab).content}
            </div>
            </div> 
        </div>
    </section>
     );
};
export default AboutSection;