"use client";
import React, { useState } from "react";

// EmailJS
import emailjs from "@emailjs/browser";

// Hook
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

// Styled
import styled from "styled-components";
import { ILang } from "@/app/lang/dictionaries/ILang";
import { openExternalLink } from "@/app/_utils/Link";
import { getImage } from "@/app/_utils/Media";
import { devices } from "@/app/_utils/Responsive";
import Colors from "@/app/_utils/Colors";
import Error from "@/app/_components/_utils/Error";
import { EmailRegEx, PhoneRegEx } from "@/app/_utils/Validation";

const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";
const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID || "";

interface ContactProps {
  lang: ILang;
}

export default function Contact({ lang }: ContactProps) {
  // Hooks
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  // States
  const [success, setSuccess] = useState("");

  // Data
  const left = lang.contactUs.content.left;
  const form = lang.contactUs.content.form;

  // Methods
  const onSubmit = async (data: any) => {
    await emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
        },
        PUBLIC_KEY
      )
      .then(
        (result) => {
          reset();

          setSuccess(form.success);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <StyledPage>
      <Main>
        <Section>
          <SectionHeader>
            <SectionHeaderTitle>
              {lang.contactUs.header.title}
            </SectionHeaderTitle>
            {lang.contactUs.header.description.length ? (
              <SectionHeaderDescriptions>
                {lang.contactUs.header.description.map((description, index) => {
                  return (
                    <SectionHeaderDescription key={index}>
                      {description}
                    </SectionHeaderDescription>
                  );
                })}
              </SectionHeaderDescriptions>
            ) : null}
          </SectionHeader>
          <SectionContent>
            <Wrapper>
              <Left>
                <LeftTitle>{left.title}</LeftTitle>
                {left.description.length ? (
                  <LeftDescriptions>
                    {left.description.map((description, index) => {
                      return (
                        <LeftDescription key={index}>
                          {description}
                        </LeftDescription>
                      );
                    })}
                  </LeftDescriptions>
                ) : null}
                {left.socials.length ? (
                  <Socials>
                    {left.socials.map((social, index) => {
                      return (
                        <SocialItem key={index}>
                          <SocialItemLink
                            onClick={(event) =>
                              openExternalLink(event, social.link)
                            }
                          >
                            <SocialItemLinkIcon
                              src={getImage(
                                "images/icons/socials",
                                social.icon
                              )}
                              alt={social.name}
                            />
                          </SocialItemLink>
                        </SocialItem>
                      );
                    })}
                  </Socials>
                ) : null}
              </Left>

              <Form method="post" onSubmit={handleSubmit(onSubmit)}>
                {success && <FormSuccess>{success}</FormSuccess>}
                <FormGroups>
                  <FormGroup>
                    <FormGroupInput
                      type="text"
                      placeholder={form.inputs.name.placeholder}
                      error={errors.name}
                      disabled={isSubmitting}
                      {...register("name", {
                        required: {
                          value: true,
                          message: form.inputs.name.validations.required,
                        },
                      })}
                    />
                    {errors.name && (
                      <ErrorMessage
                        errors={errors}
                        name="name"
                        as={<Error />}
                      />
                    )}
                  </FormGroup>
                  <FormGroup>
                    <FormGroupInput
                      type="email"
                      id="email"
                      // name="email"
                      error={errors.email}
                      placeholder={form.inputs.email.placeholder}
                      disabled={isSubmitting}
                      {...register("email", {
                        required: {
                          value: true,
                          message: form.inputs.email.validations.required,
                        },
                        pattern: {
                          value: EmailRegEx,
                          message: form.inputs.email.validations.pattern,
                        },
                      })}
                    />
                    {errors.email && (
                      <ErrorMessage
                        errors={errors}
                        name="email"
                        as={<Error />}
                      />
                    )}
                  </FormGroup>
                  <FormGroup>
                    <FormGroupInput
                      type="tel"
                      id="phone"
                      // name="phone"
                      placeholder={form.inputs.phone.placeholder}
                      error={errors.phone}
                      disabled={isSubmitting}
                      {...register("phone", {
                        required: {
                          value: true,
                          message: form.inputs.phone.validations.required,
                        },
                        pattern: {
                          value: PhoneRegEx,
                          message: form.inputs.phone.validations.pattern,
                        },
                      })}
                    />
                    {errors.phone && (
                      <ErrorMessage
                        errors={errors}
                        name="phone"
                        as={<Error />}
                      />
                    )}
                  </FormGroup>
                  <FormGroup>
                    <FormGroupInput
                      type="text"
                      id="subject"
                      // name="subject"
                      placeholder={form.inputs.subject.placeholder}
                      error={errors.subject}
                      disabled={isSubmitting}
                      {...register("subject", {
                        required: {
                          value: true,
                          message: form.inputs.subject.validations.required,
                        },
                      })}
                    />
                    {errors.subject && (
                      <ErrorMessage
                        errors={errors}
                        name="subject"
                        as={<Error />}
                      />
                    )}
                  </FormGroup>
                  <FormGroup>
                    <FormGroupTextArea
                      id="message"
                      // name="message"
                      rows={3}
                      cols={3}
                      placeholder={form.inputs.message.placeholder}
                      error={errors.message}
                      disabled={isSubmitting}
                      {...register("message", {
                        required: {
                          value: true,
                          message: form.inputs.message.validations.required,
                        },
                      })}
                    />
                    {errors.message && (
                      <ErrorMessage
                        errors={errors}
                        name="message"
                        as={<Error />}
                      />
                    )}
                  </FormGroup>
                </FormGroups>
                <FormButton type="submit" disabled={isSubmitting}>
                  {form.inputs.button}
                </FormButton>
              </Form>
            </Wrapper>

            <Map>
              <MapInfos>
                <MapInfoItem>
                  <MapInfoItemIcon
                    src={getImage("images/icons", "location.svg")}
                    alt="Location"
                  />
                  {lang.society.infos.location}
                </MapInfoItem>
                <MapInfoItem>
                  <MapInfoItemIcon
                    src={getImage("images/icons", "phone.svg")}
                    alt="Phone"
                  />
                  {lang.society.infos.phone}
                </MapInfoItem>
                <MapInfoItem>
                  <MapInfoItemIcon
                    src={getImage("images/icons", "mail.svg")}
                    alt="Email"
                  />
                  {lang.society.infos.email}
                </MapInfoItem>
              </MapInfos>
              <MapFrame
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.3336111805493!2d2.303238315674836!3d48.87091647928873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66f2c7000f08f%3A0x637534f5185c575a!2sMove2Cloud!5e0!3m2!1sfr!2sfr!4v1688597827794!5m2!1sfr!2sfr"
                width="600"
                height="450"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Map>
          </SectionContent>
        </Section>
      </Main>
    </StyledPage>
  );
}

