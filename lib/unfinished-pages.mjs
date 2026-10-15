// Only known, unfinished destinations receive the temporary screen.
// Unknown URLs still return a genuine 404, and specific real routes take precedence.
export const unfinishedPages = {
  'coming-soon':'This page',
  about:'About Us', contact:'Contact', news:'Our blog', membership:'Membership', donate:'Donations',
  library:'ABC Library', 'library/membership':'Library membership', 'library/book-review':'Book reviews', 'library/book-catalog':'Our book catalog',
  'get-involved':'Get Involved', 'get-involved/volunteer':'Volunteering', 'get-involved/donate':'Donations',
  'get-involved/intership':'Internships', 'get-involved/internships':'Internships',
  'get-involved/subscription':'Subscriptions', 'get-involved/monthly-newletter':'Our monthly newsletter', 'get-involved/monthly-newsletter':'Our monthly newsletter',
  'language-school':'Our language school', 'language-culture-school':'Our language and culture school',
  'school/mongolian-alphabet':'Mongolian alphabet classes', 'school/reading-class':'Reading classes', 'school/speaking-class':'Speaking classes',
  'school/creative-writing':'Creative writing classes', 'school/bilingual-exam-prep':'Bilingual exam preparation',
  'school/dairy-meal-cooking':'Mongolian cooking classes', 'school/art-class':'Art classes', 'school/felt-craft':'Felt craft classes',
  'mongolian-shop':'Our Mongolian shop', 'shop/books':'Our book shop', 'shop/souvenirs':'Our souvenirs', 'shop/gifts':'Our gift shop',
}
