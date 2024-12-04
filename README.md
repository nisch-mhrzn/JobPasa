# JobPasa - Job Portal

JobPasa is an intuitive and user-friendly job portal website that helps users find job opportunities that match their skills, experience, and preferences. The website allows users to search for job roles, apply for positions, and view detailed job information with a clean, modern design.

## Features

- **Search Job Opportunities**: Users can search for jobs based on multiple filters such as Job Role, Job Type, Location, and Experience.
- **Job Cards**: Detailed job information is displayed in visually appealing cards, including job title, company, job type, experience level, location, and required skills.
- **Responsive Design**: The website is responsive, ensuring a smooth experience across devices such as desktops, tablets, and smartphones.
- **Apply for Jobs**: Directly apply for job opportunities by clicking the "Apply" button on each job card.
- **Dynamic Job Listings**: Job cards update based on the latest job posts, with the number of days since the post was made.

## Technologies Used

- **Frontend**: 
  - React.js
  - Tailwind CSS
  - PropTypes for type checking
  - dayjs for date manipulation
- **Backend**: 
  - Firebase

## Installation

To run the project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/nisch-mhrzn/JobPasa.git
   cd JobPasa
   ```

2. **Install the dependencies:**

   Ensure you have `Node.js` and `npm` installed. Run the following command to install the necessary dependencies:

   ```bash
   npm install
   ```

3. **Start the development server:**

   After the dependencies are installed, you can start the development server with:

   ```bash
   npm run dev
   ```

   This will start the application and you can view it in your browser at `http://localhost:5173`.

## Usage

- **Search for Jobs**: Use the search filters at the top of the page to search for jobs based on the role, job type, location, or experience level.
- **Job Cards**: Each job card contains the job title, company name, job type, location, experience level, and required skills. Clicking the "Apply" button will take you to the job's respective application page (or a designated link).
- **Responsive**: The design is fully responsive, so it works seamlessly across different devices.

## Components

### Header Component
Displays the search form and the page title. The form includes filters for Job Role, Job Type, Location, and Experience.

### JobCard Component
Each job is displayed in a card, with the following sections:
- **Job Title and Company**: Displays the job title along with the company name.
- **Job Details**: Displays job type, experience level, and location.
- **Skills**: Lists required skills for the job.
- **Apply Button**: A button that redirects to the job application page.

### Styles
- Tailwind CSS is used for utility-first styling, ensuring that the design is both responsive and customizable.
- The design follows a clean, modern look with ample white space, rounded corners, and hover effects to improve the user experience.
Here are some future improvements you can consider for your JobPasa project:

## Future Improvements

### 1. **Enhanced Search Filters**
   - Add more filter options like job salary range, job level (junior, senior), and work from home options.

### 2. **User Profile**
   - Allow users to create a profile where they can save favorite jobs, track applications, and update their information.

### 3. **Job Alerts**
   - Implement email alerts for users when new jobs matching their criteria are posted.

### 4. **Job Application Integration**
   - Let users apply directly to jobs through the platform by linking to their resumes or application forms.

### 5. **Mobile Responsiveness**
   - Make sure the website works well on mobile devices by improving the layout and design for smaller screens.

### 6. **Rating System**
   - Allow users to rate companies and jobs to provide feedback for others.


## Contributing

We welcome contributions! If you'd like to improve the project or report issues, please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add feature'`)
5. Push to the branch (`git push origin feature/your-feature`)
6. Open a pull request
