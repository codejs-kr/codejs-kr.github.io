import React from 'react';
import './button.scss';

const A = ({ children, href, target = '_blank', size = 'medium', icon, theme }) => {
  let iconClass;

  if (!icon) {
    return (
      <a href={href} className={`button ${theme} ${size}`} target={target}>
        {children}
      </a>
    );
  }

  if (icon === 'default') {
    icon = 'angle-right';
  }

  iconClass = `fab fa-${icon}`;

  if (icon.match(/angle|flask/)) {
    iconClass = iconClass.replace('fab', 'fas');
  }

  return (
    <a href={href} className={`button with-icon ${theme} ${size}`} target={target}>
      {children} <i className={iconClass} />
    </a>
  );
};

export default A;
