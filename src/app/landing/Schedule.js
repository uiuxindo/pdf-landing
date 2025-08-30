import { useState, useEffect } from "react";
import Image from "next/image";

export default function EventSchedule() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>

      {!isMobile ? (
        <div id="Schedule" className="row">
          <div className="col-12 text-center">
            <Image
              className="mb-md-0 img-fluid"
              src="/Assets/Timeline.png"
              width={1200}
              height={900}
              alt="Timeline Schedule"
            />
          </div>
        </div>
      ) : (

        <div id="Schedule" className="pt-4">
          <ul style={{ listStyle: "none", paddingLeft: "20px" }}>
            <li className="border-top border-bottom py-4">
              <h4 className="fw-700">Sabtu, 2 Mei 2026</h4>
              <h5 className="mb-0">Product Management</h5>
              <p className="mb-0 text-grey">From Problem to Product, Defining the Right Solution</p>
            </li>
            <li className="border-bottom py-4">
              <h4 className="fw-700">Jumat, 8 Mei 2026</h4>
              <h5 className="mb-0">UX Research</h5>
              <p className="mb-0 text-grey">Emphatize to Build, Uncovering User Needs</p>
            </li>
            <li className="border-bottom py-4">
              <h4 className="fw-700">Sabtu, 9 Mei 2026</h4>
              <h5 className="mb-0">UI/UX Design + Remote Work Sharing Session</h5>
              <p className="mb-0 text-grey">From Insight to Interface: Designing User Centered Solution</p>
            </li>
            <li className="border-bottom py-4">
              <h4 className="fw-700">Jumat, 15 Mei 2026</h4>
              <h5 className="mb-0">UX Writing</h5>
              <p className="mb-0 text-grey">Clarity in Every Top, Writing for Best Experience</p>
            </li>
            <li className="border-bottom py-4">
              <h4 className="fw-700">Sabtu, 16 Mei 2026</h4>
              <h5 className="mb-0">Software Engineering + Remote Work Sharing Session</h5>
              <p className="mb-0 text-grey">Turning Design into Reality, Bridging with Developers</p>
            </li>
            <li className="border-bottom py-4">
              <h4 className="fw-700">Jumat, 22 Mei 2026</h4>
              <h5 className="mb-0">Portofolio Review & Mentor Work Experience</h5>
              <p className="mb-0 text-grey">Elevate Your Story, Gain Feedback to Enhance Your Readiness</p>
            </li>
            <li className="border-bottom py-4">
              <h4 className="fw-700">Sabtu, 23 Mei 2026</h4>
              <h5 className="mb-0">English for Professional & Public Speaking</h5>
              <p className="mb-0 text-grey">Pitch and Present, Effective Communication in Digital</p>
            </li>
            <li className="border-bottom py-4">
              <h4 className="fw-700">Sabtu, 30 Mei 2026</h4>
              <h5 className="mb-0">Pitching Day & Design Battle Show</h5>
              {/* <p className="mb-0 text-grey">From Problem to Product, Defining the Right Solution</p> */}
            </li>
            <li className="py-4">
              <h4 className="fw-700">Jumat, 30 Mei 2026</h4>
              <h5 className="mb-0">Final Day: Career Guide & Mental Health</h5>
              <p className="mb-0 text-grey">Thrive, Not Survive: Building a Sustainable Career Globally</p>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
