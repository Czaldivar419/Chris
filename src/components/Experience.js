import { 
    ExperienceContainer,
    ExperienceTitle,
    ExperienceList,
    ExperienceItem,
    ExperienceHeader,
    ExperiencePosition,
    ExperienceCompany,
    ExperienceDate,
    ExperienceDescription 
} from "./styled/Experience.styled";

const Experience = () => {
    const experiences = [
      {
        id: 1,
        position: 'Sales Associate',
        company: 'Fit World Nutrition',
        date: 'March 2022 - Present',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in nibh malesuada, elementum arcu sed, commodo justo. Sed feugiat, purus id dignissim aliquam, urna eros auctor nisi, id interdum orci nunc et urna. Nulla at justo auctor, consequat nulla ac, vehicula tellus. Aliquam mollis malesuada tellus, in tempus lacus accumsan sit amet. In non magna a metus iaculis ornare ac in urna. Nulla facilisi.',
      },
      {
        id: 2,
        position: 'NDT Ultrasound Tech',
        company: 'Mitchell Laboratories',
        date: 'September 2019 - October 2021',
        description:
          'Pellentesque nec nisi elementum, interdum lorem in, bibendum orci. In non neque eros. Nam sit amet suscipit enim, id suscipit neque. Donec luctus magna vitae imperdiet tristique. Sed pellentesque urna quis nisl imperdiet, ut placerat velit vehicula. Duis sit amet lacus in est lobortis hendrerit nec eget purus. Vestibulum et lobortis elit, quis iaculis eros.',
      },
      {
        id: 3,
        position: 'Leasing Agent',
        company: 'The Palms on University',
        date: 'August 2018 - September 2019',
        description:
          'Pellentesque nec nisi elementum, interdum lorem in, bibendum orci. In non neque eros. Nam sit amet suscipit enim, id suscipit neque. Donec luctus magna vitae imperdiet tristique. Sed pellentesque urna quis nisl imperdiet, ut placerat velit vehicula. Duis sit amet lacus in est lobortis hendrerit nec eget purus. Vestibulum et lobortis elit, quis iaculis eros.',
      },
    ];
  
    return (
      <ExperienceContainer>
        <ExperienceTitle>Experience</ExperienceTitle>
        <ExperienceList>
          {experiences.map((experience) => (
            <ExperienceItem key={experience.id}>
              <ExperienceHeader>
                <div>
                  <ExperiencePosition>{experience.position}</ExperiencePosition>
                  <ExperienceCompany>{experience.company}</ExperienceCompany>
                  <ExperienceDate>{experience.date}</ExperienceDate>
                </div>
              </ExperienceHeader>
              <ExperienceDescription>
                {experience.description}
              </ExperienceDescription>
            </ExperienceItem>
          ))}
        </ExperienceList>
      </ExperienceContainer>
    );
  };
  
  export default Experience;