const departments = [
  {
    name: "Engineering",
    roles: ["Frontend Developer", "Backend Developer", "Fullstack Developer"],
  },
  {
    name: "HR",
    roles: ["HR Executive", "HR Manager"],
  },
  {
    name: "Finance",
    roles: ["Accountant", "Finance Analyst"],
  },
  {
    name: "Marketing",
    roles: ["Marketing Executive", "SEO Specialist"],
  },
  {
    name: "Operations",
    roles: ["Operations Lead", "Admin Executive"],
  },
];

const locations = ["Chennai", "Bangalore", "Hyderabad", "Pune", "Mumbai"];
const performances = ["Excellent", "Good", "Average"];

const firstNames = [
  "Arun","Divya","Amit","Priya","Rahul","Kavya","Rohit","Anjali",
  "Neha","Sathish","Manoj","Naveen","Swathi","Deepak","Sanjay",
  "Aishwarya","Lakshmi","Nitin","Raghav","Shalini"
];

const lastNames = [
  "Kumar","Ramesh","Patel","Sharma","Verma","Nair","Mehta","Menon",
  "Singh","Gupta","Reddy","Rao","Malhotra","Kulkarni","Iyer","Chopra"
];

const employees = Array.from({ length: 60 }, (_, i) => {
  const id = i + 1;

  const first_name = firstNames[i % firstNames.length];
  const last_name = lastNames[i % lastNames.length];

  const dept = departments[i % departments.length];
  const designation = dept.roles[i % dept.roles.length];

  return {
    id,

    // 🔹 Basic
    first_name,
    last_name,
    email: `${first_name.toLowerCase()}.${last_name.toLowerCase()}@company.com`,
    phone: `9${800000000 + id}`,
    avatar: `https://i.pravatar.cc/150?img=${id}`,
    gender: id % 2 === 0 ? "Female" : "Male",
    dob: `199${id % 10}-0${(id % 9) + 1}-15`,
    address: `${locations[id % locations.length]}, India`,

    // 🔹 Work
    department: dept.name,
    designation,
    experience: (id % 10) + 1,
    location: locations[id % locations.length],
    status: id % 7 === 0 ? "Inactive" : "Active",

    // 🔹 HR
    salary: 30000 + (id % 10) * 5000,
    attendance: 85 + (id % 15),
    leaves: id % 12,
    performance: performances[id % performances.length],
    emergencyContact: `9${900000000 + id}`,
  };
});

module.exports = employees;




//   const employees = [
//     { "id": 1, "first_name": "Arun", "last_name": "Kumar", "email": "arun.kumar@company.com", "avatar": "https://i.pravatar.cc/150?img=1", "department": "Engineering", "designation": "Frontend Developer", "location": "Chennai", "status": "Active", "experience": 4, "salary": 65000 },
//     { "id": 2, "first_name": "Divya", "last_name": "Ramesh", "email": "divya.ramesh@company.com", "avatar": "https://i.pravatar.cc/150?img=2", "department": "HR", "designation": "HR Executive", "location": "Bangalore", "status": "Active", "experience": 3, "salary": 45000 },
//     { "id": 3, "first_name": "Suresh", "last_name": "Iyer", "email": "suresh.iyer@company.com", "avatar": "https://i.pravatar.cc/150?img=3", "department": "Finance", "designation": "Accountant", "location": "Chennai", "status": "Inactive", "experience": 6, "salary": 70000 },
//     { "id": 4, "first_name": "Meena", "last_name": "Krishnan", "email": "meena.krishnan@company.com", "avatar": "https://i.pravatar.cc/150?img=4", "department": "Engineering", "designation": "Backend Developer", "location": "Hyderabad", "status": "Active", "experience": 5, "salary": 80000 },
//     { "id": 5, "first_name": "Rahul", "last_name": "Verma", "email": "rahul.verma@company.com", "avatar": "https://i.pravatar.cc/150?img=5", "department": "Marketing", "designation": "SEO Specialist", "location": "Pune", "status": "Active", "experience": 4, "salary": 55000 },

