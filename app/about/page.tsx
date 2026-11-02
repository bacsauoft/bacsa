"use client"
import { Users, Target, Award, Heart } from "lucide-react"
import Image from "next/image"

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Innovation",
      description:
        "We foster creativity and cutting-edge thinking at the intersection of biotechnology and computer science.",
      bgColor: "bg-bacsa-mountain-meadow", // Teal color matching BACSA brand
    },
    {
      icon: Users,
      title: "People",
      description: "We build strong connections among students, faculty, and industry professionals.",
      bgColor: "bg-bacsa-botticelli", // Blue color matching BACSA brand
    },
    {
      icon: Award,
      title: "Knowledge",
      description: "We strive for excellence in education, research, and professional development.",
      bgColor: "bg-bacsa-royal-blue", // Royal blue matching BACSA brand
    },
    {
      icon: Heart,
      title: "Impact",
      description: "We aim to make a positive difference in healthcare, research, and technology.",
      bgColor: "bg-bacsa-cloud-burst", // Dark blue matching BACSA brand
    },
  ]

  type TeamMember = {
    id: string
    name: string
    role: string
    program: string
    year: string
    photo?: string
  }

  const coPresidents: TeamMember[] = [
    {
      id: "co-president-1",
      name: "Aksshatt Bariar",
      role: "Co-President",
      program: "Computer Science Specialist",
      year: "3rd Year",
      photo: "/images/aksshatt-bariar-photo.png",
    },
    {
      id: "co-president-2",
      name: "Allisha Saini",
      role: "Co-President",
      program: "Environmental Science",
      year: "3rd Year",
      photo: "/images/allisha-saini-photo.jpg",
    },
  ]

  const founders: TeamMember[] = [
    {
      id: "founder-1",
      name: "Astrid Chavez Chavira",
      role: "Ex-Co-President",
      program: "Molecular Biology and Biotechnology (Co-op)",
      year: "3rd Year",
      photo: "/images/astrid-chavez-photo.jpg",
    },
    {
      id: "founder-2",
      name: "Nathan Padua",
      role: "Ex-Co-President",
      program: "Biochemistry & Neuroscience",
      year: "4th Year",
      photo: "/images/nathan-padua-photo.jpg",
    },
  ]

  const TeamMemberCard = ({ member }: { member: TeamMember }) => {
    return (
      <div className="w-full h-80 bg-white rounded-lg shadow-md border border-gray-100 p-6 flex flex-col items-center justify-center text-center">
        {member.photo ? (
          <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
            <img src={member.photo} alt={`${member.name} - ${member.role}`} className="w-full h-full object-cover" />
          </div>
        ) : (
          <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full flex items-center justify-center mb-4">
            <span className="text-white font-bold text-2xl">
              {member.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </span>
          </div>
        )}
        <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
        <p className="text-blue-600 font-medium mb-2">{member.role}</p>
        <p className="text-sm text-gray-600 mb-1">{member.program}</p>
        <p className="text-sm text-gray-500">{member.year}</p>
      </div>
    )
  }

  return (
    <div className="pt-16 bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Meet the Team</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our dedicated team of students is committed to advancing the intersection of biotechnology and computer
              science at the University of Toronto.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                BACSA exists to bridge the gap between biotechnology and computer science, creating a vibrant community
                where students can explore the intersection of these rapidly evolving fields.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We provide opportunities for academic growth, professional development, and meaningful connections that
                prepare our members for successful careers in bioinformatics, computational biology, healthcare
                technology, and beyond.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-6 relative">
                  <Image
                    src="/images/bacsa-bc-logo.png"
                    alt="BACSA BC Logo"
                    width={96}
                    height={96}
                    className="w-full h-full object-contain rounded-lg"
                    priority
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Innovation • People • Knowledge</h3>
                <p className="text-gray-600">
                  Our core values guide everything we do, from organizing events to supporting our members' growth.
                </p>
              </div>
            </div>
          </div>

          {/* Values - Updated with BACSA brand colors */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                <div className={`w-16 h-16 ${value.bgColor} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Executive Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the students leading BACSA's mission to bridge biotechnology and computer science
            </p>
          </div>

          {/* Co-Presidents */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {coPresidents.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Founders</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">The students who started BACSA</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {founders.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
