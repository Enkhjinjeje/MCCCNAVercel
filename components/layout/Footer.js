import EmailSignup from '../shared/EmailSignup'
import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react'
import facebook from '../../photos/social/icons8-facebook-50.png'
import youtube from '../../photos/social/icons8-youtube-50.png'
import instagram from '../../photos/social/icons8-instagram-50.png'
import styles from '../../styles/footer.module.css'

const socialLinks = [
  { name:'Facebook', href:'https://www.facebook.com/profile.php?id=61558763472838', icon:facebook },
  { name:'YouTube', href:'https://www.youtube.com/@Waculturalcenter', icon:youtube },
  { name:'Instagram', href:'https://www.instagram.com/mongolianculturalcenter/?hl=en', icon:instagram },
]

export default function Footer() {
  return <footer className={styles.footer} aria-label="Mongolian Cultural Center footer">
    <div className={styles.ornament} aria-hidden="true">
      <svg width="100%" height="28"><defs><pattern id="footer-meander" width="64" height="28" patternUnits="userSpaceOnUse"><path d="M0 14H8V4H30V24H18V14H24M32 14H40V24H62V4H50V14H56" fill="none" stroke="currentColor" strokeWidth="2"/></pattern></defs><rect width="100%" height="28" fill="url(#footer-meander)"/></svg>
    </div>
    <div className={styles.inner}>
      <div className={styles.socialRow}>
        <span className={styles.socialRule} aria-hidden="true"/>
          <nav className={styles.socials} aria-label="Follow our community">
            {socialLinks.map(social=><a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={`${social.name} (opens in a new tab)`} title={social.name}><Image src={social.icon} alt="" width={19} height={19}/><span>{social.name}</span></a>)}
          </nav>
        <span className={styles.socialRule} aria-hidden="true"/>
      </div>
      <div className={styles.grid}>
        <section className={styles.brand} aria-labelledby="footer-brand">
          <Link href="/" className={styles.brandHeading}>
            <span className={styles.logo}><Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo.jpg-SMmAHfDY2bF9zR0ow63195tD4TOqy2.jpeg" alt="Mongolian Cultural Center logo" width={100} height={100}/></span>
            <h2 id="footer-brand">Mongolian<br/>Cultural Center<span>IN NORTH AMERICA</span></h2>
          </Link>
          <p className={styles.mission}>Preserving our heritage and bringing people together through education, arts, and community.</p>

        </section>
        <nav className={styles.explore} aria-label="Footer navigation">
          <h3>Quick Links</h3>
          <Link href="/about">About us</Link>
          <Link href="/events">Events</Link>
          <Link href="/programs">Programs</Link>
          <Link href="/library/membership">ABC Library</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <section className={styles.contact} aria-labelledby="footer-contact">
          <h3 id="footer-contact">Visit Us</h3>
          <address>
            <div><MapPin size={17} aria-hidden="true"/><p>9634 Thoorsk St.<br/>Bothell, WA 98011</p></div>
            <a href="tel:+12062099437"><Phone size={16} aria-hidden="true"/><span>(206) 209-9437</span></a>
            <a href="mailto:waculturalcenter@gmail.com"><Mail size={17} aria-hidden="true"/><span>waculturalcenter@gmail.com</span></a>
          </address>
        </section>
        <section className={styles.newsletter} aria-labelledby="footer-newsletter">
          <h3 id="footer-newsletter">Newsletter</h3>
          <p>Community stories, upcoming events, and a little inspiration from home.</p>
          <EmailSignup variant="footer" className={styles.signup}/>
        </section>
      </div>
      <div className={styles.landscape} aria-hidden="true">
        <svg viewBox="0 0 1100 110" fill="none">
          <g className={styles.clouds} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M180 31h44c12 0 12-14 2-14-7 0-9 7-5 10M198 41h63M778 23h39c12 0 12-14 2-14-7 0-9 7-5 10M800 34h49"/></g>
          <circle cx="550" cy="32" r="17" fill="currentColor" opacity=".2"/>
          <path d="M0 99Q130 80 225 93L336 53 411 87Q470 74 503 87M596 87Q654 64 718 87L810 57 902 92Q1000 75 1100 99" stroke="currentColor" opacity=".4"/>
          <g stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"><path d="M503 83L550 59 597 83V105H503ZM503 83H597M543 62V56H557V62M540 105V87H560V105M514 88V100M526 88V100M574 88V100M586 88V100"/><path d="M506 98H538M562 98H594" opacity=".5"/></g>
          <path d="M0 105H1100" stroke="currentColor" opacity=".25"/>
        </svg>
      </div>
      <div className={styles.bottom}>
        <div><p>© {new Date().getFullYear()} Mongolian Cultural Center. All rights reserved.</p><p className={styles.nonprofit}>A Washington State 501(c)(3) nonprofit organization <span aria-hidden="true">·</span> Tax ID 99-5003658</p></div>
        <Link href="/admin" className={styles.admin}>Admin sign in <ArrowUpRight size={14} aria-hidden="true"/></Link>
      </div>
    </div>
  </footer>
}
