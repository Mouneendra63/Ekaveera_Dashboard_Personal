import { useState, useEffect } from 'react';
import { Heart, Activity, Shield, Stethoscope, Plus } from 'lucide-react';

export default function MedicalLogo() {
  const [animationStage, setAnimationStage] = useState(0);
  
  useEffect(() => {
    // Animation sequence timing - optimized for 3 seconds total
    const stageTimings = [
      300,  // Heart appears with pulse
      800,  // Activity line grows
      1300, // Shield and cross appear
      1800  // Text appears with fade
    ];
    
    // Set up animation sequence
    const timers: NodeJS.Timeout[] = [];
    
    for (let i = 0; i < stageTimings.length; i++) {
      const timer = setTimeout(() => {
        setAnimationStage(i + 1);
      }, stageTimings[i]);
      
      timers.push(timer);
    }
    
    // Setup redirect after 3 seconds
    const redirectTimer = setTimeout(() => {
      window.location.href = '/ekaveeradashboard';
    }, 3000);
    
    // Cleanup on unmount
    return () => {
      timers.forEach(timer => clearTimeout(timer));
      clearTimeout(redirectTimer);
    };
  }, []);
  
  // Enhanced animation classes
  const heartClass = animationStage >= 1 
    ? "scale-100 opacity-100 animate-pulse" 
    : "scale-0 opacity-0";
  
  const lineClass = animationStage >= 2 
    ? "w-full opacity-100" 
    : "w-0 opacity-0";
  
  const shieldClass = animationStage >= 3 
    ? "scale-100 opacity-100" 
    : "scale-0 opacity-0";
  
  const crossClass = animationStage >= 3 
    ? "rotate-0 opacity-100" 
    : "rotate-90 opacity-0";
    
  const textClass = animationStage >= 4 
    ? "opacity-100 translate-y-0" 
    : "opacity-0 translate-y-4";
  
  return (
    <div className="flex flex-col items-center justify-center h-64 bg-gradient-to-br from-blue-50 via-blue-100 to-indigo-50 rounded-xl shadow-lg p-6">
      <div className="relative flex items-center justify-center mb-6 h-28 w-full">
        {/* Heart with subtle pulse animation */}
        <div className={`absolute transition-all duration-500 ease-out transform ${heartClass} text-red-500`}>
          <Heart size={40} strokeWidth={2.5} fill="rgba(239, 68, 68, 0.15)" />
        </div>
      
        {/* EKG Line with growth animation */}
        <div className={`absolute transition-all duration-1000 ease-in-out transform ${lineClass} overflow-hidden`}>
          <Activity size={68} className="text-blue-600" strokeWidth={2.5} />
        </div>
      
        {/* Medical Shield with fade-in */}
        <div className={`absolute transition-all duration-700 ease-out transform ${shieldClass} text-green-600`}>
          <Shield size={34} strokeWidth={2.5} fill="rgba(22, 163, 74, 0.15)" />
        </div>
        
        {/* Medical Cross overlay */}
        <div className={`absolute transition-all duration-700 ease-out transform ${crossClass} text-blue-600`}>
          <Plus size={20} strokeWidth={3.5} />
        </div>
        
        {/* Stethoscope accent */}
        <div className={`absolute -right-1 -bottom-2 transition-all duration-500 ease-out transform ${shieldClass} text-indigo-500 opacity-70`}>
          <Stethoscope size={24} strokeWidth={1.5} />
        </div>
      </div>
    
      {/* Text with improved typography */}
      <div className={`transition-all duration-700 ease-out transform ${textClass} text-center`}>
        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent">MediPulse</h1>
        <p className="text-sm text-gray-600 mt-1 font-medium">Advanced Healthcare Solutions</p>
      </div>
    </div>
  );
}