import React from 'react';

export default React.memo(function MemberInputTitle(props) {
  const { icon, label } = props;
  return (
    <div className="sign-up-input-title">
      {icon}
      <p>{label}</p>
    </div>
  );
});
