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
        <img src="/getting-started/register-walkthrough.gif" alt="Seller Registration Walkthrough" style="max-width:100%; height:auto; border-radius:8px; box-shadow:0 2px 8px rgba(0,0,0,0.1);" />

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
    slug: "setting-up-your-seller-profile",
    title: "Setting Up Your Seller Profile",
    image: "/getting-started/5.png",
    description:
      "Provide important contact and business identity details before you gain access to your seller dashboard. This step ensures your account is fully prepared for activation and support.",
    category: "Getting Started",
    readTime: "5 min read",
    difficulty: "Beginner",
    tags: [
      "profile",
      "contact info",
      "business setup",
      "verification",
      "seller onboarding",
    ],
    sections: [
      {
        id: "profile-overview",
        title: "Why This Step Matters",
        content: `
        <p>After completing the initial onboarding form and while your documents are under admin review, you’ll be redirected to the <strong>“Setting Up”</strong> screen. This screen helps us finalize your seller profile by collecting crucial business and contact information.</p>
        <p>These details ensure:</p>
        <ul>
          <li>We can reach you for support, verification, or delivery updates</li>
          <li>Your store identity aligns with Philippine regulations</li>
          <li>You can receive important platform announcements and order alerts</li>
        </ul>
      `,
      },
      {
        id: "nationality",
        title: "1. Nationality",
        content: `
        <p>Select your nationality from the dropdown list. This is used for identity verification and to comply with local trade and tax regulations.</p>
        <ul>
          <li><strong>Philippine nationals</strong> must ensure consistency with provided IDs.</li>
          <li><strong>Foreign nationals</strong> may be subject to additional verification or licensing based on the business category.</li>
        </ul>
        <p><strong>Note:</strong> Nationality cannot be changed after verification without formal request and re-submission of documents.</p>
      `,
      },
      {
        id: "business-address",
        title: "2. Business Address",
        content: `
        <p>This is the official address of your store or business operations. It may be used for billing, legal compliance, or pickup and delivery coordination.</p>

        <h4>Standard Format:</h4>
        <ul>
          <li>Street/Building Name</li>
          <li>Barangay</li>
        </ul>

        <p><strong>Tip:</strong> Use a valid, existing address. If you operate from home, enter your residential business address instead.</p>
      `,
      },
      {
        id: "contact-person",
        title: "3. Contact Person",
        content: `
        <p>Enter the name of the primary contact for your business. This person will receive important messages from the admin team and will be the default contact for logistics, disputes, or regulatory concerns.</p>

        <ul>
          <li>Use full name (first, middle, last)</li>
          <li>Should be reachable during business hours</li>
          <li>Preferably the business owner or operations manager</li>
        </ul>

        <p><strong>Important:</strong> This name must match the name on one of your uploaded documents or be authorized in your business profile.</p>
      `,
      },
      {
        id: "contact-number",
        title: "4. Contact Number",
        content: `
        <p>Provide a valid mobile or landline number for official use. This number will be used for:</p>
        <ul>
          <li>Order and delivery updates</li>
          <li>Customer support coordination</li>
          <li>Verification calls from the admin team</li>
        </ul>

        <p><strong>Format:</strong> +63 or 0 followed by 10-digit mobile/landline number</p>

        <p><strong>Example:</strong> 0917 123 4567 or +63 917 123 4567</p>
        <p><strong>Tip:</strong> Use a phone number connected to an active SIM or service line. Virtual or disconnected numbers will cause delays in account approval.</p>
      `,
      },
      {
        id: "what-next",
        title: "5. After Completing Your Profile",
        content: `
        <p>Once all fields are completed and saved, your seller profile will be marked as <strong>“Profile Ready”</strong>. You’ll be redirected to a confirmation screen while the admin team finalizes your verification review.</p>
        <p>From here:</p>
        <ul>
          <li>🎯 Your account remains under <strong>Pending Review</strong> status</li>
          <li>📧 You’ll receive an email once your profile is approved</li>
          <li>🚀 Upon approval, full access to the <strong>Seller Dashboard</strong> will be unlocked</li>
        </ul>
        <p><strong>Need changes?</strong> You can request edits by contacting support before approval is finalized.</p>
      `,
      },
    ],
  },

  // Product Management Category
  {
    slug: "product-management",
    title: "Managing Your Products",
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
  {
    slug: "product-photography",
    title: "Product Photography Guide",
    description:
      "Master the art of product photography to showcase your items effectively.",
    category: "Product Management",
    readTime: "20 min read",
    difficulty: "Intermediate",
    tags: ["photography", "images", "visual marketing"],
    sections: [
      {
        id: "photography-basics",
        title: "Photography Basics",
        content: `
          <p>Great product photos can significantly increase your sales conversion rate.</p>
          <h4>Essential Equipment:</h4>
          <ul>
            <li><strong>Camera:</strong> DSLR, mirrorless, or high-quality smartphone</li>
            <li><strong>Lighting:</strong> Natural light or softbox lighting setup</li>
            <li><strong>Background:</strong> White seamless paper or lightbox</li>
            <li><strong>Tripod:</strong> For stable, consistent shots</li>
            <li><strong>Props:</strong> Lifestyle elements to show product in use</li>
          </ul>
          <h4>Lighting Techniques:</h4>
          <ul>
            <li>Use natural light from a large window when possible</li>
            <li>Avoid direct sunlight which creates harsh shadows</li>
            <li>Use reflectors to fill in shadows</li>
            <li>Consider a lightbox for small products</li>
          </ul>
        `,
      },
      {
        id: "photo-composition",
        title: "Photo Composition and Styling",
        content: `
          <p>Composition and styling make your products more appealing to customers.</p>
          <h4>Composition Rules:</h4>
          <ul>
            <li><strong>Rule of Thirds:</strong> Place key elements along grid lines</li>
            <li><strong>Fill the Frame:</strong> Make your product the main focus</li>
            <li><strong>Multiple Angles:</strong> Show front, back, sides, and details</li>
            <li><strong>Scale Reference:</strong> Include size references when helpful</li>
          </ul>
          <h4>Styling Tips:</h4>
          <ul>
            <li>Keep backgrounds clean and uncluttered</li>
            <li>Use props that complement, not compete with your product</li>
            <li>Show products in use or lifestyle contexts</li>
            <li>Maintain consistent styling across your brand</li>
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
