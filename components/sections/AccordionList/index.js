import React, { useState } from 'react';
import * as S from './styles';

const junkItems = [
  { title: 'Yaşam atölyesi nedir?', content: 'Lorem ipsum dolor amet ..' },
  { title: 'Nasıl üye olurum?', content: 'Lorem ipsum dolor amet ..' },
  { title: 'Eğitimleri nasıl izlerim?', content: 'Lorem ipsum dolor amet ..' },
  { title: 'Eğitim videolarını bilgisayarıma nasil indirebilirim?', content: 'Lorem ipsum dolor amet ..' },
  { title: 'Sertifikamı nasıl alabilirim?', content: 'Lorem ipsum dolor amet ..' }
];

const AccordionList = ({ items = junkItems }) => {
  const [activeIndex, setActiveIndex] = useState(-1);

  return (
    <S.StyledContainer>
      <S.Header>
        <div className="title">Sıkça Sorulan Sorular</div>
      </S.Header>
      {items &&
        items.map((item, idx) => (
          <div key={idx} className="accordion">
            <div className={`accordion-item ${activeIndex === idx && 'active'}`}>
              <div className="accordion-title" onClick={() => setActiveIndex(idx)}>
                <div>{item.title}</div>
                <div>{activeIndex === idx ? '-' : '+'}</div>
              </div>
              {activeIndex === idx && <div className="accordion-content">{item.content}</div>}
            </div>
          </div>
        ))}
    </S.StyledContainer>
  );
};

export default AccordionList;
