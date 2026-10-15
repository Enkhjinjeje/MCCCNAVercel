import Head from 'next/head'
import Link from 'next/link'
import { useId } from 'react'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import styles from '../../styles/working-on-page.module.css'

function HorseRider() {
  const titleId = useId()
  return <svg className={styles.illustration} viewBox="0 0 360 270" role="img" aria-labelledby={titleId}>
    <title id={titleId}>A Mongolian man in a blue deel riding a galloping horse</title>
    <defs>
      <linearGradient id={`${titleId}-sky`} x1="0" y1="0" x2="0" y2="1"><stop stopColor="#e8f2fb"/><stop offset="1" stopColor="#f8f7ef"/></linearGradient>
    </defs>
    <circle cx="180" cy="137" r="116" fill={`url(#${titleId}-sky)`}/>
    <circle cx="263" cy="75" r="20" fill="#f1c66d"/>
    <g className={styles.clouds} fill="#fff" opacity=".9"><path d="M85 91h52c0-10-10-15-17-10-7-16-28-13-29 0-10-2-17 3-17 10Z"/><path d="M211 53h36c-2-7-8-10-14-7-6-11-19-9-21 0-7-1-11 2-12 7Z"/></g>
    <path d="M67 180q38-45 83-9 48-53 95-11 26-23 48 4v49H67Z" fill="#b9d0c5" opacity=".45"/>
    <path d="M69 207q59-30 111-13 53-29 109 1v21H69Z" fill="#9ebca6" opacity=".45"/>
    <ellipse className={styles.shadow} cx="179" cy="232" rx="91" ry="8" fill="#3f563a" opacity=".11"/>
    <path d="M65 231h229" stroke="#d8dfcf" strokeWidth="2" strokeLinecap="round"/>
    <g className={styles.dust} fill="#c8b18d"><circle cx="101" cy="226" r="4"/><circle cx="88" cy="230" r="2.5"/><circle cx="74" cy="224" r="2"/></g>
    <g className={styles.horse}>
      {/* Far legs sit behind the body; each joint moves from the shoulder or hip. */}
      <g transform="translate(142 173)"><g className={`${styles.leg} ${styles.farBack}`}><path d="m0 0-17 26 10 24" fill="none" stroke="#865034" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round"/><path d="m-12 47 16 3-1 7h-15Z" fill="#3d302a"/></g></g>
      <g transform="translate(204 171)"><g className={`${styles.leg} ${styles.farFront}`}><path d="m0 0 12 25-9 26" fill="none" stroke="#865034" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round"/><path d="m-2 48 16 2-2 7H-3Z" fill="#3d302a"/></g></g>
      <g transform="translate(119 154)"><path className={styles.tail} d="M0 0c-26-13-22 28-53 24 21 19 39-1 42-12 3-7 8-7 12-6" fill="#49332b"/></g>
      <path d="M118 143c12-17 60-19 89-5l10 18c-1 25-19 33-51 31-31 0-53-11-52-29Z" fill="#b77a4b"/>
      <path d="M199 150c6-19 12-34 25-45l15 5 2 29-25 34Z" fill="#b77a4b"/>
      <path d="M213 126c2-19 8-29 19-30l-6 16-6 19-7 14-8 8Z" fill="#49332b"/>
      <path d="m229 105-1-22q10 5 12 20m3 3 7-20q6 11 2 23" fill="#b77a4b" stroke="#9e603b" strokeWidth="2" strokeLinejoin="round"/>
      <path d="M231 103c15-8 24 0 29 12l19 11c6 5 1 17-7 17l-31-10-15-13Z" fill="#bf8557"/>
      <path d="m263 122 16 5c5 5 1 14-5 15l-15-5Z" fill="#d4a178"/>
      <circle cx="250" cy="116" r="2.4" fill="#302a27"/><circle cx="274" cy="132" r="1.8" fill="#76503a"/>
      <path d="m257 109-8 22 20 8" stroke="#425263" strokeWidth="3" fill="none"/>
      <path d="M249 131q-30 3-48-20" stroke="#425263" strokeWidth="2" fill="none"/>
      <g transform="translate(132 173)"><g className={`${styles.leg} ${styles.nearBack}`}><path d="m0 0-11 26 13 25" fill="none" stroke="#b77a4b" strokeWidth="11" strokeLinecap="round" strokeLinejoin="round"/><path d="m-2 48 17 2 1 7H0Z" fill="#3d302a"/></g></g>
      <g transform="translate(211 169)"><g className={`${styles.leg} ${styles.nearFront}`}><path d="m0 0 10 28-5 25" fill="none" stroke="#b77a4b" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round"/><path d="m0 50 17 1-1 7H0Z" fill="#3d302a"/></g></g>
      <path d="M150 138h45l2 29h-46Z" fill="#276491"/><path d="M154 143h36v19h-36Z" fill="none" stroke="#e5bf65" strokeWidth="2"/>
      <path d="M150 137q20 10 43 0" fill="none" stroke="#65412e" strokeWidth="7" strokeLinecap="round"/>
      {/* Deel, sash, traditional pointed hat, and riding boots. */}
      <g className={styles.rider}>
        <path d="m173 123 23 16-2 25" stroke="#24537c" strokeWidth="12" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="m188 155 1 14 18 1q8-8-2-10l-8-2" fill="#3b3633"/>
        <path d="M166 87q12-6 22 3l7 29-7 20h-30l-2-20Z" fill="#3476a4"/>
        <path d="m180 89-6 31 14 19" stroke="#e9c46f" strokeWidth="2" fill="none"/>
        <path d="m158 117 35 1-1 7-35-1Z" fill="#dbad52"/>
        <path d="m186 98 10 14 17-3" stroke="#3476a4" strokeWidth="11" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="m208 110 7-2" stroke="#d3a07c" strokeWidth="7" strokeLinecap="round"/>
        <path d="M171 80v10l12 2V80" fill="#c9916a"/>
        <path d="M167 64c4-13 25-12 27 3l-5 14-18-2Z" fill="#3c3029"/>
        <path d="M174 64c12-5 19 3 17 11l4 6-6 2-2 6c-9 0-17-9-17-16Z" fill="#dfb08a"/>
        <circle cx="186" cy="74" r="1.5" fill="#3d302a"/>
        <path d="M167 64q-4 6 0 13l5 2 1-14Z" fill="#3c3029"/>
        <path d="m165 60 14-23 15 25Z" fill="#b84c40"/>
        <path d="m178 39 2 23" stroke="#e7bc5c" strokeWidth="3"/><circle cx="179" cy="36" r="3" fill="#d6a34d"/>
        <path d="M161 61q18-7 36 2l-1 6q-17-6-34-2Z" fill="#754338"/>
        <path d="M163 62q16-4 32 2" fill="none" stroke="#e5bd67" strokeWidth="2"/>
      </g>
    </g>
    <g stroke="#789b69" strokeWidth="2" strokeLinecap="round"><path d="m281 231 3-9m-3 9-4-5m-199 5-3-8m3 8 4-5"/></g>
  </svg>
}

export default function WorkingOnPage({ pageName = 'This page' }) {
  return <>
    <Head><title>{pageName} · Coming soon | Mongolian Cultural Center</title><meta name="robots" content="noindex,follow"/><meta name="description" content="We're preparing this part of the Mongolian Cultural Center website. Explore our events and programs while we work."/></Head>
    <section className={styles.page} aria-labelledby="working-title">
      <div className={styles.content}>
        <div className={styles.art}><HorseRider /></div>
        <p className={styles.eyebrow}>A LITTLE FURTHER ALONG THE TRAIL</p>
        <h1 id="working-title">Currently working<br/>on this page.</h1>
        <p className={styles.description}>{pageName === 'This page' ? 'Something new is on its way.' : `${pageName} is on its way.`}<br/>We’re getting everything ready. In the meantime,<br className={styles.desktopBreak}/> there’s plenty to explore with our community.</p>
        <div className={styles.actions}><Link href="/events" className={styles.primary}>Explore events <ArrowRight size={17} aria-hidden="true"/></Link><Link href="/" className={styles.secondary}>Back to home <ArrowUpRight size={17} aria-hidden="true"/></Link></div>
        <p className={styles.footnote}>Thank you for being part of the journey.</p>
      </div>
    </section>
  </>
}
