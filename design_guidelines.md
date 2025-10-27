# Design Guidelines: Google Profile Solutions

## Design Approach
**Reference-Based Approach**: Drawing inspiration from modern SaaS and service websites (Stripe, Intercom, HubSpot) with emphasis on trust, professionalism, and conversion-focused design.

## Color Palette

**Primary Colors:**
- Blue: `#0073E6` (Trust, professionalism, tech-friendly)
- White: `#FFFFFF` (Clean background for readability)

**Secondary/Accent Colors:**
- Green: `#28A745` (Success, verification, action signals)
- Dark Gray: `#333333` (Text for readability)
- Light Gray: `#F5F5F5` (Section backgrounds for visual separation)

## Typography

**Font Families:**
- Headlines: Montserrat or Poppins (Bold, 600-700 weight)
- Body Text: Roboto or Open Sans (Regular, 400 weight)
- CTA Buttons: Bold, uppercase styling

**Hierarchy:**
- H1 (Hero): 48-64px desktop, 32-40px mobile
- H2 (Section Headlines): 36-48px desktop, 28-32px mobile
- H3 (Subsections): 24-32px desktop, 20-24px mobile
- Body: 16-18px desktop, 16px mobile
- Small Text: 14px

## Layout System

**Spacing Units:** Use Tailwind spacing: 4, 8, 12, 16, 20, 24, 32 units consistently

**Section Padding:**
- Desktop: py-20 to py-24
- Mobile: py-12 to py-16

**Container Widths:**
- Full-width sections with inner max-w-6xl
- Text content: max-w-4xl for readability

## Component Library

**Navigation:**
- Sticky header with smooth scroll anchors
- Logo left, navigation links right
- Mobile: Hamburger menu

**Hero Section:**
- Full-width with subtle gradient overlay (Blue to lighter blue)
- Centered content with headline, subheadline, primary CTA
- Large hero image showing verified Google Business Profile on phone/computer screen
- Image should be professional, high-quality, positioned right side on desktop, full-width on mobile

**Section Alternation:**
- Alternate white and light gray backgrounds
- Creates clear visual separation between sections

**CTA Buttons:**
- Primary (Green #28A745): "Get Verified Today", "Start My Verification"
- Secondary (Blue #0073E6): "Learn More"
- Rounded corners (8px radius)
- Bold text, uppercase
- Generous padding (px-8 py-4)
- Large touch targets on mobile (minimum 48px height)

**Pricing Cards:**
- Two-column layout on desktop (grid-cols-1 md:grid-cols-2)
- Card design with border, shadow on hover
- Clear pricing display with dollar amount prominent
- Feature list with checkmark icons
- CTA button at bottom of each card

**Feature Lists:**
- Checkmark icons in green for benefits/results
- X icons or warning icons in red/orange for pain points
- Clear visual distinction between positive and negative elements

**FAQ Section:**
- Accordion-style or simple Q&A pairs
- Bold questions, regular weight answers
- Generous spacing between items
- Light gray background to differentiate from other sections

**Trust Indicators:**
- Small badge icons (Verified, Secure, Professional)
- Testimonials in card format with quotation marks
- Optional: Google Maps logo integration

## Images

**Hero Section:**
- Large hero image required showing verified Google Business Profile on mobile device or desktop screen
- Professional, clean photography
- Position: Right side on desktop (60/40 split), full-width on mobile
- Should convey success, verification, and professional business environment

**Section 1 (Pain):**
- Image of frustrated business owner at computer, looking confused
- Position: Left side, 40% width on desktop

**Section 2 (Agitation):**
- Side-by-side comparison graphic: "Unverified vs Verified" search results
- Full-width visual demonstration

**Section 3 (Solution):**
- Step-by-step diagram: Verify → Optimize → Get Found
- Clean iconography with arrows/flow indicators

**Section 5 (Results):**
- Screenshot of verified Google Business Profile with reviews, photos, and complete information
- Position: Center or right side

**Section 8 (Final CTA):**
- Smiling business owner holding phone showing verified profile
- Positive, success-oriented imagery
- Position: Right side on desktop

## Layout Structure (One-Page Scroll)

1. **Hero Section**: Full-width, gradient background, centered content + hero image
2. **Pain Section**: White background, left-aligned text, right-aligned image
3. **Agitation Section**: Light gray background, comparison visual
4. **Solution Section**: White background, centered step diagram
5. **Packages/Pricing**: Light gray background, two-column card layout
6. **Results/Benefits**: White background, bullet list with image
7. **Testimonials**: Light gray background, card/quote format
8. **FAQ**: White background, Q&A pairs with generous spacing
9. **Final CTA**: Gradient background matching hero, centered content + success image

## Responsive Design

**Breakpoints:**
- Mobile: < 768px (single column, stacked layout)
- Tablet: 768px - 1024px (refined two-column where appropriate)
- Desktop: > 1024px (full multi-column layouts)

**Mobile Optimization:**
- All multi-column layouts stack to single column
- CTA buttons expand to near full-width for easy tapping
- Text sizes scale down appropriately
- Images scale to 100% width
- Generous touch targets (minimum 48px)

## Key Design Principles

- **White Space**: Liberal use throughout; never crowd content
- **Visual Hierarchy**: Clear distinction between headlines, subheads, body text
- **Scannability**: Bullet points, short paragraphs, clear headings
- **CTA Prominence**: Primary CTA appears in Hero, Packages, Results, and Final sections
- **Trust Building**: Professional color scheme, clean design, testimonials, trust badges
- **Conversion Focus**: Clear path to action, minimal friction, benefits-driven messaging