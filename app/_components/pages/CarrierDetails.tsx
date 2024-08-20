"use client";
import React, { useState } from "react";

// EmailJS
import emailjs from "@emailjs/browser";

// Styled
import styled from "styled-components";
import { Card5, ILang } from "@/app/lang/dictionaries/ILang";
import Error from "@/app/_components/_utils/Error";
import Colors from "@/app/_utils/Colors";
import { devices } from "@/app/_utils/Responsive";
import { getImage } from "@/app/_utils/Media";
import { EmailRegEx, PhoneRegEx } from "@/app/_utils/Validation";
import { SubmitHandler } from "react-hook-form";
import { CarrierEntity, Lang, possibleLang } from "@/app/_types";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_CARRIER_TEMPLATE_ID || "";

type InputsType = {
  lastName?: string;
  firstName?: string;
  email?: string;
  phone?: string;
  additionalInfos?: string;

  file?: {
    name?: string;
    size?: any;
  };
};

type ErrorType = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  file?: string;
  additionalInfos?: string;
};

interface CarrierProps {
  lang: ILang;
  job: CarrierEntity;
}
export default function CarrierDetails({ lang, job }: CarrierProps) {
  const language: possibleLang = lang.name;
  // Datas
  const application = lang.carrierDetails.application;

  // Verifications

  // States
  const defaultInputs = {
    lastName: "",
    firstName: "",
    email: "",
    phone: "",
    additionalInfos: "",
    file: {},
  };
  const [inputs, setInputs] = useState<InputsType>(defaultInputs);
  const [success, setSuccess] = useState("");
  const [errors, setErrors] = useState<ErrorType>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Methods
  const onChange = (event: any) => {
    const id = event.target.id;
    setInputs({
      ...inputs,
      [id]: id === "file" ? event.target.files[0] : event.target.value,
    });
  };

  const onSubmit = async (event: any) => {
    event.preventDefault();

    const tempErrors: ErrorType = {};

    setErrors({});
    setIsSubmitting(true);

    if (!inputs.firstName) {
      tempErrors.firstName =
        application.content.form.inputs.firstName.validations.required;
    }

    if (!inputs.lastName) {
      tempErrors.lastName =
        application.content.form.inputs.lastName.validations.required;
    }

    if (!inputs.email) {
      tempErrors.email =
        application.content.form.inputs.email.validations.required;
    } else if (!EmailRegEx.test(inputs.email)) {
      tempErrors.email =
        application.content.form.inputs.email.validations.pattern;
    }

    if (!inputs.phone) {
      tempErrors.phone =
        application.content.form.inputs.phone.validations.required;
    } else if (!PhoneRegEx.test(inputs.phone)) {
      tempErrors.phone =
        application.content.form.inputs.phone.validations.pattern;
    }

    if (!inputs.file || !inputs.file.name) {
      tempErrors.file =
        application.content.form.inputs.file.validations.required;
    } else if (inputs.file.size / 1024 > 1024) {
      tempErrors.file = application.content.form.inputs.file.validations.max;
    }

    setIsSubmitting(false);

    if (Object.keys(tempErrors).length) {
      setErrors(tempErrors);
      return;
    }

    await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, event.target).then(
      (result) => {
        setSuccess(application.content.form.success);
        setInputs(defaultInputs);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <StyledPage>
      <Main>
        <About>
          <AboutHeader>
            <AboutHeaderTitle>{job.name[`${language}`]}</AboutHeaderTitle>
            <AboutHeaderTags>
              {job.location && (
                <AboutHeaderTag>
                  <AboutHeaderTagIcon
                    src={getImage("images/icons/carriers", "location.svg")}
                    alt={job.location[`${language}`]}
                  />{" "}
                  {job.location[`${language}`]}
                </AboutHeaderTag>
              )}
              {job.salary && (
                <AboutHeaderTag>
                  <AboutHeaderTagIcon
                    src={getImage("images/icons/carriers", "salary.svg")}
                    alt={job.salary[`${language}`]}
                  />{" "}
                  {job.salary[`${language}`]}
                </AboutHeaderTag>
              )}
              {job.remote && (
                <AboutHeaderTag>
                  <AboutHeaderTagIcon
                    src={getImage("images/icons/carriers", "remote.svg")}
                    alt={job.remote[`${language}`]}
                  />{" "}
                  {job.remote[`${language}`]}
                </AboutHeaderTag>
              )}
              {job.experience && (
                <AboutHeaderTag>
                  <AboutHeaderTagIcon
                    src={getImage("images/icons/carriers", "experience.svg")}
                    alt={job.experience[`${language}`]}
                  />{" "}
                  {job.experience[`${language}`]}
                </AboutHeaderTag>
              )}
            </AboutHeaderTags>
          </AboutHeader>
          <AboutContent>
            <AboutSection>
              <AboutSectionTitle>
                {application.content.left.job.title}
              </AboutSectionTitle>
              {job.jobDescription.texts.length ? (
                <AboutSectionDescription>
                  {job.jobDescription.texts.map((text, index) => {
                    return (
                      <AboutSectionDescriptionText key={index}>
                        {text[`${language}`]}
                      </AboutSectionDescriptionText>
                    );
                  })}
                </AboutSectionDescription>
              ) : null}
              {job.jobDescription.list.length ? (
                <AboutSectionList>
                  {job.jobDescription.list.map((item, index) => {
                    return (
                      <AboutSectionListItem key={index}>
                        {item[`${language}`]}
                      </AboutSectionListItem>
                    );
                  })}
                </AboutSectionList>
              ) : null}
            </AboutSection>
            <AboutSection>
              <AboutSectionTitle>
                {application.content.left.profile.title}
              </AboutSectionTitle>
              {job.profileRequired.texts.length ? (
                <AboutSectionDescription>
                  {job.profileRequired.texts.map((text, index) => {
                    return (
                      <AboutSectionDescriptionText key={index}>
                        {text[`${language}`]}
                      </AboutSectionDescriptionText>
                    );
                  })}
                </AboutSectionDescription>
              ) : null}
              {job.profileRequired.list.length ? (
                <AboutSectionList>
                  {job.profileRequired.list.map((item, index) => {
                    return (
                      <AboutSectionListItem key={index}>
                        {item[`${language}`]}
                      </AboutSectionListItem>
                    );
                  })}
                </AboutSectionList>
              ) : null}
            </AboutSection>
          </AboutContent>
        </About>
        <ApplicationForm
          encType="multipart/form-data"
          method="post"
          onSubmit={onSubmit}
        >
          <ApplicationFormTitle>
            {application.content.form.title}
          </ApplicationFormTitle>
          {success && (
            <ApplicationFormSuccess>{success}</ApplicationFormSuccess>
          )}
          <ApplicationFormGroups>
            <ApplicationFormGroupWrapper>
              <ApplicationFormGroup>
                <ApplicationFormGroupLabel htmlFor="firstName">
                  {application.content.form.inputs.firstName.label}{" "}
                  <ApplicationFormGroupLabelSpan>
                    *
                  </ApplicationFormGroupLabelSpan>
                </ApplicationFormGroupLabel>
                <ApplicationFormGroupInput
                  id="firstName"
                  name="firstName"
                  type="text"
                  error={errors.firstName}
                  disabled={isSubmitting}
                  placeholder={
                    application.content.form.inputs.firstName.placeholder
                  }
                  value={inputs.firstName}
                  onChange={onChange}
                />
                {errors.firstName && <Error>{errors.firstName}</Error>}
              </ApplicationFormGroup>
              <ApplicationFormGroup>
                <ApplicationFormGroupLabel htmlFor="lastName">
                  {application.content.form.inputs.lastName.label}{" "}
                  <ApplicationFormGroupLabelSpan>
                    *
                  </ApplicationFormGroupLabelSpan>
                </ApplicationFormGroupLabel>
                <ApplicationFormGroupInput
                  id="lastName"
                  name="lastName"
                  type="text"
                  error={errors.lastName}
                  disabled={isSubmitting}
                  placeholder={
                    application.content.form.inputs.lastName.placeholder
                  }
                  value={inputs.lastName}
                  onChange={onChange}
                />
                {errors.firstName && <Error> {errors.firstName} </Error>}
              </ApplicationFormGroup>
            </ApplicationFormGroupWrapper>
            <ApplicationFormGroup>
              <ApplicationFormGroupLabel htmlFor="email">
                {application.content.form.inputs.email.label}{" "}
                <ApplicationFormGroupLabelSpan>*</ApplicationFormGroupLabelSpan>
              </ApplicationFormGroupLabel>
              <ApplicationFormGroupInput
                id="email"
                name="email"
                type="email"
                error={errors.email}
                disabled={isSubmitting}
                placeholder={application.content.form.inputs.email.placeholder}
                value={inputs.email}
                onChange={onChange}
              />
              {errors.email && <Error>{errors.email}</Error>}
            </ApplicationFormGroup>
            <ApplicationFormGroup>
              <ApplicationFormGroupLabel htmlFor="phone">
                {application.content.form.inputs.phone.label}{" "}
                <ApplicationFormGroupLabelSpan>*</ApplicationFormGroupLabelSpan>
              </ApplicationFormGroupLabel>
              <ApplicationFormGroupInput
                id="phone"
                name="phone"
                type="tel"
                error={errors.phone}
                disabled={isSubmitting}
                placeholder={application.content.form.inputs.phone.placeholder}
                value={inputs.phone}
                onChange={onChange}
              />
              {errors.phone && <Error>{errors.phone}</Error>}
            </ApplicationFormGroup>
            <ApplicationFormGroup>
              <ApplicationFormGroupLabel htmlFor="file">
                {application.content.form.inputs.file.label}{" "}
                <ApplicationFormGroupLabelSpan>*</ApplicationFormGroupLabelSpan>
                <ApplicationFormGroupFile error={errors.file}>
                  <ApplicationFormGroupInput
                    id="file"
                    name="file"
                    type="file"
                    accept=".pdf"
                    disabled={isSubmitting}
                    onChange={onChange}
                    error={errors}
                    hidden
                  />
                  <ApplicationFormGroupButtonIcon
                    src={getImage("images/icons", "download.svg")}
                    alt={application.content.form.inputs.file.label}
                  />{" "}
                  {application.content.form.inputs.file.title}
                </ApplicationFormGroupFile>
              </ApplicationFormGroupLabel>
              {errors.file && <Error>{errors.file}</Error>}
            </ApplicationFormGroup>
            <ApplicationFormGroup>
              <ApplicationFormGroupLabel htmlFor="additionalInfos">
                {application.content.form.inputs.additionalInfos.label}
              </ApplicationFormGroupLabel>
              <ApplicationFormGroupTextArea
                id="additionalInfos"
                name="additionalInfos"
                cols={3}
                rows={3}
                error={errors.additionalInfos}
                disabled={isSubmitting}
                placeholder={
                  application.content.form.inputs.additionalInfos.placeholder
                }
                value={inputs.additionalInfos && inputs.additionalInfos}
                onChange={onChange}
              />
              {errors.additionalInfos && (
                <Error>{errors.additionalInfos}</Error>
              )}
            </ApplicationFormGroup>
            <ApplicationFormGroup>
              <ApplicationFormGroupButtonSubmit
                type="submit"
                disabled={isSubmitting}
              >
                {application.content.form.inputs.submit.title}
              </ApplicationFormGroupButtonSubmit>
            </ApplicationFormGroup>
          </ApplicationFormGroups>
        </ApplicationForm>
      </Main>
    </StyledPage>
  );
}

const StyledPage = styled.div``;

const Main = styled.main`
  padding: 30px;
  display: grid;

  @media screen and (${devices.lg}) {
    max-width: 90%;
    margin: 30px auto;
    grid-gap: 60px;
    grid-template-columns: repeat(2, 1fr);
  }
`;

const About = styled.div``;
const AboutHeader = styled.div``;
const AboutHeaderTitle = styled.h1`
  margin: 0;
  color: ${Colors.extremeGray};
`;
const AboutHeaderTags = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-gap: 10px;
  align-items: center;

  @media screen and (${devices.md}) {
    grid-template-columns: repeat(4, max-content);
  }
`;
const AboutHeaderTag = styled.li`
  background-color: ${Colors.gray};
  color: ${Colors.extremeGray};
  font-weight: 600;
  font-size: 0.8em;
  padding: 5px 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
`;
const AboutHeaderTagIcon = styled.img`
  display: block;
  width: 14px;
  height: 14px;
  margin-right: 5px;
  filter: invert(18%) sepia(15%) saturate(1121%) hue-rotate(204deg)
    brightness(72%) contrast(91%);
`;

const AboutContent = styled.div`
  margin: 60px 0;
`;
const AboutSection = styled.div``;
const AboutSectionTitle = styled.h2`
  margin: 0;
  color: ${Colors.extremeGray};
`;
const AboutSectionDescription = styled.div``;
const AboutSectionDescriptionText = styled.p`
  color: ${Colors.extremeGray};
`;
const AboutSectionList = styled.ul`
  padding: 0 20px;
`;
const AboutSectionListItem = styled.li`
  color: ${Colors.extremeGray};
`;

const ApplicationForm = styled.form``;
const ApplicationFormTitle = styled.h3`
  margin: 0;
  color: ${Colors.extremeGray};
`;
const ApplicationFormSuccess = styled.p`
  color: ${Colors.green};
`;
const ApplicationFormGroups = styled.div`
  margin-top: 20px;
  display: grid;
  grid-gap: 20px;
`;
const ApplicationFormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;
const ApplicationFormGroupWrapper = styled.div`
  display: grid;
  grid-gap: 20px;

  @media screen and (${devices.lg}) {
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
  }
`;
const ApplicationFormGroupLabel = styled.label`
  color: ${Colors.extremeGray};
  font-weight: 500;
  margin-bottom: 10px;
`;
const ApplicationFormGroupLabelSpan = styled.span`
  color: ${Colors.red};
`;
interface ErrorProps {
  error: any;
}

const ApplicationFormGroupFile = styled.div<ErrorProps>`
  background-color: transparent;
  border-radius: 5px;
  border: 1px solid ${Colors.primary};
  color: ${Colors.primary};
  font-size: 0.8em;
  font-weight: 600;
  font-family: inherit;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s;
  cursor: pointer;
  transition: font-size ease-in-out 0.1s;
  margin-top: 10px;

  ${(props) => {
    if (props.error) {
      return `
        border: 1px solid ${Colors.red};
        color: ${Colors.red};
        `;
    } else {
      return `
            &:hover {
                transition: .2s;
                background-color: ${Colors.primary};
                color: white;
            }
            `;
    }
  }}

  @media screen and (${devices.lg}) {
    font-size: 1em;
    transition: font-size ease-in-out 0.1s;
  }
`;
const ApplicationFormGroupInput = styled.input<ErrorProps>`
  border-radius: 10px;
  padding: 20px 30px;
  font-family: inherit;
  background-color: ${Colors.gray};
  border: 1px solid transparent;
  transition: 0.3s;
  width: 100%;
  outline: none;

  ${(props) => {
    if (props.error) {
      return `
    border: 1px solid ${Colors.red};
    `;
    } else {
      return `
    &:focus {
      transition: .2s;
      border: 1px solid ${Colors.primary};
    }
    `;
    }
  }}
`;
const ApplicationFormGroupTextArea = styled.textarea<ErrorProps>`
  border-radius: 10px;
  padding: 20px 30px;
  font-family: inherit;
  background-color: ${Colors.gray};
  border: 1px solid transparent;
  transition: 0.3s;
  width: 100%;
  min-height: 150px;
  resize: vertical;
  outline: none;

  ${(props) => {
    if (props.error) {
      return `
  border: 1px solid ${Colors.red};
  `;
    } else {
      return `
  &:focus {
    transition: .2s;
    border: 1px solid ${Colors.primary};
  }
  `;
    }
  }}
`;
const ApplicationFormGroupButtonIcon = styled.img`
  display: block;
  width: 18px;
  height: 18px;
  margin-right: 10px;
  filter: invert(10%) sepia(100%) saturate(6909%) hue-rotate(233deg)
    brightness(93%) contrast(90%);

  ${ApplicationFormGroupFile}:hover & {
    filter: invert(100%) sepia(8%) saturate(7424%) hue-rotate(308deg)
      brightness(116%) contrast(124%);
  }

  ${ApplicationFormGroupFile}[error] & {
    filter: invert(30%) sepia(60%) saturate(2724%) hue-rotate(341deg)
      brightness(82%) contrast(108%);
  }
`;
const ApplicationFormGroupButtonSubmit = styled.button`
  background-color: ${Colors.primary};
  border-radius: 5px;
  border: none;
  color: white;
  font-family: inherit;
  font-size: inherit;
  font-weight: 600;
  padding: 15px;
  cursor: pointer;
  transition: 0.2s;

  ${(props) => {
    if (props.disabled) {
      return `
    background-color: ${Colors.gray};
    `;
    } else {
      return `
      &:hover {
        transition: .2s;
        -moz-box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.07);
          -webkit-box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.07);
          box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.07);
      }
    `;
    }
  }}
`;
