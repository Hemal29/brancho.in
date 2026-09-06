import type { Metadata } from "next";
import LegalLayout from "@/components/pages/LegalLayout";

export const metadata: Metadata = {
  title: "Intellectual Property Policy",
  description:
    "How Brancho's brand, technology, designs, content and other intellectual property may be used, protected and reported.",
  alternates: { canonical: "/legal/intellectual-property-policy" },
};

const SECTIONS = [
  {
    id: "brancho-ip",
    title: "Brancho Intellectual Property",
    body: [
      "Unless otherwise stated, Brancho or its applicable licensors may own or have rights to use intellectual property appearing on Brancho's services, including: Brancho name, Brancho logos, brand marks, product names, website designs, application interfaces, graphics, illustrations, written content, videos, photography, marketing materials, software, source code, databases, platform architecture and other original materials.",
      "These materials may be protected by applicable intellectual-property laws.",
    ],
  },
  {
    id: "name-brand",
    title: "The Brancho Name & Brand",
    body: [
      "BRANCHO and associated brand elements may function as trademarks or other protected identifiers.",
      "You must not use Brancho branding in a way that: creates confusion about affiliation; suggests unauthorised endorsement; misrepresents a relationship with Brancho; damages the Brancho brand; impersonates Brancho; or misleads customers or professionals.",
    ],
  },
  {
    id: "logo",
    title: "Brancho Logo",
    body: [
      "The Brancho logo and visual identity may not be copied, modified, reproduced, or commercially used without appropriate permission.",
      "This includes using Brancho branding on websites, apps, social-media profiles, advertisements, business cards, documents, products, merchandise and other commercial materials, unless such use is authorised.",
    ],
  },
  {
    id: "content",
    title: "Website & Application Content",
    body: [
      "Brancho's website and application may contain original layouts, designs, text, icons, graphics, animations, interfaces, images and functional elements.",
      "You must not reproduce or commercially exploit substantial portions of these materials without permission.",
    ],
  },
  {
    id: "software",
    title: "Software & Technology",
    body: [
      "Brancho's software, systems and technology may contain proprietary or licensed intellectual property.",
      "You must not copy Brancho source code; reverse engineer restricted components; decompile software where prohibited; extract proprietary algorithms; circumvent technical protections; republish Brancho software; or build unauthorised derivative systems from protected materials.",
      "Nothing in this Policy grants ownership of Brancho technology to users.",
    ],
  },
  {
    id: "copyright",
    title: "Copyright",
    body: [
      "Copyright may protect original Brancho materials such as articles, website copy, graphics, videos, photographs, illustrations, marketing materials, software and other original creative works.",
      "Unauthorised copying or redistribution may violate applicable law.",
    ],
  },
  {
    id: "third-party-ip",
    title: "Third-Party Intellectual Property",
    body: [
      "Brancho may use intellectual property belonging to third parties under licence, permission or other lawful arrangements.",
      "Examples may include software libraries, fonts, images, payment technology, maps, analytics tools, APIs and other third-party services.",
      "Third-party intellectual property remains subject to its applicable rights and licences.",
    ],
  },
  {
    id: "user-content",
    title: "User-Submitted Content",
    body: [
      "Users may submit content to Brancho, including reviews, photos, videos, service descriptions, profile information, feedback and other materials.",
      "You retain ownership of content that you own, subject to the rights and licences you grant to Brancho under applicable agreements.",
    ],
  },
  {
    id: "rights-you-grant",
    title: "Rights You Grant Brancho",
    body: [
      "When you submit content to Brancho, you grant Brancho the permissions reasonably necessary to operate the platform, display the content, provide requested services, process bookings, promote Brancho where permitted, improve platform functionality, investigate complaints and comply with legal obligations.",
      "The exact rights may depend on the nature of the content and applicable Brancho terms.",
    ],
  },
  {
    id: "right-to-submit",
    title: "You Must Have the Right to Submit Content",
    body: [
      "Before uploading or submitting content, you must have the necessary rights or permissions.",
      "You must not upload copyrighted material you do not have permission to use, someone else's private content without appropriate authority, stolen photographs, unauthorised logos, pirated material, or content that infringes another person's rights.",
    ],
  },
  {
    id: "professional-content",
    title: "Professional Content",
    body: [
      "Professionals may provide business photographs, service descriptions, portfolio material, business logos, certifications and promotional material.",
      "Professionals are responsible for ensuring they have the necessary rights to submit such material.",
    ],
  },
  {
    id: "customer-content",
    title: "Customer Content",
    body: [
      "Customers may submit reviews, photographs, videos or other service-related material.",
      "Customers should only upload content they have the right to share. Where content contains another person's identifiable information, appropriate privacy and consent requirements may apply.",
    ],
  },
  {
    id: "no-copying",
    title: "No Unauthorised Copying",
    body: [
      "You must not copy Brancho's protected materials for the purpose of creating a competing or substantially similar commercial product where such use infringes applicable intellectual-property rights.",
      "This includes unauthorised copying of brand identity, marketing materials, website content, application designs, original written materials, protected software and other proprietary materials.",
    ],
  },
  {
    id: "inspiration-vs-copying",
    title: "Inspiration vs Copying",
    body: [
      "Using general ideas, concepts or industry conventions is not automatically prohibited.",
      "However, users must not copy protected Brancho expression, branding or proprietary materials in a way that infringes applicable rights.",
      "Be inspired by the industry. Don't pretend Brancho's work is yours.",
    ],
  },
  {
    id: "trademark-misuse",
    title: "Trademark Misuse",
    body: [
      "You must not use Brancho trademarks in a manner that creates false affiliation, suggests sponsorship without permission, misleads users, damages the trademark, or uses the mark as your own brand.",
      "Unauthorised registration of confusingly similar brand names, domains or social profiles may also be challenged where appropriate.",
    ],
  },
  {
    id: "domains-social",
    title: "Domain Names & Social Media",
    body: [
      "You must not create domains, social-media accounts, pages or profiles designed to falsely appear to be official Brancho channels.",
      "Examples include names intended to mislead users into believing that the account is operated by Brancho.",
    ],
  },
  {
    id: "removal-requests",
    title: "Content Removal Requests",
    body: [
      "If you believe material appearing on Brancho infringes your intellectual-property rights, you may contact Brancho.",
      "Your report should include: your name and contact information; identification of the intellectual property; identification of the allegedly infringing material; location of the material on Brancho; explanation of your rights; supporting information or documentation; and a statement that the information provided is accurate to the best of your knowledge.",
    ],
  },
  {
    id: "copyright-reporting",
    title: "Reporting Copyright Infringement",
    body: [
      "Copyright concerns can be sent to support@brancho.in with the subject \"INTELLECTUAL PROPERTY — COPYRIGHT REPORT\".",
      "Brancho may request additional information where necessary.",
    ],
  },
  {
    id: "trademark-complaints",
    title: "Trademark Complaints",
    body: [
      "Trademark-related complaints may be submitted to the same contact channel with the subject \"INTELLECTUAL PROPERTY — TRADEMARK REPORT\".",
      "Brancho may review the complaint and take appropriate action where warranted.",
    ],
  },
  {
    id: "review-of-reports",
    title: "Review of Reports",
    body: [
      "After receiving an intellectual-property complaint, Brancho may review the submitted information, request additional evidence, contact relevant parties, temporarily restrict content where appropriate, remove content where legally or operationally appropriate, and take other reasonable measures.",
      "Submitting a complaint does not automatically guarantee removal.",
    ],
  },
  {
    id: "counterclaims",
    title: "Counterclaims & Disputes",
    body: [
      "Where appropriate, Brancho may allow the affected user to respond to an intellectual-property complaint.",
      "Brancho may consider information provided by both parties before taking further action.",
      "Nothing in this Policy prevents parties from pursuing remedies available under applicable law.",
    ],
  },
  {
    id: "repeat-infringement",
    title: "Repeat Infringement",
    body: [
      "Repeated or serious infringement may result in content removal, account restrictions, suspension, termination or other appropriate action.",
      "Brancho may take stronger measures where repeated infringement creates significant risk.",
    ],
  },
  {
    id: "open-source",
    title: "Open-Source Software",
    body: [
      "Some Brancho technology may incorporate open-source software.",
      "Such software may be subject to separate licence terms. Where applicable, those licence terms will govern the relevant open-source components.",
    ],
  },
  {
    id: "third-party-rights",
    title: "Third-Party Rights",
    body: [
      "Brancho respects the intellectual-property rights of others.",
      "If you believe a third party's content, trademark or other intellectual property has been improperly used through Brancho, you may report it for review.",
    ],
  },
  {
    id: "no-ownership-transfer",
    title: "No Transfer of Ownership",
    body: [
      "Using Brancho does not transfer ownership of Brancho's intellectual property to you.",
      "Likewise, submitting content does not automatically transfer ownership of content that you legally own. Any licence or permission granted is subject to the applicable Brancho terms.",
    ],
  },
  {
    id: "permission-to-use",
    title: "Permission to Use Brancho Materials",
    body: [
      "If you want to use Brancho's branding, content, photographs, logos or other protected materials for commercial or promotional purposes, contact Brancho before using them.",
      "Written permission may be required.",
    ],
  },
  {
    id: "collaborations",
    title: "Brand Collaborations",
    body: [
      "Approved partners, professionals, agencies or other authorised parties may use Brancho branding only according to the permissions and brand requirements provided to them.",
      "Authorisation may be withdrawn where necessary.",
    ],
  },
  {
    id: "enforcement",
    title: "Enforcement",
    body: [
      "Brancho may take reasonable steps to protect its intellectual property. Depending on the circumstances, this may include issuing notices, removing content, restricting accounts, suspending accounts, terminating accounts, requesting corrective action and pursuing available legal remedies.",
    ],
  },
  {
    id: "no-false-claims",
    title: "No False IP Claims",
    body: [
      "Intellectual-property complaints must be made honestly.",
      "Knowingly submitting false or misleading infringement claims may itself result in appropriate action.",
    ],
  },
  {
    id: "policy-changes",
    title: "Policy Changes",
    body: [
      "Brancho may update this Intellectual Property Policy due to new products, brand developments, technology changes, legal requirements, operational improvements and changes in intellectual-property practices.",
      "The Last Updated date will reflect the latest version.",
    ],
  },
  {
    id: "governing-law",
    title: "Governing Law",
    body: [
      "This Intellectual Property Policy is governed by applicable laws of India, subject to mandatory legal rights and protections.",
    ],
  },
  {
    id: "contact",
    title: "Contact Brancho",
    body: [
      "For intellectual-property matters: WhatsApp / Phone: +91 75728 36402; Email: support@brancho.in; Address: Somnath Road, Veraval, Gujarat – 362265, India.",
      "General IP enquiries: \"INTELLECTUAL PROPERTY — BRANCHO\". Copyright complaints: \"INTELLECTUAL PROPERTY — COPYRIGHT REPORT\". Trademark complaints: \"INTELLECTUAL PROPERTY — TRADEMARK REPORT\".",
    ],
  },
];

export default function Page() {
  return (
    <LegalLayout
      title="Intellectual Property Policy"
      updated="4 September 2026"
      intro="Brancho's brand, technology, designs, content and other intellectual property are important parts of the platform. This policy explains how intellectual property connected with Brancho may be used, protected and reported, and should be read together with Brancho's Terms & Conditions, Acceptable Use Policy, Privacy Policy and other applicable policies."
      sections={SECTIONS}
    />
  );
}
