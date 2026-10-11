import { ChevronRight } from "lucide-react";

function SectionHeader({ title, subtitle, action }) {
  return (
    <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h3 className="text-[13px] font-semibold text-foreground">
          {title}
        </h3>

        {subtitle && (
          <p className="mt-1 text-[10px] text-muted">{subtitle}</p>
        )}
      </div>

      {action && (
        <button
          type="button"
          className="flex items-center gap-1 text-[10px] font-semibold text-secondary transition hover:text-foreground"
        >
          {action}
          <ChevronRight size={13} />
        </button>
      )}
    </div>
  );
}

export default SectionHeader;