const StyledPage = styled.div``;

const Main = styled.main``;

const Section = styled.section`
  padding: 30px 20px;
`;

const SectionHeader = styled.div``;
const SectionHeaderTitle = styled.h2`
  text-align: center;
  color: ${Colors.extremeGray};
  font-weight: 700;
  margin: 0;
  transition: font-size ease-in-out 0.1s;

  @media screen and (${devices.md}) {
    font-size: 2.5em;
    transition: font-size ease-in-out 0.1s;
  }
`;
const SectionHeaderDescriptions = styled.div``;
const SectionHeaderDescription = styled.p`
  text-align: center;
  color: ${Colors.extremeGray};
`;

const SectionContent = styled.div`
  margin: 30px auto 0 auto;
`;

const Wrapper = styled.div`
  margin: 60px auto 0 auto;
  @media screen and (${devices.lg}) {
    display: flex;
    max-width: 90%;
  }
`;

const Left = styled.div``;
const LeftTitle = styled.h2`
  color: ${Colors.extremeGray};
  transition: font-size ease-in-out 0.1s;

  @media screen and (${devices.lg}) {
    font-size: 2em;
    transition: font-size ease-in-out 0.1s;
  }
`;
const LeftDescriptions = styled.div``;
const LeftDescription = styled.p`
  color: ${Colors.extremeGray};
`;
const Socials = styled.ul`
  list-style: none;
  padding: 0;
`;
const SocialItem = styled.li``;
const SocialItemLink = styled.button`
  border: none;
  background-color: transparent;
  width: 36px;
  height: 36px;
  cursor: pointer;
`;
const SocialItemLinkIcon = styled.img`
  display: block;
  max-width: 100%;
  filter: invert(20%) sepia(22%) saturate(693%) hue-rotate(204deg)
    brightness(30%) contrast(95%);
`;

const Form = styled.form`
  @media screen and (${devices.lg}) {
    width: 100%;
    margin-left: 30px;
  }
`;
const FormSuccess = styled.p`
  color: ${Colors.green};
`;
const FormGroups = styled.div`
  margin: 20px 0;

  @media screen and (${devices.md}) {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(2, 1fr);
  }
`;
const FormGroup = styled.div`
  margin-bottom: 20px;

  &:last-child {
    grid-column: 1 / span 2;
  }

  @media screen and (${devices.md}) {
    margin-bottom: 0;
  }
`;
interface ErrorProps {
  error: any;
}
const FormGroupInput = styled.input<ErrorProps>`
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

const FormGroupTextArea = styled.textarea<ErrorProps>`
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
const FormButton = styled.button`
  background-color: ${Colors.primary};
  color: white;
  border-radius: 5px;
  border: none;
  font-size: inherit;
  font-family: inherit;
  font-weight: 600;
  padding: 10px 30px;
  transition: 0.2s;
  cursor: pointer;

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

const Map = styled.div`
  position: relative;
  margin-top: 30px;

  @media screen and (${devices.lg}) {
    margin-top: 130px;
  }
`;
const MapInfos = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;

  @media screen and (${devices.lg}) {
    position: absolute;
    transform: translate(-50%, 0);
    top: -80px;
    left: 50%;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    max-width: 1024px;
    margin: 0 auto;
  }
`;
const MapInfoItem = styled.li`
  background-color: white;
  border-radius: 5px;
  border: 1px solid ${Colors.gray};
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  margin: 10px 0;
  color: ${Colors.extremeGray};
`;
const MapInfoItemIcon = styled.img`
  display: block;
  width: 18px;
  height: 18px;
  margin-right: 10px;
  filter: invert(16%) sepia(84%) saturate(4588%) hue-rotate(229deg)
    brightness(89%) contrast(99%);
`;
const MapFrame = styled.iframe`
  border: 0;
  width: 100%;
`;