//     { "id": 6, "first_name": "Kavya", "last_name": "Nair", "email": "kavya.nair@company.com", "avatar": "https://i.pravatar.cc/150?img=6", "department": "Operations", "designation": "Operations Manager", "location": "Bangalore", "status": "Active", "experience": 8, "salary": 90000 },
//     { "id": 7, "first_name": "Vignesh", "last_name": "Selvam", "email": "vignesh.selvam@company.com", "avatar": "https://i.pravatar.cc/150?img=7", "department": "Engineering", "designation": "DevOps Engineer", "location": "Chennai", "status": "Inactive", "experience": 7, "salary": 85000 },
//     { "id": 8, "first_name": "Priya", "last_name": "Sharma", "email": "priya.sharma@company.com", "avatar": "https://i.pravatar.cc/150?img=8", "department": "HR", "designation": "Recruiter", "location": "Hyderabad", "status": "Active", "experience": 2, "salary": 40000 },
//     { "id": 9, "first_name": "Amit", "last_name": "Patel", "email": "amit.patel@company.com", "avatar": "https://i.pravatar.cc/150?img=9", "department": "Finance", "designation": "Financial Analyst", "location": "Ahmedabad", "status": "Active", "experience": 6, "salary": 75000 },
//     { "id": 10, "first_name": "Sneha", "last_name": "Joshi", "email": "sneha.joshi@company.com", "avatar": "https://i.pravatar.cc/150?img=10", "department": "Marketing", "designation": "Content Strategist", "location": "Mumbai", "status": "Inactive", "experience": 5, "salary": 60000 },

//     { "id": 11, "first_name": "Rohit", "last_name": "Mehta", "email": "rohit.mehta@company.com", "avatar": "https://i.pravatar.cc/150?img=11", "department": "Engineering", "designation": "Full Stack Developer", "location": "Bangalore", "status": "Active", "experience": 6, "salary": 90000 },
//     { "id": 12, "first_name": "Anjali", "last_name": "Menon", "email": "anjali.menon@company.com", "avatar": "https://i.pravatar.cc/150?img=12", "department": "HR", "designation": "HR Manager", "location": "Kochi", "status": "Active", "experience": 7, "salary": 70000 },
//     { "id": 13, "first_name": "Karthik", "last_name": "Rajan", "email": "karthik.rajan@company.com", "avatar": "https://i.pravatar.cc/150?img=13", "department": "Finance", "designation": "Audit Analyst", "location": "Chennai", "status": "Inactive", "experience": 8, "salary": 85000 },
//     { "id": 14, "first_name": "Neha", "last_name": "Singh", "email": "neha.singh@company.com", "avatar": "https://i.pravatar.cc/150?img=14", "department": "Marketing", "designation": "Brand Manager", "location": "Delhi", "status": "Active", "experience": 5, "salary": 78000 },
//     { "id": 15, "first_name": "Sathish", "last_name": "Kumar", "email": "sathish.kumar@company.com", "avatar": "https://i.pravatar.cc/150?img=15", "department": "Operations", "designation": "Operations Lead", "location": "Coimbatore", "status": "Active", "experience": 9, "salary": 95000 },

