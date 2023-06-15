import React from "react";
import NavBar from "../components/NavBar";
import { Container, Row, Col } from "react-bootstrap";

const PrivacyPolicy: React.FC = () => {
  return (
    <div>
      <NavBar />
      <Container>
        <h1 className="text-center">Privacy Policy</h1>
        <div className="privacy-policy-content">
          <Row>
            <Col>
              <p className="lead">
              Privacy Policy
              <br />
Effective Date: June 15, 2023
<br />
1. Introduction
Welcome to MRM Designs. This privacy policy explains the information we collect, how we use it, and your rights in relation to it.
<br />
2. What Information We Collect
We collect information that may personally identify you such as your name and email address. We also automatically collect certain technical data such as your IP address, browser type and version, and pages of our website that you visit.
<br />
3. How We Collect Information
We collect information directly from you when you provide it to us via forms on our website. We also collect technical data automatically as you navigate through our website.
<br />
4. Why We Collect Information
We collect your information for various purposes such as providing and improving our services, responding to your requests, and for analytical purposes to understand how our website is used.
<br />
5. How We Use Information
We use the information we collect to provide our services, respond to your inquiries, for customer service and support, and to understand how our website is being used to improve our services.
<br />
6. How We Share Information
We do not share your personal information with third parties without your consent, except to comply with laws or to protect our rights, or as detailed in this policy.
<br />
7. Your Rights Regarding Your Information
You have the right to access and update your personal information at any time, and to delete your personal information, subject to our need to keep certain information for legal or business purposes.
<br />
8. How We Protect Your Information
We implement a variety of security measures to maintain the safety of your personal information. However, no method of transmission or storage is 100% secure, and we cannot guarantee absolute security.
<br />
9. Children's Privacy
Our website is not intended for use by children under the age of 13, and we do not knowingly collect personal information from children under 13.
<br />
10. Changes to This Privacy Policy
We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
<br />
11. Contact Us
If you have any questions or concerns about this privacy policy, please contact MRM Designs.

              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default PrivacyPolicy;
