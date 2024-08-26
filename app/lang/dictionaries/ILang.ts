import { possibleLang } from "@/app/_types";

export interface ILang {
  name: possibleLang;
  society: Society;
  home: Home;
  aboutUs: AboutUs;
  carriers: Carriers;
  carrierDetails: CarrierDetails;
  consultants: Consultants;
  consultantDetails: ConsultantsDetails;
  contactUs: ContactUs;
  services: Services;
  navbar: Navbar;
  banner: Banner;
  footer: Footer;
}
export interface Consultants {
  title: string;
  description: string;
  header: Header14;
  consultants: ConsultantsInfo;
  defaultTag: string;
}

export interface Header14 {
  title: string;
  description: string;
}
export interface ConsultantsInfo {
  header: Header15;
  content: Content14;
}

export interface Content14 {
  discover: string;
}
export interface Header15 {
  title: string;
  description: string;
}

export interface ConsultantsDetails {
  title: string;
  description: string;
  content: Content15;
  backlink: string;
}
export interface Content15 {
  descriptionTitle: string;
  experienceTitle: string;
  cv: string;
}

export interface Society {
  infos: Infos;
}

export interface Infos {
  location: string;
  phone: string;
  email: string;
}

export interface Home {
  title: string;
  description: string;
  header: Header;
  cloudProviders: CloudProviders;
  benefits: Benefits;
  cloudSteps: CloudSteps;
  tools: Tools;
  faq: Faq;
}

export interface Header {
  content: Content;
}

export interface Content {
  infos: Infos2;
  image: string;
}

export interface Infos2 {
  title: string;
  button: string;
}

export interface CloudProviders {
  header: Header2;
  content: Content2;
}

export interface Header2 {
  title: string;
}

export interface Content2 {
  logo: Logo;
  texts: string[];
}

export interface Logo {
  alt: string;
  image: string;
}

export interface Benefits {
  header: Header3;
  content: Content3;
}

export interface Header3 {
  title: string;
}

export interface Content3 {
  cards: Card[];
  main: Main;
}

export interface Card {
  title: string;
  icon: string;
}

export interface Main {
  image: string;
}

export interface CloudSteps {
  header: Header4;
  content: Content4;
}

export interface Header4 {
  title: string;
}

export interface Content4 {
  cards: Card2[];
}

export interface Card2 {
  text: string;
  icon: string;
}

export interface Tools {
  header: Header5;
  content: Content5;
}

export interface Header5 {
  title: string;
}

export interface Content5 {
  cards: Card3[];
}

export interface Card3 {
  title: string;
  description: string;
  icons: string[];
}

export interface Faq {
  header: Header6;
  content: Content6[];
}

export interface Header6 {
  title: string;
}

export interface Content6 {
  question: string;
  answer: string;
}

export interface AboutUs {
  title: string;
  description: string;
  team: Team;
  customers: Customers;
}

export interface Team {
  header: Header7;
  content: Content7;
}

export interface Header7 {
  title: string;
}

export interface Content7 {
  cards: Card4[];
  button: string;
}

export interface Card4 {
  linkedin?: string;
  avatar: string;
  fullName: string;
  job: string;
}

export interface Customers {
  header: Header8;
  content: Content8;
}

export interface Header8 {
  title: string;
}

export interface Content8 {
  cards: string[];
}

export interface Carriers {
  title: string;
  description: string;
  header: Header9;
  jobs: Jobs;
}

export interface Header9 {
  title: string;
  description: string;
}

export interface Jobs {
  header: Header10;
  content: Content9;
}

export interface Header10 {
  title: string;
}

export interface Content9 {
  cards: Card5[];
  apply: string;
}

export interface Card5 {
  id: number;
  name: string;
  location: string;
  remote: string;
  experience: string;
  description?: string;
  shortDescription?: string;
  jobDescription: JobDescription;
  profileRequired: ProfileRequired;
  salary?: string;
}

