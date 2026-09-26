/**
 * Public facts for Jacob's Joy, Inc.
 *
 * In-page anchors are the future information architecture. Adding a route
 * later should mean pointing one of these labels at a real URL:
 * About → /about, Programs → /services, Gallery → /gallery,
 * Get involved → /get-involved (donate, events and registration, volunteer,
 * sponsors and partners), Contact → /contact, and a future Blog / resources
 * item that is not on the page yet.
 *
 * Address is the mailing address published on jacobsjoyinc.com/donation.
 * Hours are inferred: weekday replies, Eastern time, events follow the host.
 */

export const site = {
  name: "Jacob’s Joy, Inc.",
  shortName: "Jacob’s Joy",
  tagline:
    "Creating joyful experiences for children and families facing serious illness.",
  mission:
    "Sharing joy and hope with children and families facing their own battles—because every child deserves to experience the fullness of childhood, regardless of the obstacles they face.",
  phoneDisplay: "(585) 451-6244",
  phoneHref: "tel:+15854516244",
  email: "jacobsjoyinc@gmail.com",
  emailHref: "mailto:jacobsjoyinc@gmail.com",
  street: "33 Le Pere Drive",
  cityLine: "Pittsford, NY 14534",
  hours: "Monday–Friday, 9 a.m.–5 p.m. Eastern",
  hoursNote: "Carnival times follow the hospital, camp, or retreat.",
  ein: "39-4229056",
  url: "https://jacobsjoyinc.com",
  // This app is deployed here until jacobsjoyinc.com (still WordPress) points
  // at it. Share-image URLs must use this host or link previews 404 and fall
  // back to the hero photo.
  hostedUrl: "https://jacobsjoy-web.vercel.app",
} as const;

export const nav = [
  { href: "/#story", label: "About" },
  { href: "/#programs", label: "Programs" },
  { href: "/#get-involved", label: "Get involved" },
  { href: "/#gallery", label: "Gallery" },
  { href: "/#contact", label: "Contact" },
] as const;

export const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/jacobsjoyinc/",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61581628897070",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/107837922/",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@JacobsJoyInc",
  },
] as const;

export const interests = [
  { value: "register", label: "Register a family" },
  { value: "sponsor", label: "Sponsor a carnival day" },
  { value: "donate", label: "Donate" },
  { value: "volunteer", label: "Volunteer" },
  { value: "partner", label: "Host a carnival (hospital, camp, or retreat)" },
  { value: "other", label: "Something else" },
] as const;

export type InterestValue = (typeof interests)[number]["value"];

export const videos = [
  {
    id: "20hLXl__wHM",
    title: "Jacob's Joy, Inc.",
    caption: "The story of Jacob’s Joy, told by the people who carry it.",
    href: "https://youtu.be/20hLXl__wHM",
  },
  {
    id: "oPkEuzh_DDI",
    title:
      "Jacob’s Joy Channel 13 Interview | Spreading Joy to Families in Need",
    caption: "A Channel 13 interview about showing up for families with a day of play.",
    href: "https://youtu.be/oPkEuzh_DDI",
  },
] as const;

export type Photo = {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
};

export const storyPhotos = {
  portrait: {
    src: "/photos/portrait.jpg",
    width: 682,
    height: 1024,
    alt: "Jacob smiling outdoors in a blue shirt printed with small fish, green trees behind him.",
    caption: "Jacob, outside, mid-smile.",
  },
  carving: {
    src: "/photos/carving.jpg",
    width: 480,
    height: 640,
    alt: "A round wood carving of a tree above a heart, with a child and a robed figure walking together inside the heart.",
    caption: "A carving of a child walking with Jesus — hope, kept close.",
  },
  ily: {
    src: "/photos/ily.jpg",
    width: 480,
    height: 640,
    alt: "Jacob in a Superman shirt lies in a hospital bed and returns an I love you hand sign to his dad, who stands beside him smiling.",
    caption: "The “I love you” hand sign, passed between Jacob and his dad.",
  },
} as const;

