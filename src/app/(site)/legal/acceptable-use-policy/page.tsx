import type { Metadata } from "next";
import LegalLayout from "@/components/pages/LegalLayout";

export const metadata: Metadata = {
  title: "Acceptable Use Policy",
  description:
    "How customers, professionals, visitors and other users may use Brancho so the platform remains useful, safe, fair and reliable for everyone.",
  alternates: { canonical: "/legal/acceptable-use-policy" },
};

const SECTIONS = [
  {
    id: "acceptable-use",
    title: "Acceptable Use",
    body: [
      "You may use Brancho to discover available services; request or book legitimate services; provide approved professional services; communicate about genuine bookings; make legitimate payments; manage your account; contact customer support; provide genuine feedback; and use other features made available by Brancho.",
      "Your use must comply with applicable law and Brancho's policies.",
    ],
  },
  {
    id: "accurate-information",
    title: "You Must Provide Accurate Information",
    body: [
      "Users must provide accurate information when Brancho requests it.",
      "You must not create fake identities; impersonate another person; submit false documents; misrepresent qualifications; provide misleading booking information; manipulate account information; or deliberately provide inaccurate contact details.",
    ],
  },
  {
    id: "no-fake-accounts",
    title: "No Fake Accounts",
    body: [
      "You must not create accounts for the purpose of evading restrictions, manipulating reviews, abusing promotions, creating fake bookings, committing fraud, circumventing verification or misleading other users.",
      "Brancho may restrict accounts associated with such activity.",
    ],
  },
  {
    id: "no-fraud",
    title: "No Fraud or Deception",
    body: [
      "You must not use Brancho to commit or facilitate fraud, theft, scams, payment fraud, identity fraud, false claims, refund abuse, insurance fraud, financial deception or other unlawful or deceptive conduct.",
    ],
  },
  {
    id: "no-fake-bookings",
    title: "No Fake Bookings",
    body: [
      "Users must create bookings only for genuine service requirements.",
      "You must not create bookings to waste professional time, test the platform without authorisation, manipulate availability, harass a professional, generate fake activity, abuse promotional offers or disrupt Brancho operations.",
    ],
  },
  {
    id: "no-payment-manipulation",
    title: "No Payment Manipulation",
    body: [
      "Users must not use stolen payment methods; attempt unauthorised transactions; manipulate payment systems; submit false payment claims; abuse chargebacks; circumvent legitimate charges; or use Brancho to launder or conceal funds.",
      "Suspicious transactions may be reviewed or restricted.",
    ],
  },
  {
    id: "no-refund-abuse",
    title: "No Refund Abuse",
    body: [
      "Refunds are intended to resolve genuine payment or service issues. You must not submit false refund claims; fabricate service problems; alter evidence; claim a service was not provided when it was; repeatedly exploit refund processes; or attempt to obtain duplicate refunds.",
      "Genuine complaints made in good faith are not prohibited.",
    ],
  },
  {
    id: "no-harassment",
    title: "No Harassment or Abuse",
    body: [
      "Brancho must not be used to harass, threaten, intimidate or abuse another person. This includes threats, repeated unwanted contact, intimidation, stalking, abusive messages, personal attacks, sexual harassment and deliberate humiliation.",
      "Serious violations may result in immediate account restrictions.",
    ],
  },
  {
    id: "no-violence",
    title: "No Violence or Threats",
    body: [
      "You must not use Brancho to threaten or facilitate violence against another person. This includes threats made through messages, calls, bookings, profiles, reviews and other Brancho channels.",
      "If there is an immediate threat to safety, contact the appropriate emergency authorities.",
    ],
  },
  {
    id: "no-discrimination",
    title: "No Unlawful Discrimination",
    body: [
      "Users must not use Brancho to engage in unlawful discriminatory conduct.",
      "Customers and professionals should interact respectfully and professionally.",
    ],
  },
  {
    id: "no-sexual-misconduct",
    title: "No Sexual Misconduct",
    body: [
      "Brancho is a service platform. You must not use Brancho to request sexual services; make unwanted sexual propositions; send inappropriate sexual content; harass another person sexually; or arrange sexual activity through service bookings.",
      "Serious violations may result in immediate action.",
    ],
  },
  {
    id: "no-unauthorised-access",
    title: "No Unauthorised Access",
    body: [
      "You must not attempt to access another person's account, restricted platform systems, administrative interfaces, internal databases, private customer information, or professional information not made available to you.",
      "You must not bypass security controls or authentication mechanisms.",
    ],
  },
  {
    id: "no-hacking",
    title: "No Hacking or Platform Attacks",
    body: [
      "You must not introduce malware; deploy malicious code; attempt to crash Brancho systems; conduct denial-of-service attacks; exploit vulnerabilities maliciously; circumvent technical restrictions; or interfere with platform infrastructure.",
      "Security vulnerabilities should be reported responsibly to Brancho.",
    ],
  },
  {
    id: "no-data-scraping",
    title: "No Data Scraping",
    body: [
      "You must not automatically collect or extract Brancho data through bots, scrapers, crawlers, automated scripts, unauthorised APIs or other automated methods, unless Brancho has expressly authorised such activity.",
    ],
  },
  {
    id: "no-misuse-customer-info",
    title: "No Misuse of Customer Information",
    body: [
      "Information obtained through Brancho must only be used for legitimate purposes.",
      "You must not sell customer information; share private information unnecessarily; contact customers for unrelated purposes; use information for harassment; use service addresses for personal purposes; or build unauthorised databases of users.",
    ],
  },
  {
    id: "no-misuse-professional-info",
    title: "No Misuse of Professional Information",
    body: [
      "Users must not misuse information about Brancho Professionals. This includes unwanted contact, harassment, sharing private information, publishing personal details and using professional information for unrelated purposes.",
    ],
  },
  {
    id: "no-spam",
    title: "No Spam",
    body: [
      "You must not use Brancho to distribute unsolicited advertisements, mass messages, promotional spam, repeated unwanted communications, malicious links or phishing messages.",
    ],
  },
  {
    id: "no-malicious-content",
    title: "No Malicious Content",
    body: [
      "You must not upload, send or distribute content containing malware, viruses, malicious scripts, phishing links, credential-stealing tools or other harmful software.",
    ],
  },
  {
    id: "no-rating-manipulation",
    title: "No Manipulation of Ratings",
    body: [
      "Reviews and ratings must represent genuine experiences.",
      "You must not create fake reviews; buy or sell reviews; manipulate ratings; threaten someone over a rating; create multiple accounts to influence ratings; or offer improper incentives for reviews.",
    ],
  },
  {
    id: "no-promotional-abuse",
    title: "No Promotional Abuse",
    body: [
      "Brancho promotions are intended for legitimate use. You must not create multiple accounts to claim the same promotion; manipulate referral systems; sell promotional codes where prohibited; exploit technical errors; or circumvent eligibility requirements.",
      "Brancho may cancel improperly obtained promotional benefits.",
    ],
  },
  {
    id: "no-off-platform",
    title: "No Off-Platform Manipulation",
    body: [
      "Users and professionals must not deliberately move Brancho transactions outside the platform for the purpose of avoiding applicable fees, circumventing platform protections, avoiding legitimate records or evading Brancho policies.",
      "Legitimate personal communication outside Brancho is not automatically prohibited; the restriction applies to misuse that violates applicable Brancho agreements.",
    ],
  },
  {
    id: "no-illegal-activities",
    title: "No Illegal Activities",
    body: [
      "Brancho must not be used to facilitate illegal activity. This includes arranging criminal activity, facilitating theft, committing fraud, gaining unauthorised access, distributing prohibited material or circumventing applicable law.",
    ],
  },
  {
    id: "no-dangerous-misuse",
    title: "No Dangerous Misuse",
    body: [
      "Users must not request or perform services in circumstances involving unreasonable danger.",
      "Professionals may refuse services where completing the requested work would create a serious safety risk.",
    ],
  },
  {
    id: "no-improper-communication",
    title: "No Improper Use of Communication Channels",
    body: [
      "Brancho communication channels should be used for legitimate service-related purposes. Do not use them to harass people; send spam; distribute malicious links; conduct scams; promote unrelated businesses without permission; or distribute offensive or unlawful material.",
    ],
  },
  {
    id: "no-impersonation",
    title: "No Impersonation of Brancho",
    body: [
      "You must not falsely represent yourself as Brancho, a Brancho employee, a Brancho representative, an authorised support agent, or another professional or customer.",
      "You must not create websites, profiles, messages or documents designed to misleadingly appear official.",
    ],
  },
  {
    id: "content-you-submit",
    title: "Content You Submit",
    body: [
      "If you submit content to Brancho, including reviews, photos, videos, service information, profile information, messages and feedback, you must have the necessary rights and permissions to submit that content.",
      "You must not knowingly submit unlawful, fraudulent or misleading content.",
    ],
  },
  {
    id: "ip",
    title: "Intellectual Property",
    body: [
      "You must not use Brancho's logo, brand identity, content, software, designs, trademarks or other protected materials without appropriate authorisation.",
      "Intellectual property matters are further governed by Brancho's Intellectual Property Policy.",
    ],
  },
  {
    id: "account-security",
    title: "Account Security",
    body: [
      "Users are responsible for maintaining reasonable security over their accounts. You must not share passwords unnecessarily; give another person access to your account; allow unauthorised use of your account; or attempt to access another user's credentials.",
      "If you suspect account compromise, contact Brancho promptly.",
    ],
  },
  {
    id: "reporting-abuse",
    title: "Reporting Abuse",
    body: [
      "If you encounter behaviour that violates this Policy, you can report it to Brancho. Reports may relate to fraud, harassment, safety issues, fake accounts, suspicious payments, platform abuse, privacy violations or other prohibited activity.",
      "Brancho may investigate reports according to applicable policies.",
    ],
  },
  {
    id: "enforcement",
    title: "Enforcement",
    body: [
      "If Brancho determines that an account or activity violates this Policy, Brancho may take appropriate action. Depending on the circumstances, this may include a warning, content removal, booking cancellation, restriction of certain features, payment review, temporary suspension, permanent account termination or other appropriate measures.",
    ],
  },
  {
    id: "serious-violations",
    title: "Serious Violations",
    body: [
      "Brancho may take immediate action where reasonably necessary to address serious risks involving violence, threats, fraud, identity theft, serious harassment, sexual misconduct, dangerous conduct, major privacy violations or platform security attacks.",
    ],
  },
  {
    id: "appeals",
    title: "Appeals",
    body: [
      "Where Brancho provides an appeal process, an affected user may request review of an enforcement decision.",
      "The user may be asked to provide account information, relevant booking details, an explanation and supporting evidence. Brancho may review the information and communicate the applicable outcome.",
    ],
  },
  {
    id: "cooperation",
    title: "Cooperation With Authorities",
    body: [
      "Brancho may cooperate with lawful requests from law enforcement, courts, government authorities, regulatory bodies and other legally authorised entities.",
      "Information may be disclosed where required or permitted by applicable law.",
    ],
  },
  {
    id: "no-bypassing",
    title: "No Bypassing Enforcement",
    body: [
      "Users must not create another account or use another person's account to bypass suspension, termination, verification restrictions, booking restrictions or other Brancho enforcement measures.",
    ],
  },
  {
    id: "policy-changes",
    title: "Policy Changes",
    body: [
      "Brancho may update this Acceptable Use Policy because of new features, platform changes, new risks, operational improvements or legal or regulatory requirements.",
      "The Last Updated date will indicate the latest version.",
    ],
  },
  {
    id: "governing-law",
    title: "Governing Law",
    body: [
      "This Acceptable Use Policy is governed by applicable laws of India, subject to mandatory legal rights and protections.",
    ],
  },
  {
    id: "contact",
    title: "Contact Brancho",
    body: [
      "For questions or reports regarding this Policy: WhatsApp / Phone: +91 75728 36402; Email: support@brancho.in; Address: Somnath Road, Veraval, Gujarat – 362265, India. For policy-related reports use the subject \"ACCEPTABLE USE — BRANCHO\".",
    ],
  },
];

export default function Page() {
  return (
    <LegalLayout
      title="Acceptable Use Policy"
      updated="4 September 2026"
      intro="This policy explains how customers, professionals, visitors and other users may use Brancho and its services. The purpose is simple: Brancho should remain useful, safe, fair and reliable for everyone. It applies to Brancho's websites, applications, booking systems, communication channels and other services made available by Brancho."
      sections={SECTIONS}
    />
  );
}
