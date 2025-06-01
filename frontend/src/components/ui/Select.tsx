"use client";

interface SelectProps {
    label: string;
    placeholder: string;
    options: string[];
    value: string;
    onChange: (value: string) => void;
    disabled?: boolean;
}

export default function Select({ label, placeholder, options, value, onChange, disabled }: SelectProps) {
    return (
        <label className="form-control w-full max-w-xs">
            <div className="label">
                <span className="label-text">{label}</span>
            </div>
            <select className="select select-primary w-full max-w-xs" value={value} onChange={(e) => onChange(e.target.value)} disabled={disabled}>
                <option value="">{placeholder}</option>
                {options.map((option) => (
                    <option key={option} value={option}>{option}</option>
                ))}
            </select>
        </label>
    );
}