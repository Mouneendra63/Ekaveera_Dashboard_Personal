import { useState, useEffect } from 'react';
import { Heart, Activity, Shield, Stethoscope, Plus } from 'lucide-react';

export default function MedicalLogo() {
  const [animationStage, setAnimationStage] = useState(0);

  useEffect(() => {
    const stageTimings = [300, 800, 1300, 1800];
    const timers: NodeJS.Timeout[] = [];

    for (let i = 0; i < stageTimings.length; i++) {
      timers.push(setTimeout(() => setAnimationStage(i + 1), stageTimings[i]));
    }

    const redirectTimer = setTimeout(() => {
      window.location.href = '/ekaveeradashboard';
    }, 5000);

    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(redirectTimer);
    };
  }, []);

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
    <div className="flex flex-col items-center justify-center h-[80vh] bg-gradient-to-br from-blue-50 via-blue-100 to-indigo-50 rounded-xl shadow-lg p-6 mb-10">
      <div className="relative flex items-center justify-center mb-6 h-28 w-full">

        {/* Heart in center */}
        <div className={`absolute left-1/2 transform -translate-x-1/2 transition-all duration-500 ease-out ${heartClass} text-red-500 z-20`}>
          <Heart size={40} strokeWidth={2.5} fill="rgba(239, 68, 68, 0.15)" />
        </div>

        {/* EKG line behind heart */}
        <div className={`absolute left-1/2 transform -translate-x-1/2 transition-all duration-1000 ease-in-out ${lineClass} z-10`}>
          <Activity size={68} className="text-blue-600" strokeWidth={2.5} />
        </div>

        {/* Shield on right */}
        <div className={`absolute right-8 transition-all duration-700 ease-out ${shieldClass} text-green-600 z-20`}>
          <Shield size={34} strokeWidth={2.5} fill="rgba(22, 163, 74, 0.15)" />
        </div>

        {/* Plus sign on top of shield */}
        <div className={`absolute right-8 top-0 transition-all duration-700 ease-out ${crossClass} text-blue-600 z-30`}>
          <Plus size={20} strokeWidth={3.5} />
        </div>

        {/* Stethoscope near shield */}
        <div className={`absolute right-4 bottom-0 transition-all duration-500 ease-out ${shieldClass} text-indigo-500 opacity-70 z-10`}>
          <Stethoscope size={24} strokeWidth={1.5} />
        </div>
      </div>

      {/* Text */}
      <div className={`transition-all duration-700 ease-out transform ${textClass} text-center`}>
        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent">MediPulse</h1>
        <p className="text-sm text-gray-600 mt-1 font-medium">Ekaveera Medical Dashboard</p>
      </div>
    </div>
  );
}