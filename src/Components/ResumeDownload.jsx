import { FaDownload } from "react-icons/fa";

const ResumeDownload = () => {
    const googleDriveLink = 'https://drive.google.com/uc?export=download&id=1xOT3Dfol42JiZFGMllAQ9evo4bmkLTdm';

  return (
    <a href={googleDriveLink} target="_blank" rel="noopener noreferrer">
      Resume
    </a>
  );
};

export default ResumeDownload;
