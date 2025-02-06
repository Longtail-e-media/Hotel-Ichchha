import React from 'react';
import { getIconComponent } from '../utils/iconMap';

const IconRenderer = ({ icon, image, className, alt }) => {
  const IconComponent = getIconComponent(icon);

  if (IconComponent) {
    return <IconComponent className={className} />;
  }

  if (image) {
    return (
      <img
        src={image}
        alt={alt}
        className={`size-6 object-contain ${className}`}
      />
    );
  }

  return null;
};

export default IconRenderer;
