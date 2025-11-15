export interface Section {
  id: string;
  title: string;
  content: string;
}

export interface Topic {
  slug: string;
  title: string;
  image?: string;
  description: string;
  category: string;
  readTime: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  tags: string[];
  sections: Section[];
}

export const topics: Topic[] = [
  {
    slug: "about-1-market-philippines",
    title: "About 1 Market Philippines",
    image: "/getting-started/1.png",
    description:
      "Discover the mission, vision, strengths, and community-driven values behind 1 Market Philippines — the localized digital marketplace built to empower small businesses.",
    category: "Getting Started",
    readTime: "5 min read",
    difficulty: "Beginner",
    tags: ["platform", "mission", "ecommerce", "local business", "Philippines"],
    sections: [
      {
        id: "introduction",
        title: "Introduction to 1 Market Philippines",
        content: `
        <p><strong>1 Market Philippines</strong> (1MP) is a mission-driven e-commerce platform built to empower small and medium local businesses in the Philippines. By focusing on specific communities such as cities and municipalities, 1MP bridges the gap between neighborhood sellers and modern digital commerce — giving local entrepreneurs the tools and reach they need to thrive in today’s market.</p>

        <p>Unlike large, generic platforms, 1MP is tailored to strengthen local economies by fostering authentic, community-based selling and buying experiences. From home-based food makers to local service providers, the platform opens up new opportunities for growth without the need for a traditional storefront.</p>
      `,
      },
      {
        id: "mission-vision",
        title: "Our Mission and Vision",
        content: `
        <h4>Mission</h4>
        <p>To empower small and medium enterprises (SMEs) by helping them grow exponentially — expanding their market reach beyond physical boundaries through digital innovation.</p>

        <h4>Vision</h4>
        <p>To elevate the Philippines to an economic super level by igniting an entrepreneurial revolution in every locality — where every community thrives through digital commerce.</p>
      `,
      },
      {
        id: "strengths",
        title: "What Makes Us Different",
        content: `
        <ul>
          <li><strong>Localized Focus:</strong> 1MP targets specific local areas, allowing sellers to deeply engage with their nearby communities and serve customers in a more personal way.</li>
          <li><strong>Community-Oriented Approach:</strong> Our marketplace is designed to support small businesses in forming lasting connections and building loyal local customer bases.</li>
          <li><strong>Scalable Model:</strong> While we begin at the grassroots level, our platform is built to scale — allowing businesses to grow from barangay to nationwide markets.</li>
          <li><strong>Empowerment Through Digital:</strong> We eliminate the traditional constraints of brick-and-mortar by offering digital storefronts, e-wallet integration, and logistics support.</li>
          <li><strong>Inclusive Platform:</strong> 1MP is open to micro-entrepreneurs and startups that may not qualify for larger platforms, ensuring no one is left behind in the digital economy.</li>
        </ul>
      `,
      },
      {
        id: "core-values",
        title: "Our Core Values",
        content: `
        <ul>
          <li><strong>Empowerment:</strong> We help small businesses grow by equipping them with digital tools and visibility to compete and succeed.</li>
          <li><strong>Integrity:</strong> We uphold honesty, transparency, and fairness in all aspects of our platform — from seller policies to buyer protection.</li>
          <li><strong>Community Commitment:</strong> We serve with heart. Our mission is grounded in lifting communities through inclusive economic development.</li>
          <li><strong>Reliability & Responsibility:</strong> Our team is committed to dependable service and ethical practices, ensuring that every transaction is meaningful and trusted.</li>
        </ul>
      `,
      },
    ],
  },
  {
    slug: "getting-started",
    title: "Getting Started as a Seller",
    image: "/getting-started/2.png",
    description:
      "Start your journey on 1 Market Philippines by creating your seller account. Learn how to register with your email, verify it securely, and prepare for onboarding.",
    category: "Getting Started",
    readTime: "7 min read",
    difficulty: "Beginner",
    tags: [
      "registration",
      "account setup",
      "email verification",
      "seller guide",
    ],
    sections: [
      {
        id: "account-registration",
        title: "Seller Account Registration",
        content: `
        <p>To begin selling on 1 Market Philippines, you must first create a secure and verified seller account. This initial step is important because it connects your business identity to a verified email, which will be used for future logins, security alerts, order updates, customer messages, and payout notifications. <strong>Using a real, active, and accessible email address is critical</strong>.</p>

        <h4>⚠️ Important Reminder Before You Start:</h4>
        <ul>
          <li>Your email address <strong>cannot be changed after registration</strong>. Choose your email wisely — preferably one that you check often and is tied to your business.</li>
          <li><strong>Do not use a temporary or dummy email</strong>. This will cause issues in verification, login recovery, and accessing seller features like order tracking and payment setup.</li>
          <li>Make sure your inbox is not full or spam-filtering our emails — especially the one-time verification code.</li>
        </ul>

        <h4>Watch the Walkthrough:</h4>
        <p>Here’s a quick preview of how to complete the seller registration form:</p>
        <img src="/gifs/01.gif" alt="Seller Registration Walkthrough" style="max-width:100%; height:auto; border-radius:8px; box-shadow:0 2px 8px rgba(0,0,0,0.1);" />

        <h4>Step 1: Access the Registration Page</h4>
        <ul>
          <li>Go to <strong>https://selleronemarketphilippines.vercel.app/sign-up</strong> using any browser on your phone, tablet, or computer.</li>
          <li>You will be greeted with a registration form that includes basic login credentials and agreement checkboxes.</li>
        </ul>

        <h4>Step 2: Enter Your Registration Details</h4>
        <ol>
          <li>
            <strong>Email Address:</strong><br>
            Enter a valid and regularly used email address. After you type your email, a 6-digit verification code will be sent to your inbox. This will be your permanent login ID.
            <ul>
              <li>Make sure you enter it correctly. Typos can prevent you from verifying your account.</li>
              <li>Check your spam or promotions folder if you don’t see the code right away.</li>
              <li>If the code doesn't arrive within 60 seconds, a “<strong>Resend Code</strong>” button will appear.</li>
            </ul>
          </li>
          <li>
            <strong>Email Verification Code:</strong><br>
            Retrieve the code from your inbox and input it into the verification field. This confirms that you own the email address and allows you to proceed.
          </li>
          <li>
            <strong>Password:</strong><br>
            Create a secure password with a combination of 6–20 characters. We recommend including at least:
            <ul>
              <li>1 uppercase letter (e.g., A, B, C)</li>
              <li>1 number (e.g., 0–9)</li>
              <li>1 special symbol (e.g., @, #, !)</li>
            </ul>
            This keeps your account protected from unauthorized access.
          </li>
          <li>
            <strong>Confirm Password:</strong><br>
            Retype your password exactly to confirm there are no typos. If they don’t match, you won’t be able to continue.
          </li>
          <li>
            <strong>Accept Platform Policies:</strong><br>
            Before continuing, you must read and agree to the following:
            <ul>
              <li><a href="/terms" target="_blank">Terms and Conditions</a></li>
              <li><a href="/privacy" target="_blank">Privacy Policy</a></li>
              <li><a href="/intellectual-property-policy" target="_blank">Intellectual Property Policy</a></li>
            </ul>
            These policies protect both you and your customers by ensuring fair, secure, and transparent business practices.
          </li>
        </ol>

        <h4>Step 3: Proceed to Seller Onboarding</h4>
        <p>Once your email has been successfully verified and your password is set, you’ll be redirected to the <strong>Seller Onboarding Form</strong>. This next section is where you’ll provide important business details that will help our admin team verify your identity and activate your selling privileges on the platform.</p>
        <p>We’ll guide you through this in the next topic, which includes uploading documents, providing contact details, and selecting your business category. You’re now one step closer to launching your store!</p>
      `,
      },
    ],
  },
  {
    slug: "seller-account-types",
    title: "Seller Account Types",
    image: "/getting-started/3.png",
    description:
      "Discover the different types of seller accounts available on 1 Market Philippines, and learn which one fits your business best, along with their required verification documents.",
    category: "Getting Started",
    readTime: "6 min read",
    difficulty: "Beginner",
    tags: [
      "account type",
      "seller verification",
      "business registration",
      "requirements",
      "marketplace onboarding",
    ],
    sections: [
      {
        id: "account-types",
        title: "Seller Account Types",
        content: `
        <p>At 1 Market Philippines, we welcome a wide range of sellers — from individual entrepreneurs to legally registered corporations. To ensure a secure and trustworthy marketplace, each seller must select the appropriate <strong>account type</strong> during onboarding. This helps determine the specific documents you need to submit for verification.</p>

        <h4>📌 Why Account Type Matters</h4>
        <p>Your selected account type determines how your store is verified, taxed, and how it appears to customers. It also helps us provide you with features and support tailored to your business model. Choosing the correct type avoids delays in your approval and payout setup.</p>

        <h4>🧾 Available Seller Account Types</h4>

        <h5>1. Individual</h5>
        <p>Ideal for freelancers, casual resellers, or first-time online sellers who operate under their own name without a registered business name.</p>
        <strong>Required Documents:</strong>
        <ul>
          <li>Valid government-issued ID (e.g., UMID, Passport, Driver’s License)</li>
          <li>Barangay Business Permit (required)</li>
          <li>BIR Certificate (optional, but boosts trust and payment access)</li>
        </ul>

        <h5>2. Sole Proprietorship</h5>
        <p>Best for business owners who have registered their brand name under the Department of Trade and Industry (DTI) and operate as a single owner.</p>
        <strong>Required Documents:</strong>
        <ul>
          <li>DTI Business Name Certificate</li>
          <li>Barangay Business Permit (required)</li>
          <li>BIR Certificate (optional)</li>
        </ul>

        <h5>3. Corporation</h5>
        <p>Recommended for larger businesses with a corporate structure registered under the Securities and Exchange Commission (SEC).</p>
        <strong>Required Documents:</strong>
        <ul>
          <li>SEC Certificate of Registration</li>
          <li>BIR Certificate of Registration</li>
          <li>Barangay Business Permit</li>
        </ul>

        <h5>4. Partnership</h5>
        <p>For businesses run by two or more individuals under a formal partnership agreement, also registered with the SEC.</p>
        <strong>Required Documents:</strong>
        <ul>
          <li>SEC Certificate of Partnership</li>
          <li>BIR Certificate of Registration</li>
          <li>Barangay Business Permit</li>
        </ul>

        <h4>💡 Tips for Choosing the Right Type</h4>
        <ul>
          <li><strong>Individual:</strong> Choose this if you’re selling under your own name and haven’t registered a business yet.</li>
          <li><strong>Sole Proprietorship:</strong> Use this if you’ve registered with DTI and want to operate under a brand name.</li>
          <li><strong>Corporation:</strong> Select this if you're operating a full corporate entity with a board and staff.</li>
          <li><strong>Partnership:</strong> Choose this if your business is co-owned and SEC-registered as a partnership.</li>
        </ul>

        <p><strong>Note:</strong> Make sure you have scanned or clear digital copies of your documents ready before beginning onboarding. Uploads must be in JPG or PNG format.</p>

        <p>Up next: Learn how to complete your <strong>Seller Onboarding Process</strong> — including business details, location, product category, and uploading your requirements for verification.</p>
      `,
      },
    ],
  },
  {
    slug: "seller-onboarding-process",
    title: "Seller Onboarding Process",
    image: "/getting-started/4.png",
    description:
      "A complete guide to filling out your seller onboarding form after registration — including store details, business information, and required documents.",
    category: "Getting Started",
    readTime: "7 min read",
    difficulty: "Beginner",
    tags: [
      "onboarding",
      "business setup",
      "store profile",
      "seller guide",
      "verification",
    ],
    sections: [
      {
        id: "onboarding-overview",
        title: "What is Seller Onboarding?",
        content: `
        <p>After you’ve registered and verified your email, you’ll be redirected to the <strong>Seller Onboarding</strong> form — the final step before your account can be activated. This form gathers essential business information and documents to verify your store’s identity and ensure you’re set up properly to sell on 1 Market Philippines.</p>
        <p>Completing this form accurately helps us:</p>
        <ul>
          <li>Verify your business legitimacy</li>
          <li>Match you to the correct product/service category</li>
          <li>Ensure secure transactions and payouts</li>
          <li>Provide tailored seller features and support</li>
        </ul>

        <h4>Watch the Walkthrough:</h4>
        <p>Here’s a quick preview of how to complete the seller onboarding form:</p>
        <img src="/gifs/02.gif" alt="Seller Onboarding Walkthrough" style="max-width:100%; height:auto; border-radius:8px; box-shadow:0 2px 8px rgba(0,0,0,0.1);" />
      `,
      },
      {
        id: "store-details",
        title: "1. Store Details",
        content: `
        <h4>🛍️ Store Name</h4>
        <p>This is the public name your customers will see. Make sure it reflects your brand, products, or services clearly. It must be unique across the platform and <strong>cannot be changed</strong> once approved.</p>
        <ul>
          <li>Tip: Avoid using special characters or misleading names.</li>
          <li>Check for typos — this name appears on your store URL and receipts.</li>
        </ul>

        <h4>📦 Product/Service Category</h4>
        <p>Choose from a predefined list of categories such as:</p>
        <ul>
          <li>Clothing & Accessories</li>
          <li>Electronics</li>
          <li>Food & Beverages</li>
          <li>Health & Wellness</li>
          <li>Home & Living</li>
          <li>Digital Services</li>
          <li>Others...</li>
        </ul>
        <p>This helps customers find your store faster and allows us to recommend features that match your business type.</p>
      `,
      },
      {
        id: "business-type",
        title: "2. Business Type & Legal Structure",
        content: `
        <p>Choose the structure that best represents your business. Your selection affects which documents you’ll be required to submit:</p>

        <ul>
          <li><strong>Individual</strong> – For casual sellers or freelancers. Requires a valid ID and barangay permit.</li>
          <li><strong>Sole-Proprietorship</strong> – For DTI-registered businesses. Requires DTI certificate and barangay permit.</li>
          <li><strong>Corporation</strong> – SEC-registered companies. Requires SEC documents, BIR, and business permits.</li>
          <li><strong>Partnership</strong> – Registered with SEC. Requires SEC, BIR, and local permits.</li>
        </ul>

        <p>If you're unsure which type applies to you, start with <strong>Individual</strong> and upgrade later after registration.</p>
      `,
      },
      {
        id: "seller-details",
        title: "3. Seller Information",
        content: `
        <h4>👤 Seller Name</h4>
        <p>This should be your full legal name or the name of your business representative (if you're registering on behalf of a company). It will be used by the admin team to verify your identity and to contact you for any updates or issues.</p>

        <p>Make sure the name matches your ID or business documents to avoid rejection during verification.</p>
      `,
      },
      {
        id: "document-submission",
        title: "4. Upload Required Documents",
        content: `
        <p>Depending on your selected business type, you’ll need to upload supporting documents:</p>

        <ul>
          <li>✅ Valid government-issued ID</li>
          <li>✅ Barangay Business Permit (required for all types)</li>
          <li>✅ SEC Certificate (for Corporations or Partnerships)</li>
          <li>✅ DTI Certificate (for Sole Proprietorships)</li>
          <li>✅ BIR Certificate (optional, but recommended)</li>
        </ul>

        <p><strong>File Types Accepted:</strong> JPG, PNG, or PDF. Files must be clear and not blurred or cropped.</p>
        <p><strong>Tip:</strong> Upload all required files in one go to speed up the approval process.</p>
      `,
      },
      {
        id: "after-submission",
        title: "5. What Happens After You Submit?",
        content: `
        <p>Once the form is complete and submitted, your onboarding status will change to <strong>"Pending Review"</strong>. An admin will review your application to ensure all information and documents are correct.</p>

        <h4>⏱️ Review Timeline:</h4>
        <ul>
          <li><strong>Initial review:</strong> within 24–48 hours</li>
          <li><strong>Follow-up (if needed):</strong> up to 3–5 business days</li>
          <li><strong>Final approval:</strong> 1–2 business days after full submission</li>
        </ul>

        <p>You’ll receive a confirmation email once your account is approved. After that, you can access the full seller dashboard and start uploading products or services.</p>
        <p>If your documents need revision, the admin team will notify you with specific instructions to fix the issue.</p>
      `,
      },
    ],
  },
  {
    slug: "account-settings",
    title: "Account Settings",
    image: "/getting-started/5.png",
    description:
      "A comprehensive overview of your Account Settings dashboard, including how to manage your personal information, business details, and store configurations.",
    category: "Getting Started",
    readTime: "5 min read",
    difficulty: "Beginner",
    tags: ["account", "profile", "settings", "business"],
    sections: [
      {
        id: "account-dashboard-intro",
        title: "🔧 What You Can Configure",
        content:
          "<p>The Account Settings dashboard gives you access to everything related to your store operations — from personal info, documents, policies, to payment and warehouse configuration. It’s your main hub to control how your store is presented and how it functions internally.</p>",
      },
      {
        id: "navigation-and-layout",
        title: "📂 Navigating the Dashboard",
        content: `<p>The dashboard is organized into multiple sections for easy access. Each section deals with a specific aspect of your seller profile. You can jump between sections without losing unsaved data and changes.</p><p>Use the sidebar menu or breadcrumbs to quickly locate what you need to edit.</p>

          <img src="/assets/account-settings.png" alt="Account settings" style="max-width:100%; height:auto; border-radius:8px; box-shadow:0 2px 8px rgba(0,0,0,0.1);" />`,
      },
    ],
  },
  {
    slug: "general-information",
    title: "General Information",
    image: "/getting-started/6.png",
    description:
      "Update your basic account details like name and password. Your email is fixed after registration for security purposes.",
    readTime: "4 min read",
    category: "Getting Started",
    tags: ["account", "profile", "security"],
    sections: [
      {
        id: "editable-profile-fields",
        title: "👤 Editable vs. Locked Fields",
        content: `
          <p>You can update your given name, middle name, and family name anytime. However, your email address is permanent and cannot be changed for security purposes. Your password can be updated whenever needed to enhance account protection.</p><ul><li><strong>Editable:</strong> Full Name, Password</li><li><strong>Locked:</strong> Email Address</li></ul>
          <img src="/assets/general-settings.png" alt="Account settings" style="max-width:100%; height:auto; border-radius:8px; box-shadow:0 2px 8px rgba(0,0,0,0.1);" />
          `,
      },
      {
        id: "security-and-verification",
        title: "🔐 Security & Verification",
        content:
          "<p>Changes to your general information may trigger security checks. This ensures your identity and account safety. For instance, modifying your name might require document re-validation by the support team.</p>",
      },
    ],
    difficulty: "Beginner",
  },
  {
    slug: "payment-account",
    title: "Payment Account",
    image: "/getting-started/7.png",
    description:
      "Add multiple card or e-wallet payout methods and manage your default payment account settings.",
    readTime: "4 min read",
    category: "Getting Started",
    tags: ["payment", "payout", "e-wallet", "bank"],
    sections: [
      {
        id: "add-bank-and-ewallet",
        title: "💳 Add Bank Card or E-Wallet",
        content: `<p>You can add multiple payment accounts to receive your store earnings. Choose from traditional card-based accounts or supported e-wallet providers.</p><ul><li><strong>Cards:</strong> Card Number, CVC, Expiry Date, Cardholder Name</li><li><strong>E-Wallets:</strong> GCash, Maya, PayPal, Coins.ph — include Account Number and Account Name</li></ul>
          <img src="/assets/payment-account.png" alt="Account settings" style="max-width:100%; height:auto; border-radius:8px; box-shadow:0 2px 8px rgba(0,0,0,0.1);" />
          `,
      },
      {
        id: "manage-default-payment",
        title: "⭐ Set Default Payout Method",
        content: `<p>After adding multiple payment methods, you can mark one as your default payout account. Only one default method can be active at a time. Make sure it’s the one you regularly use to avoid failed transactions.</p>
          <h4>Watch the Walkthrough:</h4>
        <p>Here’s a quick preview of how to complete the payment account settings:</p>
        <img src="/gifs/03.gif" alt="Payment Account Settings Walkthrough" style="max-width:100%; height:auto; border-radius:8px; box-shadow:0 2px 8px rgba(0,0,0,0.1);" />
          `,
      },
    ],
    difficulty: "Beginner",
  },
  {
    slug: "warehouse-settings",
    title: "Warehouse Settings",
    image: "/getting-started/8.png",
    description:
      "Set up pickup and return warehouse addresses, including contact numbers and operational status.",
    readTime: "4 min read",
    category: "Getting Started",
    tags: ["warehouse", "logistics", "pickup", "return"],
    sections: [
      {
        id: "pickup-return-config",
        title: "🏬 Pickup & Return Addresses",
        content:
          "<p>You can assign separate addresses for pickup and return processes. These help third-party couriers navigate your shipping and receiving logistics.</p><ul><li><strong>Pickup Warehouse:</strong> Where couriers collect outbound packages.</li><li><strong>Return Warehouse:</strong> Where customers or couriers send returned items.</li></ul>",
      },
      {
        id: "warehouse-status-and-contacts",
        title: "📞 Status & Contact Details",
        content: `<p>Each warehouse entry must include a contact number and an operational status (Open or Closed). This ensures delivery partners are informed if the warehouse is temporarily unavailable.</p>
          <h4>Watch the Walkthrough:</h4>
        <p>Here’s a quick preview of how to complete the warehouse settings:</p>
        <img src="/gifs/04.gif" alt="Warehouse Settings Walkthrough" style="max-width:100%; height:auto; border-radius:8px; box-shadow:0 2px 8px rgba(0,0,0,0.1);" />
      `,
      },
    ],
    difficulty: "Beginner",
  },
  {
    slug: "store-policies",
    title: "Store Policies",
    image: "/getting-started/9.png",
    description:
      "Create and manage your store’s legal policies such as privacy, returns, and terms of service. All submitted policies will be subject to review by One Market Philippines to ensure compliance with our platform's standards and restrictions.",
    readTime: "3 min read",
    category: "Getting Started",
    tags: ["policy", "legal", "compliance"],
    sections: [
      {
        id: "create-and-manage-policies",
        title: "📜 Add Legal Policies",
        content:
          "<p>Build trust by clearly stating your store's policies. Common types include:</p><ul><li>Privacy Policy</li><li>Refund/Return Policy</li><li>Terms and Conditions</li></ul><p>⚠️ <strong style='color: #800020'>Note:</strong> Once submitted, all policies will be placed under review by an administrator. This process ensures the policies meet One Market Philippines' platform guidelines and do not include restricted or prohibited content.</p>",
      },
      {
        id: "policy-editor",
        title: "✍️ Content & Customization",
        content: `<p>You can freely write and format each policy's content. Make sure to explain clearly how customer data is handled, what return timelines are accepted, and the rights of both the seller and buyer.</p><p>🔍 All content will be reviewed before publication to ensure alignment with our community standards and legal requirements.</p>
          <h4>Watch the Walkthrough:</h4>
        <p>Here’s a quick preview of how to complete the policies settings:</p>
        <img src="/gifs/05.gif" alt="Policies Settings Walkthrough" style="max-width:100%; height:auto; border-radius:8px; box-shadow:0 2px 8px rgba(0,0,0,0.1);" />
          `,
      },
    ],
    difficulty: "Beginner",
  },
  {
    slug: "faqs-settings",
    title: "FAQs Settings",
    image: "/getting-started/10.png",
    description:
      "Create and manage frequently asked questions to reduce customer inquiries and improve clarity.",
    readTime: "3 min read",
    category: "Getting Started",
    tags: ["faqs", "support", "help"],
    sections: [
      {
        id: "faq-management",
        title: "📝 Add Frequently Asked Questions",
        content: `<p>FAQs reduce repetitive customer questions and improve their overall shopping experience. Provide answers to the most common concerns buyers may have about your product, service, or process.</p>
          <h4>Watch the Walkthrough:</h4>
        <p>Here’s a quick preview of how to complete the FAQs settings:</p>
        <img src="/gifs/06.gif" alt="FAQs Settings Walkthrough" style="max-width:100%; height:auto; border-radius:8px; box-shadow:0 2px 8px rgba(0,0,0,0.1);" />
          `,
      },
    ],
    difficulty: "Beginner",
  },
  {
    slug: "attachments",
    title: "Attachments",
    image: "/getting-started/11.png",
    description:
      "View all submitted business documents and track their approval status.",
    readTime: "3 min read",
    category: "Getting Started",
    tags: ["documents", "verification", "attachments"],
    sections: [
      {
        id: "view-only-documents",
        title: "📁 View Uploaded Documents",
        content:
          "<p>You can review your submitted documents, such as government-issued IDs, business registration, or permits. These are view-only and cannot be deleted manually.</p>",
      },
      {
        id: "application-status",
        title: "📌 Check Application Status",
        content: `<p>Each document or application process will display a status: Under Review, Approved, or Rejected. Admins may request resubmission for any rejected files.</p> <img src="/assets/attachment-settings.png" alt="Attachment settings" style="max-width:100%; height:auto; border-radius:8px; box-shadow:0 2px 8px rgba(0,0,0,0.1);" />`,
      },
    ],
    difficulty: "Beginner",
  },
  {
    slug: "business-settings",
    title: "Business Settings",
    image: "/getting-started/12.png",
    description:
      "Manage your brand identity and store profile. Note that the business name is locked after verification.",
    readTime: "3 min read",
    category: "Getting Started",
    tags: ["branding", "business", "store"],
    sections: [
      {
        id: "upload-store-logo",
        title: "🖼️ Upload Your Store Logo",
        content:
          "<p>Add a professional logo that represents your brand. A high-quality logo improves credibility and visual identity across your storefront and invoices.</p>",
      },
      {
        id: "brand-name-lock",
        title: "🚫 Brand Name Cannot Be Edited",
        content:
          "<p>Your brand name is matched with your submitted documents and is locked after approval. If there's a typo or mismatch, contact support before finalizing onboarding.</p>",
      },
    ],
    difficulty: "Beginner",
  },

  // Product Management Category
  {
    slug: "product-title-guidelines",
    title: "Product Title Guidelines",
    image: "/getting-started/13.png",
    description:
      "Learn how to create effective product titles that improve search visibility and attract customers.",
    category: "Product Management",
    readTime: "3 min read",
    difficulty: "Beginner",
    tags: [
      "product titles",
      "SEO",
      "best practices",
      "ecommerce",
      "copywriting",
    ],
    sections: [
      {
        id: "benefits-of-improving-listing-quality",
        title:
          "Benefits of Improving Your Product Detail Page's Listing Quality ",
        content: `
          <ul>
            <li><span style="color: #800020; font-weight: bold;">More exposure</span> <br />With optimized product information, more organic traffic will be directed to these products, so One Market Philippines consumers will have a higher chance to see your products. It is also more likely that the product will be selected to participate in various One Market Philippines marketing campaigns.</li>
            <li><span style="color: #800020; font-weight: bold;">Higher conversion</span> <br /> We have seen across markets that optimized product information increases the probability of consumers adding the product to their shopping cart. High-quality product information provides consumers with greater confidence in the product, which helps lower pre-sale inquiries, give high readability of your product information and increase the sales conversion rate of your product. </li>
          </ul>
        `,
      },
      {
        id: "product-optimization",
        title: "Product Detail Page Optimization Guide",
        content: `
          <h4>How to create a good product title</h4>
          <table cellpadding="8" cellspacing="0" style="border-collapse: collapse; width: 100%; border: 1px solid #777;">
  <thead>
    <tr>
      <th style="width: 50%; text-align: left; border: 1px solid #777; padding: 8px;">Tips</th>
      <th style="width: 50%; text-align: left; border: 1px solid #777; padding: 8px;">Examples</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="border: 1px solid #777; padding: 8px;">
        <strong>Format</strong>
        <ul>
          <li>Use 25-80 characters. Make it easier for buyers to read and capture information.</li>
          <li>Capitalize the first letter of each word (except conjunctions, articles, prepositions).</li>
          <li>Include necessary punctuation marks such as hyphens (-), forward slashes (/), commas (,), and signs (&) and period (.)</li>
          <li>Use Arabic numerals ("5", not "five")</li>
          <li>Use abbreviations for measurement units, such as "cm", "oz", "in", and "kg"</li>
          <li><strong>Note:</strong>
            <ul>
              <li>Do not use unofficial language of the country/region unless it's part of the brand name.</li>
              <li>Do not use all uppercase, special ASCII characters (Æ, Ⓔ, Ⓡ), or ambiguous symbols like ~ ! * $ ? _ ~ { } # &lt; &gt; | * ; ^ ~ ¹ unless part of the brand name.</li>
            </ul>
          </li>
        </ul>
        <strong>Content</strong>
        <ul>
          <li>Must be accurate and concise, while highlighting selling points.</li>
          <li>Recommended format: [product brand] + [product content] + [range of application] + [product type] + [main function/feature/advantage]</li>
        </ul>
      </td>
      <td style="border: 1px solid #777; padding: 8px;">
        <ol>
          <li><strong>Safety 1st Deluxe 25-Piece Baby Healthcare and Grooming Kit</strong>
            <ul>
              <li>✅ Using 25–80 characters</li>
              <li>✅ Capitalization of the first letter for each word</li>
              <li>✅ Include necessary punctuation marks</li>
              <li>✅ Use Latin numerals</li>
            </ul>
          </li>
          <li><strong>Grimoire Girl: A Memoir of Magic and Mischief Hardcover – Oct 3, 2023</strong>
            <ul>
              <li>✅ Using 25–80 characters</li>
              <li>✅ Capitalization of the first letter for each word</li>
              <li>✅ Include necessary punctuation marks (e.g., -, /, etc.)</li>
              <li>✅ Use Latin numerals</li>
            </ul>
          </li>
          <li><strong>Panoxyl 4% Benzoyl Peroxide Acne Creamy Wash 6 oz (Pack of 2)</strong>
            <ul>
              <li>✅ Using 25–80 characters</li>
              <li>✅ Capitalization of the first letter for each word</li>
              <li>✅ Include necessary punctuation marks</li>
              <li>✅ Use Latin numerals</li>
              <li>✅ Use abbreviations for measurement unit</li>
            </ul>
          </li>
        </ol>
      </td>
    </tr>
  </tbody>
</table>
<br />
<ul>
              <li>It is recommended to include key information: [product brand]+[product content]+[range of application]+[product type]+[main function/feature/advantage]</li>
              <li>[Product brand]: Brand name, provided the relevant authorization has been obtained from the brand owner</li>
              <li>[Product content]: The composition of the commodity itself, such as material, color, size, quantity, pattern, packaging, capacity, model.</li>
              <li>[Scope of application]: People and scenarios for which the product is applicable, such as "gender", "adult/teenager/children/baby", "outdoor", "banquet", "which part of body", "applicable to Apple 12 mobile phones", etc</li>
              <li>[Product type]: Product classification, such as "T-shirt", "mobile phone", "bookcase" and so on.</li>
              <li>[Main function/feature/advantage]: The description of the product, which refers to the value points the product can provide to buyers, such as "waterproof", "elastic", "collector's edition", "educational", "multi-functional", "can enhance immunity", etc</li>
              <li>The above are general recommendations for all categories. For specific recommendations for different categories, please refer to corresponding guidelines.</li>
            </ul>
        `,
      },
    ],
  },
  {
    slug: "product-photography",
    title: "Product Photography Guide",
    image: "/getting-started/14.png",
    description:
      "Master the art of product photography to showcase your items effectively.",
    category: "Product Management",
    readTime: "10 min read",
    difficulty: "Intermediate",
    tags: ["photography", "images", "visual marketing"],
    sections: [
      {
        id: "first-image",
        title: "How to create an excellent first image",
        content: `
          <img src="https://p16-oec-university-sign-sg.ibyteimg.com/tos-alisg-i-nk3i2mqmvs-sg/f003009918964c619c30df4fca3db527~tplv-nk3i2mqmvs-image.png?x-expires=2016674693&x-signature=V%2FJR%2B2iB6FACe67Cj4n0sw0bavg%3D" alt="Image guidelines" style="max-width:100%; height:auto;" />
          <h3>Where first image is displayed</h3>
          <p>A few common areas it appears are:</p>
          <ul>
            <li>Product Details Page: <br /><img src="/assets/product-details.png" alt="product details" style="max-width:100%; height:auto; border-radius:8px; box-shadow:0 2px 8px rgba(0,0,0,0.1); margin-top: 5px;" /></li>
            <li>Product Listing Page: <br /><img src="/assets/product-listing.png" alt="product listing" style="max-width:100%; height:auto; border-radius:8px; box-shadow:0 2px 8px rgba(0,0,0,0.1); margin-top: 5px;" /></li>
            <li>Shopping Cart Page: <br /><img src="/assets/shopping-cart.png" alt="shopping cart" style="max-width:100%; height:auto; border-radius:8px; box-shadow:0 2px 8px rgba(0,0,0,0.1); margin-top: 5px;" /></li>
            <li>Checkout Page: <br /><img src="/assets/checkout.png" alt="checkout" style="max-width:100%; height:auto; border-radius:8px; box-shadow:0 2px 8px rgba(0,0,0,0.1); margin-top: 5px;" /></li>
          </ul>
        `,
      },
      {
        id: "composition-and-styling",
        title: "Tips for producing a premium first image",
        content: `
          <table cellpadding="8" cellspacing="0" style="border-collapse: collapse; width: 100%; border: 1px solid #777;">
      <thead>
        <tr>
          <th style="border: 1px solid #777; padding: 8px; text-align: left;">Tips</th>
          <th style="border: 1px solid #777; padding: 8px; text-align: left;">Examples</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="border: 1px solid #777; padding: 8px;">
            <strong>Background:</strong> You can choose one of the following to use:
            <ul>
              <li><strong>Option 1:</strong> Pure background — white or any other clean, solid-colored background</li>
              <li><strong>Option 2:</strong> Scene background — tidy and relevant, not messy or random</li>
              <li><strong>Option 3:</strong> Include product's unique selling point and main features in the image</li>
            </ul>
            <strong>Please Note:</strong> Images should be clear, high-quality, and relevant to the content.
            <ul>
              <li>When choosing product angles, the front angle is almost always the most preferable angle. </li>
              <li>Do not use collage image as main product image</li>
              <li>Make sure not to block the product with words</li>
              <li>Make sure to include the full image of the product</li>
              <li>Do not use images with watermarks or logos</li>
              <li>Use natural light from a large window when possible</li>
              <li>Avoid direct sunlight which creates harsh shadows</li>
              <li>Use a tripod to avoid camera shake</li>
            </ul>
          </td>
          <td style="border: 1px solid #777;">
            <div style="display: flex; justify-content:center; text-align: center; border-bottom: 1px solid #777; align-items: center; gap: 10px;">
              <div style="border-right: 1px solid #777; width: 100%; padding-right: 10px;"><img style="max-width: 100%; height: auto; width: 100%;" src="https://p16-oec-university-sign-sg.ibyteimg.com/tos-alisg-i-nk3i2mqmvs-sg/9de385e1269443eaaf747c3722ca86c6~tplv-nk3i2mqmvs-image.png?x-expires=2016675302&x-signature=bybyr%2BOF0MAJ4nFFJK4RQE9UgtM%3D" alt="Pure BG 1" /><br />✅ pure background</div>
              <div style="border-right: 1px solid #777; width: 100%; padding-right: 10px;"><img style="max-width: 100%; height: auto; width: 100%;" src="https://p16-oec-university-sign-sg.ibyteimg.com/tos-alisg-i-nk3i2mqmvs-sg/a6bd795861db49a4a9d53085f68a7424~tplv-nk3i2mqmvs-image.png?x-expires=2016675308&x-signature=rCU6VWa41oSIEcAwuuOsuBQQH1k%3D" alt="Pure BG 2" /><br />✅ pure background</div>
              <div style="width: 100%;"><img style="max-width: 100%; height: auto; width: 100%;" src="https://p16-oec-university-sign-sg.ibyteimg.com/tos-alisg-i-nk3i2mqmvs-sg/320f7ee1bdf04c01a548d6a6b7bd7c7a~tplv-nk3i2mqmvs-image.png?x-expires=2016675313&x-signature=1OExpeVEifC7KqH70f3%2B6qapsbA%3D" alt="Pure BG 3" /><br />✅ pure background</div>
            </div>
            <div style="display: flex; justify-content:center; text-align: center; border-bottom: 1px solid #777; align-items: center; gap: 10px;">
              <div style="border-right: 1px solid #777; width: 100%; padding-right: 10px;"><img style="max-width: 100%; height: auto; width: 100%;" src="https://p16-oec-university-sign-sg.ibyteimg.com/tos-alisg-i-nk3i2mqmvs-sg/c652c9b1278e4e7185e3bd4d641a709c~tplv-nk3i2mqmvs-image.png?x-expires=2016675318&x-signature=NSDNrpBMCaLhkekdLXpEW%2Bwc3e0%3D" alt="Scene BG 1" /><br />✅ scene background</div>
              <div style="border-right: 1px solid #777; width: 100%; padding-right: 10px;"><img style="max-width: 100%; height: auto; width: 100%;" src="https://p16-oec-university-sign-sg.ibyteimg.com/tos-alisg-i-nk3i2mqmvs-sg/e40cf522aa814fa8be99a7b12eacdf5b~tplv-nk3i2mqmvs-image.png?x-expires=2016675324&x-signature=wCFO9BqGAP1Ih9yYBLyfsl%2BlN6g%3D" alt="Scene BG 2" /><br />✅ scene background</div>
              <div style="width: 100%;"><img style="max-width: 100%; height: auto; width: 100%;" src="https://p16-oec-university-sign-sg.ibyteimg.com/tos-alisg-i-nk3i2mqmvs-sg/1d909bcd91ae4a4cb7769953d172cf4f~tplv-nk3i2mqmvs-image.png?x-expires=2016675329&x-signature=i4zk8GP%2FoGJKFyORQAdcjPkm0l4%3D" alt="Scene BG 3" /><br />✅ scene background</div>
            </div>
            <div style="display: flex; justify-content:center; text-align: center; align-items: center; gap: 10px;">
              <div style="border-right: 1px solid #777; width: 100%; padding-right: 10px;"><img style="max-width: 100%; height: auto; width: 100%;" src="https://p16-oec-university-sign-sg.ibyteimg.com/tos-alisg-i-nk3i2mqmvs-sg/835fa571b22b4527a8ab17b6b0782fd6~tplv-nk3i2mqmvs-image.png?x-expires=2016675335&x-signature=pUF0qPY%2FaC08Q%2FfsO5oVQIcdiJQ%3D" alt="unique selling point BG 1" /><br/>✅ Unique selling point and main feature</div>
              <div style="border-right: 1px solid #777; width: 100%; padding-right: 10px;"><img style="max-width: 100%; height: auto; width: 100%;" src="https://p16-oec-university-sign-sg.ibyteimg.com/tos-alisg-i-nk3i2mqmvs-sg/49bcfcc62edc42fc9ef3be5082468ba5~tplv-nk3i2mqmvs-image.png?x-expires=2016675340&x-signature=sgGNOfNp%2B0yOfvc%2B9HGLjde%2BUdg%3D" alt="unique selling point BG 2" /><br/>✅ Unique selling point and main feature</div>
              <div style="width: 100%;"><img style="max-width: 100%; height: auto; width: 100%;" src="https://p16-oec-university-sign-sg.ibyteimg.com/tos-alisg-i-nk3i2mqmvs-sg/8d85e222db3646c28e9ace8fd70623f3~tplv-nk3i2mqmvs-image.png?x-expires=2016675346&x-signature=sluiTMIgxd89yzHZfnooIUfzEOw%3D" alt="unique selling point BG 3" /><br/>✅ Unique selling point and main feature</div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
        `,
      },
      {
        id: "more-product-images",
        title: "How to create more product images",
        content: `
          <img src="https://p16-oec-university-sign-sg.ibyteimg.com/tos-alisg-i-nk3i2mqmvs-sg/c4c350c86b4048fdb2d740db3f160fd5~tplv-nk3i2mqmvs-image.png?x-expires=2016675599&x-signature=YJEhbkR9bcdFG3c%2BlWp0gGC%2F9vI%3D" alt="Image guidelines" style="max-width:100%; height:auto; margin-bottom: 10px" />
          <p>Good Images are Important for your product's listing success. Customers tend to not pay attention to products with low-quality images. So vice versa, good product images could be a great marketing asset for your shop and can set your product apart from other competitors. Poor quality images turn customers away. In an online store, the product image is one of your most valuable marketing tools. When customers browse product pages, often the image draws them to consider your product. In addition, with so many choices available for online purchases, a well-formed image can set your product apart from others. </p>
        `,
      },
      {
        id: "upload-limits",
        title: "Image and Video Upload Limits",
        content: `
    <table cellpadding="8" cellspacing="0" style="border-collapse: collapse; width: 100%; border: 1px solid #777;">
      <thead>
        <tr>
          <th style="border: 1px solid #777; padding: 8px; text-align: left;">Account Type</th>
          <th style="border: 1px solid #777; padding: 8px; text-align: left;">Upload Limits</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="border: 1px solid #777; padding: 8px;"><strong>Free Account</strong></td>
          <td style="border: 1px solid #777; padding: 8px;">
            Users can upload up to <strong>4 images</strong> per listing.
          </td>
        </tr>
        <tr>
          <td style="border: 1px solid #777; padding: 8px;"><strong>Pro Subscription</strong></td>
          <td style="border: 1px solid #777; padding: 8px;">
            Users can upload up to <strong>6 images</strong> and <strong>1 video</strong> per listing.<br/>
            <span style="color: #800020;">Note: Pro features are only available if the subscription is enabled for your seller account.</span>
          </td>
        </tr>
      </tbody>
    </table>
  `,
      },
    ],
  },
  {
    slug: "product-description-guidelines",
    title: "Product Description Guidelines",
    image: "/getting-started/15.png",
    description:
      "Learn how to create effective product descriptions that improve search visibility and attract customers.",
    category: "Product Management",
    readTime: "3 min read",
    difficulty: "Beginner",
    tags: [
      "product descriptions",
      "SEO",
      "best practices",
      "ecommerce",
      "copywriting",
      "content writing",
    ],
    sections: [
      {
        id: "how-to-create-readable-product-descriptions",
        title:
          "How to create a product description that is easy to read and understand ",
        content: `
        <b>👍 Tips:</b>
          <ul>
            <li><b>✅ Sufficient textual expression(≥ 500 characters):</b> Put yourself in your customer's shoes: what would they want to receive from a consumer sentiment perspective? Then incorporate your description with product benefits clearly lay out to resonate with your target audience. </li>
            <li><b>✅ Easy-to-read format:</b> Necessary punctuation ➕ Segmentation ➕ Highlighting with your text (bold/underline/serial number, etc.)</li>
            <li><b>✅ Contain images:</b> Try to create an experience as close to an in-store experience as you can. Make it as close as you can come to creating an in-store experience. </li>
            <li><b>✅ Use bullet points:</b> Break down complex information into digestible bullet points for better readability.</li>
            <li><b>✅ Include customer reviews:</b> Showcase positive feedback from customers to build trust and credibility.</li>
            <li><b>✅ Use high-quality images:</b> Ensure that images are clear, well-lit, and showcase the product from multiple angles.</li>
            <li><b>✅ Provide detailed specifications:</b> Include important product details such as dimensions, materials, and care instructions.</li>
          </ul>
        `,
      },
      {
        id: "sample-product-description",
        title: "Sample Product Description",
        content: `
          <h4>
            Here are some sample product descriptions that you can use as a reference:
          </h4>
          <table cellpadding="8" cellspacing="0" style="border-collapse: collapse; width: 100%; border: 1px solid #777;">
  <thead>
    <tr>
      <th style="width: 30%; text-align: left; border: 1px solid #777; padding: 8px;">Content Suggestion</th>
      <th style="width: 70%; text-align: left; border: 1px solid #777; padding: 8px;">Examples</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="border: 1px solid #777; padding: 8px;">
        <strong>✅ Attribute detailed description (material, design, fit, style, washing instruction etc.)</strong>
      </td>
      <td style="border: 1px solid #777;">
        <div style="display: flex; align-items: center;">
        <img src="https://p16-oec-university-sign-sg.ibyteimg.com/tos-alisg-i-nk3i2mqmvs-sg/d6534ffc24ba4a2383a9a654462bd256~tplv-nk3i2mqmvs-image.png?x-expires=2016676953&x-signature=0qEKAGmlUwfRB9hw6GzS9eJ2cRg%3D" alt="Image guidelines" style="width: 100%; object-fit: cover; height:200px; margin-bottom: 10px" />
        <img src="https://p16-oec-university-sign-sg.ibyteimg.com/tos-alisg-i-nk3i2mqmvs-sg/ca5910afaafb4eccaffcab158e490f7a~tplv-nk3i2mqmvs-image.png?x-expires=2016676953&x-signature=ANwaRUA%2BXIhmaAkT3ieXB5W%2BEgs%3D" alt="Image guidelines" style="width: 100%; object-fit: cover; height:200px; margin-bottom: 10px" />
        <img src="https://p16-oec-university-sign-sg.ibyteimg.com/tos-alisg-i-nk3i2mqmvs-sg/c629b5c9470a4d42bd4f687e91887ded~tplv-nk3i2mqmvs-image.png?x-expires=2016676952&x-signature=KnCFQkLiQwLpx9ch%2BAhj2mQqFis%3D" alt="Image guidelines" style="width: 100%; object-fit: cover; height:200px; margin-bottom: 10px" />
        </div>
      </td>
    </tr>
        <tr>
      <td style="border: 1px solid #777; padding: 8px;">
        <strong>✅ Model display or Collocation guide</strong>
      </td>
      <td style="border: 1px solid #777;">
        <div style="display: flex; align-items: center;">
        <img src="https://p16-oec-university-sign-sg.ibyteimg.com/tos-alisg-i-nk3i2mqmvs-sg/b9725e98bd7841fba2d64977b7e74afe~tplv-nk3i2mqmvs-image.png?x-expires=2016676997&x-signature=KCuK%2BFG%2FNlpQSBLnAtXiqkx7K4w%3D" alt="Image guidelines" style="width: 100%; object-fit: cover; height:200px; margin-bottom: 10px" />
        <img src="https://p16-oec-university-sign-sg.ibyteimg.com/tos-alisg-i-nk3i2mqmvs-sg/98e00d81a3ae427d95bae62d988d936c~tplv-nk3i2mqmvs-image.png?x-expires=2016676997&x-signature=PK9yqrOwtVYgPZprIieqIoxNRUM%3D" alt="Image guidelines" style="width: 100%; object-fit: cover; height:200px; margin-bottom: 10px" />
        </div>
      </td>
    </tr>
    <tr>
      <td style="border: 1px solid #777; padding: 8px;">
        <strong>✅ Feature or function display</strong>
      </td>
      <td style="border: 1px solid #777;">
        <div style="display: flex; align-items: center;">
        <img src="https://p16-oec-university-sign-sg.ibyteimg.com/tos-alisg-i-nk3i2mqmvs-sg/c176030ef8b349119f9daeef0262679a~tplv-nk3i2mqmvs-image.png?x-expires=2016677232&x-signature=bcL2E34tDLpiZQYGQpEZQ0HgG8I%3D" alt="Image guidelines" style="width: 100%; object-fit: cover; height:200px; margin-bottom: 10px" />
        <img src="https://p16-oec-university-sign-sg.ibyteimg.com/tos-alisg-i-nk3i2mqmvs-sg/a2c0719446bf4475992fdb01515b69e7~tplv-nk3i2mqmvs-image.png?x-expires=2016677233&x-signature=L2EYH11Nprp3u5NAErKTA0t%2FIxQ%3D" alt="Image guidelines" style="width: 100%; object-fit: cover; height:200px; margin-bottom: 10px" />
        </div>
      </td>
    </tr>
  </tbody>
</table>
        `,
      },
    ],
  },
  {
    slug: "product-attribute-guidelines",
    title: "Product Attribute Guidelines",
    image: "/getting-started/16.png",
    description:
      "Learn how to create effective product attributes that improve search visibility and attract customers.",
    category: "Product Management",
    readTime: "3 min read",
    difficulty: "Beginner",
    tags: [
      "product attributes",
      "SEO",
      "best practices",
      "ecommerce",
      "copywriting",
      "content writing",
      "product information",
    ],
    sections: [
      {
        id: "filling-in-product-attributes",
        title: "Filling in Product Attributes",
        content: `
        <h3>Where Product Attributes are Displayed</h3>
        <p>A few common areas variations will appear are:</p>
          <img src="/assets/product-attributes-display.png" alt="Product attributes" style="max-width:100%; height:auto; margin-bottom: 10px" />
          <img src="/assets/product-attributes-display-2.png" alt="Product attributes" style="max-width:100%; height:auto;" />
        `,
      },
      {
        id: "register-mandatory-product-attributes",
        title: "Register Mandatory Product Attributes For Your Product",
        content: `
          <p>
            In the Product Attributes section, you will see the suggested attributes detail for your products based on the product name and category you have input on the previous step. You can choose whether to use the suggested attributes or add a custom attribute value that you think is more suitable for your product by entering the attribute manually and clicking the Add button.
          </p>
        `,
      },
      {
        id: "creating-product-variations",
        title: "Creating product variations",
        content: `
          <p>
            ✅ For certain categories. We would suggest adding a different image for each color variation to enhance visual appeal and help customers make informed choices.
          </p>
          <p>
            ✅ Use contrast background image that can help make your product variant color stand out!
          </p>
          <img src="https://p16-oec-university-sign-sg.ibyteimg.com/tos-alisg-i-nk3i2mqmvs-sg/4adba5bd71d447d3980bd773a877b3c5~tplv-nk3i2mqmvs-image.png?x-expires=2016687974&x-signature=IYfpEbppk%2BsWPRGYnDfJRGYLknw%3D" alt="Product variant color" style="max-width:100%; height:auto;" />
          <h3>We have provided tools that will help you generate product attributes for your product in a quick and simple way.</h3>
          <p>You can choose whatever variants you want to create. You can also add a variant manually if there is no suitable option available.</p>
          <img src="/assets/product-variants.png" alt="Product variant color" style="max-width:100%; height:auto;" />
        `,
      },
    ],
  },
  {
    slug: "product-management",
    title: "Managing Your Products",
    image: "/getting-started/17.png",
    description:
      "Learn how to add, edit, and optimize your product listings for maximum visibility.",
    category: "Product Management",
    readTime: "15 min read",
    difficulty: "Beginner",
    tags: ["products", "listings", "optimization"],
    sections: [
      {
        id: "adding-products",
        title: "Adding New Products",
        content: `
          <p>Adding products to your store is straightforward with our intuitive product management system.</p>
          <h4>Product Information Required:</h4>
          <ul>
            <li><strong>Product title:</strong> Clear, descriptive, and keyword-rich (max 120 characters)</li>
            <li><strong>Detailed description:</strong> Comprehensive product information (500-2000 characters)</li>
            <li><strong>High-quality images:</strong> Minimum 800x800px, maximum 10 images per product</li>
            <li><strong>Price and inventory:</strong> Competitive pricing with accurate stock levels</li>
            <li><strong>Product category:</strong> Accurate categorization for better discoverability</li>
            <li><strong>Product attributes:</strong> Size, color, material, brand, etc.</li>
            <li><strong>Shipping information:</strong> Weight, dimensions, shipping class</li>
          </ul>
          <h4>Step-by-Step Product Addition:</h4>
          <ol>
            <li>Navigate to Products → Add New Product</li>
            <li>Select the appropriate product category</li>
            <li>Fill in basic product information</li>
            <li>Upload product images (main image + additional angles)</li>
            <li>Set pricing and inventory details</li>
            <li>Configure shipping settings</li>
            <li>Add product variations (if applicable)</li>
            <li>Preview and publish your listing</li>
          </ol>
          <h4>Best Practices for Product Titles:</h4>
          <ul>
            <li>Include brand name, product type, and key features</li>
            <li>Use relevant keywords that customers search for</li>
            <li>Avoid excessive capitalization or special characters</li>
            <li>Be specific about size, color, or model when applicable</li>
          </ul>
        `,
      },
      {
        id: "product-optimization",
        title: "Optimizing Product Listings",
        content: `
          <p>Well-optimized product listings are crucial for visibility and sales success.</p>
          <h4>SEO Optimization Strategies:</h4>
          <ul>
            <li><strong>Keyword Research:</strong> Use tools to find relevant search terms</li>
            <li><strong>Title Optimization:</strong> Include primary keywords naturally</li>
            <li><strong>Description Enhancement:</strong> Write detailed, benefit-focused descriptions</li>
            <li><strong>Category Selection:</strong> Choose the most specific relevant category</li>
            <li><strong>Attribute Completion:</strong> Fill all relevant product attributes</li>
          </ul>
          <h4>Image Optimization Guidelines:</h4>
          <ul>
            <li><strong>Main Image:</strong> Clean, white background, product centered</li>
            <li><strong>Additional Images:</strong> Show different angles, details, lifestyle shots</li>
            <li><strong>Image Quality:</strong> High resolution, good lighting, sharp focus</li>
            <li><strong>File Format:</strong> JPEG or PNG, optimized file size</li>
            <li><strong>Consistency:</strong> Maintain consistent style across all images</li>
          </ul>
          <h4>Pricing Strategies:</h4>
          <ul>
            <li>Research competitor pricing</li>
            <li>Consider your costs and desired profit margin</li>
            <li>Use psychological pricing techniques</li>
            <li>Offer competitive shipping rates</li>
            <li>Consider bundle pricing for related items</li>
          </ul>
          <h4>Performance Monitoring:</h4>
          <p>Track these metrics to optimize your listings:</p>
          <ul>
            <li>Click-through rate (CTR)</li>
            <li>Conversion rate</li>
            <li>Search ranking position</li>
            <li>Customer reviews and ratings</li>
            <li>Return rate</li>
          </ul>
          <h4>Watch the Walkthrough:</h4>
        <p>Here’s a quick preview of how to create a new product:</p>
        <video src="/gifs/07.mp4" alt="Create new product" style="max-width:100%; height:auto; border-radius:8px; box-shadow:0 2px 8px rgba(0,0,0,0.1);" playsinline controls></video>
        `,
      },
      {
        id: "inventory-management",
        title: "Inventory Management",
        content: `
          <p>Effective inventory management ensures you never oversell and maintains customer satisfaction.</p>
          <h4>Inventory Management Features:</h4>
          <ul>
            <li><strong>Real-time tracking:</strong> Automatic inventory updates with each sale</li>
            <li><strong>Low stock alerts:</strong> Customizable notifications when stock runs low</li>
            <li><strong>Bulk updates:</strong> Update multiple products simultaneously</li>
            <li><strong>Inventory history:</strong> Track stock movements and changes</li>
            <li><strong>Forecasting tools:</strong> Predict future inventory needs</li>
          </ul>
          <h4>Best Practices:</h4>
          <ul>
            <li>Set up low stock alerts at appropriate levels</li>
            <li>Regularly audit your physical inventory</li>
            <li>Use ABC analysis to prioritize high-value items</li>
            <li>Implement first-in-first-out (FIFO) for perishables</li>
            <li>Plan for seasonal demand fluctuations</li>
          </ul>
          <h4>Inventory Optimization Strategies:</h4>
          <ul>
            <li><strong>Safety Stock:</strong> Maintain buffer inventory for popular items</li>
            <li><strong>Reorder Points:</strong> Set automatic reorder triggers</li>
            <li><strong>Supplier Management:</strong> Maintain good relationships with suppliers</li>
            <li><strong>Demand Forecasting:</strong> Use historical data to predict future needs</li>
          </ul>
        `,
      },
    ],
  },

  // Order Management Category
  {
    slug: "order-fulfillment",
    title: "Order Fulfillment Process",
    description:
      "Understand how to process orders, manage shipping, and handle customer communications.",
    category: "Order Management",
    readTime: "12 min read",
    difficulty: "Beginner",
    tags: ["orders", "shipping", "fulfillment"],
    sections: [
      {
        id: "order-processing",
        title: "Processing Orders",
        content: `
          <p>Efficient order processing is key to customer satisfaction and positive reviews.</p>
          <h4>Order Workflow:</h4>
          <ol>
            <li><strong>Order Notification:</strong> Receive instant notifications via email/SMS</li>
            <li><strong>Order Review:</strong> Check order details and customer information</li>
            <li><strong>Inventory Confirmation:</strong> Verify product availability</li>
            <li><strong>Order Acceptance:</strong> Confirm the order within 24 hours</li>
            <li><strong>Preparation:</strong> Pick, pack, and prepare items for shipping</li>
            <li><strong>Shipping Label:</strong> Generate and print shipping labels</li>
            <li><strong>Dispatch:</strong> Hand over to courier or ship directly</li>
            <li><strong>Tracking Update:</strong> Provide tracking information to customer</li>
          </ol>
          <h4>Neighborhood Speed Promise:</h4>
<ul>
  <li><strong>Instant Order Confirmation:</strong> Automated e-mail receipt within 5 minutes</li>
  <li><strong>Rider Dispatch:</strong> Typically within 15-30 minutes</li>
  <li><strong>Delivery Completion:</strong> 90% of orders delivered in under 2 hours</li>
  <li><strong>Urgent Requests:</strong> "Flash Delivery" option (30-minute guarantee)</li>
</ul>
          <h4>Order Management Tools:</h4>
          <ul>
            <li>Bulk order processing for efficiency</li>
            <li>Order filtering and sorting options</li>
            <li>Automated status updates</li>
            <li>Integration with shipping partners</li>
          </ul>
        `,
      },
      {
        id: "shipping-guidelines",
        title: "Community Delivery Guidelines",
        content: `
    <p>Our neighborhood delivery system ensures lightning-fast deliveries while keeping money in our community.</p>

    <h4>Hyperlocal Packaging Requirements:</h4>
    <ul>
      <li><strong>Ready in Minutes:</strong> Packages should be prepped within 30 minutes of order</li>
      <li><strong>Simple Protection:</strong> Basic cushioning for short-distance trips</li>
      <li><strong>Community Branding:</strong> Include local business stickers or notes</li>
      <li><strong>Clear Labels:</strong> Handwritten labels accepted for local deliveries</li>
      <li><strong>Weather Ready:</strong> Water-resistant wrapping for rainy days</li>
    </ul>

    <h4>Community Delivery Options:</h4>
    <ul>
      <li><strong>Flash Delivery:</strong> Within 1 hour (neighborhood only)</li>
      <li><strong>Standard Local:</strong> 2-4 hour delivery window</li>
      <li><strong>Evening Delivery:</strong> After-work deliveries until 9pm</li>
      <li><strong>Bicycle Express:</strong> Eco-friendly delivery under 30 minutes (1km radius)</li>
      <li><strong>Cash on Delivery:</strong> Handled by your trusted local rider</li>
    </ul>

    <h4>Neighborhood Packaging Tips:</h4>
    <ul>
      <li>Reuse packaging materials to keep costs low</li>
      <li>Smaller packages preferred for motorcycle/bike delivery</li>
      <li>Include handwritten thank-you notes from local businesses</li>
      <li>Perishable items get priority routing</li>
      <li>Coordinate with riders for bulky item pickup</li>
    </ul>

    <p class="community-note">Remember: Our riders are your neighbors - packages often move directly from your hands to the customer's doorstep within the hour!</p>
  `,
      },
      {
        id: "shipping-partners",
        title: "Community Delivery Network",
        content: `
    <p>Our hyperlocal delivery system empowers neighborhood riders while supporting your business needs.</p>

    <h4>Our Community Delivery Model:</h4>
    <ul>
      <li><strong>Local Rider Network:</strong> We partner with trusted motorcycle and bicycle riders from within your community</li>
      <li><strong>Same-Day Delivery:</strong> Fast neighborhood deliveries, often within hours</li>
      <li><strong>Eco-Friendly Options:</strong> Bicycle delivery available for nearby orders</li>
      <li><strong>Fair Earnings:</strong> 100% of delivery fees go directly to local riders</li>
      <li><strong>Personalized Service:</strong> Riders familiar with your local area</li>
    </ul>

    <h4>Extended Network Partners (for non-local shipments):</h4>
    <ul>
      <li><strong>Local Couriers:</strong> Selected regional partners for wider coverage</li>
      <li><strong>Community Hubs:</strong> Network of neighborhood pickup points</li>
    </ul>

    <h4>Benefits of Our Community Delivery:</h4>
    <ul>
      <li>Support local economy - your deliveries create neighborhood jobs</li>
      <li>Lower carbon footprint with bicycle and motorcycle deliveries</li>
      <li>Personal relationships between riders, businesses, and customers</li>
      <li>Flexible delivery windows that work for your community</li>
      <li>Cash-on-delivery handled by trusted local riders</li>
    </ul>
  `,
      },
    ],
  },
  {
    slug: "customer-service",
    title: "Customer Service Excellence",
    description:
      "Provide outstanding customer service to build loyalty and positive reviews.",
    category: "Order Management",
    readTime: "18 min read",
    difficulty: "Intermediate",
    tags: ["customer service", "communication", "support"],
    sections: [
      {
        id: "communication-best-practices",
        title: "Communication Best Practices",
        content: `
          <p>Excellent communication builds trust and customer loyalty.</p>
          <h4>Response Time Standards:</h4>
          <ul>
            <li>Initial response: Within 2 hours during business hours</li>
            <li>Order inquiries: Within 1 hour</li>
            <li>Complaints: Within 30 minutes</li>
            <li>General questions: Within 4 hours</li>
          </ul>
          <h4>Communication Channels:</h4>
          <ul>
            <li>In-platform messaging system</li>
            <li>Email support</li>
            <li>Phone support (for premium sellers)</li>
            <li>Social media channels</li>
          </ul>
          <h4>Professional Communication Tips:</h4>
          <ul>
            <li>Use polite and professional language</li>
            <li>Address customers by name when possible</li>
            <li>Provide clear and detailed responses</li>
            <li>Follow up on resolved issues</li>
            <li>Maintain consistent tone across all channels</li>
          </ul>
        `,
      },
      {
        id: "handling-complaints",
        title: "Handling Customer Complaints",
        content: `
          <p>Turn complaints into opportunities to demonstrate excellent service.</p>
          <h4>Complaint Resolution Process:</h4>
          <ol>
            <li><strong>Listen:</strong> Allow customer to fully explain the issue</li>
            <li><strong>Acknowledge:</strong> Show understanding and empathy</li>
            <li><strong>Investigate:</strong> Gather all relevant information</li>
            <li><strong>Resolve:</strong> Offer appropriate solution</li>
            <li><strong>Follow-up:</strong> Ensure customer satisfaction</li>
          </ol>
          <h4>Common Complaint Types:</h4>
          <ul>
            <li>Product quality issues</li>
            <li>Shipping delays</li>
            <li>Wrong items received</li>
            <li>Damaged products</li>
            <li>Billing discrepancies</li>
          </ul>
        `,
      },
    ],
  },

  // Marketing Category
  {
    slug: "marketing-promotion",
    title: "Marketing & Promotion",
    description:
      "Learn how to promote your products and increase sales through various marketing tools.",
    category: "Marketing",
    readTime: "18 min read",
    difficulty: "Intermediate",
    tags: ["marketing", "promotion", "advertising"],
    sections: [
      {
        id: "promotional-tools",
        title: "Available Promotional Tools",
        content: `
          <p>Boost your sales with our comprehensive marketing tools and features.</p>
          <h4>Platform Promotion Types:</h4>
          <ul>
            <li><strong>Flash Sales:</strong> Time-limited discounts to create urgency</li>
            <li><strong>Volume Discounts:</strong> Buy-more-save-more offers</li>
            <li><strong>Free Shipping:</strong> Absorb shipping costs to attract buyers</li>
            <li><strong>Bundle Deals:</strong> Package related products together</li>
            <li><strong>Seasonal Promotions:</strong> Holiday and event-based sales</li>
            <li><strong>New Customer Discounts:</strong> First-time buyer incentives</li>
          </ul>
          <h4>Promotional Calendar Planning:</h4>
          <ul>
            <li>Plan promotions around major shopping events</li>
            <li>Coordinate with inventory levels</li>
            <li>Set clear start and end dates</li>
            <li>Monitor performance and adjust accordingly</li>
          </ul>
          <h4>Best Times for Promotions:</h4>
          <ul>
            <li>Payday periods (15th and 30th of the month)</li>
            <li>Major holidays and festivals</li>
            <li>Back-to-school season</li>
            <li>Christmas shopping season</li>
            <li>Valentine's Day and Mother's Day</li>
          </ul>
        `,
      },
      {
        id: "seo-tips",
        title: "SEO and Visibility Tips",
        content: `
          <p>Improve your product visibility with these SEO best practices.</p>
          <h4>On-Platform SEO Strategies:</h4>
          <ul>
            <li><strong>Keyword Optimization:</strong> Use relevant search terms in titles and descriptions</li>
            <li><strong>Category Selection:</strong> Choose the most specific relevant category</li>
            <li><strong>Complete Profiles:</strong> Fill out all product attributes and seller information</li>
            <li><strong>High-Quality Images:</strong> Use clear, attractive product photos</li>
            <li><strong>Competitive Pricing:</strong> Price products competitively within your category</li>
          </ul>
          <h4>Ranking Factors:</h4>
          <ul>
            <li>Sales performance and conversion rate</li>
            <li>Customer reviews and ratings</li>
            <li>Product listing completeness</li>
            <li>Seller performance metrics</li>
            <li>Inventory availability</li>
          </ul>
          <h4>Content Optimization:</h4>
          <ul>
            <li>Write detailed, benefit-focused descriptions</li>
            <li>Include relevant keywords naturally</li>
            <li>Use bullet points for easy scanning</li>
            <li>Highlight unique selling propositions</li>
            <li>Include size charts and specifications</li>
          </ul>
        `,
      },
      {
        id: "social-media-marketing",
        title: "Social Media Marketing",
        content: `
          <p>Leverage social media to drive traffic and sales to your store.</p>
          <h4>Platform-Specific Strategies:</h4>
          <ul>
            <li><strong>Facebook:</strong> Create business page, join relevant groups, use Facebook Marketplace</li>
            <li><strong>Instagram:</strong> Visual storytelling, product showcases, influencer partnerships</li>
            <li><strong>TikTok:</strong> Creative product videos, trending challenges, viral content</li>
            <li><strong>YouTube:</strong> Product reviews, tutorials, unboxing videos</li>
          </ul>
          <h4>Content Ideas:</h4>
          <ul>
            <li>Behind-the-scenes content</li>
            <li>Customer testimonials and reviews</li>
            <li>Product demonstrations</li>
            <li>Styling tips and tutorials</li>
            <li>User-generated content</li>
          </ul>
        `,
      },
    ],
  },
  {
    slug: "advertising-campaigns",
    title: "Advertising Campaigns",
    description:
      "Create effective advertising campaigns to boost product visibility and sales.",
    category: "Marketing",
    readTime: "25 min read",
    difficulty: "Advanced",
    tags: ["advertising", "campaigns", "PPC"],
    sections: [
      {
        id: "campaign-types",
        title: "Types of Advertising Campaigns",
        content: `
          <p>Choose the right advertising format for your business goals.</p>
          <h4>Available Campaign Types:</h4>
          <ul>
            <li><strong>Sponsored Products:</strong> Promote individual products in search results</li>
            <li><strong>Sponsored Brands:</strong> Showcase your brand and product portfolio</li>
            <li><strong>Display Ads:</strong> Visual banner advertisements across the platform</li>
            <li><strong>Video Ads:</strong> Engaging video content to showcase products</li>
          </ul>
          <h4>Campaign Objectives:</h4>
          <ul>
            <li>Increase product visibility</li>
            <li>Drive traffic to your store</li>
            <li>Boost sales and conversions</li>
            <li>Build brand awareness</li>
            <li>Launch new products</li>
          </ul>
        `,
      },
      {
        id: "campaign-optimization",
        title: "Campaign Optimization",
        content: `
          <p>Optimize your campaigns for better performance and ROI.</p>
          <h4>Key Metrics to Monitor:</h4>
          <ul>
            <li>Click-through rate (CTR)</li>
            <li>Conversion rate</li>
            <li>Cost per click (CPC)</li>
            <li>Return on ad spend (ROAS)</li>
            <li>Impression share</li>
          </ul>
          <h4>Optimization Strategies:</h4>
          <ul>
            <li>A/B test ad creatives and copy</li>
            <li>Adjust bidding strategies based on performance</li>
            <li>Refine targeting parameters</li>
            <li>Optimize landing pages for conversions</li>
            <li>Schedule ads for peak performance times</li>
          </ul>
        `,
      },
    ],
  },

  // Analytics Category
  {
    slug: "analytics-reporting",
    title: "Analytics & Reporting",
    description:
      "Track your performance and make data-driven decisions with our analytics tools.",
    category: "Analytics",
    readTime: "14 min read",
    difficulty: "Intermediate",
    tags: ["analytics", "reporting", "data"],
    sections: [
      {
        id: "dashboard-overview",
        title: "Dashboard Overview",
        content: `
          <p>Your seller dashboard provides comprehensive insights into your business performance.</p>
          <h4>Key Performance Indicators (KPIs):</h4>
          <ul>
            <li><strong>Total Sales:</strong> Revenue generated over selected time period</li>
            <li><strong>Order Volume:</strong> Number of orders received and processed</li>
            <li><strong>Average Order Value:</strong> Average amount spent per order</li>
            <li><strong>Conversion Rate:</strong> Percentage of visitors who make a purchase</li>
            <li><strong>Customer Acquisition Cost:</strong> Cost to acquire each new customer</li>
            <li><strong>Return Rate:</strong> Percentage of products returned</li>
          </ul>
          <h4>Dashboard Sections:</h4>
          <ul>
            <li><strong>Sales Overview:</strong> Revenue trends and comparisons</li>
            <li><strong>Order Management:</strong> Order status and fulfillment metrics</li>
            <li><strong>Product Performance:</strong> Best and worst performing products</li>
            <li><strong>Customer Insights:</strong> Customer behavior and demographics</li>
            <li><strong>Traffic Analysis:</strong> Visitor sources and engagement</li>
          </ul>
          <h4>Customizable Reports:</h4>
          <ul>
            <li>Date range selection</li>
            <li>Product category filtering</li>
            <li>Geographic segmentation</li>
            <li>Customer segment analysis</li>
            <li>Export capabilities (PDF, Excel)</li>
          </ul>
        `,
      },
      {
        id: "performance-metrics",
        title: "Understanding Performance Metrics",
        content: `
          <p>Learn how to interpret key performance indicators to improve your business.</p>
          <h4>Sales Metrics:</h4>
          <ul>
            <li><strong>Revenue Growth:</strong> Month-over-month and year-over-year growth rates</li>
            <li><strong>Profit Margins:</strong> Gross and net profit calculations</li>
            <li><strong>Sales Velocity:</strong> How quickly products sell</li>
            <li><strong>Seasonal Trends:</strong> Identifying peak and low seasons</li>
          </ul>
          <h4>Customer Metrics:</h4>
          <ul>
            <li><strong>Customer Lifetime Value (CLV):</strong> Total value of a customer relationship</li>
            <li><strong>Repeat Purchase Rate:</strong> Percentage of customers who buy again</li>
            <li><strong>Customer Satisfaction Score:</strong> Based on reviews and ratings</li>
            <li><strong>Churn Rate:</strong> Rate at which customers stop buying</li>
          </ul>
          <h4>Operational Metrics:</h4>
          <ul>
            <li><strong>Order Fulfillment Time:</strong> Time from order to shipment</li>
            <li><strong>Inventory Turnover:</strong> How quickly inventory sells</li>
            <li><strong>Return Processing Time:</strong> Efficiency of return handling</li>
            <li><strong>Customer Service Response Time:</strong> Speed of customer support</li>
          </ul>
        `,
      },
      {
        id: "data-driven-decisions",
        title: "Making Data-Driven Decisions",
        content: `
          <p>Use analytics insights to make informed business decisions.</p>
          <h4>Inventory Management Decisions:</h4>
          <ul>
            <li>Identify fast-moving vs. slow-moving products</li>
            <li>Optimize stock levels based on demand patterns</li>
            <li>Plan for seasonal inventory needs</li>
            <li>Discontinue underperforming products</li>
          </ul>
          <h4>Pricing Strategy Decisions:</h4>
          <ul>
            <li>Analyze price elasticity of demand</li>
            <li>Compare performance at different price points</li>
            <li>Identify optimal discount levels</li>
            <li>Monitor competitor pricing trends</li>
          </ul>
          <h4>Marketing Optimization:</h4>
          <ul>
            <li>Identify most effective marketing channels</li>
            <li>Optimize ad spend allocation</li>
            <li>Target high-value customer segments</li>
            <li>Improve conversion funnel performance</li>
          </ul>
        `,
      },
    ],
  },
  {
    slug: "financial-management",
    title: "Financial Management",
    description:
      "Manage your finances, understand fees, and optimize profitability.",
    category: "Analytics",
    readTime: "16 min read",
    difficulty: "Intermediate",
    tags: ["finance", "fees", "profitability"],
    sections: [
      {
        id: "fee-structure",
        title: "Understanding Fee Structure",
        content: `
          <p>Understand all fees associated with selling on our platform.</p>
          <h4>Platform Fees:</h4>
          <ul>
            <li><strong>Commission Fee:</strong> 2-8% of sale price (varies by category)</li>
            <li><strong>Payment Processing:</strong> 2.9% + ₱15 per transaction</li>
            <li><strong>Advertising Fees:</strong> Variable based on campaign performance</li>
            <li><strong>Premium Features:</strong> Optional subscription fees</li>
          </ul>
          <h4>Additional Costs:</h4>
          <ul>
            <li>Shipping costs (if not absorbed)</li>
            <li>Packaging materials</li>
            <li>Return processing fees</li>
            <li>Chargeback fees (if applicable)</li>
          </ul>
        `,
      },
      {
        id: "profit-optimization",
        title: "Profit Optimization",
        content: `
          <p>Strategies to maximize your profitability on the platform.</p>
          <h4>Cost Management:</h4>
          <ul>
            <li>Negotiate better supplier terms</li>
            <li>Optimize packaging costs</li>
            <li>Reduce return rates through better descriptions</li>
            <li>Improve operational efficiency</li>
          </ul>
          <h4>Revenue Enhancement:</h4>
          <ul>
            <li>Increase average order value through bundles</li>
            <li>Implement dynamic pricing strategies</li>
            <li>Expand product lines</li>
            <li>Improve conversion rates</li>
          </ul>
        `,
      },
    ],
  },

  // Policies Category
  {
    slug: "seller-policies",
    title: "Seller Policies & Guidelines",
    description:
      "Important policies, terms, and guidelines that all sellers must follow.",
    category: "Policies",
    readTime: "20 min read",
    difficulty: "Beginner",
    tags: ["policies", "guidelines", "compliance"],
    sections: [
      {
        id: "community-guidelines",
        title: "Community Guidelines",
        content: `
          <p>Our community guidelines ensure a safe and trustworthy marketplace for all users.</p>
          <h4>Prohibited Items:</h4>
          <ul>
            <li><strong>Counterfeit Products:</strong> Fake or replica branded items</li>
            <li><strong>Illegal Items:</strong> Items prohibited by Philippine law</li>
            <li><strong>Hazardous Materials:</strong> Dangerous chemicals, explosives, etc.</li>
            <li><strong>Adult Content:</strong> Sexually explicit materials</li>
            <li><strong>Weapons:</strong> Firearms, knives, and other weapons</li>
            <li><strong>Prescription Drugs:</strong> Medications requiring prescriptions</li>
            <li><strong>Live Animals:</strong> Pets and livestock</li>
          </ul>
          <h4>Seller Conduct Standards:</h4>
          <ul>
            <li>Maintain professional communication at all times</li>
            <li>Provide accurate product information and descriptions</li>
            <li>Respond promptly to customer inquiries</li>
            <li>Honor all stated policies and guarantees</li>
            <li>Respect intellectual property rights</li>
            <li>Comply with all applicable laws and regulations</li>
          </ul>
          <h4>Consequences of Violations:</h4>
          <ul>
            <li>Warning notifications</li>
            <li>Product listing removal</li>
            <li>Account suspension</li>
            <li>Permanent account termination</li>
            <li>Legal action (for serious violations)</li>
          </ul>
        `,
      },
      {
        id: "return-policy",
        title: "Return and Refund Policy",
        content: `
          <p>Understanding our return policy helps you manage customer expectations and handle returns effectively.</p>
          <h4>Return Eligibility:</h4>
          <ul>
            <li>Items must be returned within 7 days of delivery</li>
            <li>Products must be in original, unused condition</li>
            <li>Original packaging and tags must be intact</li>
            <li>Return reason must be valid (defective, wrong item, etc.)</li>
          </ul>
          <h4>Return Process:</h4>
          <ol>
            <li>Customer initiates return request through platform</li>
            <li>Seller reviews and approves/denies request</li>
            <li>Return shipping label is generated (if approved)</li>
            <li>Customer ships item back to seller</li>
            <li>Seller inspects returned item</li>
            <li>Refund is processed within 3 business days</li>
          </ol>
          <h4>Refund Responsibilities:</h4>
          <ul>
            <li><strong>Seller Fault:</strong> Seller pays return shipping and full refund</li>
            <li><strong>Customer Fault:</strong> Customer pays return shipping</li>
            <li><strong>Defective Items:</strong> Full refund including original shipping</li>
            <li><strong>Change of Mind:</strong> Refund minus return shipping cost</li>
          </ul>
          <h4>Non-Returnable Items:</h4>
          <ul>
            <li>Perishable goods (food, flowers)</li>
            <li>Personalized or customized items</li>
            <li>Intimate or sanitary goods</li>
            <li>Digital downloads</li>
            <li>Items damaged by customer misuse</li>
          </ul>
        `,
      },
      {
        id: "intellectual-property",
        title: "Intellectual Property Rights",
        content: `
          <p>Respect intellectual property rights and avoid infringement issues.</p>
          <h4>Types of Intellectual Property:</h4>
          <ul>
            <li><strong>Trademarks:</strong> Brand names, logos, slogans</li>
            <li><strong>Copyrights:</strong> Creative works, images, text</li>
            <li><strong>Patents:</strong> Inventions and unique designs</li>
            <li><strong>Trade Dress:</strong> Product appearance and packaging</li>
          </ul>
          <h4>Avoiding Infringement:</h4>
          <ul>
            <li>Only sell authentic, authorized products</li>
            <li>Use your own product photos and descriptions</li>
            <li>Don't use branded keywords for non-branded products</li>
            <li>Obtain proper licensing for branded merchandise</li>
            <li>Respect copyright in product descriptions and images</li>
          </ul>
          <h4>Reporting Infringement:</h4>
          <p>If you believe your intellectual property rights are being violated:</p>
          <ol>
            <li>Document the infringement with screenshots</li>
            <li>Submit a formal complaint through our IP portal</li>
            <li>Provide proof of ownership or authorization</li>
            <li>Allow 5-7 business days for investigation</li>
          </ol>
        `,
      },
    ],
  },
  {
    slug: "compliance-legal",
    title: "Compliance and Legal Requirements",
    description:
      "Understand legal requirements and compliance obligations for sellers.",
    category: "Policies",
    readTime: "22 min read",
    difficulty: "Advanced",
    tags: ["compliance", "legal", "regulations"],
    sections: [
      {
        id: "business-registration",
        title: "Business Registration Requirements",
        content: `
          <p>Ensure your business is properly registered and compliant with Philippine laws.</p>
          <h4>Required Registrations:</h4>
          <ul>
            <li><strong>DTI Registration:</strong> For sole proprietorships</li>
            <li><strong>SEC Registration:</strong> For corporations and partnerships</li>
            <li><strong>BIR Registration:</strong> Tax identification number (TIN)</li>
            <li><strong>Local Business Permit:</strong> From your city/municipality</li>
            <li><strong>SSS/PhilHealth/Pag-IBIG:</strong> For businesses with employees</li>
          </ul>
          <h4>Tax Obligations:</h4>
          <ul>
            <li>Income tax filing and payment</li>
            <li>VAT registration (if applicable)</li>
            <li>Withholding tax compliance</li>
            <li>Quarterly and annual tax returns</li>
          </ul>
        `,
      },
      {
        id: "consumer-protection",
        title: "Consumer Protection Laws",
        content: `
          <p>Comply with consumer protection laws to avoid legal issues.</p>
          <h4>Key Consumer Rights:</h4>
          <ul>
            <li>Right to safety and quality products</li>
            <li>Right to accurate information</li>
            <li>Right to choose and fair pricing</li>
            <li>Right to redress and compensation</li>
          </ul>
          <h4>Seller Obligations:</h4>
          <ul>
            <li>Provide accurate product descriptions</li>
            <li>Honor warranties and guarantees</li>
            <li>Process returns and refunds fairly</li>
            <li>Maintain product safety standards</li>
          </ul>
        `,
      },
    ],
  },

  // Advanced Topics Category
  {
    slug: "advanced-selling-strategies",
    title: "Advanced Selling Strategies",
    description:
      "Advanced techniques to scale your business and maximize profits.",
    category: "Advanced Topics",
    readTime: "30 min read",
    difficulty: "Advanced",
    tags: ["strategy", "scaling", "optimization"],
    sections: [
      {
        id: "market-analysis",
        title: "Market Analysis and Research",
        content: `
          <p>Conduct thorough market research to identify opportunities and optimize your strategy.</p>
          <h4>Market Research Tools:</h4>
          <ul>
            <li><strong>Competitor Analysis:</strong> Study successful competitors in your niche</li>
            <li><strong>Keyword Research:</strong> Identify high-volume, low-competition keywords</li>
            <li><strong>Trend Analysis:</strong> Monitor market trends and seasonal patterns</li>
            <li><strong>Customer Surveys:</strong> Gather direct feedback from your target audience</li>
          </ul>
          <h4>Competitive Intelligence:</h4>
          <ul>
            <li>Monitor competitor pricing strategies</li>
            <li>Analyze their product offerings and positioning</li>
            <li>Study their marketing and promotional tactics</li>
            <li>Identify gaps in their service or product range</li>
          </ul>
        `,
      },
      {
        id: "scaling-operations",
        title: "Scaling Your Operations",
        content: `
          <p>Strategies for scaling your business efficiently as you grow.</p>
          <h4>Operational Scaling:</h4>
          <ul>
            <li><strong>Automation Tools:</strong> Implement tools for order processing and inventory management</li>
            <li><strong>Outsourcing:</strong> Delegate non-core activities to specialists</li>
            <li><strong>Bulk Operations:</strong> Use bulk listing and management tools</li>
            <li><strong>Team Building:</strong> Hire and train staff for key functions</li>
          </ul>
          <h4>Technology Integration:</h4>
          <ul>
            <li>ERP systems for comprehensive business management</li>
            <li>API integrations for seamless data flow</li>
            <li>Analytics tools for data-driven decisions</li>
            <li>Customer relationship management (CRM) systems</li>
          </ul>
        `,
      },
    ],
  },
  // Tools and Resources Category
  {
    slug: "seller-tools",
    title: "Seller Tools and Resources",
    description:
      "Comprehensive guide to all available seller tools and how to use them effectively.",
    category: "Tools and Resources",
    readTime: "20 min read",
    difficulty: "Intermediate",
    tags: ["tools", "resources", "productivity"],
    sections: [
      {
        id: "dashboard-tools",
        title: "Dashboard and Management Tools",
        content: `
          <p>Master the seller dashboard and available management tools.</p>
          <h4>Core Dashboard Features:</h4>
          <ul>
            <li><strong>Sales Overview:</strong> Real-time sales data and trends</li>
            <li><strong>Order Management:</strong> Process and track all orders</li>
            <li><strong>Inventory Control:</strong> Monitor stock levels and movements</li>
            <li><strong>Customer Communications:</strong> Manage all customer interactions</li>
            <li><strong>Performance Analytics:</strong> Track KPIs and business metrics</li>
          </ul>
          <h4>Productivity Tools:</h4>
          <ul>
            <li>Bulk product upload and editing</li>
            <li>Automated pricing rules</li>
            <li>Inventory alerts and notifications</li>
            <li>Order processing automation</li>
            <li>Report generation and scheduling</li>
          </ul>
        `,
      },
      {
        id: "mobile-app",
        title: "Mobile Seller App",
        content: `
          <p>Manage your business on-the-go with our mobile seller app.</p>
          <h4>Mobile App Features:</h4>
          <ul>
            <li>Order notifications and processing</li>
            <li>Inventory management</li>
            <li>Customer message responses</li>
            <li>Sales analytics and reports</li>
            <li>Product listing and editing</li>
          </ul>
          <h4>Mobile-Specific Benefits:</h4>
          <ul>
            <li>Push notifications for urgent matters</li>
            <li>Camera integration for product photos</li>
            <li>Location-based features</li>
            <li>Offline capability for basic functions</li>
          </ul>
        `,
      },
    ],
  },
  {
    slug: "api-integration",
    title: "API Integration Guide",
    description:
      "Technical guide for integrating with our seller APIs for advanced automation.",
    category: "Tools and Resources",
    readTime: "35 min read",
    difficulty: "Advanced",
    tags: ["API", "integration", "automation", "technical"],
    sections: [
      {
        id: "api-overview",
        title: "API Overview and Authentication",
        content: `
          <p>Learn how to integrate with our seller APIs for advanced business automation.</p>
          <h4>Available APIs:</h4>
          <ul>
            <li><strong>Product Management API:</strong> Create, update, and manage product listings</li>
            <li><strong>Order Management API:</strong> Process orders and update fulfillment status</li>
            <li><strong>Inventory API:</strong> Real-time inventory synchronization</li>
            <li><strong>Analytics API:</strong> Access sales and performance data</li>
            <li><strong>Customer API:</strong> Manage customer communications</li>
          </ul>
          <h4>Authentication Methods:</h4>
          <ul>
            <li>API key authentication for basic access</li>
            <li>OAuth 2.0 for secure, user-authorized access</li>
            <li>Webhook subscriptions for real-time updates</li>
          </ul>
          <h4>Rate Limits and Best Practices:</h4>
          <ul>
            <li>Standard rate limit: 1000 requests per hour</li>
            <li>Premium sellers: 5000 requests per hour</li>
            <li>Implement exponential backoff for retries</li>
            <li>Use batch operations when possible</li>
          </ul>
        `,
      },
      {
        id: "integration-examples",
        title: "Integration Examples",
        content: `
          <p>Practical examples of common API integrations.</p>
          <h4>Product Sync Integration:</h4>
          <pre><code>
// Example: Bulk product update
const updateProducts = async (products) => {
  const response = await fetch('/api/v1/products/bulk', {
    method: 'PUT',
    headers: {
      'Authorization': 'Bearer YOUR_API_KEY',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ products })
  });
  return response.json();
};
          </code></pre>
          <h4>Order Processing Automation:</h4>
          <pre><code>
// Example: Auto-confirm orders
const autoConfirmOrders = async () => {
  const orders = await getNewOrders();
  for (const order of orders) {
    if (order.status === 'pending') {
      await confirmOrder(order.id);
    }
  }
};
          </code></pre>
        `,
      },
    ],
  },

  // Success Stories Category
  {
    slug: "success-stories",
    title: "Seller Success Stories",
    description:
      "Learn from successful sellers and their strategies for growth.",
    category: "Success Stories",
    readTime: "15 min read",
    difficulty: "Beginner",
    tags: ["success", "case studies", "inspiration"],
    sections: [
      {
        id: "small-business-success",
        title: "Small Business Success Stories",
        content: `
          <p>Inspiring stories from small businesses that achieved significant growth on our platform.</p>
          <h4>Case Study 1: Maria's Handicrafts</h4>
          <p><strong>Background:</strong> Maria started selling traditional Filipino handicrafts from her home in Cebu.</p>
          <p><strong>Challenge:</strong> Limited local market and difficulty reaching customers nationwide.</p>
          <p><strong>Strategy:</strong></p>
          <ul>
            <li>Focused on high-quality product photography</li>
            <li>Wrote detailed stories about each handcrafted item</li>
            <li>Engaged with customers through social media</li>
            <li>Participated in platform promotional events</li>
          </ul>
          <p><strong>Results:</strong> 300% increase in sales within 6 months, expanded to international shipping.</p>

          <h4>Case Study 2: TechGadgets PH</h4>
          <p><strong>Background:</strong> Electronics retailer transitioning from physical store to online.</p>
          <p><strong>Strategy:</strong></p>
          <ul>
            <li>Leveraged existing supplier relationships</li>
            <li>Implemented competitive pricing strategy</li>
            <li>Provided excellent customer service</li>
            <li>Used data analytics to optimize inventory</li>
          </ul>
          <p><strong>Results:</strong> Became top seller in electronics category within 1 year.</p>
        `,
      },
      {
        id: "scaling-success",
        title: "Scaling Success Stories",
        content: `
          <p>Learn how sellers successfully scaled their operations.</p>
          <h4>Case Study: Fashion Forward</h4>
          <p><strong>Background:</strong> Started as a single-person fashion boutique.</p>
          <p><strong>Scaling Strategy:</strong></p>
          <ul>
            <li>Hired virtual assistants for customer service</li>
            <li>Implemented inventory management software</li>
            <li>Expanded product lines based on data insights</li>
            <li>Built relationships with multiple suppliers</li>
          </ul>
          <p><strong>Results:</strong> Grew from ₱50,000 to ₱2,000,000 monthly revenue in 18 months.</p>
        `,
      },
    ],
  },
  {
    slug: "troubleshooting",
    title: "Troubleshooting Common Issues",
    description:
      "Solutions to common problems sellers encounter on the platform.",
    category: "Support",
    readTime: "25 min read",
    difficulty: "Beginner",
    tags: ["troubleshooting", "support", "problems"],
    sections: [
      {
        id: "account-issues",
        title: "Account and Login Issues",
        content: `
          <p>Resolve common account-related problems quickly.</p>
          <h4>Login Problems:</h4>
          <ul>
            <li><strong>Forgot Password:</strong> Use password reset link on login page</li>
            <li><strong>Account Locked:</strong> Contact support after multiple failed attempts</li>
            <li><strong>Email Not Verified:</strong> Check spam folder and resend verification</li>
            <li><strong>Two-Factor Authentication Issues:</strong> Use backup codes or contact support</li>
          </ul>
          <h4>Account Verification Issues:</h4>
          <ul>
            <li>Ensure all documents are clear and legible</li>
            <li>Check that document names match registration information</li>
            <li>Verify all required documents are submitted</li>
            <li>Allow 48-72 hours for verification process</li>
          </ul>
        `,
      },
      {
        id: "listing-issues",
        title: "Product Listing Issues",
        content: `
          <p>Solve common problems with product listings.</p>
          <h4>Listing Rejected:</h4>
          <ul>
            <li>Review prohibited items list</li>
            <li>Ensure images meet quality standards</li>
            <li>Check for trademark or copyright violations</li>
            <li>Verify product category is correct</li>
          </ul>
          <h4>Low Visibility:</h4>
          <ul>
            <li>Optimize product titles with relevant keywords</li>
            <li>Complete all product attributes</li>
            <li>Improve product images and descriptions</li>
            <li>Ensure competitive pricing</li>
          </ul>
        `,
      },
      {
        id: "order-issues",
        title: "Order Processing Issues",
        content: `
          <p>Handle order-related problems effectively.</p>
          <h4>Payment Issues:</h4>
          <ul>
            <li>Verify payment method is valid</li>
            <li>Check for sufficient funds or credit limit</li>
            <li>Ensure billing address matches payment method</li>
            <li>Contact payment processor if needed</li>
          </ul>
          <h4>Shipping Problems:</h4>
          <ul>
            <li>Verify shipping address accuracy</li>
            <li>Check courier service coverage area</li>
            <li>Ensure package meets size and weight limits</li>
            <li>Provide accurate tracking information</li>
          </ul>
        `,
      },
    ],
  },

  // Delivery Rider
  {
    slug: "how-to-register-and-verify-your-rider-account",
    title: "How to register and verify your rider account",
    description:
      "A step-by-step guide on creating your rider account, verifying your identity, and completing the onboarding process.",
    category: "Rider Onboarding",
    readTime: "10 min read",
    difficulty: "Beginner",
    tags: ["rider", "onboarding", "verification", "registration"],
    sections: [
      {
        id: "create-account",
        title: "1. Creating Your Rider Account",
        content: `
        <p>To start delivering, you first need to create a verified rider account. Follow these simple steps to get started.</p>

        <h4>Step 1: Register with Your Email</h4>
        <p>Create your account by providing the following:</p>
        <ul>
          <li><strong>Email Address</strong> – Must be valid and accessible</li>
          <li><strong>Password</strong> – Minimum 8 characters</li>
        </ul>
        <p>Once submitted, the system will automatically send a 6-digit One-Time Password (OTP) to your email.</p>

        <h4>Step 2: Verify Using OTP</h4>
        <p>Check your inbox (or spam/junk folder) for the verification code. Enter the 6-digit OTP on the verification page to activate your account.</p>
        <p>After successful verification, you will be redirected to the onboarding process.</p>
      `,
      },
      {
        id: "onboarding-process",
        title: "2. Rider Onboarding Process",
        content: `
        <p>The onboarding process ensures that all riders are verified, trained, and ready for safe deliveries. It consists of five steps.</p>

        <h4>Step 1: Personal Information</h4>
        <p>Provide your basic details:</p>
        <ul>
          <li>Full Name</li>
          <li>Vehicle Type (<em>Motorcycle, Tricycle, or Bicycle</em>)</li>
        </ul>

        <h4>Step 2: Identity Details</h4>
        <p>Depending on your chosen vehicle type, complete the fields below:</p>
        <ul>
          <li>Gender</li>
          <li>Date of Birth</li>
          <li>License Number <strong>(Optional if Bicycle is selected)</strong></li>
        </ul>

        <h4>Step 3: Vehicle Information</h4>
        <p>If your selected vehicle is <strong>motorcycle or tricycle</strong>, you must provide:</p>
        <ul>
          <li>Vehicle Plate Number</li>
        </ul>
        <p>Bicycle riders may skip this step.</p>

        <h4>Step 4: Virtual Training</h4>
        <p>Read through the short virtual training module to learn:</p>
        <ul>
          <li>Basic delivery handling</li>
          <li>Customer communication tips</li>
          <li>Platform rules and rider responsibilities</li>
          <li>Safety reminders</li>
        </ul>
        <p>This ensures all riders understand the platform’s standards before starting.</p>

        <h4>Step 5: Upload Required Attachments</h4>
        <p>To complete your verification, upload the following documents:</p>
        <ul>
          <li><strong>Driver’s License</strong> (Not needed for bicycle riders)</li>
          <li><strong>Official Receipt (OR)</strong></li>
          <li><strong>Certificate of Registration (CR)</strong></li>
          <li><strong>Clear Profile Picture</strong> (Front view)</li>
          <li><strong>Vehicle Photo</strong> showing the plate number</li>
        </ul>

        <p>Please make sure that all uploaded documents are clear, readable, and not edited or tampered with. Once submitted, your application will be reviewed by our verification team.</p>
      `,
      },
      {
        id: "final-steps",
        title: "3. Final Review and Approval",
        content: `
        <p>After completing all onboarding steps, your account will enter the review stage.</p>

        <ul>
          <li>Verification typically takes between <strong>24–48 hours</strong>.</li>
          <li>You will receive an email notification once your account is approved.</li>
          <li>Once approved, you can start accepting and completing delivery orders.</li>
        </ul>

        <p>Welcome aboard! You're now ready to begin your journey as a verified delivery rider on our platform.</p>

        <h4>Watch the Walkthrough:</h4>
        <p>Here’s a quick preview of how to complete the delivery rider registration form:</p>
        <img src="/gifs/rider.gif" alt="Delivery rider Registration Walkthrough" style="max-width:100%; height:auto; border-radius:8px; box-shadow:0 2px 8px rgba(0,0,0,0.1);" />
      `,
      },
    ],
  },
  {
    slug: "requirements-needed-for-onboarding",
    title: "Requirements Needed for Rider Onboarding",
    description:
      "Review the complete list of documents and attachments required to verify your identity and vehicle before becoming an official delivery rider.",
    category: "Rider Onboarding",
    readTime: "8 min read",
    difficulty: "Beginner",
    tags: ["documents", "verification", "requirements"],
    sections: [
      {
        id: "why-needed",
        title: "Why These Requirements Are Needed",
        content: `
        <p>To ensure the safety and legitimacy of all riders on the platform, we require certain documents for identity verification and vehicle validation. These documents also help confirm that you are authorized to use your vehicle for delivery operations.</p>
        <p>Please make sure all photos are <strong>clear, readable, and not edited or altered</strong>.</p>
      `,
      },
      {
        id: "drivers-license",
        title: "1. Valid Driver’s License",
        content: `
        <p>This is required for riders using a <strong>motorcycle</strong> or <strong>tricycle</strong>. Bicycle riders may skip this requirement.</p>
        <p>Your uploaded license must clearly show:</p>
        <ul>
          <li>Full name of the license holder</li>
          <li>License number</li>
          <li>Expiration date</li>
          <li>Photo of the owner</li>
        </ul>
        <p>Make sure the entire front of the license is visible and not cropped. Avoid glare or blurred text.</p>
        <img src="/assets/rider-license-guidelines.png" alt="Rider License Guideline" style="max-width:100%; height:auto; border-radius:8px; box-shadow:0 2px 8px rgba(0,0,0,0.1);" />
      `,
      },
      {
        id: "certificate-of-registration",
        title: "2. Certificate of Registration (CR)",
        content: `
        <p>The Certificate of Registration confirms ownership and details of your vehicle. Even if you are not the registered owner, this document must be submitted.</p>
        <p>The following must be clearly visible in your CR:</p>
        <ul>
          <li>Vehicle Plate Number</li>
          <li>Registered Owner’s Name</li>
          <li>Vehicle Details (model, type, chassis number, etc.)</li>
          <li>OR Number (found in the section for first registration details)</li>
        </ul>
        <p>Ensure that the document is photographed fully and legibly as shown in the sample image.</p>
        <img src="/assets/rider-cr-guidelines.png" alt="Rider CR Guideline" style="max-width:100%; height:auto; border-radius:8px; box-shadow:0 2px 8px rgba(0,0,0,0.1);" />
      `,
      },
      {
        id: "official-receipt",
        title: "3. Official Receipt (OR)",
        content: `
        <p>The Official Receipt verifies that the vehicle's registration is valid and paid. This must match the details from the Certificate of Registration.</p>
        <p>The OR must clearly show:</p>
        <ul>
          <li>Plate Number</li>
          <li>Owner’s Name</li>
          <li>OR Number</li>
          <li>Date of Release</li>
        </ul>
        <p>Please upload a clean and readable image with all edges visible.</p>
        <img src="/assets/rider-or-guidelines.png" alt="Rider OR Guideline" style="max-width:100%; height:auto; border-radius:8px; box-shadow:0 2px 8px rgba(0,0,0,0.1);" />
      `,
      },
      {
        id: "rider-photos",
        title: "4. Rider Profile Photo",
        content: `
        <p>Your profile picture must meet the following guidelines:</p>
        <ul>
          <li>Clear front-facing photo</li>
          <li>No sunglasses, caps, or heavy filters</li>
          <li>Good lighting with a plain background if possible</li>
        </ul>
        <p>This photo will also be visible to customers for identification.</p>
        <img src="/assets/rider-photo-guidelines.png" alt="Rider Photo Guideline" style="max-width:100%; height:auto; border-radius:8px; box-shadow:0 2px 8px rgba(0,0,0,0.1);" />
      `,
      },
      {
        id: "vehicle-photo",
        title: "5. Vehicle Photo with Plate Number",
        content: `
        <p>Upload a photo of your motorcycle or tricycle showing the entire vehicle and the plate number clearly.</p>
        <p>Guidelines:</p>
        <ul>
          <li>Plate number must be readable</li>
          <li>Vehicle must not be obstructed</li>
          <li>Front or rear angle is acceptable as long as the plate is visible</li>
        </ul>
        <p>Bicycle riders may skip this step since they do not require a license plate.</p>
        <img src="/assets/rider-vehicle-guidelines.png" alt="Rider Vehicle Guideline" style="max-width:100%; height:auto; border-radius:8px; box-shadow:0 2px 8px rgba(0,0,0,0.1);" />
      `,
      },
      {
        id: "reminders",
        title: "Important Reminders",
        content: `
        <ul>
          <li>Do not upload edited, filtered, or digitally modified documents.</li>
          <li>Make sure all photos are taken in bright and natural lighting.</li>
          <li>Documents must match the information you entered during onboarding.</li>
          <li>Your application may be delayed if documents are incomplete or unclear.</li>
        </ul>
        <p>Once all requirements are submitted, your application will proceed to the verification stage.</p>
      `,
      },
    ],
  },
];

export function getTopicData(slug: string): Topic | null {
  return topics.find((topic) => topic.slug === slug) || null;
}

export function getTopicsByCategory(category: string): Topic[] {
  return topics.filter((topic) => topic.category === category);
}

export function getAllCategories(): string[] {
  return [...new Set(topics.map((topic) => topic.category))];
}

export function getRelatedTopics(currentSlug: string, limit = 3): Topic[] {
  const currentTopic = getTopicData(currentSlug);
  if (!currentTopic) return [];

  return topics
    .filter(
      (topic) =>
        topic.slug !== currentSlug && topic.category === currentTopic.category
    )
    .slice(0, limit);
}
