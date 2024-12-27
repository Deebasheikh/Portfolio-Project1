import Link from "next/link";
import Image from "next/image";
import profile from "@/app/assets/profile.jpg"
export default function Home (){
  return (
    <>
         {/* Home Section */}
    <section className="home-section">
      
        <Image
          src={profile}
          alt="Areeba Sheikh"
          className="profile-img"
        />
        <h1 className="name">Areeba Sheikh</h1>
        <h2 className="profession">Front-end Developer</h2>
        <div className="button">
        <Link href="#contact" className="btn-outline-primary">Hire Me</Link>
        <Link href="#contact" className="btn-outline-secondary">Let's Talk</Link>
        </div>
    
    </section>
    
    </>
  )
}