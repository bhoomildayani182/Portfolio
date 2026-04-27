'use client';

import { FormEvent, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const contactMethods = [
  { label: 'Email', value: 'hello@bhoomild.com', href: 'mailto:hello@bhoomild.com' },
  { label: 'Phone', value: '+91 9033706595', href: 'tel:+919033706595' },
  { label: 'Location', value: 'Ahmedabad, Gujarat, India' },
  { label: 'Resume', value: 'Download CV', href: 'https://github.com/user-attachments/files/25255455/Bhoomil-Dayani-Resume.pdf' },
];

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/bhoomildayani182' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/bhoomildayani' },
  { label: 'Twitter', href: 'https://x.com/Bhoomil_Dayani' },
  { label: 'Upwork', href: 'https://www.upwork.com/freelancers/~014ee5b1482f2068e5?mp_source=share' },
];

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('contact');
      if (!element) return;
      const rect = element.getBoundingClientRect();
      setIsVisible(rect.top <= window.innerHeight * 0.78);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!submitStatus) return;
    const timer = setTimeout(() => setSubmitStatus(null), 5000);
    return () => clearTimeout(timer);
  }, [submitStatus]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.65, staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const formDataObj = new FormData();
      formDataObj.append('name', formData.name);
      formDataObj.append('email', formData.email);
      formDataObj.append('subject', formData.subject);
      formDataObj.append('message', formData.message);
      formDataObj.append('_subject', 'New contact from Portfolio Website');
      formDataObj.append('_template', 'table');

      const response = await fetch('https://formsubmit.co/ajax/hello@bhoomild.com', {
        method: 'POST',
        body: formDataObj,
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const fieldClass = 'w-full rounded-lg border border-line bg-panel-bg px-4 py-3 text-foreground outline-none ring-primary/30 transition focus:border-primary/45 focus:ring-2';

  return (
    <section className="relative overflow-hidden px-5 py-24 md:px-8 lg:px-10" id="contact">
      <motion.div
        className="mx-auto max-w-7xl"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
      >
        <motion.div variants={itemVariants} className="mb-12 max-w-3xl">
          <span className="section-kicker">Get In Touch</span>
          <h1 className="section-heading">
            Let&apos;s build reliable <span className="gradient-text">cloud systems</span>
          </h1>
          <p className="section-copy mt-5">
            Have a question or want to work together? Reach out for Cloud, DevOps, CI/CD, infrastructure automation, or platform engineering work.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.aside variants={itemVariants} className="surface-card p-5 md:p-8">
            <h3 className="text-2xl font-black text-foreground">Contact Information</h3>
            <p className="mt-3 leading-7 text-gray-medium">
              I am available for new projects, infrastructure reviews, DevOps automation, and Cloud engineering collaboration.
            </p>

            <div className="mt-8 grid gap-3">
              {contactMethods.map((method) => (
                <div key={method.label} className="rounded-lg border border-line bg-panel-bg p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-gray-medium">{method.label}</p>
                  {method.href ? (
                    <a
                      href={method.href}
                      target={method.href.startsWith('http') ? '_blank' : undefined}
                      rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="mt-2 block break-words text-base font-bold text-foreground transition-colors hover:text-primary-dark"
                    >
                      {method.value}
                    </a>
                  ) : (
                    <p className="mt-2 text-base font-bold text-foreground">{method.value}</p>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-8 border-t border-line pt-6">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-gray-medium">Connect</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md border border-line bg-white px-3 py-2 text-sm font-bold text-gray-dark transition-colors hover:border-primary/40 hover:text-primary-dark"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.aside>

          <motion.div variants={itemVariants} className="surface-card p-5 md:p-8">
            <h3 className="text-2xl font-black text-foreground">Send me a message</h3>

            {submitStatus === 'success' && (
              <div className="mt-5 rounded-lg border border-secondary/30 bg-secondary/10 p-4 text-sm font-bold text-secondary-dark">
                Message sent successfully. I&apos;ll get back to you soon.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mt-5 rounded-lg border border-red-300/30 bg-red-300/10 p-4 text-sm font-bold text-red-700">
                There was an error sending your message. Please try emailing me directly at hello@bhoomild.com.
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-6">
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-bold text-gray-dark">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className={fieldClass}
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-bold text-gray-dark">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className={fieldClass}
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="subject" className="mb-2 block text-sm font-bold text-gray-dark">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className={fieldClass}
                  placeholder="Project Inquiry"
                />
              </div>

              <div className="mt-5">
                <label htmlFor="message" className="mb-2 block text-sm font-bold text-gray-dark">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className={`${fieldClass} resize-none`}
                  placeholder="Hello Bhoomil, I would like to discuss a potential project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-6 inline-flex w-full items-center justify-center rounded-md border border-primary/45 bg-primary px-5 py-3 text-sm font-black text-white transition-all hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-65"
              >
                {isSubmitting ? 'Sending message...' : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
