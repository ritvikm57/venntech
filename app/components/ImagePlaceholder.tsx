interface ImagePlaceholderProps {
  type?: 'hero' | 'card' | 'industry' | 'custom';
  aspectRatio?: string;
  className?: string;
}

export default function ImagePlaceholder({
  type = 'card',
  aspectRatio = '16 / 9',
  className = '',
}: ImagePlaceholderProps) {
  const baseClass = 'image-placeholder bg-slate-600 flex items-center justify-center text-white text-center rounded-lg';
  
  let aspectClass = '';
  switch (type) {
    case 'hero':
      aspectClass = 'image-placeholder-hero';
      break;
    case 'card':
      aspectClass = 'image-placeholder-card';
      break;
    case 'industry':
      aspectClass = 'image-placeholder-industry';
      break;
    default:
      aspectClass = '';
  }

  return (
    <div
      className={`${baseClass} ${aspectClass} ${className}`}
      style={{ aspectRatio: type === 'custom' ? aspectRatio : undefined }}
    >
      <div className="p-6">
        <p className="text-sm md:text-base font-medium">Image will be added here</p>
      </div>
    </div>
  );
}
