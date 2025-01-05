import styles from "./TermsOfService.module.css";

const TermsOfService = () => {
  return (
    <div className={styles["terms-of-service"]}>
      <header className={styles["terms-header"]}>
        <h1>Terms of Service for Genesis</h1>
      </header>
      <main className={styles["terms-main"]}>
        <p>
          <strong>Effective Date:</strong> 1/1/2025
        </p>

        <section>
          <h2>Introduction</h2>
          <p>
            Welcome to Genesis ("we," "our," or "us"). By accessing or using our
            app and services, you agree to these Terms of Service ("Terms"). If
            you do not agree with any part of these Terms, you must not use our
            app.
          </p>
        </section>

        <section>
          <h2>Eligibility</h2>
          <p>
            By using Genesis, you represent that you are at least 13 years old
            and legally capable of entering into a binding agreement. If you are
            under the age of 18, you must have parental or guardian consent to
            use the app.
          </p>
        </section>

        <section>
          <h2>Account Registration and Responsibilities</h2>
          <p>When creating an account on Genesis, you agree to:</p>
          <ul>
            <li>
              Provide accurate and truthful information during registration.
            </li>
            <li>Maintain the confidentiality of your account credentials.</li>
            <li>
              Be responsible for all activities that occur under your account.
            </li>
          </ul>
        </section>

        <section>
          <h2>Prohibited Activities</h2>
          <p>While using Genesis, you agree not to:</p>
          <ul>
            <li>
              Engage in any activity that violates applicable laws or
              regulations.
            </li>
            <li>
              Use the app to distribute malware, spam, or any other harmful
              content.
            </li>
            <li>
              Interfere with the functionality or security of the app, including
              attempting to access unauthorized areas.
            </li>
            <li>Impersonate others or misrepresent your identity.</li>
          </ul>
        </section>

        <section>
          <h2>Intellectual Property</h2>
          <p>
            All content, trademarks, and materials on Genesis are the property
            of Genesis or its licensors. You may not use, reproduce, or
            distribute our content without prior written consent.
          </p>
        </section>

        <section>
          <h2>Third-Party Services</h2>
          <p>
            Genesis may integrate with third-party platforms such as Facebook or
            WhatsApp. Your use of these third-party services is governed by
            their respective terms and policies. We are not responsible for
            their practices.
          </p>
        </section>

        <section>
          <h2>Termination</h2>
          <p>
            We reserve the right to suspend or terminate your access to Genesis
            at our sole discretion if you violate these Terms or engage in any
            activity that harms the app, its users, or third parties.
          </p>
        </section>

        <section>
          <h2>Disclaimers</h2>
          <p>
            Genesis is provided "as is" and "as available" without warranties of
            any kind, express or implied. We do not guarantee uninterrupted
            access or that the app will be error-free.
          </p>
        </section>

        <section>
          <h2>Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, Genesis shall not be liable
            for any indirect, incidental, or consequential damages arising out
            of your use of the app.
          </p>
        </section>

        <section>
          <h2>Indemnification</h2>
          <p>
            You agree to indemnify and hold Genesis harmless from any claims,
            liabilities, damages, or expenses arising from your use of the app
            or your violation of these Terms.
          </p>
        </section>

        <section>
          <h2>Changes to These Terms</h2>
          <p>
            We may update these Terms from time to time. Any changes will be
            posted on this page with the updated effective date. Your continued
            use of Genesis after the changes take effect constitutes acceptance
            of the updated Terms.
          </p>
        </section>

        <section>
          <h2>Contact Us</h2>
          <p>
            If you have questions or concerns about these Terms, please contact
            us at:
          </p>
          <ul>
            <li>
              <strong>Email:</strong> [Insert Email Address]
            </li>
            <li>
              <strong>Address:</strong> [Insert Physical Address]
            </li>
          </ul>

          <p>Thank you for choosing Genesis. We look forward to serving you.</p>
        </section>
      </main>
      <footer className={styles["terms-footer"]}>
        <p>&copy; {new Date().getFullYear()} Genesis. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default TermsOfService;
