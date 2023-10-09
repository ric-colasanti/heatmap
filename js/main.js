console.log("main");
var dictScopus = {}
var dictWebOf = {}

const scopus = ["Dentistry", "Earth and Planetary-Sciences", "Chemical-Engineering", "Business and Management and Accounting", "Physics and Astronomy", "Computer-Science", "Energy", "Health-Professions", "Multidisciplinary", "Mathematics", "Environmental-Science", "Immunology and Microbiology", "Neuroscience", "Agricultural and Biological-Sciences", "Nursing", "Social-Science", "Psychology", "Veterinary", "Pharmacology and Toxicology and Pharmaceutics", "Materials-Science", "Engineering", "Arts and Humanities", "Medicine", "Chemistry", "Decision-Sciences"]

const webOfScience = ["Social Sciences- Interdisciplinary", "Education & Educational Research", "Materials Science- Composites", "Materials Science- Biomaterials", "Green & Sustainable Science & Technology", "Social Issues", "Social Sciences- Mathematical Methods", "Public Administration", "Rheumatology", "Entomology", "Development Studies", "Geriatrics & Gerontology", "Agronomy", "Education- Scientific Disciplines", "Computer Science- Interdisciplinary Applications", "Evolutionary Biology", "Criminology & Penology", "Linguistics", "Virology", "Statistics & Probability", "Computer Science- Software Engineering", "Physics- Fluids & Plasmas", "Humanities- Multidisciplinary", "Engineering- Electrical & Electronic", "Hospitality- Leisure- Sport & Tourism", "Nuclear Science & Technology", "Computer Science- Artificial Intelligence", "Mycology", "Construction & Building Technology", "International Relations", "Optics", "Physics- Mathematical", "Computer Science- Hardware & Architecture", "Operations Research & Management Science", "Physiology", "Geography- Physical", "Health Care Sciences & Services", "Engineering- Environmental", "Marine & Freshwater Biology", "Chemistry- Multidisciplinary", "Geochemistry & Geophysics", "Philosophy", "Clinical Neurology", "Nursing", "Infectious Diseases", "Psychology- Educational", "Psychology- Multidisciplinary", "Rehabilitation", "Radiology- Nuclear Medicine & Medical Imaging", "History", "Genetics & Heredity", "Forestry", "Political Science", "Area Studies", "Toxicology", "Orthopedics", "History & Philosophy Of Science", "Limnology", "Agricultural Economics & Policy", "Chemistry- Medicinal", "Acoustics", "Psychology- Mathematical", "Agriculture- Dairy & Animal Science", "Family Studies", "Multidisciplinary Sciences", "Fisheries", "Meteorology & Atmospheric Sciences", "Psychology", "Remote Sensing", "Environmental Studies", "Social Sciences- Biomedical", "Ecology", "Mathematics- Applied", "Physics- Condensed Matter", "Business", "Regional & Urban Planning", "Instruments & Instrumentation", "Agriculture- Multidisciplinary", "Cardiac & Cardiovascular Systems", "Medicine- General & Internal", "Metallurgy & Metallurgical Engineering", "Language & Linguistics", "Women\'s Studies", "Psychology- Applied", "Ethics", "Neurosciences", "Geography", "Urology & Nephrology", "Business- Finance", "Water Resources", "Transportation Science & Technology", "Engineering- Aerospace", "Medicine- Research & Experimental", "Biochemistry & Molecular Biology", "Biochemical Research Methods", "Law", "Cultural Studies", "Transportation", "Polymer Science", "Engineering- Marine", "Demography", "Management", "Veterinary Sciences", "Astronomy & Astrophysics", "Engineering- Multidisciplinary", "Physics- Applied", "Telecommunications", "Engineering- Geological", "Soil Science", "Mathematics", "Ophthalmology", "Thermodynamics", "Oceanography", "Gastroenterology & Hepatology", "Nanoscience & Nanotechnology", "Imaging Science & Photographic Technology", "Information Science & Library Science", "Chemistry- Physical", "Medical Informatics", "Microbiology", "Respiratory System", "Sociology", "Mathematics- Interdisciplinary Applications", "Mechanics", "Oncology", "Industrial Relations & Labor", "Psychiatry", "Plant Sciences", "Parasitology", "Communication", "Art", "Engineering- Ocean", "Health Policy & Services", "Psychology- Experimental", "Materials Science- Multidisciplinary", "Environmental Sciences", "Robotics", "Behavioral Sciences", "Energy & Fuels", "Agricultural Engineering", "Immunology", "Engineering- Mechanical", "Mathematical & Computational Biology", "Engineering- Industrial", "Logic", "Biology", "Computer Science- Theory & Methods", "Architecture", "Economics", "Nutrition & Dietetics", "Biophysics", "History Of Social Sciences", "Ergonomics", "Tropical Medicine", "Engineering- Manufacturing", "Sport Sciences", "Geosciences- Multidisciplinary", "Biodiversity Conservation", "Engineering- Chemical", "Chemistry- Analytical", "Physics- Multidisciplinary", "Psychology- Clinical", "Spectroscopy", "Automation & Control Systems", "Computer Science- Cybernetics", "Social Work", "Zoology", "Food Science & Technology", "Pharmacology & Pharmacy", "Anthropology", "Archaeology", "Engineering- Civil", "Computer Science- Information Systems", "Public- Environmental & Occupational Health", "Engineering- Biomedical", "Surgery", "Psychology- Biological", "Biotechnology & Applied Microbiology", "Chemistry- Applied", "Critical Care Medicine", "Peripheral Vascular Disease", "Psychology- Developmental", "Dentistry- Oral Surgery & Medicine", "Endocrinology & Metabolism", "Substance Abuse", "Religion", "Paleontology", "Gerontology", "Cell Biology", "Urban Studies", "Transplantation", "Dermatology", "Psychology- Social"]



// set the dimensions and margins of the graph
const margin = { top: 30, right: 30, bottom: 300, left: 300 },
    width = 950 - margin.left - margin.right,
    height = 3300 - margin.top - margin.bottom;

// append the svg object to the body of the page
const svg = d3.select("#my_dataviz")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

// Labels of row and columns
    const x = d3.scaleBand()
        .range([0, width])
        .domain(scopus)
        .padding(0.1);
    svg.append("g")
        .attr("transform", `translate(0, ${height})`)

        .call(d3.axisBottom(x))
        .selectAll("text")
        .style("text-anchor", "end")
        .attr("dx", "-.8em")
        .attr("dy", "-.25em")
        .attr("transform", "rotate(-90)");


    // Build X scales and axis:
    const y = d3.scaleBand()
        .range([height, 0])
        .domain(webOfScience)
        .padding(0.1);
    svg.append("g")
        .attr("transform", "translate(0,30")
        .call(d3.axisLeft(y))

    // Build color scale
    const myColor = d3.scaleLinear()
        .range(["white", "darkblue"])
        .domain([0, 350])

    // create a tooltip


    //Read the data
    //d3.csv("data/heat.csv").then(function (data) {
      d3.csv("data/heat.csv").then(function (data) {

        svg.selectAll()
            .data(data, function (d) { return d.scopus + ':' + d.webOfScience; })
            .join("rect")
            .attr("x", function (d) { return x(d.scopus) })
            .attr("y", function (d) { return y(d.webOfScience) })
            .attr("width", x.bandwidth())
            .attr("height", y.bandwidth())
            .style("fill", function (d) {return myColor(d.value) })
    })
