import { useState } from "react"
import Image from "next/image"
import { Calendar, Clock, MapPin, ChevronDown, ChevronUp } from "lucide-react"
import background from "../../photos/backgrounds/bg1.jpg"
import s20241 from "../../photos/events/2024/1.jpg"
import s20242 from "../../photos/events/2024/2.jpg"
import s20243 from "../../photos/events/2024/3.jpg"
import s20244 from "../../photos/events/2024/4.jpg"
import s20245 from "../../photos/events/2024/5-1.jpg"
import s20246 from "../../photos/events/2024/6.jpg"
import s20247 from "../../photos/events/2024/7.jpg"
import s20248 from "../../photos/events/2024/8.jpg"
import s20249 from "../../photos/events/2024/9.jpg"
import s202010 from "../../photos/events/2024/10.jpg"
import s20231 from "../../photos/events/20222023/1.jpg"
import s20232 from "../../photos/events/20222023/2.jpg"
import s20233 from "../../photos/events/20222023/3.jpg"
import s20234 from "../../photos/events/20222023/4.jpg"
import s20235 from "../../photos/events/20222023/5-1.jpg"
import s20236 from "../../photos/events/20222023/6.jpg"
import s20237 from "../../photos/events/20222023/7.jpg"
import s20238 from "../../photos/events/20222023/8.jpg"