//     { "id": 16, "first_name": "Manoj", "last_name": "Gupta", "email": "manoj.gupta@company.com", "avatar": "https://i.pravatar.cc/150?img=16", "department": "Engineering", "designation": "QA Engineer", "location": "Noida", "status": "Active", "experience": 4, "salary": 60000 },
//     { "id": 17, "first_name": "Pooja", "last_name": "Agarwal", "email": "pooja.agarwal@company.com", "avatar": "https://i.pravatar.cc/150?img=17", "department": "Finance", "designation": "Tax Consultant", "location": "Jaipur", "status": "Inactive", "experience": 6, "salary": 72000 },
//     { "id": 18, "first_name": "Naveen", "last_name": "Reddy", "email": "naveen.reddy@company.com", "avatar": "https://i.pravatar.cc/150?img=18", "department": "Engineering", "designation": "Cloud Engineer", "location": "Hyderabad", "status": "Active", "experience": 7, "salary": 88000 },
//     { "id": 19, "first_name": "Swathi", "last_name": "Rao", "email": "swathi.rao@company.com", "avatar": "https://i.pravatar.cc/150?img=19", "department": "HR", "designation": "HR Analyst", "location": "Bangalore", "status": "Active", "experience": 3, "salary": 48000 },
//     { "id": 20, "first_name": "Deepak", "last_name": "Malhotra", "email": "deepak.malhotra@company.com", "avatar": "https://i.pravatar.cc/150?img=20", "department": "Marketing", "designation": "Growth Marketer", "location": "Gurgaon", "status": "Active", "experience": 6, "salary": 82000 },
//     {
//   "id": 21,
//   "first_name": "Sanjay",
//   "last_name": "Kulkarni",
//   "email": "sanjay.kulkarni@company.com",
//   "avatar": "https://i.pravatar.cc/150?img=21",
//   "department": "Engineering",
//   "designation": "Senior Software Engineer",
//   "location": "Pune",
//   "status": "Active",
//   "experience": 9,
//   "salary": 98000
// },
// {
//   "id": 22,
//   "first_name": "Aishwarya",
//   "last_name": "Iyer",
//   "email": "aishwarya.iyer@company.com",
//   "avatar": "https://i.pravatar.cc/150?img=22",
//   "department": "Finance",
//   "designation": "Cost Analyst",
//   "location": "Chennai",
//   "status": "Active",
//   "experience": 6,
//   "salary": 74000
// },
// {
//   "id": 23,
//   "first_name": "Harish",
//   "last_name": "Bansal",
//   "email": "harish.bansal@company.com",
//   "avatar": "https://i.pravatar.cc/150?img=23",
//   "department": "Operations",
//   "designation": "Supply Chain Lead",
//   "location": "Delhi",
//   "status": "Inactive",
//   "experience": 10,
//   "salary": 92000
// },
// {
//   "id": 24,
//   "first_name": "Lakshmi",
//   "last_name": "Subramanian",
//   "email": "lakshmi.subramanian@company.com",
//   "avatar": "https://i.pravatar.cc/150?img=24",
//   "department": "HR",
//   "designation": "People Operations Manager",
//   "location": "Chennai",
//   "status": "Active",
//   "experience": 8,
//   "salary": 78000
// },
// {
//   "id": 25,
//   "first_name": "Nitin",
//   "last_name": "Chopra",
//   "email": "nitin.chopra@company.com",
//   "avatar": "https://i.pravatar.cc/150?img=25",
//   "department": "Marketing",
//   "designation": "Digital Marketing Manager",
//   "location": "Gurgaon",
//   "status": "Active",
//   "experience": 7,
//   "salary": 86000
// },
// {
//   "id": 26,
//   "first_name": "Bhavya",
//   "last_name": "Shah",
//   "email": "bhavya.shah@company.com",
//   "avatar": "https://i.pravatar.cc/150?img=26",
//   "department": "Finance",
//   "designation": "Treasury Analyst",
//   "location": "Ahmedabad",
//   "status": "Inactive",
//   "experience": 5,
//   "salary": 68000
// },
// {
//   "id": 27,
//   "first_name": "Raghav",
//   "last_name": "Malik",
//   "email": "raghav.malik@company.com",
//   "avatar": "https://i.pravatar.cc/150?img=27",
//   "department": "Engineering",
//   "designation": "Mobile App Developer",
//   "location": "Noida",
//   "status": "Active",
//   "experience": 6,
//   "salary": 82000
// },
// {
//   "id": 28,
//   "first_name": "Shalini",
//   "last_name": "Kapoor",
//   "email": "shalini.kapoor@company.com",
//   "avatar": "https://i.pravatar.cc/150?img=28",
//   "department": "HR",
//   "designation": "Talent Acquisition Lead",
//   "location": "Gurgaon",
//   "status": "Active",
//   "experience": 9,
//   "salary": 90000
// },
// {
//   "id": 29,
//   "first_name": "Pradeep",
//   "last_name": "Nair",
//   "email": "pradeep.nair@company.com",
//   "avatar": "https://i.pravatar.cc/150?img=29",
//   "department": "Operations",
//   "designation": "Facility Manager",
//   "location": "Trivandrum",
//   "status": "Inactive",
//   "experience": 11,
//   "salary": 88000
// },
// {
//   "id": 30,
//   "first_name": "Monica",
//   "last_name": "Fernandes",
//   "email": "monica.fernandes@company.com",
//   "avatar": "https://i.pravatar.cc/150?img=30",
//   "department": "Marketing",
//   "designation": "Campaign Manager",
//   "location": "Mumbai",
//   "status": "Active",
//   "experience": 6,
//   "salary": 79000
// },

