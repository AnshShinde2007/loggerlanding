
import React from 'react';

export const metadata = {
  title: "Privacy Policy - Logger",
  description: "Privacy Policy for Logger, explaining how we collect, use, and protect your data.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="w-full bg-background text-foreground min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-12">
        
        {/* Header */}
        <header className="text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Privacy Policy</h1>
          <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </header>

        {/* Introduction */}
        <section className="prose prose-gray dark:prose-invert max-w-none">
          <p className="text-lg leading-relaxed">
            We respect your privacy. This policy explains what data we collect and how we use it.
          </p>
        </section>

        {/* Information We Collect */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Information We Collect</h2>
          <p className="text-muted-foreground">We collect only what is necessary to provide the app’s core features.</p>
          <ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground">
            <li><span className="font-medium text-foreground">Account information:</span> email address</li>
            <li><span className="font-medium text-foreground">Profile information:</span> height, weight, age, activity level</li>
            <li><span className="font-medium text-foreground">Workout data:</span> exercises, sets, reps, logged dates, progress, streaks</li>
            <li><span className="font-medium text-foreground">App usage data:</span> basic app interactions to improve performance and reliability</li>
          </ul>
        </section>

        {/* How We Use Your Information */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">How We Use Your Information</h2>
          <p className="text-muted-foreground">We use your data to:</p>
          <ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground">
            <li>Create and manage your account</li>
            <li>Log and store your workouts</li>
            <li>Track progress and consistency</li>
            <li>Improve app stability and user experience</li>
            <li>Communicate important updates related to your account</li>
          </ul>
          <p className="font-medium mt-4">We do not sell your personal data.</p>
        </section>

        {/* Data Storage & Security */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Data Storage & Security</h2>
          <ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground">
            <li>Your data is securely stored on our servers</li>
            <li>We follow standard security practices to protect your information</li>
            <li>Access to data is limited to authorized systems only</li>
          </ul>
        </section>

        {/* Data Sharing */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Data Sharing</h2>
          <p className="text-muted-foreground">We do not share your personal data with third parties, except:</p>
          <ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground">
            <li>When required by law</li>
            <li>To protect the safety, rights, or integrity of Logger and its users</li>
          </ul>
        </section>

        {/* Data Retention */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Data Retention</h2>
          <p className="text-muted-foreground">
            Your data is stored as long as your account remains active.
            If you request account deletion, your data will be permanently removed from our systems.
          </p>
        </section>

        {/* Your Rights */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Your Rights</h2>
          <p className="text-muted-foreground">You have the right to:</p>
          <ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground">
            <li>Access your personal data</li>
            <li>Update or correct your information</li>
            <li>Request deletion of your account and associated data</li>
          </ul>
          <div className="pt-4">
            <button className="px-6 py-2.5 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors">
              Delete Account
            </button>
          </div>
        </section>

        {/* Children’s Privacy */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Children’s Privacy</h2>
          <p className="text-muted-foreground">
            Logger is not intended for users under the age of 13.
            We do not knowingly collect data from children.
          </p>
        </section>

        {/* Changes to This Policy */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Changes to This Policy</h2>
          <p className="text-muted-foreground">
            We may update this Privacy Policy from time to time.
            Any changes will be reflected within the app.
          </p>
        </section>

        {/* Contact Us */}
        <section className="space-y-6 pt-8 border-t border-border">
          <h2 className="text-2xl font-semibold">Contact Us</h2>
          <p className="text-muted-foreground">If you have any questions or concerns about this Privacy Policy, you can contact us at:</p>
          
          <div className="flex flex-col sm:flex-row gap-6 mt-4">
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                📧
              </span>
              <a href="mailto:support@arthlete.fit" className="hover:text-primary transition-colors">support@arthlete.fit</a>
            </div>
            
            <div className="flex items-center gap-3">
               <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                📞
              </span>
              <a href="tel:7208315878" className="hover:text-primary transition-colors">7208315878</a>
            </div>
          </div>
        </section>

        <footer className="pt-12 text-center text-sm text-muted-foreground">
          <p>Logger</p>
          <p>Powered by Arthlete</p>
        </footer>

      </div>
    </main>
  );
}
