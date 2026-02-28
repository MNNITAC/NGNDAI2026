import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

function SpecialSession() {
    const navigate = useNavigate();

    useEffect(() => {
        // Replace with the actual PDF file path
        const pdfUrl = "../assets/documents/Special Session_track1.pdf";

        // Create an invisible link to trigger download
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "special_session.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Navigate back after a slight delay
        setTimeout(() => navigate(-1), 500);
    }, [navigate]);

    return <div>Downloading file...</div>;
}

export default SpecialSession;