// {
//   "id": 31,
//   "first_name": "Ajith",
//   "last_name": "Menon",
//   "email": "ajith.menon@company.com",
//   "avatar": "https://i.pravatar.cc/150?img=31",
//   "department": "Engineering",
//   "designation": "System Architect",
//   "location": "Kochi",
//   "status": "Active",
//   "experience": 12,
//   "salary": 120000
// },
// {
//   "id": 32,
//   "first_name": "Ritu",
//   "last_name": "Saxena",
//   "email": "ritu.saxena@company.com",
//   "avatar": "https://i.pravatar.cc/150?img=32",
//   "department": "Finance",
//   "designation": "Budget Controller",
//   "location": "Delhi",
//   "status": "Active",
//   "experience": 10,
//   "salary": 95000
// },
// {
//   "id": 33,
//   "first_name": "Vikram",
//   "last_name": "Shetty",
//   "email": "vikram.shetty@company.com",
//   "avatar": "https://i.pravatar.cc/150?img=33",
//   "department": "Operations",
//   "designation": "Logistics Head",
//   "location": "Mangalore",
//   "status": "Inactive",
//   "experience": 13,
//   "salary": 110000
// },
// {
//   "id": 34,
//   "first_name": "Pallavi",
//   "last_name": "Deshpande",
//   "email": "pallavi.deshpande@company.com",
//   "avatar": "https://i.pravatar.cc/150?img=34",
//   "department": "HR",
//   "designation": "Learning & Development Manager",
//   "location": "Nagpur",
//   "status": "Active",
//   "experience": 8,
//   "salary": 82000
// },
// {
//   "id": 35,
//   "first_name": "Siddharth",
//   "last_name": "Arora",
//   "email": "siddharth.arora@company.com",
//   "avatar": "https://i.pravatar.cc/150?img=35",
//   "department": "Marketing",
//   "designation": "Product Marketing Lead",
//   "location": "Gurgaon",
//   "status": "Active",
//   "experience": 9,
//   "salary": 93000
// },

// {
//   "id": 36,
//   "first_name": "Keerthi",
//   "last_name": "Raman",
//   "email": "keerthi.raman@company.com",
//   "avatar": "https://i.pravatar.cc/150?img=36",
//   "department": "Engineering",
//   "designation": "UI/UX Engineer",
//   "location": "Chennai",
//   "status": "Active",
//   "experience": 5,
//   "salary": 72000
// },
// {
//   "id": 37,
//   "first_name": "Mohit",
//   "last_name": "Suri",
//   "email": "mohit.suri@company.com",
//   "avatar": "https://i.pravatar.cc/150?img=37",
//   "department": "Finance",
//   "designation": "Risk Analyst",
//   "location": "Jaipur",
//   "status": "Inactive",
//   "experience": 6,
//   "salary": 70000
// },
// {
//   "id": 38,
//   "first_name": "Anusha",
//   "last_name": "Gowda",
//   "email": "anusha.gowda@company.com",
//   "avatar": "https://i.pravatar.cc/150?img=38",
//   "department": "HR",
//   "designation": "Employee Relations Manager",
//   "location": "Mysore",
//   "status": "Active",
//   "experience": 7,
//   "salary": 76000
// },
// {
//   "id": 39,
//   "first_name": "Rakesh",
//   "last_name": "Pandey",
//   "email": "rakesh.pandey@company.com",
//   "avatar": "https://i.pravatar.cc/150?img=39",
//   "department": "Operations",
//   "designation": "Process Improvement Lead",
//   "location": "Kanpur",
//   "status": "Active",
//   "experience": 9,
//   "salary": 88000
// },
// {
//   "id": 40,
//   "first_name": "Ishita",
//   "last_name": "Chatterjee",
//   "email": "ishita.chatterjee@company.com",
//   "avatar": "https://i.pravatar.cc/150?img=40",
//   "department": "Marketing",
//   "designation": "Social Media Strategist",
//   "location": "Kolkata",
//   "status": "Inactive",
//   "experience": 5,
//   "salary": 69000
// },