export interface JobDescription {
  texts: string[];
  list: string[];
}

export interface ProfileRequired {
  texts: string[];
  list: string[];
}

export interface CarrierDetails {
  title: string;
  description: string;
  application: Application;
}

export interface Application {
  content: Content10;
}

export interface Content10 {
  left: Left;
  form: Form;
}

export interface Left {
  job: Job;
  profile: Profile;
}

export interface Job {
  title: string;
}

export interface Profile {
  title: string;
}

export interface Form {
  title: string;
  inputs: Inputs;
  success: string;
}

export interface Inputs {
  firstName: FirstName;
  lastName: LastName;
  email: Email;
  phone: Phone;
  file: File;
  additionalInfos: AdditionalInfos;
  submit: Submit;
}

export interface FirstName {
  label: string;
  placeholder: string;
  validations: Validations;
}

export interface Validations {
  required: string;
}

export interface LastName {
  label: string;
  placeholder: string;
  validations: Validations2;
}

export interface Validations2 {
  required: string;
}

export interface Email {
  label: string;
  placeholder: string;
  validations: Validations3;
}

export interface Validations3 {
  required: string;
  pattern: string;
}

export interface Phone {
  label: string;
  placeholder: string;
  validations: Validations4;
}

export interface Validations4 {
  required: string;
  pattern: string;
}

export interface File {
  label: string;
  title: string;
  validations: Validations5;
}

export interface Validations5 {
  required: string;
  max: string;
}

export interface AdditionalInfos {
  label: string;
  placeholder: string;
}

export interface Submit {
  title: string;
}

export interface ContactUs {
  title: string;
  description: string;
  header: Header11;
  content: Content11;
}

export interface Header11 {
  title: string;
  description: string[];
}

export interface Content11 {
  left: Left2;
  form: Form2;
}

export interface Left2 {
  title: string;
  description: string[];
  socials: Social[];
}

export interface Social {
  name: string;
  icon: string;
  link: string;
}

export interface Form2 {
  inputs: Inputs2;
  success: string;
}

export interface Inputs2 {
  name: Name;
  email: Email2;
  phone: Phone2;
  subject: Subject;
  message: Message;
  button: string;
}

export interface Name {
  placeholder: string;
  validations: Validations6;
}

export interface Validations6 {
  required: string;
}

export interface Email2 {
  placeholder: string;
  validations: Validations7;
}

export interface Validations7 {
  required: string;
  pattern: string;
}

export interface Phone2 {
  placeholder: string;
  validations: Validations8;
}

export interface Validations8 {
  required: string;
  pattern: string;
}

export interface Subject {
  placeholder: string;
  validations: Validations9;
}

export interface Validations9 {
  required: string;
}

export interface Message {
  placeholder: string;
  validations: Validations10;
}

export interface Validations10 {
  required: string;
}

export interface Services {
  title: string;
  description: string;
  devOpPractices: DevOpPractices;
  services: Services2;
}

export interface DevOpPractices {
  header: Header12;
  content: Content12;
}

export interface Header12 {
  title: string;
}

export interface Content12 {
  cards: Card6[];
}

export interface Card6 {
  title: string;
  icon: string;
}

export interface Services2 {
  header: Header13;
  content: Content13;
}

export interface Header13 {
  title: string;
  description: string[];
}

export interface Content13 {
  cards: Card7[];
}

export interface Card7 {
  title: string;
  image: string;
  description: string[];
}

export interface Navbar {
  links: Links;
  contact: string;
}

export interface Links {
  home: string;
  services: string;
  carriers: string;
  aboutUs: string;
  boond: string;
  consultants: string;
}

export interface Banner {
  title: string;
  description: string;
  button: string;
  image: string;
}

export interface Footer {
  logo: string;
  banner: Banner2;
  socials: Social2[];
  copyright: string;
}

export interface Banner2 {
  title: string;
  description: string;
  button: string;
}

export interface Social2 {
  name: string;
  icon: string;
  link: string;
}
