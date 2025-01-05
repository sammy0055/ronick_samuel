import styles from "./PrivacyPolicy.module.css";

const PrivacyPolicy = () => {
  return (
    <div className={styles["privacy-policy"]}>
      <header className={styles["privacy-header"]}>
        <h1>Privacy Policy for Genesis</h1>
      </header>
      <main className={styles["privacy-main"]}>
        <p>
          <strong>Effective Date:</strong> 1/1/2025
        </p>

        <section>
          <h2>Introduction</h2>
          <p>
            Welcome to Genesis ("we," "our," or "us"). Your privacy is important
            to us, and we are committed to protecting your personal information.
            This Privacy Policy outlines how we collect, use, disclose, and
            safeguard your information when you use our app and associated
            services. Please read this policy carefully. If you do not agree
            with the terms, do not use Genesis.
          </p>
        </section>

        <section>
          <h2>Information We Collect</h2>

          <h3>1. Information You Provide</h3>
          <ul>
            <li>
              When you create an account or interact with our app, you may
              provide personal information, such as your name, email address,
              phone number, and payment details.
            </li>
          </ul>

          <h3>2. Automatically Collected Information</h3>
          <ul>
            <li>
              <strong>Device Information:</strong> We may collect details about
              your device, including IP address, operating system, browser type,
              and app version.
            </li>
            <li>
              <strong>Usage Data:</strong> Information about your interactions
              with the app, such as features used, pages viewed, and the time
              spent on the app.
            </li>
          </ul>

          <h3>3. Third-Party Information</h3>
          <ul>
            <li>
              We may collect information from third-party services if you link
              or interact with Genesis through platforms like Facebook or
              WhatsApp.
            </li>
          </ul>
        </section>

        <section>
          <h2>How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide and improve our services.</li>
            <li>Personalize your experience on Genesis.</li>
            <li>
              Communicate with you, including sending updates and promotional
              materials.
            </li>
            <li>Comply with legal obligations and enforce our terms of use.</li>
          </ul>
        </section>

        <section>
          <h2>Sharing Your Information</h2>
          <p>We may share your information with:</p>
          <ul>
            <li>
              <strong>Service Providers:</strong> Trusted third parties that
              help us operate our app, such as payment processors and hosting
              providers.
            </li>
            <li>
              <strong>Legal Authorities:</strong> When required to comply with
              legal obligations, enforce our policies, or protect rights,
              property, or safety.
            </li>
            <li>
              <strong>Business Transfers:</strong> In connection with a merger,
              sale, or transfer of assets.
            </li>
          </ul>
        </section>

        <section>
          <h2>Your Rights and Choices</h2>
          <p>
            You have the following rights regarding your personal information:
          </p>
          <ul>
            <li>
              <strong>Access and Update:</strong> You can access and update your
              information through your account settings.
            </li>
            <li>
              <strong>Opt-Out:</strong> You may opt-out of receiving promotional
              emails by following the unsubscribe link.
            </li>
            <li>
              <strong>Delete:</strong> You can request that we delete your
              information, subject to legal or contractual obligations.
            </li>
          </ul>
        </section>

        <section>
          <h2>Data Security</h2>
          <p>
            We implement reasonable measures to protect your information from
            unauthorized access, disclosure, alteration, or destruction.
            However, no system is entirely secure, and we cannot guarantee
            complete security.
          </p>
        </section>

        <section>
          <h2>Third-Party Links</h2>
          <p>
            Genesis may contain links to third-party websites or services. We
            are not responsible for their privacy practices. We encourage you to
            review the privacy policies of those third parties.
          </p>
        </section>

        <section>
          <h2>Children’s Privacy</h2>
          <p>
            Genesis is not intended for use by children under the age of 13. We
            do not knowingly collect personal information from children. If we
            become aware that we have collected such information, we will take
            steps to delete it.
          </p>
        </section>

        <section>
          <h2>Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page with the updated effective date. We
            encourage you to review this policy periodically.
          </p>
        </section>

        <section>
          <h2>Contact Us</h2>
          <p>
            If you have questions or concerns about this Privacy Policy or our
            practices, please contact us at:
          </p>
          <ul>
            <li>
              <strong>Email:</strong> [Insert Email Address]
            </li>
            <li>
              <strong>Address:</strong> [Insert Physical Address]
            </li>
          </ul>

          <p>
            Thank you for trusting Genesis with your information. We are
            committed to protecting your privacy.
          </p>
        </section>
      </main>
      <footer className={styles["privacy-footer"]}>
        <p>&copy; {new Date().getFullYear()} Genesis. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