export const gallery: Photo[] = [
  {
    src: "/photos/ice-cream.jpg",
    width: 480,
    height: 640,
    alt: "Jacob laughing with mint ice cream around his mouth, a spoon in one hand and a cup of ice cream in the other.",
    caption: "Mint chip, and no rush to wipe his face.",
  },
  {
    src: "/photos/superhero.jpg",
    width: 768,
    height: 1024,
    alt: "Jacob grins in a big blue chair wearing a handmade red mask and cape, holding a stuffed dog, with a yellow ball beside him.",
    caption: "Mask, cape, stuffed dog, yellow ball.",
  },
  {
    src: "/photos/fence.jpg",
    width: 640,
    height: 428,
    alt: "Jacob laughs from a wheelchair outdoors while one sibling leans in and another raises an arm, in front of a wooden fence.",
    caption: "Siblings in the mix, everybody loud.",
  },
  {
    src: "/photos/deck.jpg",
    width: 767,
    height: 1024,
    alt: "Jacob stands on a wooden deck in a Superman shirt and blue cape, hands clasped, smiling at the camera.",
    caption: "Superman shirt. Backyard deck. Full grin.",
  },
  {
    src: "/photos/swing.jpg",
    width: 768,
    height: 1024,
    alt: "Jacob sits buckled into a green park swing, wearing a white Notre Dame football cap and bright green shorts.",
    caption: "Buckled in, hat on, ready for the swing.",
  },
  {
    src: "/photos/cafe.jpg",
    width: 1024,
    height: 768,
    alt: "Jacob in a Notre Dame football cap sits close beside his mom, who is smiling, in a restaurant booth.",
    caption: "A booth, his mom, and a Notre Dame cap.",
  },
  {
    src: "/photos/porch.jpg",
    width: 768,
    height: 1024,
    alt: "Jacob laughs on a blue floral porch chair with a younger sibling sitting on his lap.",
    caption: "Porch chair. Little sibling. Big laugh.",
  },
  {
    src: "/photos/selfie.jpg",
    width: 481,
    height: 640,
    alt: "Jacob in a Superman shirt laughs with his eyes squeezed shut while his dad smiles beside him.",
    caption: "A laugh he put his whole face into.",
  },
  {
    src: "/photos/outside.jpg",
    width: 640,
    height: 480,
    alt: "Jacob sits with a stuffed animal beside his dad, who is holding a baby, while a brother in a Mickey Mouse cap stands with them outside a brick building.",
    caption: "Dad, brothers, and a stuffed animal in the sun.",
  },
  {
    src: "/photos/glasses.jpg",
    width: 768,
    height: 1024,
    alt: "Jacob smiles wearing oversized paper glasses painted with the words love one another, John 13:34, and a bright blue Jacob’s Joy shirt.",
    caption: "Paper glasses, John 13:34, and a Jacob’s Joy shirt.",
  },
  {
    src: "/photos/energy.jpg",
    width: 480,
    height: 640,
    alt: "A smiling child in a black Never Stop Moving shirt holds up an I love you hand sign in a living room.",
    caption: "The family hand sign, at home.",
  },
  {
    src: "/photos/hospital-smile.jpg",
    width: 768,
    height: 1024,
    alt: "Jacob sits on a hospital bed in a gray shirt with a red heart graphic and smiles at the camera.",
    caption: "Sitting up. Looking right at you. Smiling.",
  },
  {
    src: "/photos/hallway.jpg",
    width: 640,
    height: 480,
    alt: "Jacob sits in a wheelchair holding a stuffed animal while his mom and dad kneel on either side of him, all three smiling in a bright hallway.",
    caption: "Mom, dad, and Jacob, together in the hallway.",
  },
  {
    src: "/photos/couch.jpg",
    width: 640,
    height: 537,
    alt: "Jacob sits on a red couch holding a small blue toy and looks toward his mom, who is resting beside him.",
    caption: "A red couch and a very important blue toy.",
  },
];
