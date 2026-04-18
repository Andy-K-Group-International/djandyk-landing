"use client";

import { cn } from "@/lib/utils";
import { Check, Upload } from "lucide-react";

const COUNTRIES = [
  "Afghanistan","Albania","Algeria","Andorra","Angola","Antigua and Barbuda","Argentina","Armenia","Australia","Austria",
  "Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bhutan",
  "Bolivia","Bosnia and Herzegovina","Botswana","Brazil","Brunei","Bulgaria","Burkina Faso","Burundi","Cabo Verde","Cambodia",
  "Cameroon","Canada","Central African Republic","Chad","Chile","China","Colombia","Comoros","Congo (DRC)","Congo (Republic)",
  "Costa Rica","Croatia","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador",
  "Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Eswatini","Ethiopia","Fiji","Finland","France",
  "Gabon","Gambia","Georgia","Germany","Ghana","Greece","Grenada","Guatemala","Guinea","Guinea-Bissau",
  "Guyana","Haiti","Honduras","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland",
  "Israel","Italy","Ivory Coast","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kiribati","Kosovo",
  "Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania",
  "Luxembourg","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius",
  "Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Morocco","Mozambique","Myanmar","Namibia",
  "Nauru","Nepal","Netherlands","New Zealand","Nicaragua","Niger","Nigeria","North Korea","North Macedonia","Norway",
  "Oman","Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland",
  "Portugal","Qatar","Romania","Russia","Rwanda","Saint Kitts and Nevis","Saint Lucia","Saint Vincent and the Grenadines",
  "Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore",
  "Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","Sudan",
  "Suriname","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor-Leste","Togo",
  "Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Tuvalu","Uganda","Ukraine","United Arab Emirates",
  "United Kingdom","United States","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Yemen","Zambia","Zimbabwe",
];

interface QuestionOption {
  label: string;
  value: string;
}

interface Question {
  id: string;
  question: string;
  type: string;
  required: boolean;
  options?: QuestionOption[];
  placeholder?: string;
}

interface FieldRendererProps {
  question: Question;
  value: any;
  onChange: (value: any) => void;
}

const inputClass =
  "w-full rounded-lg border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] px-4 py-2.5 text-sm text-foreground placeholder:text-[rgba(255,255,255,0.3)] focus:outline-none focus:border-highlight focus:ring-1 focus:ring-highlight/30 transition-colors";