// {
//   "id": 41,
//   "first_name": "Gaurav",
//   "last_name": "Khanna",
//   "email": "gaurav.khanna@company.com",
//   "avatar": "https://i.pravatar.cc/150?img=41",
//   "department": "Engineering",
//   "designation": "Data Engineer",
//   "location": "Gurgaon",
//   "status": "Active",
//   "experience": 8,
//   "salary": 105000
// },
// {
//   "id": 42,
//   "first_name": "Rina",
//   "last_name": "Mukherjee",
//   "email": "rina.mukherjee@company.com",
//   "avatar": "https://i.pravatar.cc/150?img=42",
//   "department": "Finance",
//   "designation": "Compliance Officer",
//   "location": "Kolkata",
//   "status": "Active",
//   "experience": 9,
//   "salary": 92000
// },
// {
//   "id": 43,
//   "first_name": "Kunal",
//   "last_name": "Bhatia",
//   "email": "kunal.bhatia@company.com",
//   "avatar": "https://i.pravatar.cc/150?img=43",
//   "department": "Marketing",
//   "designation": "CRM Manager",
//   "location": "Faridabad",
//   "status": "Inactive",
//   "experience": 7,
//   "salary": 83000
// },
// {
//   "id": 44,
//   "first_name": "Sunitha",
//   "last_name": "Rao",
//   "email": "sunitha.rao@company.com",
//   "avatar": "https://i.pravatar.cc/150?img=44",
//   "department": "HR",
//   "designation": "HR Business Partner",
//   "location": "Udupi",
//   "status": "Active",
//   "experience": 11,
//   "salary": 98000
// },
// {
//   "id": 45,
//   "first_name": "Alok",
//   "last_name": "Tiwari",
//   "email": "alok.tiwari@company.com",
//   "avatar": "https://i.pravatar.cc/150?img=45",
//   "department": "Operations",
//   "designation": "Warehouse Operations Head",
//   "location": "Indore",
//   "status": "Active",
//   "experience": 12,
//   "salary": 102000
// },

// {
//   "id": 46,
//   "first_name": "Suman",
//   "last_name": "Dutta",
//   "email": "suman.dutta@company.com",
//   "avatar": "https://i.pravatar.cc/150?img=46",
//   "department": "Engineering",
//   "designation": "Machine Learning Engineer",
//   "location": "Kolkata",
//   "status": "Active",
//   "experience": 6,
//   "salary": 115000
// },
// {
//   "id": 47,
//   "first_name": "Neeraj",
//   "last_name": "Sinha",
//   "email": "neeraj.sinha@company.com",
//   "avatar": "https://i.pravatar.cc/150?img=47",
//   "department": "Finance",
//   "designation": "Investment Analyst",
//   "location": "Patna",
//   "status": "Inactive",
//   "experience": 8,
//   "salary": 90000
// },
// {
//   "id": 48,
//   "first_name": "Anupama",
//   "last_name": "Pai",
//   "email": "anupama.pai@company.com",
//   "avatar": "https://i.pravatar.cc/150?img=48",
//   "department": "HR",
//   "designation": "Compensation Specialist",
//   "location": "Manipal",
//   "status": "Active",
//   "experience": 7,
//   "salary": 85000
// },
// {
//   "id": 49,
//   "first_name": "Tarun",
//   "last_name": "Jain",
//   "email": "tarun.jain@company.com",
//   "avatar": "https://i.pravatar.cc/150?img=49",
//   "department": "Marketing",
//   "designation": "Market Research Lead",
//   "location": "Udaipur",
//   "status": "Active",
//   "experience": 9,
//   "salary": 91000
// },
// {
//   "id": 50,
//   "first_name": "Sowmya",
//   "last_name": "Hegde",
//   "email": "sowmya.hegde@company.com",
//   "avatar": "https://i.pravatar.cc/150?img=50",
//   "department": "Operations",
//   "designation": "Business Operations Manager",
//   "location": "Shimoga",
//   "status": "Inactive",
//   "experience": 10,
//   "salary": 97000
// },

