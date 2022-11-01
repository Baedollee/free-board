import React from 'react';
import { useNavigate } from 'react-router-dom';

const ContentDetail = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <div>제목</div>
        <div>본문</div>
      </div>
      <button onClick={() => navigate('/')}>뒤로가기</button>
    </div>
  );
};

export default ContentDetail;
