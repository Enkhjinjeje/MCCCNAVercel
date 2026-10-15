import { useEffect, useId, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown } from 'lucide-react'
import useNavigation from '../navigation/useNavigation'
import styles from '../../styles/header.module.css'

function DesktopItem({ group, open, onOpen, onClose, onNavigate, active }) {
  const id = useId()
  const timer = useRef(null)
  const button = useRef(null)
  const panel = useRef(null)
  const cancelClose = () => clearTimeout(timer.current)

  useEffect(() => () => clearTimeout(timer.current), [])

  return <div className={styles.desktopItem}
    onPointerEnter={event => { if (event.pointerType === 'mouse') { cancelClose(); onOpen() } }}
    onPointerLeave={event => { if (event.pointerType === 'mouse') timer.current = setTimeout(onClose, 160) }}
    onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) { cancelClose(); onClose() } }}
    onKeyDown={event => {
      if (event.key === 'Escape') { event.stopPropagation(); cancelClose(); onClose(); button.current?.focus() }
    }}>
    <div className={`${styles.itemHeading} ${active ? styles.active : ''}`}>
      <Link href={group.href} className={styles.mainLink} onClick={onNavigate} aria-current={active ? 'page' : undefined}>{group.label}</Link>
      <button ref={button} type="button" className={styles.chevronButton} aria-label={`Toggle ${group.label} menu`} aria-expanded={open} aria-controls={id}
        onClick={() => { cancelClose(); open ? onClose() : onOpen() }}
        onKeyDown={event => {
          if (event.key === 'ArrowDown') {
            event.preventDefault(); cancelClose(); onOpen()
            requestAnimationFrame(() => panel.current?.querySelector('a')?.focus())
          }
        }}><ChevronDown size={15} aria-hidden="true" /></button>
    </div>
    <div id={id} ref={panel} className={`${styles.dropdown} ${open ? styles.dropdownOpen : ''}`} aria-hidden={!open} inert={!open}>
      <div className={styles.dropdownSurface}>
        {group.items.map(item => <Link key={item.href} href={item.href} className={styles.subLink} onClick={onNavigate}>{item.label}</Link>)}
      </div>
    </div>
  </div>
}

export default function Header() {
  const router = useRouter()
  const navigation = useNavigation()
  const header = useRef(null)
  const mobileButton = useRef(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [desktopGroup, setDesktopGroup] = useState(null)
  const [mobileGroup, setMobileGroup] = useState(null)
  const mobileId = useId()

  const close = () => { setMobileOpen(false); setDesktopGroup(null); setMobileGroup(null) }

  useEffect(() => { setMobileOpen(false); setDesktopGroup(null); setMobileGroup(null) }, [router.asPath])
  useEffect(() => {
    const outside = event => { if (!header.current?.contains(event.target)) close() }
    document.addEventListener('pointerdown', outside)
    return () => document.removeEventListener('pointerdown', outside)
  }, [])

  const groups = [
    { key:'library',label:'ABC Library',href:'/library/membership',items:[
      {href:'/library/membership',label:'Membership'},
      {href:'/library/book-review',label:'Book Review'},
      {href:'/library/book-catalog',label:'Book Catalog'},
    ]},
    { key:'programs',label:'Programs',href:'/programs',items:[
      {href:'/programs',label:'All Programs'},
      ...navigation.programs.map(({href,text}) => ({href,label:text})),
    ]},
    { key:'events',label:'Events',href:'/events',items:[
      {href:'/events',label:'All Events'},
      {href:'/events/upcoming-events',label:'Upcoming Events'},
      ...navigation.years.map(year => ({href:`/events/${year}`,label:`${year} Events`})),
    ]},
    { key:'involved',label:'Get Involved',href:'/get-involved/volunteer',items:[
      {href:'/get-involved/volunteer',label:'Volunteer'},
      {href:'/get-involved/donate',label:'Donate'},
      {href:'/get-involved/intership',label:'Internships'},
      {href:'/get-involved/subscription',label:'Subscription'},
      {href:'/get-involved/monthly-newletter',label:'Monthly Newsletter'},
    ]},
  ]

  return <header ref={header} className={styles.header} onKeyDown={event => {
    if (event.key === 'Escape') { close(); if (mobileOpen) mobileButton.current?.focus() }
  }}>
    <div className={styles.bar}>
      <Link href="/" className={styles.logo} onClick={close}>
        <Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo.jpg-SMmAHfDY2bF9zR0ow63195tD4TOqy2.jpeg" alt="Mongolian Cultural Center Logo" width={100} height={100} priority />
      </Link>
      <nav className={styles.desktop} aria-label="Main navigation">
        {groups.map(group => <DesktopItem key={group.key} group={group} open={desktopGroup === group.key} active={router.asPath.split('/')[1] === group.href.split('/')[1]}
          onOpen={() => setDesktopGroup(group.key)} onClose={() => setDesktopGroup(current => current === group.key ? null : current)} onNavigate={close} />)}
      </nav>
      <button ref={mobileButton} type="button" className={`${styles.mobileToggle} ${mobileOpen ? styles.mobileToggleOpen : ''}`} onClick={() => { setMobileOpen(!mobileOpen); setMobileGroup(null); setDesktopGroup(null) }}
        aria-label={mobileOpen ? 'Close main menu' : 'Open main menu'} aria-expanded={mobileOpen} aria-controls={mobileId}>
        <Menu size={23} className={styles.menuIcon} aria-hidden="true" /><X size={23} className={styles.closeIcon} aria-hidden="true" />
      </button>
    </div>
    <div id={mobileId} className={`${styles.mobilePanel} ${mobileOpen ? styles.mobilePanelOpen : ''}`} aria-hidden={!mobileOpen} inert={!mobileOpen}>
      <div className={styles.mobileClip}>
        <nav className={styles.mobileNav} aria-label="Mobile navigation">
          {groups.map(group => {
            const expanded = mobileGroup === group.key
            const submenuId = `${mobileId}-${group.key}`
            return <div key={group.key} className={styles.mobileGroup}>
              <div className={styles.mobileHeading}>
                <Link href={group.href} onClick={close}>{group.label}</Link>
                <button type="button" className={styles.chevronButton} aria-label={`Toggle ${group.label} submenu`} aria-expanded={expanded} aria-controls={submenuId} onClick={() => setMobileGroup(expanded ? null : group.key)}><ChevronDown size={18} aria-hidden="true" /></button>
              </div>
              <div id={submenuId} className={`${styles.accordion} ${expanded ? styles.accordionOpen : ''}`} aria-hidden={!expanded} inert={!expanded}>
                <div className={styles.accordionClip}><div className={styles.mobileLinks}>{group.items.map(item => <Link key={item.href} href={item.href} onClick={close}>{item.label}</Link>)}</div></div>
              </div>
            </div>
          })}
        </nav>
      </div>
    </div>
  </header>
}
