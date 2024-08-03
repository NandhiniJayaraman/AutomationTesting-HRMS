import { ProfileData } from "../interface/personalData";

// Function to format the data
export async function formatData(data: ProfileData, format: 'plain' | 'json' | 'xml'): Promise<string> {
  switch (format) {
    case 'plain':
      return `
Name: ${data.Name}
Designation: ${data.Designation}

Address:
  Primary: ${data.Address.Primary}
  Alternate: ${data.Address.Alternate}

Contact:
  Email: ${data.Contact.Email}
  Phone: ${data.Contact.Phone}

Profile:
  Date of Birth: ${data.Profile.DateOfBirth}
  Gender: ${data.Profile.Gender}
  Father's Name: ${data.Profile.FatherName}
  Mother's Name: ${data.Profile.MotherName}
  Nominee Name: ${data.Profile.NomineeName}
  Language Known: ${data.Profile.LanguageKnown.join('; ')}
  Religion: ${data.Profile.Religion}
  Blood Group: ${data.Profile.BloodGroup}
  Marital Status: ${data.Profile.MaritalStatus}
  Spouse Name: ${data.Profile.SpouseName}
  Children: ${data.Profile.Children.join('; ')}

Emergency Contacts:
  1. Name: ${data.EmergencyContacts[0].Name}, Relationship: ${data.EmergencyContacts[0].Relationship}, Contact Number: ${data.EmergencyContacts[0].ContactNumber}
  2. Name: ${data.EmergencyContacts[1].Name}, Relationship: ${data.EmergencyContacts[1].Relationship}, Contact Number: ${data.EmergencyContacts[1].ContactNumber}

Qualification:
  Degree: ${data.Qualification.Degree}
  Institution: ${data.Qualification.Institution}
  Year: ${data.Qualification.Year}

Career Details:
  Organization: ${data.CareerDetails.Organization}
  Designation: ${data.CareerDetails.Designation}
  Department: ${data.CareerDetails.Department}
  Currently Works Here: ${data.CareerDetails.CurrentlyWorksHere}
  Working Period: ${data.CareerDetails.WorkingPeriod}
  Current CTC: ${data.CareerDetails.CurrentCTC}
  Expected CTC: ${data.CareerDetails.ExpectedCTC}
`;

    case 'json':
      return JSON.stringify(data, null, 2);

    case 'xml':
      return `
<Profile>
  <Name>${data.Name}</Name>
  <Designation>${data.Designation}</Designation>
  <Address>
    <Primary>${data.Address.Primary}</Primary>
    <Alternate>${data.Address.Alternate}</Alternate>
  </Address>
  <Contact>
    <Email>${data.Contact.Email}</Email>
    <Phone>${data.Contact.Phone}</Phone>
  </Contact>
  <ProfileDetails>
    <DateOfBirth>${data.Profile.DateOfBirth}</DateOfBirth>
    <Gender>${data.Profile.Gender}</Gender>
    <FathersName>${data.Profile.FatherName}</FathersName>
    <MothersName>${data.Profile.MotherName}</MothersName>
    <NomineeName>${data.Profile.NomineeName}</NomineeName>
    <LanguageKnown>${data.Profile.LanguageKnown.join('; ')}</LanguageKnown>
    <Religion>${data.Profile.Religion}</Religion>
    <BloodGroup>${data.Profile.BloodGroup}</BloodGroup>
    <MaritalStatus>${data.Profile.MaritalStatus}</MaritalStatus>
    <SpouseName>${data.Profile.SpouseName}</SpouseName>
    <Children>${data.Profile.Children.join('; ')}</Children>
  </ProfileDetails>
  <EmergencyContacts>
    ${data.EmergencyContacts.map((contact, index) => `
    <Contact>
      <Name>${contact.Name}</Name>
      <Relationship>${contact.Relationship}</Relationship>
      <ContactNumber>${contact.ContactNumber}</ContactNumber>
    </Contact>
    `).join('')}
  </EmergencyContacts>
  <Qualification>
    <Degree>${data.Qualification.Degree}</Degree>
    <Institution>${data.Qualification.Institution}</Institution>
    <Year>${data.Qualification.Year}</Year>
  </Qualification>
  <CareerDetails>
    <Organization>${data.CareerDetails.Organization}</Organization>
    <Designation>${data.CareerDetails.Designation}</Designation>
    <Department>${data.CareerDetails.Department}</Department>
    <CurrentlyWorksHere>${data.CareerDetails.CurrentlyWorksHere}</CurrentlyWorksHere>
    <WorkingPeriod>${data.CareerDetails.WorkingPeriod}</WorkingPeriod>
    <CurrentCTC>${data.CareerDetails.CurrentCTC}</CurrentCTC>
    <ExpectedCTC>${data.CareerDetails.ExpectedCTC}</ExpectedCTC>
  </CareerDetails>
</Profile>
`;

    default:
      throw new Error('Unsupported format');
  }
}
export type { ProfileData };

