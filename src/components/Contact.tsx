"use client"
import { Mail, MessageSquare, Phone,MapPin,Github,Linkedin, Download } from 'lucide-react'
import React, { useState, useEffect } from 'react'
import { trackContactForm, trackExternalLink } from '@/utils/analytics'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [allSubmissions, setAllSubmissions] = useState<Array<{
    name: string;
    email: string;
    message: string;
    date: string;
  }>>([]);

  // Load existing submissions from localStorage on component mount
  useEffect(() => {
    const savedSubmissions = localStorage.getItem('contactFormSubmissions');
    if (savedSubmissions) {
      setAllSubmissions(JSON.parse(savedSubmissions));
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const downloadExcel = () => {
    if (allSubmissions.length === 0) {
      alert('No submissions to download yet!');
      return;
    }

    // Create CSV content (Excel can open CSV files)
    const headers = 'Name,Email,Message,Date\n';
    const csvContent = allSubmissions.map(submission => 
      `"${submission.name}","${submission.email}","${submission.message}","${submission.date}"`
    ).join('\n');
    
    const fullCsv = headers + csvContent;
    const blob = new Blob([fullCsv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      link.setAttribute('href', url);
      link.setAttribute('download', `contact-form-submissions-${new Date().toISOString().split('T')[0]}.csv`);
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    // Track form submission start
    trackContactForm('start');

    try {
      // Netlify Forms - automatically detected when deployed
      const formDataToSend = new FormData();
      formDataToSend.append('form-name', 'contact-form');
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('message', formData.message);

      // Submit to Netlify Forms
      const response = await fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formDataToSend as any).toString(),
      });

      if (response.ok) {
        // Also save locally as backup
        const newSubmission = {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          date: new Date().toLocaleString()
        };

        const updatedSubmissions = [...allSubmissions, newSubmission];
        setAllSubmissions(updatedSubmissions);
        localStorage.setItem('contactFormSubmissions', JSON.stringify(updatedSubmissions));

        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        
        // Track successful submission
        trackContactForm('submit');
        
        // Reset success message after 3 seconds
        setTimeout(() => setSubmitStatus('idle'), 3000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
      
      // Track form error
      trackContactForm('error');
      
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-10 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center mb-8">
            <MessageSquare className="w-8 h-8 text-orange-600 mr-4" />
            <h2 className="text-2xl md:text-4xl font-bold text-slate-800">Get In Touch</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Let&apos;s work together</h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                I&apos;m always interested in new opportunities and exciting projects. 
                Whether you&apos;re a startup looking to build your MVP or an established 
                company seeking to improve your digital presence, I&apos;d love to hear from you.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-orange-600 mr-3" />
                  <a href="mailto:suman@ridengo.in" className="text-slate-600 hover:text-orange-600">
                  suman@ridengo.in
                  </a>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-orange-600 mr-3" />
                  <a href="tel:+1234567890" className="text-slate-600 hover:text-orange-600">
                    +91 7063143519
                  </a>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-orange-600 mr-3" />
                  <span className="text-slate-600">Bangalore, India</span>
                </div>
              </div>
              
              <div className="flex gap-4 mt-8">
                <a
                  href="https://github.com/suman7063"
                  onClick={() => trackExternalLink('https://github.com/suman7063', 'social')}
                  className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center hover:bg-orange-600 hover:text-white transition-colors duration-200"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/suman-singh-65685b130/"
                  onClick={() => trackExternalLink('https://www.linkedin.com/in/suman-singh-65685b130/', 'social')}
                  className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center hover:bg-orange-600 hover:text-white transition-colors duration-200"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div className="bg-slate-50 md:p-8 p-4 rounded-xl">
              <form 
                onSubmit={handleSubmit} 
                className="space-y-6"
                data-netlify="true"
                name="contact-form"
                method="POST"
                netlify-honeypot="bot-field"
              >
                {/* Netlify form detection */}
                <input type="hidden" name="form-name" value="contact-form" />
                <input type="hidden" name="bot-field" />
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors text-gray-700"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors text-gray-700"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors resize-none text-gray-700"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                {submitStatus === 'success' && (
                  <div className="p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                    ✅ Message sent successfully! You&apos;ll receive an email confirmation.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                    Something went wrong. Please try again.
                  </div>
                )}
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors duration-200 font-semibold disabled:bg-orange-400 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {/* Download Excel Button */}
                <div className="border-t pt-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-slate-600">
                      Total Submissions: {allSubmissions.length}
                    </span>
                    <button
                      type="button"
                      onClick={downloadExcel}
                      disabled={allSubmissions.length === 0}
                      className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed text-sm"
                    >
                      <Download className="w-4 h-4" />
                      Download Excel (CSV)
                    </button>
                  </div>
                  
                  {allSubmissions.length > 0 && (
                    <div className="text-xs text-slate-500">
                      💡 CSV files open directly in Excel. All form submissions are automatically saved.
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Contact