export default function FieldRenderer({ question, value, onChange }: FieldRendererProps) {
  switch (question.type) {
    case "text":
    case "url":
    case "email":
    case "phone":
      return (
        <input
          type={question.type === "phone" ? "tel" : question.type === "url" ? "url" : question.type === "email" ? "email" : "text"}
          value={value || ""}
          onChange={(e) => onChange(e.target.value)}
          placeholder={question.placeholder || ""}
          className={inputClass}
        />
      );

    case "number":
      return (
        <input
          type="number"
          value={value || ""}
          onChange={(e) => onChange(e.target.value)}
          placeholder={question.placeholder || ""}
          className={inputClass}
        />
      );

    case "long-text":
      return (
        <textarea
          value={value || ""}
          onChange={(e) => onChange(e.target.value)}
          placeholder={question.placeholder || ""}
          rows={4}
          className={cn(inputClass, "resize-y min-h-[100px]")}
        />
      );

    case "single-select":
      return (
        <div className="grid gap-2">
          {question.options?.map((option) => {
            const selected = value === option.value;
            return (
              <button
                key={option.value}
                type="button"
                onClick={() => onChange(option.value)}
                className={cn(
                  "flex items-center gap-3 w-full rounded-lg border px-4 py-2.5 text-left text-sm transition-all duration-200 cursor-pointer",
                  selected
                    ? "border-highlight bg-highlight/5 text-foreground shadow-sm"
                    : "border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] text-foreground hover:border-[rgba(255,255,255,0.15)] hover:bg-[rgba(255,255,255,0.05)]"
                )}
              >
                <span
                  className={cn(
                    "flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2 transition-colors duration-200",
                    selected ? "border-highlight bg-highlight" : "border-[rgba(255,255,255,0.15)]"
                  )}
                >
                  {selected && <span className="h-1.5 w-1.5 rounded-full bg-white" />}
                </span>
                <span className="font-medium">{option.label}</span>
              </button>
            );
          })}
        </div>
      );

    case "multi-select":
      return (
        <div className="grid gap-2">
          {question.options?.map((option) => {
            const selectedValues: string[] = Array.isArray(value) ? value : [];
            const isSelected = selectedValues.includes(option.value);
            return (
              <button
                key={option.value}
                type="button"
                onClick={() => {
                  const updated = isSelected
                    ? selectedValues.filter((v) => v !== option.value)
                    : [...selectedValues, option.value];
                  onChange(updated);
                }}
                className={cn(
                  "flex items-center gap-3 w-full rounded-lg border px-4 py-2.5 text-left text-sm transition-all duration-200 cursor-pointer",
                  isSelected
                    ? "border-highlight bg-highlight/5 text-foreground shadow-sm"
                    : "border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] text-foreground hover:border-[rgba(255,255,255,0.15)] hover:bg-[rgba(255,255,255,0.05)]"
                )}
              >
                <span
                  className={cn(
                    "flex h-4 w-4 shrink-0 items-center justify-center rounded-[3px] border-2 transition-colors duration-200",
                    isSelected ? "border-highlight bg-highlight" : "border-[rgba(255,255,255,0.15)]"
                  )}
                >
                  {isSelected && <Check className="h-2.5 w-2.5 text-white" />}
                </span>
                <span className="font-medium">{option.label}</span>
              </button>
            );
          })}
        </div>
      );

    case "checkbox":
      return (
        <label className="flex items-start gap-3 cursor-pointer group">
          <span
            onClick={() => onChange(!value)}
            className={cn(
              "mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-[3px] border-2 transition-colors duration-200 cursor-pointer",
              value ? "border-highlight bg-highlight" : "border-[rgba(255,255,255,0.15)]"
            )}
          >
            {value && <Check className="h-2.5 w-2.5 text-white" />}
          </span>
          <span
            onClick={() => onChange(!value)}
            className="text-sm text-foreground leading-relaxed group-hover:text-foreground/80 transition-colors"
          >
            {question.question}
          </span>
        </label>
      );

    case "address":
      return (
        <div className="grid gap-3">
          <div>
            <label className="block text-xs font-medium text-[rgba(255,255,255,0.5)] mb-1">Address Line 1</label>
            <input value={value?.line1 || ""} onChange={(e) => onChange({ ...value, line1: e.target.value })} placeholder="Street address" className={inputClass} />
          </div>
          <div>
            <label className="block text-xs font-medium text-[rgba(255,255,255,0.5)] mb-1">Address Line 2</label>
            <input value={value?.line2 || ""} onChange={(e) => onChange({ ...value, line2: e.target.value })} placeholder="Apartment, suite, etc. (optional)" className={inputClass} />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-[rgba(255,255,255,0.5)] mb-1">City</label>
              <input value={value?.city || ""} onChange={(e) => onChange({ ...value, city: e.target.value })} placeholder="City" className={inputClass} />
            </div>
            <div>
              <label className="block text-xs font-medium text-[rgba(255,255,255,0.5)] mb-1">Postcode</label>
              <input value={value?.postcode || ""} onChange={(e) => onChange({ ...value, postcode: e.target.value })} placeholder="Postcode" className={inputClass} />
            </div>
          </div>
          <div>
            <label className="block text-xs font-medium text-[rgba(255,255,255,0.5)] mb-1">Country</label>
            <select
              value={value?.country || ""}
              onChange={(e) => onChange({ ...value, country: e.target.value })}
              className={cn(inputClass, "appearance-none")}
            >
              <option value="">Select country</option>
              {COUNTRIES.map((c) => (<option key={c} value={c}>{c}</option>))}
            </select>
          </div>
        </div>
      );

    case "file":
      return (
        <div>
          <div
            className="flex flex-col items-center justify-center gap-3 rounded-lg border-2 border-dashed border-[rgba(255,255,255,0.08)] px-6 py-8 text-center transition-colors duration-200 cursor-pointer hover:border-highlight/50 hover:bg-highlight/5"
            onDragOver={(e) => { e.preventDefault(); e.stopPropagation(); }}
            onDrop={(e) => { e.preventDefault(); e.stopPropagation(); onChange(Array.from(e.dataTransfer.files).map((f) => f.name)); }}
            onClick={() => {
              const input = document.createElement("input");
              input.type = "file"; input.multiple = true;
              input.onchange = () => { if (input.files) onChange(Array.from(input.files).map((f) => f.name)); };
              input.click();
            }}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(255,255,255,0.05)]">
              <Upload className="h-4 w-4 text-[rgba(255,255,255,0.5)]" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">Drop files here or click to browse</p>
              <p className="mt-1 text-xs text-[rgba(255,255,255,0.4)]">PDF, DOCX, PPTX, images up to 10MB</p>
            </div>
          </div>
          {Array.isArray(value) && value.length > 0 && (
            <div className="mt-3 space-y-1.5">
              {value.map((name: string, i: number) => (
                <div key={i} className="flex items-center gap-2 rounded-md bg-[rgba(255,255,255,0.05)] px-3 py-1.5 text-xs text-foreground">
                  <Check className="h-3 w-3 text-highlight" />
                  <span className="truncate">{name}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      );

    default:
      return null;
  }
}
