import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, XCircle, ArrowRight, MapPin, Shield, Zap, Users, TrendingUp, Clock, Phone } from "lucide-react";

export default function Home() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-blue-600 text-primary-foreground py-20 md:py-32 px-4">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6" data-testid="text-hero-headline">
              Struggling to Get Your Business on Google? We Fix That - Fast, Easy, and Guaranteed.
            </h1>
            <p className="text-lg md:text-xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto" data-testid="text-hero-subheadline">
              Stop losing customers every day your Google Business Profile isn't verified or optimized. Let us handle it for you.
            </p>
            <Button
              size="lg"
              className="bg-success hover:bg-success text-success-foreground font-bold text-lg uppercase"
              onClick={() => scrollToContact()}
              data-testid="button-hero-cta"
            >
              Get Verified Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Pain Section */}
      <section className="py-20 px-4 bg-background" id="problem">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12 text-foreground" data-testid="text-pain-headline">
            Getting Verified on Google Should Be Simple... But It's Not.
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <div className="flex items-start gap-3" data-testid="item-pain-1">
                <XCircle className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
                <p className="text-lg text-foreground">Endless waiting for postcards or codes</p>
              </div>
              <div className="flex items-start gap-3" data-testid="item-pain-2">
                <XCircle className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
                <p className="text-lg text-foreground">Confusing video verification requirements</p>
              </div>
              <div className="flex items-start gap-3" data-testid="item-pain-3">
                <XCircle className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
                <p className="text-lg text-foreground">Inconsistent info causing verification failures</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3" data-testid="item-pain-4">
                <XCircle className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
                <p className="text-lg text-foreground">Losing visibility on Google Search & Maps</p>
              </div>
              <div className="flex items-start gap-3" data-testid="item-pain-5">
                <XCircle className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
                <p className="text-lg text-foreground">Frustration, wasted hours, and lost customers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agitation Section */}
      <section className="py-20 px-4 bg-muted">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-8 text-foreground" data-testid="text-agitation-headline">
            Every Day You're Unverified, You're Losing Customers.
          </h2>
          <div className="max-w-3xl mx-auto space-y-4 mb-8">
            <div className="flex items-start gap-3" data-testid="item-agitation-1">
              <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-lg text-foreground">Customers can't find you online</p>
            </div>
            <div className="flex items-start gap-3" data-testid="item-agitation-2">
              <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-lg text-foreground">Competitors show up instead of you</p>
            </div>
            <div className="flex items-start gap-3" data-testid="item-agitation-3">
              <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-lg text-foreground">Reviews and credibility remain invisible</p>
            </div>
            <div className="flex items-start gap-3" data-testid="item-agitation-4">
              <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-lg text-foreground">Marketing efforts fall flat</p>
            </div>
          </div>
          <p className="text-center text-xl font-semibold text-destructive" data-testid="text-agitation-highlight">
            It's not just annoying - it's revenue lost.
          </p>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-8 text-foreground" data-testid="text-solution-headline">
            We Make Google Verification Simple.
          </h2>
          <p className="text-center text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
            At Google Profile Solutions, we handle the entire process:
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center hover-elevate" data-testid="card-solution-verify">
              <CardHeader>
                <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-heading">Verify</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We verify your business profile via postcard, phone/email, or video
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover-elevate" data-testid="card-solution-optimize">
              <CardHeader>
                <div className="mx-auto mb-4 w-16 h-16 bg-success/10 rounded-full flex items-center justify-center">
                  <Zap className="h-8 w-8 text-success" />
                </div>
                <CardTitle className="font-heading">Optimize</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Optimize your profile with accurate info, photos, and categories
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover-elevate" data-testid="card-solution-found">
              <CardHeader>
                <div className="mx-auto mb-4 w-16 h-16 bg-chart-2/10 rounded-full flex items-center justify-center">
                  <MapPin className="h-8 w-8 text-chart-2" />
                </div>
                <CardTitle className="font-heading">Get Found</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Ensure your business shows up to local customers searching for your services
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 px-4 bg-muted" id="packages">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12 text-foreground" data-testid="text-packages-headline">
            Choose the Service That Fits Your Business
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="hover-elevate" data-testid="card-package-verification">
              <CardHeader>
                <CardTitle className="font-heading text-2xl">Verification Only</CardTitle>
                <CardDescription>Perfect for businesses that just need verification</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-4xl font-bold text-primary">$100<span className="text-base text-muted-foreground font-normal">/location</span></div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                    <span>Get verified fast using postcard, phone/email, or video</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                    <span>Expert guidance through the process</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                    <span>Usually complete within 1-7 days</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full bg-success hover:bg-success text-success-foreground font-semibold"
                  onClick={() => scrollToContact()}
                  data-testid="button-package-verification"
                >
                  Get Started
                </Button>
              </CardFooter>
            </Card>

            <Card className="border-2 border-primary hover-elevate" data-testid="card-package-optimization">
              <CardHeader>
                <div className="inline-block bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full mb-2">
                  RECOMMENDED
                </div>
                <CardTitle className="font-heading text-2xl">Verification + Optimization</CardTitle>
                <CardDescription>Attract more customers and boost visibility</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-4xl font-bold text-primary">$300<span className="text-base text-muted-foreground font-normal">/location</span></div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                    <span>Everything in Verification Only</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                    <span>Full profile optimization (photos, descriptions, categories)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                    <span>Professional business description and keywords</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                    <span>Ready to drive leads immediately</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full bg-primary hover:bg-primary text-primary-foreground font-semibold"
                  onClick={() => scrollToContact()}
                  data-testid="button-package-optimization"
                >
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12 text-foreground" data-testid="text-results-headline">
            Here's What You Get When You Work With Us
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="flex items-start gap-4 p-6 rounded-lg bg-muted/50" data-testid="item-result-1">
              <CheckCircle2 className="h-6 w-6 text-success flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-1">Verified on Google Maps and Search</h3>
                <p className="text-muted-foreground">Your business shows up when customers search for you</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 rounded-lg bg-muted/50" data-testid="item-result-2">
              <Users className="h-6 w-6 text-success flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-1">Attract more local customers</h3>
                <p className="text-muted-foreground">Be found by people actively looking for your services</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 rounded-lg bg-muted/50" data-testid="item-result-3">
              <TrendingUp className="h-6 w-6 text-success flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-1">Optimized profile ready to drive leads</h3>
                <p className="text-muted-foreground">Professional appearance that converts browsers to customers</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 rounded-lg bg-muted/50" data-testid="item-result-4">
              <Clock className="h-6 w-6 text-success flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-1">Hours of stress and frustration saved</h3>
                <p className="text-muted-foreground">Focus on your business while we handle verification</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-muted" id="faq">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12 text-foreground" data-testid="text-faq-headline">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-background rounded-lg px-6" data-testid="faq-item-1">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                Do you need my home address?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                No. For remote or service-area businesses, we can verify your profile without exposing your address publicly. Your privacy is protected.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-background rounded-lg px-6" data-testid="faq-item-2">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                How long does verification take?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Verification can take anywhere from 1-7 days depending on Google's method (postcard, phone/email, or video). We'll guide you through the fastest method available for your business.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-background rounded-lg px-6" data-testid="faq-item-3">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                What documents do you need?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Usually a business license, registration documents, or utility bill showing your business name and address. We'll tell you exactly what's needed to avoid delays.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-background rounded-lg px-6" data-testid="faq-item-4">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                Can you optimize my profile too?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes! Our Verification + Optimization package ensures your profile is complete, professional, and attractive to customers.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-background rounded-lg px-6" data-testid="faq-item-5">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                I don't have a storefront. Can I still be verified?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Absolutely. We specialize in service-area businesses and home-based businesses. Verification can be done via video or phone without showing a public address.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-background rounded-lg px-6" data-testid="faq-item-6">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                What if Google rejects my verification?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                We troubleshoot all common rejection reasons. Our process minimizes the chance of errors and we'll work with you to get verified successfully.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="bg-background rounded-lg px-6" data-testid="faq-item-7">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                Will I lose access to my profile if you manage it?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                No. You remain the owner. We're granted temporary manager access only for verification and optimization. You stay in full control.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="bg-background rounded-lg px-6" data-testid="faq-item-8">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                How many locations can you handle?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                We can verify and optimize single or multiple locations. Pricing scales per location. Multi-location businesses are welcome!
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9" className="bg-background rounded-lg px-6" data-testid="faq-item-9">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                Can this service increase my customer leads?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes. Verified and optimized profiles appear higher in Google Maps and Search, making it easier for potential customers to find you and contact you.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10" className="bg-background rounded-lg px-6" data-testid="faq-item-10">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                Is this a recurring service?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Verification is a one-time process, but we also offer ongoing profile management for posts, reviews, and updates as a monthly service.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-11" className="bg-background rounded-lg px-6" data-testid="faq-item-11">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                Do I need a website for this?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                No, but having one can help speed up verification and improve your profile's SEO. If you don't have a website, we can still verify and optimize your profile.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA / Contact Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary via-primary to-blue-600 text-primary-foreground" id="contact">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6" data-testid="text-final-cta-headline">
            Stop Losing Customers. Get Verified Today.
          </h2>
          <p className="text-lg mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Ready to get your Google Business Profile verified and optimized? Call us now to get started.
          </p>
          
          <div className="flex flex-col items-center gap-6">
            <a 
              href="tel:3212969208" 
              className="inline-flex items-center gap-3 bg-success text-success-foreground px-8 py-4 rounded-lg font-bold text-2xl md:text-3xl hover-elevate active-elevate-2 transition-all"
              data-testid="link-phone-number"
            >
              <Phone className="h-8 w-8" />
              321 296 9208
            </a>
            <p className="text-sm text-primary-foreground/80">
              Available Monday - Friday, 9 AM - 5 PM EST
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
