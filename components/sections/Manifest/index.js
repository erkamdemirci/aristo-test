import React from 'react';
import Image from 'next/image';
import * as S from './styles';

const Manifest = () => {
  return (
    <S.StyledContainer>
      <div className="left">
        <div className="title">
          <span>Yaşam Atölyesi</span>
          <span>Manifesto</span>
        </div>
      </div>
      <div className="right">
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
          inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
          aut fugit, sed quia consequuntur magni dolores eos qui.
        </p>
        <p>
          Ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
          non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
        </p>
        <p>
          Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
          autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
          unıntae nuulla nariatuur?
        </p>
      </div>
    </S.StyledContainer>
  );
};

export default Manifest;
