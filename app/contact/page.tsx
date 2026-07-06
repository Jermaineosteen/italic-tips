import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-slate-950 via-slate-900 to-emerald-950 text-white">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Get in Touch
          </h1>

          <p className="mt-5 max-w-3xl mx-auto text-lg text-slate-300">
            We're always happy to hear from our community. Whether you have a
            question, need support, want to advertise your business, or simply
            want to say hello, there are several ways to reach the Italic Tips
            team.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-16">

        {/* Contact Methods */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {/* Email */}
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all">
            <div className="text-5xl mb-5">📧</div>

            <h2 className="text-2xl font-bold text-slate-900">
              Email Support
            </h2>

            <p className="mt-4 text-slate-600 leading-7">
              Need help with the website, predictions or have general
              enquiries? Send us an email anytime.
            </p>

            <a
              href="mailto:jermaineosteen@gmail.com"
              className="mt-8 inline-flex rounded-xl bg-slate-900 px-5 py-3 font-semibold text-white hover:bg-slate-800 transition"
            >
              Send Email
            </a>
          </div>

          {/* WhatsApp */}
          <div className="rounded-3xl border border-green-200 bg-white p-8 shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all">
            <div className="text-5xl mb-5">💬</div>

            <h2 className="text-2xl font-bold text-slate-900">
              WhatsApp
            </h2>

            <p className="mt-4 text-slate-600 leading-7">
              Prefer chatting? Contact us directly on WhatsApp for quick support
              and responses.
            </p>

            <Link
              href="https://wa.me/233555811704"
              target="_blank"
              className="mt-8 inline-flex rounded-xl bg-green-600 px-5 py-3 font-semibold text-white hover:bg-green-700 transition"
            >
              Chat on WhatsApp
            </Link>
          </div>

          {/* Telegram */}
          <div className="rounded-3xl border border-cyan-200 bg-white p-8 shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all">
            <div className="text-5xl mb-5">📲</div>

            <h2 className="text-2xl font-bold text-slate-900">
              Telegram
            </h2>

            <p className="mt-4 text-slate-600 leading-7">
              Join our Telegram community for daily football predictions,
              betting insights and important announcements.
            </p>

            <Link
              href="https://t.me/magictpx"
              target="_blank"
              className="mt-8 inline-flex rounded-xl bg-sky-500 px-5 py-3 font-semibold text-white hover:bg-sky-600 transition"
            >
              Join Telegram
            </Link>
          </div>

          {/* Advertising */}
          <div className="rounded-3xl border border-emerald-200 bg-white p-8 shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all">
            <div className="text-5xl mb-5">📢</div>

            <h2 className="text-2xl font-bold text-slate-900">
              Advertise With Us
            </h2>

            <p className="mt-4 text-slate-600 leading-7">
              Interested in promoting your brand to our growing football
              audience? We'd love to discuss advertising opportunities.
            </p>

            <a
              href="mailto:jermainepetron@gmail.com"
              className="mt-8 inline-flex rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 px-5 py-3 font-semibold text-white hover:opacity-90 transition"
            >
              Contact Sales
            </a>
          </div>

        </div>

        {/* Business Information */}
        <section className="mt-16 rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900">
            Business Information
          </h2>

          <div className="mt-10 grid gap-10 md:grid-cols-2">

            <div>
              <h3 className="text-xl font-semibold">
                Response Time
              </h3>

              <p className="mt-3 text-slate-600 leading-7">
                We aim to respond to all enquiries within
                <span className="font-semibold text-slate-900">
                  {" "}24 hours
                </span>.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Business Hours
              </h3>

              <p className="mt-3 text-slate-600 leading-7">
                Monday – Sunday
                <br />
                8:00 AM – 10:00 PM (GMT)
              </p>
            </div>

          </div>
        </section>

        {/* FAQ */}
        <section className="mt-16 rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900 mb-10">
            Frequently Asked Questions
          </h2>

          <div className="space-y-8">

            <div>
              <h3 className="text-xl font-semibold">
                Are your predictions guaranteed?
              </h3>

              <p className="mt-3 text-slate-600 leading-7">
                No. Sports betting involves risk, and no prediction is ever
                guaranteed. Our tips are based on detailed analysis, statistics
                and research to help you make informed betting decisions.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                How can I advertise on Italic Tips?
              </h3>

              <p className="mt-3 text-slate-600 leading-7">
                You can advertise your business, sportsbook or brand through
                banner placements and sponsored campaigns. Contact us via the
                Advertising email or WhatsApp to discuss available packages.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Where can I receive daily predictions?
              </h3>

              <p className="mt-3 text-slate-600 leading-7">
                Join our official Telegram community to receive daily football
                predictions, match analysis and exclusive updates.
              </p>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}