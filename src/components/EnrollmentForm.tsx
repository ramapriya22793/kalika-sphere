import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, CreditCard, Smartphone, CheckCircle2, Wallet, ShieldCheck } from 'lucide-react';
import { supabase } from '../supabaseClient';

interface EnrollmentFormProps {
  setCurrentView?: (view: 'home' | 'programs' | 'pro-programs' | 'gallery' | 'enroll' | 'summer-workshop') => void;
}

const InputField = ({ label, type = "text", placeholder, required = false, name, value, onChange }: any) => (
  <div className="space-y-1.5 focus-within:z-10 relative">
    <label className="text-[11px] font-bold text-stone-700 uppercase tracking-widest pl-1">{label} {required && '*'}</label>
    <input 
      type={type} 
      name={name}
      value={value}
      required={required} 
      placeholder={placeholder}
      onChange={onChange}
      className="w-full px-4 py-3 bg-white border border-stone-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C21515]/20 focus:border-[#C21515] transition-all font-medium text-stone-900 placeholder:text-stone-400 text-sm shadow-sm" 
    />
  </div>
);

const EnrollmentForm = ({ setCurrentView }: EnrollmentFormProps) => {
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'upi' | 'inperson'>('inperson');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    parent_name: '',
    phone: '',
    email: '',
    child_name: '',
    age: '',
    program: '',
    medical_conditions: '',
    payment_method: 'inperson',
    amount: 'Dynamic'
  });

  const programs = [
    "Summer Camp 2026 (06 DAYS) - ₹9,999",
    "Kids Lab Program (Ages 4-10)",
    "Pro Lab Program (Ages 11-14)"
  ];

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { error } = await supabase
      .from('bookings')
      .insert([
        {
          ...formData,
          payment_method: paymentMethod
        }
      ]);

    if (error) {
      console.error(error);
      alert("Error ❌: " + (error.message || "Unknown Database Error") + "\n\nDetails: " + (error.details || "None"));
    } else {
      setIsSubmitted(true);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-32 pb-20 px-4 md:px-8 bg-stone-50 flex items-center justify-center relative">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          className="bg-white rounded-3xl p-10 max-w-lg w-full text-center shadow-xl border border-stone-100 relative z-10"
        >
           <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
             <CheckCircle2 className="w-10 h-10" />
           </div>

          <h2 className="text-2xl font-bold text-stone-900 mb-4">Reservation Confirmed!</h2>
          <p className="text-stone-600 mb-8 font-medium">
            Your booking has been successfully saved. A representative from Kalika Sphere will contact you within 48 hours to confirm your details and batch timing.
          </p>
          <button 
            onClick={() => setCurrentView && setCurrentView('home')}
            className="bg-[#C21515] text-white px-8 py-3 rounded-xl font-bold hover:bg-red-700 transition-all w-full shadow-lg shadow-red-100"
          >
            Return to Homepage
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-28 pb-20 px-4 md:px-8 bg-stone-50 relative font-sans">
      <div className="max-w-[1100px] mx-auto relative z-10">
        
        {/* Navigation */}
        <button 
          onClick={() => setCurrentView && setCurrentView('home')}
          className="flex items-center gap-2 text-stone-500 hover:text-[#C21515] font-bold text-xs uppercase tracking-widest mb-8 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Kalika Sphere
        </button>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* Left Column: Form Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full lg:w-[60%]"
          >
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl font-black text-stone-900 mb-4 tracking-tight">
                Secure Your <span className="text-[#C21515]">Spot</span>
              </h1>
              <p className="text-stone-600 text-base max-w-xl font-medium">
                Please fill out the details below to secure a spot for the upcoming batches.
              </p>
            </div>

            <form id="enrollment-form" onSubmit={handleSubmit} className="space-y-8 p-2">
              
              <div className="space-y-6">
                
                <div>
                  <h3 className="text-lg font-bold text-stone-900 border-b border-stone-100 pb-2 mb-4">Parent Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <InputField name="parent_name" label="Full Name" placeholder="Enter parent's name" required value={formData.parent_name} onChange={handleChange} />
                    <InputField name="phone" label="Phone Number" type="tel" placeholder="+91 XXXX XXXXX" required value={formData.phone} onChange={handleChange} />
                    <div className="md:col-span-2">
                      <InputField name="email" label="Email Address" type="email" placeholder="hello@example.com" required value={formData.email} onChange={handleChange} />
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <h3 className="text-lg font-bold text-stone-900 border-b border-stone-100 pb-2 mb-4">Student Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <div className="md:col-span-2">
                      <InputField name="child_name" label="Child's Full Name" placeholder="Enter child's name" required value={formData.child_name} onChange={handleChange} />
                    </div>
                    <div>
                      <InputField name="age" label="Age" type="number" placeholder="E.g., 8" required value={formData.age} onChange={handleChange} />
                    </div>
                    
                    <div className="md:col-span-3 space-y-1.5 focus-within:z-10 relative">
                      <label className="text-[11px] font-bold text-stone-700 uppercase tracking-widest pl-1">Select Program *</label>
                      <div className="relative">
                        <select 
                          name="program"
                          required 
                          value={formData.program}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white border border-stone-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C21515]/20 focus:border-[#C21515] transition-all font-medium text-stone-900 appearance-none shadow-sm cursor-pointer text-sm"
                        >
                          <option value="" disabled>Choose a laboratory or program...</option>
                          {programs.map((prog, idx) => (
                            <option key={idx} value={prog}>{prog}</option>
                          ))}
                        </select>
                        <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                          <svg className="w-4 h-4 text-stone-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                      </div>
                    </div>

                    <div className="md:col-span-3">
                      <InputField name="medical_conditions" label="Medical Conditions (Optional)" placeholder="Any allergies or requirements" value={formData.medical_conditions} onChange={handleChange} />
                    </div>
                  </div>
                </div>

              </div>

            </form>
          </motion.div>

          {/* Right Column: Checkout Panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="w-full lg:w-[40%] sticky top-32"
          >
            <div className="bg-white rounded-[2rem] p-8 shadow-xl shadow-stone-200/50 border border-stone-100 overflow-hidden relative">
              <div className="mb-6">
                <h3 className="text-xl font-black text-stone-900 mb-1">Payment Method</h3>
                <p className="text-sm text-stone-500">Select how you want to secure your reservation.</p>
              </div>
              
              <div className="space-y-3 mb-6">
                
                {/* Option: In Person */}
                <div 
                  onClick={() => setPaymentMethod('inperson')}
                  className={`relative rounded-xl border-2 transition-all cursor-pointer p-4 ${
                    paymentMethod === 'inperson' 
                      ? 'border-[#C21515] bg-[#C21515]/5' 
                      : 'border-stone-100 hover:border-stone-200'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${paymentMethod === 'inperson' ? 'bg-[#C21515] text-white' : 'bg-stone-100 text-stone-500'}`}>
                      <Wallet className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className={`font-bold text-sm ${paymentMethod === 'inperson' ? 'text-[#C21515]' : 'text-stone-900'}`}>Pay at Center</div>
                      <div className="text-xs text-stone-500 font-medium">Reserve now, pay in person.</div>
                    </div>
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${paymentMethod === 'inperson' ? 'border-[#C21515]' : 'border-stone-300'}`}>
                      {paymentMethod === 'inperson' && <div className="w-2.5 h-2.5 bg-[#C21515] rounded-full"></div>}
                    </div>
                  </div>
                </div>

                {/* Option: Card */}
                <div 
                  onClick={() => setPaymentMethod('card')}
                  className={`relative rounded-xl border-2 transition-all cursor-pointer p-4 ${
                    paymentMethod === 'card' 
                      ? 'border-[#C21515] bg-[#C21515]/5' 
                      : 'border-stone-100 hover:border-stone-200'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${paymentMethod === 'card' ? 'bg-[#C21515] text-white' : 'bg-stone-100 text-stone-500'}`}>
                      <CreditCard className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className={`font-bold text-sm ${paymentMethod === 'card' ? 'text-[#C21515]' : 'text-stone-900'}`}>Secure Online</div>
                      <div className="text-xs text-stone-500 font-medium">Credit or Debit Card</div>
                    </div>
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${paymentMethod === 'card' ? 'border-[#C21515]' : 'border-stone-300'}`}>
                      {paymentMethod === 'card' && <div className="w-2.5 h-2.5 bg-[#C21515] rounded-full"></div>}
                    </div>
                  </div>
                  
                  {/* Expanded Card Details */}
                  <AnimatePresence>
                    {paymentMethod === 'card' && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 space-y-3">
                          <input type="text" placeholder="Card Number" className="w-full px-4 py-2.5 bg-white border border-stone-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#C21515]/30" />
                          <div className="grid grid-cols-2 gap-3">
                            <input type="text" placeholder="MM/YY" className="w-full px-4 py-2.5 bg-white border border-stone-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#C21515]/30" />
                            <input type="text" placeholder="CVC" className="w-full px-4 py-2.5 bg-white border border-stone-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#C21515]/30" />
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Option: UPI */}
                <div 
                  onClick={() => setPaymentMethod('upi')}
                  className={`relative rounded-xl border-2 transition-all cursor-pointer p-4 ${
                    paymentMethod === 'upi' 
                      ? 'border-[#C21515] bg-[#C21515]/5' 
                      : 'border-stone-100 hover:border-stone-200'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${paymentMethod === 'upi' ? 'bg-[#C21515] text-white' : 'bg-stone-100 text-stone-500'}`}>
                      <Smartphone className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className={`font-bold text-sm ${paymentMethod === 'upi' ? 'text-[#C21515]' : 'text-stone-900'}`}>UPI Transfer</div>
                      <div className="text-xs text-stone-500 font-medium">GPay, PhonePe, Paytm</div>
                    </div>
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${paymentMethod === 'upi' ? 'border-[#C21515]' : 'border-stone-300'}`}>
                      {paymentMethod === 'upi' && <div className="w-2.5 h-2.5 bg-[#C21515] rounded-full"></div>}
                    </div>
                  </div>
                </div>

              </div>

              {/* Order Summary Line */}
              <div className="py-4 border-t border-stone-100 flex items-center justify-between mb-4">
                <span className="text-stone-500 font-bold text-sm uppercase tracking-wider">
                  {paymentMethod === 'inperson' ? "Due at Center" : "Total Payment"}
                </span>
                <span className="text-2xl font-black text-stone-900 flex items-baseline gap-1">
                  <span className="text-xs text-stone-400 font-bold">INR</span> Dynamic
                </span>
              </div>

              <button 
                type="submit" 
                form="enrollment-form"
                className="w-full py-4 rounded-xl font-bold text-white bg-[#C21515] hover:bg-red-700 transition-all shadow-lg shadow-red-100 active:scale-95"
              >
                {paymentMethod === 'inperson' ? "Reserve Drop-in Spot" : "Complete Fast Checkout"}
              </button>
              
              <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-center gap-2 text-[10px] font-bold text-stone-400 uppercase tracking-widest">
                <ShieldCheck className="w-3.5 h-3.5 text-stone-400" />
                <span>Encrypted Registration</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default EnrollmentForm;