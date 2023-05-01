const projects = [
  {
    name: "About",
    path: "/",
    hasChildren: false,
    ariaLable: `click here to see About section`,
  },
  {
    name: "Education",
    path: "/education.html",
    hasChildren: false,
    ariaLable: `click here to see Education section`,
  },
  {
    name: "Projects",
    hasChildren: true,
    ariaLable: `click here to see Projects dropdown`,
    innerItem: [
      {
        name: "HCL Technologies",
        path: "/hcl.html",
        ariaLable: `click here to see experience at HCL Technologies`,
      },
      {
        name: "Infosys Limited",
        path: "/infosys.html",
        ariaLable: `click here to see experience at Infosys Limited`,
      },
      {
        name: "Insurance Plan",
        path: "/insurancePlan.html",
        ariaLable: `click here to see Insurance Plan Project`,
      },
      {
        name: "Disaster Relief",
        path: "/disasterRelief.html",
        ariaLable: `click here to see Disaster Relief Project`,
      },
    ]
  }
];

export default projects;