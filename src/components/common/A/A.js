import React from 'react';

const A = ({ children, href, target = '_blank', icon = 'angle-right' }) => {
  let iconClass = `fab fa-${icon}`;

  if (icon.match(/angle|flask/)) {
    iconClass = iconClass.replace('fab', 'fas');
  }

  return (
    <a href={href} className="button with-icon" target={target}>
      {children} <i className={iconClass} />
    </a>
  );
};

export default A;
