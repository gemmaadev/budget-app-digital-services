import { Info } from "lucide-react";
import { useState } from "react";

interface WebConfiguratorProps {
  pages: number;
  languages: number;
  onPagesChange: (value: number) => void;
  onLanguagesChange: (value: number) => void;
}

export function WebConfigurator({
  pages,
  languages,
  onPagesChange,
  onLanguagesChange,
}: WebConfiguratorProps) {
  const [isPagesModalOpen, setIsPagesModalOpen] = useState(false);
  const [isLanguagesModalOpen, setIsLanguagesModalOpen] = useState(false);

  return (
    <div className="flex flex-col gap-2 pt-6">
      <div className="flex items-center justify-end gap-3">
        <div className="relative">
          <Info
            className="w-4 h-4 cursor-help"
            onClick={() => setIsPagesModalOpen(!isPagesModalOpen)}
          />
          {isPagesModalOpen && (
            <div
              className="fixed inset-0 bg-black/40 z-20 flex items-center justify-center"
              onClick={() => setIsPagesModalOpen(false)}
            >
              <div
                className="bg-white rounded-2xl shadow-xl p-10 w-80 md:p-20 md:w-120 text-center"
                onClick={(event) => event.stopPropagation()}
              >
                <div className="flex flex-col gap-3">
                  <p className="font-bold text-lg">Número de pàgines</p>
                  <p className="text-sm">
                    Afegeix les pàgines que tindrà el teu projecte. El cost de
                    cada pàgina és de 30€.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
        <label className="text-sm">Número pàgines:</label>
        <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
          <button
            type="button"
            onClick={() => onPagesChange(Math.max(1, pages - 1))}
            className="px-3 py-1"
          >
            -
          </button>
          <span className="px-3 py-1 border-x border-gray-200">{pages}</span>
          <button
            type="button"
            onClick={() => onPagesChange(pages + 1)}
            className="px-3 py-1"
          >
            +
          </button>
        </div>
      </div>

      <div className="flex items-center justify-end gap-3">
        <Info
          className="w-4 h-4 cursor-help"
          onClick={() => setIsLanguagesModalOpen(!isLanguagesModalOpen)}
        />
        {isLanguagesModalOpen && (
          <div
            className="fixed inset-0 bg-black/40 z-20 flex items-center justify-center"
            onClick={() => setIsLanguagesModalOpen(false)}
          >
            <div
              className="bg-white rounded-2xl shadow-xl p-10 w-80 md:p-20 md:w-120 text-center"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex flex-col gap-3">
                <p className="font-bold text-lg">Número de llenguatges</p>
                <p className="text-sm">
                  Afegeix els llenguatges que tindrà el teu projecte. El cost de
                  cada llenguatge és de 30€.
                </p>
              </div>
            </div>
          </div>
        )}
        <label className="text-sm">Número llenguatges:</label>
        <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
          <button
            type="button"
            onClick={() => onLanguagesChange(Math.max(1, languages - 1))}
            className="px-3 py-1"
          >
            -
          </button>
          <span className="px-3 py-1 border-x border-gray-200">
            {languages}
          </span>
          <button
            type="button"
            onClick={() => onLanguagesChange(languages + 1)}
            className="px-3 py-1"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
