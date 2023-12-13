
const Project = ({ title, liveLink, techStack, features }) => {
    return (
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mt-8">
            <div className="md:flex">
                
                <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{title}</div>
                    <a href={liveLink} target="_blank" rel="noopener noreferrer" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{liveLink}</a>
                    <p className="mt-2 text-gray-500">{techStack}</p>
                    <ul className="mt-4">
                        {features.map((feature, index) => (
                            <li key={index} className="flex items-center text-gray-600">
                                <svg className="h-5 w-5 fill-current mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 11H4v2h16v-2zM10 17v-2h4v2h-4zm-5-12C5 4 3 6 3 8s2 4 4 4h2v2h10V8h2c2 0 4-2 4-4s-2-4-4-4H5zm10 4v4H9V9h6z" /></svg>
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

const ProjectsList = () => {
    const projects = [
        {
            title: 'Health Service Platform',
            liveLink: 'https://doctor-12-fd0e1.web.app',
            techStack: 'Frontend: React.js, Axios, SweetAlert2\nBackend: Node.js, Express.js, MongoDB, Mongoose',
            features: [
                'User Registration and Profile Update',
                'Banner Management: Add, View, Activate',
                'Test Management: Add, View, Update',
                'Reservation Management: Book, View, Cancel',
                'Recommendation Management: View',
                'General: Pagination, Database Connectivity, Error Handling',
            ],
        },
        {
            title: 'JobSeeker Website',
            liveLink: 'https://job2324-7cf51.web.app',
            techStack: 'Frontend: React.js, Axios, React Router\nBackend: Node.js, Express.js, MongoDB, Mongoose',
            features: [
                'Job Listings: Explore categorized jobs with detailed information.',
                'User Management: Simple login and registration system.',
                'User-Specific Pages: My Jobs and Applied Jobs for personalized experience.',
                'Integration: [EmailJs/React-to-Pdf]',
                'Dynamic Title: Website title changes dynamically based on the route.',
            ],
        },
        {
            title: 'Tech Land E-commerce Platform',
            liveLink: 'https://tech-land-c2d63.web.app',
            techStack: 'Authentication: Implemented secure authentication with Firebase.\nDatabase Integration: Connected MongoDB for dynamic product data.',
            features: [
                'Product Management:',
                'Add Product: Easily add new products with the Add Product page.',
                'Update Product: Update product details seamlessly from the update product button.',
            ],
        },
    ];

    return (
        <div className="container mx-auto my-12">
            <h2 className="text-3xl font-bold mb-8">My Projects</h2>
            {projects.map((project, index) => (
                <Project key={index} {...project} />
            ))}
        </div>
    );
};

export default ProjectsList;
