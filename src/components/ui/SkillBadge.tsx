interface SkillBadgeProps {
  label: string;
}

export default function SkillBadge({ label }: SkillBadgeProps) {
  return (
    <span className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700 ring-1 ring-indigo-100">
      {label}
    </span>
  );
}
