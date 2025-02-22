import { useState } from "react"
import Image from "next/image"
import { ChevronDown, ChevronUp } from "lucide-react"
import background from "../photos/backgrounds/04.jpg"
import first from "../photos/programs/5.jpg"
import ankhaa from "../photos/programs/Ankhaa.jpg"
import binderiya from "../photos/programs/Binderiya_Khaliun.jpg"
import NomTelmen from "../photos/programs/Nom-telmen.jpg"
import Telmen from "../photos/programs/Telmen.jpg"
import tumurhuu from "../photos/programs/Tumurkhuu.jpg"

const projects = [
  {
    id: 1,
    title: '"Mongolian identity-Mongolian talent" (MIT-phase 1)',
    image: first,
    description:
      'On December 14, 2024, the first five children out of the 13 participants in the "Mongolian identity-Mongolian talent" project received their scholarships, learned about project writing methodology, and had a wonderful evening with our first donor, Mr. Davaa.',
    details: `Project Funders: Sponsors from the U.S. West Coast and Mongolia, including individuals with Ph.D., Master's, and Bachelor's degrees, researchers, teachers, coaches, and businesspeople we greatly respect. All are sources of pride.

Project Implementers: Children who speak, read, and write in Mongolian, carrying their cultural heritage, and who voluntarily help establish libraries. These talented children, who have earned national and regional championship awards, are the pride of Mongolia.

Project Coordinator: Oyuna, Founder of ABC Mongolia Library and Learning Hub, Mongolian Cultural Center

Project Beneficiaries:
Direct beneficiaries: Approximately 300 children, including:
• 100 children who read and listen to fairy tales,
• 50 children in grades 4-7,
• 100 children in grades 8-10,
• 50 children in grades 11-12

Indirect beneficiaries: 300 children's parents and grandparents who take pride in seeing their children read in Mongolian, listen to fairy tales, decorate books with designs, and learn about traditions.

Everyone involved in preserving, spreading, and inheriting Mongolian culture.

Phase I Duration: December 15, 2023 – March 15, 2025`,
  },
  {
    id: 2,
    title: '"Mongolian Identity - Mongolian Talent" Cultural Event',
    image: ankhaa,
    description:
      "11th-grade student M. Ankhbayar organized a film day featuring the movie Blue Spot People on January 26, 2025, from 1:00 PM to 4:00 PM. The three-hour event included watching the film, writing reviews and critiques, engaging in discussion exercises, a quiz based on the movie's storyline, karaoke for young children, and interactive competitions to test skills and creativity.",
    details: `Around 40 children and parents participated. The film analysis worksheet was designed to suit different age groups, including elementary, middle, and high school students, ensuring an age-appropriate learning approach.

• Yes/No Little Jumpers: Enkhsaruul Javkhlan
• Writing Contest Winners:
  ○ High School Freshman Enkhmend Javkhlan
  ○ Elementary School Shuudertsetseg
• Kahoot Challenge Winner: High school freshman Maral Tengis

Special thanks to volunteers Nomin, Tengis, and Enerlen for their contributions!`,
  },
  {
    id: 3,
    title: '"Legacy of the Yuan Dynasty in World History" Cultural Event',
    image: tumurhuu,
    description:
      "Henry Jackson High School sophomore Tumurkhuu Amarbold organized a cultural event titled Legacy of the Yuan Dynasty in World History. Participants immersed themselves in the history of the Yuan Empire, traveling back in time to the era of Genghis Khan, his descendants, and Kublai Khan. Historical records highlight that these great 13th-century rulers were not only conquerors but also pioneers in civilization, urban planning, postal communication, trade, arts, and sciences.",
    details: `Tumurkhuu was awarded the U.S. President's Community Service Award Silver Medal and a certificate by President Joe Biden. He dedicated 188 hours to this project and three summer camp sessions, demonstrating his dedication, kindness, and responsibility in organizing games and competitions.

Parents who attended participated in a "Timeline Reflection" activity, sharing personal life lessons, achievements, and challenges. Listening to everyone's stories and insights was truly inspiring.

Middle and high school students wrote essays on "Which period of Mongolian history would you like to visit?", aligning with Stanford University's 2024 essay prompt: "Historical moment or event you'd like to witness." Regular participation in Mongolian Cultural Center events has helped students improve their writing skills and develop a habit of documenting their thoughts in the moment.

Meanwhile, younger children created beautiful drawings of Mongolian queens and princesses, played, had fun, and enjoyed delicious treats.

A heartfelt thank you to all the children, parents, and participants who joined this engaging two-hour event! Totally 65 people involved at event.`,
  },
  {
    id: 4,
    title: '"Mongolian Identity - Mongolian Talent" Project Scholarship Recipient Hosted event on December 22, 2024',
    image: Telmen,
    description:
      'T. Telmen, a recipient of the $200 scholarship from the Mongolian Identity - Mongolian Talent project, successfully hosted a two-hour event introducing famous book "The Story of Discovering the World" by Tudev Lodongiin. The event was a dynamic mix of education, games, and interactive learning, with 55–56 participants engaging in various activities.',
    details: `Despite his busy schedule as a high school senior student preparing for college application and spring graduation, Telmen successfully completed his project. Special thanks to Maral for assisting his older brother.

Wishing Telmen and Maral great academic success in their future endeavors!`,
  },
  {
    id: 5,
    title: "Seattle Kids Discover the World Through Books",
    image: NomTelmen,
    description:
      '"Mom, can I have a toy?" I once asked. "Go to the river! Your toys are waiting there," she replied. Upon arriving at the river, I found children hunched over the stones, searching for something. "There\'s nothing you can\'t find among these river stones," a girl said. "Chests, bowls, robes, sweets, horses, camels—everything is here."',
    details: `Thus began a young boy's journey of discovery—through sound, drawing, wind, schoolbags, discipline, wrestling, Lenin, theater, inventions, sports, masks, lies, horses, traps, marmots, and even mythical rock monsters. From early childhood to becoming a student at a town school, this story captures the wonder of learning and exploration.

The very first New Year's celebration at the countryside school felt like stepping into a fairy tale. The world seemed magical, and receiving a gift from the Winter Grandfather was unforgettable. Crafting figures from wood shavings, making animal masks from layered paper, and painting vibrant rainbows on a dusty board—this boy, born in a remote desert province with limited supplies, had a world far bigger than the one around him.

Right before the Christmas, Seattle's children embarked on their own journey of discovery during a book-themed event. The session was led by T. Telmen, who, alongside his younger brother T. Maral, introduced their favorite book, sharing why they love it and how their curiosity fuels their love for reading.

The event featured:
• Stone guessing game and ankle bone horse racing
• Mini book-making activity
• Essay writing: Middle and high school students wrote on "My memory of discovering …", choosing from topics like art, sports, hobbies, cities, countries, subjects, music, or movies
• Speed reading challenge with small prizes
• Personalized bookmarks "I am book lover", "I am proud Mongolian" for young readers, marking their journey as "Friends of Books"

Through this project, children gained insight into how a young boy in Mongolia, 80 years ago, built his world through perseverance, patience, and creativity. The event successfully conveyed the book's timeless lesson—determination and problem-solving lead to growth and discovery.

With 32 children and around 20 parents participating, the day was filled with laughter, games, and learning, making it an unforgettable experience for all.

A heartfelt thank you to our book-loving children! 📚✨`,
  },
  {
    id: 6,
    title: "Mongolian Ger Presentation at Washington State Naadam Festival",
    image: binderiya, 
    description:
      'Binderya bayarsaikhan and Khaliun Batbayar, who are implementing the "Mongolian Identity - Mongolian Talent" project, presented their project on Saturday, August 10, 2020, from 2-3 PM. As part of their presentation, they set up a Mongolian ger (yurt) and held discussions about Mongolian traditions and culture.',
    details: `These dedicated students received a $200 each scholarship in December 2023. During the Washington State Naadam Festival, they showcased a traditional Mongolian ger, allowing children and the public to explore and learn about it. The ger was set up on the lawn in front of UW Madrona Hall.

A heartfelt thank you to the parents and families who supported these children and provided them with opportunities to develop and implement their projects. Special appreciation to the students for their efforts in promoting Mongolian culture!`,
  },
]

const ProjectCard = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-4">
      <div className="relative h-48">
        <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
        <div className="text-gray-600 mb-4">
          {isExpanded ? (
            <>
              <p className="whitespace-pre-wrap">{project.description}</p>
              {project.details && <p className="mt-2 whitespace-pre-wrap">{project.details}</p>}
            </>
          ) : (
            <p className="whitespace-pre-wrap">
              {project.description.length > 300 ? `${project.description.slice(0, 300)}...` : project.description}
            </p>
          )}
        </div>
        {(project.description.length > 300 || project.details) && (
          <button
            className="text-brand-blue hover:text-blue-700 font-semibold flex items-center"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "Show Less" : "Show More"}
            {isExpanded ? <ChevronUp className="ml-1" /> : <ChevronDown className="ml-1" />}
          </button>
        )}
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px]">
        <Image src={background} alt="Mongolian cultural projects" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="text-5xl font-bold mb-6">Programs</h1>
            <p className="text-xl">Discover our ongoing programs and initiatives</p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Projects Section */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-8">Our Programs</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