// {
//   "id": 51,
//   "first_name": "Rahul",
//   "last_name": "Choudhary",
//   "email": "rahul.choudhary@company.com",
//   "avatar": "https://i.pravatar.cc/150?img=51",
//   "department": "Engineering",
//   "designation": "Site Reliability Engineer",
//   "location": "Jaipur",
//   "status": "Active",
//   "experience": 8,
//   "salary": 108000
// },
// {
//   "id": 52,
//   "first_name": "Priti",
//   "last_name": "Mishra",
//   "email": "priti.mishra@company.com",
//   "avatar": "https://i.pravatar.cc/150?img=52",
//   "department": "Finance",
//   "designation": "Payroll Manager",
//   "location": "Allahabad",
//   "status": "Active",
//   "experience": 9,
//   "salary": 88000
// },
// {
//   "id": 53,
//   "first_name": "Sameer",
//   "last_name": "Qureshi",
//   "email": "sameer.qureshi@company.com",
//   "avatar": "https://i.pravatar.cc/150?img=53",
//   "department": "Operations",
//   "designation": "Regional Operations Head",
//   "location": "Bhopal",
//   "status": "Inactive",
//   "experience": 14,
//   "salary": 120000
// },
// {
//   "id": 54,
//   "first_name": "Nandini",
//   "last_name": "Kulkarni",
//   "email": "nandini.kulkarni@company.com",
//   "avatar": "https://i.pravatar.cc/150?img=54",
//   "department": "HR",
//   "designation": "HR Strategy Lead",
//   "location": "Satara",
//   "status": "Active",
//   "experience": 12,
//   "salary": 105000
// },
// {
//   "id": 55,
//   "first_name": "Varun",
//   "last_name": "Ahuja",
//   "email": "varun.ahuja@company.com",
//   "avatar": "https://i.pravatar.cc/150?img=55",
//   "department": "Marketing",
//   "designation": "Customer Insights Manager",
//   "location": "Chandigarh",
//   "status": "Active",
//   "experience": 10,
//   "salary": 98000
// },

// {
//   "id": 56,
//   "first_name": "Sridhar",
//   "last_name": "Balakrishnan",
//   "email": "sridhar.balakrishnan@company.com",
//   "avatar": "https://i.pravatar.cc/150?img=56",
//   "department": "Engineering",
//   "designation": "Principal Engineer",
//   "location": "Chennai",
//   "status": "Active",
//   "experience": 15,
//   "salary": 135000
// },
// {
//   "id": 57,
//   "first_name": "Megha",
//   "last_name": "Bhat",
//   "email": "megha.bhat@company.com",
//   "avatar": "https://i.pravatar.cc/150?img=57",
//   "department": "Finance",
//   "designation": "Revenue Assurance Manager",
//   "location": "Hubli",
//   "status": "Inactive",
//   "experience": 11,
//   "salary": 102000
// },
// {
//   "id": 58,
//   "first_name": "Kiran",
//   "last_name": "Desai",
//   "email": "kiran.desai@company.com",
//   "avatar": "https://i.pravatar.cc/150?img=58",
//   "department": "Operations",
//   "designation": "Process Automation Lead",
//   "location": "Valsad",
//   "status": "Active",
//   "experience": 12,
//   "salary": 110000
// },
// {
//   "id": 59,
//   "first_name": "Aparna",
//   "last_name": "Joshi",
//   "email": "aparna.joshi@company.com",
//   "avatar": "https://i.pravatar.cc/150?img=59",
//   "department": "HR",
//   "designation": "HR Compliance Manager",
//   "location": "Ratnagiri",
//   "status": "Active",
//   "experience": 13,
//   "salary": 115000
// },
// {
//   "id": 60,
//   "first_name": "Rajat",
//   "last_name": "Sengupta",
//   "email": "rajat.sengupta@company.com",
//   "avatar": "https://i.pravatar.cc/150?img=60",
//   "department": "Marketing",
//   "designation": "Marketing Analytics Head",
//   "location": "Howrah",
//   "status": "Inactive",
//   "experience": 14,
//   "salary": 118000
// }  
//   ];

// module.exports = employees;

