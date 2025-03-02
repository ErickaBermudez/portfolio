import { ReactNode } from "react";

interface FloatingButtonProps {
  showMessage: boolean;
  setShowMessage: (showMessage: boolean) => void;
  content: ReactNode;
  icon: ReactNode;
  color: string;
}

export const FloatingButton = ({
  showMessage,
  setShowMessage,
  content,
  icon,
  color,
}: FloatingButtonProps) => {
  return (
    <div>
      <div className="absolute bottom-8 right-8 flex items-center">
        {showMessage && (
          <div className="absolute bottom-16 right-8 bg-white p-4 rounded-lg shadow-lg min-w-[300px]">
            {content}
          </div>
        )}
        <button
          onClick={() => setShowMessage(!showMessage)}
          className={`w-12 h-12 rounded-full shadow-lg ${color} flex items-center justify-center hover:scale-110 transition-transform duration-200`}
        >
          {icon}
        </button>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};
