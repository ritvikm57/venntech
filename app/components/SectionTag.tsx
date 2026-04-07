export function SectionTag({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-block mb-4 md:mb-6">
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 bg-teal rounded-full"></div>
        <span className="text-teal font-bold text-xs md:text-sm uppercase tracking-widest">
          {children}
        </span>
      </div>
    </div>
  );
}