const eventsByYear = {
  2024: [
    {
      id: 1,
      title:
        "Coach Erdenechimeg Byambajavs Training on 'Communication, Attitude, Family, and Intergenerational Differences'",
      date: "January 19-21, 2024",
      image: s20241,
      description:
        "Despite the cold weather and snow around Seattle, the training was successfully conducted. A special thanks to the teacher from Washington D.C. who traveled to share her knowledge and experience.",
      details: "Participants: 12 people",
    },
    {
      id: 2,
      title: "Enkhjin's College Application Workshop",
      date: "March 3, 2024",
      image: s20242,
      location: "Kirkland Public Library",
      description:
        "Enkhjin Chuluunkhuu shared his experiences applying for college, volunteering, enhancing Common Application activities, and resume writing. The workshop also included guidance on how to improve resumes and create LinkedIn profiles. The students also discussed college applications, scholarships, and essay questions.",
      details: "Participants: 20 students",
    },
    {
      id: 3,
      title: "Meeting with Dr. M. Saruul-Erdene, a Library Specialist at the U.S. State Department",
      image: s20243,
      date: "March 15, 2024",
      description:
        "Dr. Saruul-Erdene shared insights over coffee about the library's catalog and the upcoming plans for transitioning into an application system.",
    },
    {
      id: 4,
      title: "Expedia Company Visit",
      date: "April 6, 2024",
      image: s20247,
      description:
        "The half-day program was successfully organized, and we appreciate Nomingerel for making this happen.",
      details: "Participants: 5 children, 4 parents",
    },
    {
      id: 5,
      title: "QuestBridge Scholarship Info Session",
      image: s20244,
      date: "May 5, 2024",
      description:
        "A 150-minute virtual session on the QuestBridge Scholarship was held, with over 20 parents participating. Munkhnaran, a mother from Denver, shared her experience in preparing her child for the scholarship. She provided valuable insights, strategies, and lessons learned, offering parents practical advice and inspiration for the application process.",
    },
    {
      id: 6,
      title: "Children's Day Celebration",
      image: s20245,
      date: "June 1, 2024",
      description:
        "As part of our annual Children's Day tradition, we are launching a new initiative to celebrate and honor high school graduates turning 18 and newborns by giving them special gifts each year.\n\nIn 2024, we sent congratulatory messages to approximately 55 high school graduates.\n• Los Angeles and Denver graduates received greetings, books, and notebooks from fellow graduates.\n• Washington State graduates were presented with greetings, flowers, and gift cards to mark this milestone.\n\nTo each of our young Mongolians, we encourage you to cherish and promote the Mongolian language and culture, and always take pride in your Mongolian heritage! 🎉🎓💙",
    },
    {
      id: 7,
      title: "College Preparation Strategies, Tactics, and Scholarship Opportunities Workshop",
      date: "June 8-9, 2024",
      image: s20246,
      description:
        "We invited Bolortuya Nasanjargal to conduct a two-day workshop on 'College Preparation Strategies, Tactics, and Scholarship Opportunities.' This workshop provided a broad yet in-depth understanding of key topics, including:\n• How to increase college admission chances\n• Importance of GPA\n• SAT/ACT exams\n• Volunteer work & extracurricular activities\n• College essays\n• FAFSA application strategies\n• CSS Profile preparation\n• Scholarship opportunities\n• Key takeaways: success factors, lessons learned, and critical considerations",
      details:
        "Workshop Impact:\n• 45 parents attended, including those with college students and even parents of 3rd graders, recognizing the importance of early preparation.\n• 33 students (from 8th grade to college juniors) participated in the 8 AM - 12 PM session alongside their parents.\n• 30 private consultation slots were arranged, with 40 students receiving personalized guidance tailored to their goals and aspirations.\n• This workshop engaged 143-150 participants in total, making it one of the largest events we have successfully organized together!\n\nSpecial Contribution:\n• T. Narantuya, Senior Tax Manager at Amazon, led a Resume Clinic, mentoring students on resume writing and optimizing LinkedIn profiles.\n\nMany students shared their heartfelt gratitude, saying:\n'They have a really good counselor-she is changing the whole trajectory of their life. I see kids are all very happy!'\n\nThis event created a supportive, uplifting community where students, parents, and professionals came together to share knowledge, celebrate each other's success, and inspire the next generation. Seeing this culture of encouragement and generosity grow was truly rewarding.\n\nWe did it! Thank you to all the parents and students who made this possible!",
    },
    {
      id: 8,
      title: "College Admissions Preparation: Strategies and Tactics Workshop",
      date: "September 27-28, 2024",
      image: s20248,
      description:
        "This event served as a follow-up discussion to the training conducted in June. Guest speaker N. Bolortuya from Los Angeles held 25 one-on-one consultations, providing guidance on course selection, grades, and application strategies to 25 parents/guardians and 28 students. Additionally, 12 participants (students and parents) attended a three-hour group training session.",
    },
    {
      id: 9,
      title: "Collaboration with Other Organizations: Mongolian School at 'Eternal Joy' Church",
      date: "March to June 2024",
      image: s202010,
      description:
        "A Mongolian school operated at the 'Eternal Joy' church. The children were divided into four levels:\n• Basic Level with Foundation: Knows the alphabet and can read simple words.\n• Basic Level without Foundation: Learning the alphabet from scratch.\n• Intermediate Level – Writing Practice Needed: Can read but needs writing exercises.\n• Intermediate Level – Grammar Needed: Can read but requires grammar lessons.\n\nThe children enjoyed their lessons and engaged actively in a fun and innovative learning environment tailored to each student's level. By the end of the three-month program, all students had successfully learned to read.",
    },
    {
      id: 10,
      title: "Celebrating Mongolian Culture and Traditions",
      date: "Throughout 2024",
      image: s20249,
      description:
        "To celebrate the Mongolian Lunar New Year (Tsagaan Sar) and show respect to the oldest residents living in Washington state, we donated 30 copies of the book 'Tsagaan Sar ba Arvan Noyor Jil' (White Moon and the Twelve Years). This book serves as a reminder of our traditions. Additionally, we participated in the daily activities of the Mongolian Community Association, contributing to the organization and celebration of various events.\n\nFor the National Naadam Festival, we organized a race for the youngest participants (ages 2-5) and awarded a $100 prize to the child who finished last, affectionately called the 'Bayan Khodood' (Big Belly), in honor of the traditional Mongolian horse racing, which divides children into different age groups. In Mongolian tradition, the child who finishes last in the 'daaga' (colt) race is called 'Bayan Khodood,' and they are given a prize similar to the winner's, with the blessing: 'This year's Bayan Khodood will become next year's winner!' This beautiful tradition will continue to be honored by the Mongolian Cultural Center in the years to come.\n\nWe also initiated a project to give gifts to children born between July 11, 2023, and July 10, 2024. These gifts include a photo frame to preserve the child's memorable moments, treats, and a bell-shaped shoe decoration that jingles as the child moves. We wish for these little ones to grow up happy, healthy, and full of joy, and extend my best wishes to their parents and families",
    },
  ],
  2023: [
    {
      id: 12,
      title: "Seattle's First Asian Communities & History Tour",
      image: s20232,
      date: "February 5, 2023",
      location: "Panama Hotel Café, downtown Seattle",
      description:
        "When people say that there is no discrimination in Seattle, Washington state, it is important to understand the history of the first Asian settlers who brought this opportunity to us. On February 5, 2023, a meeting for 12 children was organized at the Panama Hotel Café in downtown Seattle, where the history of the first Asian settlers in America was shared. During our visit Japanese organized a storytelling event, we participated together, witnessed how 90 years old lady shared her inspirational and thoughtful memory. Thank you Khulan for your dedicated contribution and support.",
    },
    {
      id: 13,
      title: "Microsoft Visit & Mongolian Professionals' Networking Event",
      image: s20233,
      date: "March 17, 2023",
      description:
        "o A total of 40 participants visited Microsoft, where 9 Mongolian engineers and employees shared their experiences, career paths, and challenges.\no The session covered career selection, job interviews, internships, and balancing work with hobbies.\no The children were inspired by Mongolian professionals shaping history in Washington State.\no Special thanks to our Microsoft mentors!",
    },
    {
      id: 14,
      title: "Blue Origin Tour",
      image: s20234,
      date: "May 6, 2023",
      description:
        "o A group of 5 students and 5 parents visited Blue Origin, the aerospace company founded by Jeff Bezos.\no Mongolian engineer L. Zolboo hosted the tour, introducing the company's projects and career opportunities.",
    },
    {
      id: 15,
      title: "College Admissions Workshop with Bayarmaa A. from Los Angeles",
      date: "April 7-8, 2023",
      image: s20235,
      description:
        "o Over 60 parents and students participated in three different training sessions led by college admissions expert Bayarmaa A.\no The Seattle team assisted with venue setup, registration, and logistics.",
    },
    {
      id: 16,
      title: "Amazon Spheres Tour & Career Panel",
      image: s20236,
      date: "May 30, 2023",
      description:
        "o 12 participants visited the Amazon Spheres and joined the Asians in Amazon event, where they discussed career choices and professional growth.",
    },
    {
      id: 17,
      title: "'Amazon Day for Mongolian Kids'",
      date: "August 17, 2023",
      image: s20237,
      time: "8 AM - 5 PM",
      description:
        "• 88 participants:\no 66 students, 12 parents, 2 college students, and 2 teachers.\n• Main Program Highlights:\no iCloud New Version at Amazon (Interactive show for Mongolian students)\no Future Engineers' Scholarship (Application process, benefits, and impact)\no Networking session with Mongolian Amazon employees, engineers, and specialists\nStudents were divided into high school and middle school groups, engaging in educational and interactive activities.\nThe event was highly effective, and engineers Enerel and Enkhgerel shared their experiences about their university journey, career preparation, and current work.",
    },
    {
      id: 18,
      title: "Amazon's Educational Event Highlights",
      date: "August 17, 2023",
      image: s20238,
      location: "AWS Skills Center, 1915 Terry Ave, Seattle, WA 98101",
      description:
        "The Amazon educational training took place in an engaging and interactive format. Participants visited different stations where they learned about new technologies, assembled processors, participated in competitions, and got a hands-on experience with Alexa and other smart home devices. The presenters made complex technological concepts easy to understand, and there were games and presentations from five speakers. All the speakers expressed their gratitude, and the atmosphere was very upbeat and positive.\n\nAmazon's team specifically expressed their appreciation to us. The event was well-organized and well-prepared, with lively and attentive children who understood the tasks and carried them out correctly. Their questions were endless, and the event, which included participants from grades 5-12, was filled with teamwork, warmth, and friendliness.\n\nThere are many plans for future collaborations, and we heard heartfelt words of encouragement and willingness to continue working together. The success of this event is a testament to the hard work and dedication of many parents and the active participation of the children. Special thanks to Enkhjin, who helped as a teacher at Pinecone, for her dedication. She was there at 8 AM to register and organize the children. Also, thanks to the two teachers from the coding school, the parents, and everyone who donated gifts for the event.",
    },
  ],
  2022: [
    {
      id: 11,
      title: "Social and Emotional Development in Adolescence",
      date: "December 2022",
      image: s20231,
      location: "Renton Highlands Library",
      description:
        "A discussion was held at Renton Highlands Library on the topic of adolescent social and emotional development, focusing on Asian children's mindset and the diversity and cultural policies in Washington State schools.\n\no Khulan shared valuable insights, and parents asked many questions about effective communication strategies with their children.\no Topics included sleepovers at friends' houses and helping children understand cultural differences during their teenage years.",
    },
  ],
}


