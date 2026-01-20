
import React, { useState, useEffect } from 'react';
import { Service } from '../types.ts';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedService: Service | null;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, selectedService }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    service: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (selectedService) {
      setFormData(prev => ({ ...prev, service: selectedService.title }));
    }
  }, [selectedService]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call and storage
    setTimeout(() => {
      const bookings = JSON.parse(localStorage.getItem('institute_bookings') || '[]');
      const newBooking = {
        ...formData,
        id: Date.now(),
        date: new Date().toISOString(),
      };
      localStorage.setItem('institute_bookings', JSON.stringify([...bookings, newBooking]));
      
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset after success
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({ name: '', email: '', message: '', service: '' });
        onClose();
      }, 2000);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
      <div className="bg-white rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300">
        <div className="p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="heading-font text-2xl font-bold text-slate-900">Book a Service</h2>
            <button onClick={onClose} className="text-slate-400 hover:text-emerald-600 p-2 transition-colors">
              <i className="fas fa-times text-xl"></i>
            </button>
          </div>

          {isSuccess ? (
            <div className="py-12 text-center">
              <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-6">
                <i className="fas fa-check"></i>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Booking Received!</h3>
              <p className="text-slate-600">Uncle Blessing will contact you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Full Name</label>
                <input
                  required
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Email Address</label>
                <input
                  required
                  type="email"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Service Interest</label>
                <select
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all bg-white"
                  value={formData.service}
                  onChange={e => setFormData({ ...formData, service: e.target.value })}
                >
                  <option value="Academic Research">Academic Research</option>
                  <option value="Market Analysis">Market Analysis</option>
                  <option value="Business Consultation">Business Consultation</option>
                  <option value="Data Collection & Analysis">Data Collection & Analysis</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Message / Requirements</label>
                <textarea
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>
              <button
                disabled={isSubmitting}
                type="submit"
                className="w-full bg-emerald-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-emerald-700 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-emerald-200"
              >
                {isSubmitting ? (
                  <>
                    <i className="fas fa-circle-notch fa-spin"></i> Processing...
                  </>
                ) : (
                  'Confirm Booking'
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
