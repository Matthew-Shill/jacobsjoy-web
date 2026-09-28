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
    "Free carnival days at children’s hospitals, free family retreats, and a partnership with Every1Camp.",
  mission:
    "Jacob’s Joy, Inc. exists to bring light, laughter, and lasting memories to children facing cancer, living with disabilities, and those courageously battling life-altering diseases. Through free carnival days at children’s hospitals and free family retreats we create spaces where kids and their families can experience joy, community, and the freedom of play. Guided by compassion and inclusion, our mission is to lift burdens, and remind families that they are never alone.",
  phoneDisplay: "(585) 451-6244",
  phoneHref: "tel:+15854516244",
  email: "jacobsjoyinc@gmail.com",
  emailHref: "mailto:jacobsjoyinc@gmail.com",
  street: "33 Le Pere Drive",
  cityLine: "Pittsford, NY 14534",
  hours: "Monday–Friday, 9 a.m.–5 p.m. Eastern",
  hoursNote: "Event times follow the hospital, retreat, or camp.",
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
  { value: "hospital", label: "Bring a Carnival to Your Hospital" },
  { value: "retreat", label: "Ask About a Family Retreat" },
  { value: "camp", label: "Every1Camp Registration" },
  { value: "sponsor", label: "Sponsor a Carnival or Retreat" },
  { value: "volunteer", label: "Volunteer at a Hospital Carnival" },
  { value: "donate", label: "Donate to Jacob’s Joy" },
  { value: "every1camp", label: "Support Every1Camp" },
  { value: "other", label: "Something else" },
] as const;

/**
 * Camp registration, event sponsorship, and event volunteering.
 * Leave a string empty until the real URL arrives. The button stays on the
 * page and opens the contact form.
 */
export const pendingLinks = {
  campRegistration: "https://www.every1camp.com",
  eventSponsorship: "",
  eventVolunteer: "",
} as const;

export function destination(url: string) {
  if (url) return { href: url, external: true as const };
  return { href: "#contact", external: false as const };
}

/** Payment links from the current Jacob’s Joy donation page. */
export const donations = {
  oneTime: "https://buy.stripe.com/5kQ3cx1LWeED49A71tdEs00",
  monthly: "https://donate.stripe.com/9B6eVf4Y8dAzbC2dpRdEs01",
  /**
   * Stripe payment link for Every1Camp gifts through Jacob’s Joy.
   * Leave empty until that link exists. The button then opens the contact form.
   */
  every1Camp: "",
} as const;

/** Current GolfStatus event page, already used on jacobsjoyinc.com. */
export const golfTournamentUrl =
  "https://events.golfstatus.com/event/jacobs-joy-inc";

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
    caption: "A Channel 13 interview about showing up for families with play, joy, and connection.",
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
    caption: "Jacob.",
  },
  carving: {
    src: "/photos/carving.jpg",
    width: 480,
    height: 640,
    alt: "A round wood carving of a tree above a heart, with a child and a robed figure walking together inside the heart.",
    caption: "Walking with Jesus.",
  },
  ily: {
    src: "/photos/ily.jpg",
    width: 480,
    height: 640,
    alt: "Jacob in a Superman shirt lies in a hospital bed and returns an I love you hand sign to his dad, who stands beside him smiling.",
    caption: "I love you.",
  },
} as const;

export const gallery: Photo[] = [
  {
    src: "/photos/ice-cream.jpg",
    width: 480,
    height: 640,
    alt: "Jacob laughing with mint ice cream around his mouth, a spoon in one hand and a cup of ice cream in the other.",
    caption: "Ice cream joy.",
  },
  {
    src: "/photos/superhero.jpg",
    width: 768,
    height: 1024,
    alt: "Jacob grins in a big blue chair wearing a handmade red mask and cape, holding a stuffed dog, with a yellow ball beside him.",
    caption: "Superhero Jacob!",
  },
  {
    src: "/photos/fence.jpg",
    width: 640,
    height: 428,
    alt: "Jacob laughs from a wheelchair outdoors while one sibling leans in and another raises an arm, in front of a wooden fence.",
    caption: "Jacob and his brothers.",
  },
  {
    src: "/photos/deck.jpg",
    width: 767,
    height: 1024,
    alt: "Jacob stands on a wooden deck in a Superman shirt and blue cape, hands clasped, smiling at the camera.",
    caption: "Superman Jacob.",
  },
  {
    src: "/photos/swing.jpg",
    width: 768,
    height: 1024,
    alt: "Jacob sits buckled into a green park swing, wearing a white Notre Dame football cap and bright green shorts.",
    caption: "A day at the park.",
  },
  {
    src: "/photos/cafe.jpg",
    width: 1024,
    height: 768,
    alt: "Jacob in a Notre Dame football cap sits close beside his mom, who is smiling, in a restaurant booth.",
    caption: "Jacob and his Mom.",
  },
  {
    src: "/photos/porch.jpg",
    width: 768,
    height: 1024,
    alt: "Jacob laughs on a blue floral porch chair with a younger sibling sitting on his lap.",
    caption: "Jacob and his brother.",
  },
  {
    src: "/photos/selfie.jpg",
    width: 481,
    height: 640,
    alt: "Jacob in a Superman shirt laughs with his eyes squeezed shut while his dad smiles beside him.",
    caption: "Jacob and his Dad.",
  },
  {
    src: "/photos/outside.jpg",
    width: 640,
    height: 480,
    alt: "Jacob sits with a stuffed animal beside his dad, who is holding a baby, while a brother in a Mickey Mouse cap stands with them outside a brick building.",
    caption: "Jacob, his Dad, and his brothers.",
  },
  {
    src: "/photos/glasses.jpg",
    width: 768,
    height: 1024,
    alt: "Jacob smiles wearing oversized paper glasses painted with the words love one another, John 13:34, and a bright blue Jacob’s Joy shirt.",
    caption: "Love one another.",
  },
  {
    src: "/photos/energy.jpg",
    width: 480,
    height: 640,
    alt: "A smiling child in a black Never Stop Moving shirt holds up an I love you hand sign in a living room.",
    caption: "I love you, at home.",
  },
  {
    src: "/photos/hospital-smile.jpg",
    width: 768,
    height: 1024,
    alt: "Jacob sits on a hospital bed in a gray shirt with a red heart graphic and smiles at the camera.",
    caption: "Jacob’s smile.",
  },
  {
    src: "/photos/hallway.jpg",
    width: 640,
    height: 480,
    alt: "Jacob sits in a wheelchair holding a stuffed animal while his mom and dad kneel on either side of him, all three smiling in a bright hallway.",
    caption: "Jacob, Mom, and Dad.",
  },
  {
    src: "/photos/couch.jpg",
    width: 640,
    height: 537,
    alt: "Jacob sits on a red couch holding a small blue toy and looks toward his mom, who is resting beside him.",
    caption: "Home with Mom.",
  },
];