const EventCard = ({ event }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-4">
      <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
        {" "}
        {/* 16:9 aspect ratio */}
        <Image
          src={event.image || "/placeholder.svg"}
          alt={event.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
        <div className="flex items-center text-gray-600 mb-2">
          <Calendar className="h-5 w-5 mr-2 text-brand-blue" />
          <span>{event.date}</span>
        </div>
        {event.time && (
          <div className="flex items-center text-gray-600 mb-2">
            <Clock className="h-5 w-5 mr-2 text-brand-blue" />
            <span>{event.time}</span>
          </div>
        )}
        {event.location && (
          <div className="flex items-center text-gray-600 mb-2">
            <MapPin className="h-5 w-5 mr-2 text-brand-blue" />
            <span>{event.location}</span>
          </div>
        )}
        <div className="text-gray-600 mb-4">
          {isExpanded ? (
            <>
              <p className="whitespace-pre-wrap">{event.description}</p>
              {event.details && <p className="mt-2 whitespace-pre-wrap">{event.details}</p>}
            </>
          ) : (
            <p className="whitespace-pre-wrap">
              {event.description.length > 300 ? `${event.description.slice(0, 300)}...` : event.description}
            </p>
          )}
        </div>
        {(event.description.length > 300 || event.details) && (
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

export default function Events() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px]">
        <Image src={background} alt="Mongolian cultural events" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="text-5xl font-bold mb-6">Events &amp; Projects</h1>
            <p className="text-xl">Explore our past and upcoming events, and discover our ongoing projects</p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Events Section */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-8">Our Events</h2>
          {Object.entries(eventsByYear).map(([year, events]) => (
            <div key={year} className="mb-12">
              <h3 className="text-2xl font-semibold mb-6">{year} Events</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {events.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  )
}