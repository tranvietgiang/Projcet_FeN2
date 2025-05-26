import React, { useState, useEffect } from "react";
import "./OnSale.css";

const SalesPage = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 15,
    minutes: 30,
    seconds: 45,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return {
            ...prev,
            days: prev.days - 1,
            hours: 23,
            minutes: 59,
            seconds: 59,
          };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const features = [
    {
      icon: "🚀",
      title: "Lightning Fast",
      description: "Optimized for speed and performance",
    },
    {
      icon: "🔒",
      title: "Secure & Safe",
      description: "Bank-level security for your data",
    },
    {
      icon: "📱",
      title: "Mobile Ready",
      description: "Works perfectly on all devices",
    },
    {
      icon: "⚡",
      title: "Easy Setup",
      description: "Get started in just 5 minutes",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      text: "This product completely transformed our workflow. Highly recommended!",
      rating: 5,
    },
    {
      name: "Mike Chen",
      role: "Developer",
      text: "Best investment we've made this year. The ROI is incredible.",
      rating: 5,
    },
    {
      name: "Emily Davis",
      role: "Marketing Manager",
      text: "User-friendly and powerful. Our team loves it!",
      rating: 5,
    },
  ];

  return (
    <>
      {/* Bootstrap CSS */}
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css"
        rel="stylesheet"
      />

      <div className="sales-page">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="urgency-badge">🔥 LIMITED TIME OFFER</div>
                <h1 className="display-3 fw-bold mb-4">
                  Transform Your Business Today
                </h1>
                <p className="lead mb-4">
                  Get the premium business solution that 10,000+ companies
                  trust. Now available at our biggest discount ever!
                </p>
                <div className="d-flex gap-3 mb-4">
                  <span className="badge bg-light text-dark px-3 py-2">
                    ⭐ 4.9/5 Rating
                  </span>
                  <span className="badge bg-light text-dark px-3 py-2">
                    🏆 Award Winner
                  </span>
                  <span className="badge bg-light text-dark px-3 py-2">
                    ✅ 10K+ Users
                  </span>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="countdown-timer">
                  <h3 className="text-center mb-4">⏰ Sale Ends In:</h3>
                  <div className="row">
                    <div className="col-3">
                      <div className="timer-box">
                        <div className="h2 fw-bold">{timeLeft.days}</div>
                        <div>Days</div>
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="timer-box">
                        <div className="h2 fw-bold">{timeLeft.hours}</div>
                        <div>Hours</div>
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="timer-box">
                        <div className="h2 fw-bold">{timeLeft.minutes}</div>
                        <div>Minutes</div>
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="timer-box">
                        <div className="h2 fw-bold">{timeLeft.seconds}</div>
                        <div>Seconds</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="price-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="text-center mb-5">
                  <h2 className="display-4 fw-bold mb-3">
                    Special Launch Pricing
                  </h2>
                  <p className="lead">
                    Don't miss this one-time opportunity to save big!
                  </p>
                </div>

                <div className="price-card text-center">
                  <div className="mb-3">
                    <span className="badge bg-warning text-dark px-3 py-2 mb-3">
                      🏆 MOST POPULAR
                    </span>
                  </div>
                  <h3 className="h4 mb-3">Professional Plan</h3>
                  <div className="mb-4">
                    <div className="original-price">Was $299/month</div>
                    <div className="sale-price">
                      $99<span className="h5">/month</span>
                    </div>
                    <div className="text-success fw-bold">Save 67% Today!</div>
                  </div>

                  <ul className="list-unstyled mb-4">
                    <li className="mb-2">✅ Unlimited Projects</li>
                    <li className="mb-2">✅ Priority Support</li>
                    <li className="mb-2">✅ Advanced Analytics</li>
                    <li className="mb-2">✅ Team Collaboration</li>
                    <li className="mb-2">✅ Custom Integrations</li>
                  </ul>

                  <button className="btn btn-cta btn-lg w-100 mb-3">
                    Start Free Trial - No Credit Card Required
                  </button>

                  <div className="guarantee-badge">
                    🛡️ 30-Day Money-Back Guarantee
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-5 bg-light">
          <div className="container">
            <div className="text-center mb-5">
              <h2 className="display-5 fw-bold mb-3">
                Why Choose Our Solution?
              </h2>
              <p className="lead text-muted">
                Everything you need to succeed in one powerful platform
              </p>
            </div>

            <div className="row">
              {features.map((feature, index) => (
                <div key={index} className="col-lg-3 col-md-6 mb-4">
                  <div className="card feature-card h-100">
                    <div className="card-body">
                      <div className="feature-icon">{feature.icon}</div>
                      <h5 className="card-title fw-bold">{feature.title}</h5>
                      <p className="card-text text-muted">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-5">
          <div className="container">
            <div className="text-center mb-5">
              <h2 className="display-5 fw-bold mb-3">What Our Customers Say</h2>
              <p className="lead text-muted">
                Join thousands of satisfied customers
              </p>
            </div>

            <div className="row">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="col-lg-4 mb-4">
                  <div className="testimonial-card">
                    <div className="stars">
                      {"⭐".repeat(testimonial.rating)}
                    </div>
                    <p className="mb-3">"{testimonial.text}"</p>
                    <div className="fw-bold">{testimonial.name}</div>
                    <div className="text-muted small">{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="cta-section">
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-lg-8">
                <h2 className="display-4 fw-bold mb-4">
                  Ready to Get Started?
                </h2>
                <p className="lead mb-4">
                  Join over 10,000 businesses that have already transformed
                  their operations. This special pricing won't last long!
                </p>

                <div className="mb-4">
                  <div className="h4 mb-2">🎯 What You Get:</div>
                  <div className="row justify-content-center">
                    <div className="col-md-8">
                      <div className="d-flex flex-wrap justify-content-center gap-3">
                        <span className="badge bg-light text-dark px-3 py-2">
                          Instant Access
                        </span>
                        <span className="badge bg-light text-dark px-3 py-2">
                          Free Setup
                        </span>
                        <span className="badge bg-light text-dark px-3 py-2">
                          24/7 Support
                        </span>
                        <span className="badge bg-light text-dark px-3 py-2">
                          Free Training
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <button className="btn btn-cta btn-lg px-5 py-3 mb-3">
                  🚀 Claim Your 67% Discount Now
                </button>

                <div className="small text-light opacity-75">
                  ⚡ Setup takes less than 5 minutes • Cancel anytime • No
                  hidden fees
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Bootstrap JS */}
      <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/js/bootstrap.bundle.min.js"></script>
    </>
  );
};

export default SalesPage;
