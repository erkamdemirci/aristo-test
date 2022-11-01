import React from 'react';
import * as S from './styles';

const plans = [
  {
    title: 'Aylık Plan',
    price: '90',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
    buttonText: 'Planı Seç'
  },
  {
    title: 'Yıllık Plan',
    price: '850',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
    buttonText: 'Planı Seç'
  },
  {
    title: 'Atölye+',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
    buttonText: 'Planı Seç'
  }
];

const PaymentPlans = () => {
  return (
    <S.StyledContainer>
      <div className="header">
        <div className="section-title">Ödeme Planları</div>
        <div className="section-description">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
          inventore veritatis et quasi rchitecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
          aut fugit, sed quia consequuntur magni dolores eos qui.
        </div>
      </div>
      <div className="items">
        {plans &&
          plans.map((plan, idx) => {
            return (
              <div key={idx} className="card">
                {plan.price ? (
                  <div className="plan">
                    <div className="name">{plan.title}</div>
                    <div className="price">{plan.price} ₺</div>
                  </div>
                ) : (
                  <div className="logo">{plan.title}</div>
                )}

                <div className="desc">{plan.description}</div>
                <button type="button">{plan.buttonText}</button>
              </div>
            );
          })}
      </div>
    </S.StyledContainer>
  );
};

export default PaymentPlans;
